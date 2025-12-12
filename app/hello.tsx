'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type Props = {
  ipAddress: string;
  ipv4: string | null;
  host: string | null;
  protocol: string | null;
  userAgent: string | null;
};

function detectInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export default function Hello({
  ipAddress,
  ipv4,
  host,
  protocol,
  userAgent
}: Props) {
  const [theme, setTheme] = useState<Theme>('light');
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setTheme(detectInitialTheme());

    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const localTime =
    now?.toLocaleString(undefined, { timeZoneName: 'short' }) ?? '…';
  const utcTime =
    now?.toLocaleString(undefined, {
      timeZone: 'UTC',
      timeZoneName: 'short'
    }) ?? '…';

  const toggleTheme = () =>
    setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <main data-theme={theme} className="root">
      <div className="card">
        <header className="header">
          <a
            className="badge"
            href="https://github.com/ebox86/hello"
            target="_blank"
            rel="noreferrer"
          >
            ebox86/hello
          </a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 dark' : '☀️ light'}
          </button>
        </header>

        <div className="hello-text">
          hello <span className="wave">👋</span>
        </div>

        <section className="debug">
          <h2>debug info</h2>
          <dl>
            <div>
              <dt>local time</dt>
              <dd>{localTime}</dd>
            </div>
            <div>
              <dt>UTC time</dt>
              <dd>{utcTime}</dd>
            </div>
            <div>
              <dt>client ip</dt>
              <dd>{ipAddress}</dd>
            </div>
            {ipv4 && (
              <div>
                <dt>ipv4 client ip</dt>
                <dd>{ipv4}</dd>
              </div>
            )}
            <div>
              <dt>host</dt>
              <dd>{host ?? 'n/a'}</dd>
            </div>
            <div>
              <dt>protocol</dt>
              <dd>{protocol ?? 'n/a'}</dd>
            </div>
            <div>
              <dt>user agent</dt>
              <dd>{userAgent ?? 'n/a'}</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}

