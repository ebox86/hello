import { NextResponse } from 'next/server';
import os from 'os';
import pkg from '../../../package.json';

export async function GET(request: Request) {
  const now = new Date().toISOString();
  const url = new URL(request.url);

  const data = {
    message: 'hello 👋',
    time: now,
    host: url.host,
    path: url.pathname,
    protocol: url.protocol.replace(':', ''),
    containerHostname: os.hostname(),
    version: pkg.version
  };

  const body = JSON.stringify(data, null, 2);

  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });
}
