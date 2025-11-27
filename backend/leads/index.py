import json
import os
import psycopg2
from typing import Dict, Any


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Handle leads - submit new leads (POST) and get all leads (GET)
    Args: event with httpMethod, body for POST, query params for GET
    Returns: HTTP response with success/error or leads list
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    dsn = os.environ.get('DATABASE_URL')
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        name = body_data.get('name', '').strip()
        phone = body_data.get('phone', '').strip()
        email = body_data.get('email', '').strip()
        website = body_data.get('website', '').strip()
        message = body_data.get('message', '').strip()
        
        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Name and phone are required'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        
        cur.execute(
            "INSERT INTO leads (name, phone, email, website, message) VALUES (%s, %s, %s, %s, %s) RETURNING id",
            (name, phone, email if email else None, website if website else None, message if message else None)
        )
        lead_id = cur.fetchone()[0]
        
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'leadId': lead_id,
                'message': 'Заявка успешно отправлена!'
            }),
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        query_params = event.get('queryStringParameters') or {}
        status = query_params.get('status')
        limit = int(query_params.get('limit', '100'))
        
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        
        if status:
            cur.execute(
                "SELECT id, name, phone, email, website, message, created_at, status, notes FROM leads WHERE status = %s ORDER BY created_at DESC LIMIT %s",
                (status, limit)
            )
        else:
            cur.execute(
                "SELECT id, name, phone, email, website, message, created_at, status, notes FROM leads ORDER BY created_at DESC LIMIT %s",
                (limit,)
            )
        
        rows = cur.fetchall()
        
        leads = []
        for row in rows:
            leads.append({
                'id': row[0],
                'name': row[1],
                'phone': row[2],
                'email': row[3],
                'website': row[4],
                'message': row[5],
                'createdAt': row[6].isoformat() if row[6] else None,
                'status': row[7],
                'notes': row[8]
            })
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'leads': leads,
                'count': len(leads)
            }),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
