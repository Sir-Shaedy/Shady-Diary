import { useState, useEffect } from 'react';

export default function About() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = {
    bg: darkMode ? '#111318' : '#ffffff',
    text: darkMode ? '#e6e6e6' : '#000000',
    muted: darkMode ? '#9aa0a6' : '#1f2328',
    border: darkMode ? '#2a2e35' : '#e5e7eb',
    accent: darkMode ? '#7aa2f7' : '#1f6feb'
  };

  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const paragraph = {
    fontSize: '17px',
    lineHeight: '1.8',
    color: theme.text,
    marginBottom: '24px'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.bg,
      color: theme.text,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 24px'
      }}>

        <header style={{
          paddingTop: '40px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}>
          <a
            href={`${base}/`}
            style={{
              color: theme.muted,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = theme.accent; }}
            onMouseOut={(e) => { e.currentTarget.style.color = theme.muted; }}
          >
            ← Back to Home
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="no-print"
            style={{
              padding: '8px 14px',
              backgroundColor: 'transparent',
              color: theme.muted,
              border: `1px solid ${theme.border}`,
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              transition: 'border-color 0.2s ease, color 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = theme.accent;
              e.currentTarget.style.color = theme.accent;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = theme.border;
              e.currentTarget.style.color = theme.muted;
            }}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </header>

        <main style={{
          paddingBottom: '96px',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}>
          <h1 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)',
            fontWeight: '700',
            marginBottom: '32px',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif",
            lineHeight: '1.2'
          }}>
            About Me
          </h1>

          <p style={paragraph}>Look man,</p>

          <p style={paragraph}>
            Random thoughts usually hit my mind. Before now, I used to write them on my WhatsApp
            status to share my thoughts and get interesting feedback, but now I see those actions
            as validation-driven. In fact, most of the responses I&apos;ve got haven&apos;t really
            improved me, and I forget them quickly. I don&apos;t think I have a short memory. It&apos;s
            just that my brain is quick to discard information I haven&apos;t really applied.
          </p>

          <p style={paragraph}>
            So this blog is just where I get to write, self-reflect while writing or after posting
            a piece, and keep writing! I can talk about anything. I can be boring too.
          </p>

          <p style={paragraph}>
            PS: (or is PS the right thing to use?) Another reason I&apos;m doing this is to improve
            the way I write, as I make subtle grammatical blunders. I&apos;ve come to like writing
            too. I drafted a manuscript recently without AI, and it gave me ecstasy! I was able to
            see the gaps in my original work, break some AI slop down, and create magic.
          </p>

          <p style={{ ...paragraph, marginBottom: 0 }}>
            I&apos;m Ayomide Idris Musa. Uhm... I think that&apos;s all to write here. By the time
            you&apos;re reading this, my AI would have already corrected the grammatical errors.
          </p>
        </main>
      </div>
    </div>
  );
}
