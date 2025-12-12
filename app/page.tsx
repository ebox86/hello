import { headers } from 'next/headers';
import Hello from './hello';

export default async function Page() {
  const h = await headers();

  const forwardedForHeader = h.get('x-forwarded-for') ?? '';
  const forwardedList = forwardedForHeader
    .split(',')
    .map(x => x.trim())
    .filter(Boolean);

  const primaryFromForward = forwardedList[0];

  const ipAddress =
    primaryFromForward ||
    h.get('x-real-ip') ||
    h.get('cf-connecting-ip') ||
    h.get('x-client-ip') ||
    'unknown';

  const ipv4FromForward =
    forwardedList.find(ip => ip.includes('.')) ?? null;

  const ipv4 =
    ipAddress.includes('.')
      ? ipAddress
      : ipv4FromForward;

  const host = h.get('host') ?? null;
  const protocol = (h.get('x-forwarded-proto') ?? '').split(',')[0] || null;
  const userAgent = h.get('user-agent') ?? null;

  return (
    <Hello
      ipAddress={ipAddress}
      ipv4={ipv4}
      host={host}
      protocol={protocol}
      userAgent={userAgent}
    />
  );
}

