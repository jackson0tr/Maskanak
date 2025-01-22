import { verifyToken } from '../lib/jwt';
import { NextResponse } from 'next/server';

export async function authMiddleware(request) {
  try {
    const authorization = request.headers.get('authorization');
    
    if (!authorization || !authorization.startsWith('Bearer')) {
      console.log('No authorization header or invalid format');
      return NextResponse.json(
        { error: 'Please login to access this resource' },
        { status: 401 }
      );
    }

    const token = authorization.split(' ')[1];
    
    if (!token) {
      console.log('No token found in authorization header');
      return NextResponse.json(
        { error: 'Please login to access this resource' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    
    if (!decoded || !decoded.id) {
      console.log('Token verification failed or no user ID in token');
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('user', JSON.stringify(decoded));

    const newRequest = new Request(request.url, {
      method: request.method,
      headers: requestHeaders,
      body: request.body,
      signal: request.signal,
    });

    newRequest.user = decoded;

    return newRequest;
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Authentication error' },
      { status: 401 }
    );
  }
}
