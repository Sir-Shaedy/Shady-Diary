import { useState, useEffect } from 'react';
import katex from 'katex';

const renderMath = (tex, displayMode = false) => ({
  __html: katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    strict: false
  })
});

function MathBlock({ tex, theme }) {
  return (
    <div
      style={{
        margin: '28px 0',
        padding: '26px 20px',
        backgroundColor: theme.surface,
        border: `1px solid ${theme.border}`,
        borderRadius: '10px',
        textAlign: 'center',
        overflowX: 'auto',
        overflowY: 'hidden',
        fontSize: '21px',
        color: theme.text
      }}
      dangerouslySetInnerHTML={renderMath(tex, true)}
    />
  );
}

function MathInline({ tex }) {
  return <span dangerouslySetInnerHTML={renderMath(tex)} />;
}

export default function KineticEnergyArticle() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = {
    bg: darkMode ? '#111318' : '#ffffff',
    text: darkMode ? '#e6e6e6' : '#000000',
    muted: darkMode ? '#9aa0a6' : '#1f2328',
    border: darkMode ? '#2a2e35' : '#e5e7eb',
    surface: darkMode ? '#171a1f' : '#f7f7f8',
    accent: darkMode ? '#7aa2f7' : '#1f6feb',
    highlight: darkMode ? '#e5c07b' : '#9a6700'
  };

  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const serif = "Georgia, 'Times New Roman', serif";

  const paragraph = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: theme.text,
    marginBottom: '24px'
  };

  const listItem = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: theme.text,
    marginBottom: '14px'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.bg,
      color: theme.text,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Reading Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 100,
        background: 'transparent'
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: theme.accent,
          transition: 'width 0.1s ease'
        }} />
      </div>

      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 24px'
      }}>

        {/* Header */}
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
            ← Back to all posts
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

        {/* Article Header */}
        <div style={{
          marginBottom: '40px',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}>
          <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 10px',
              backgroundColor: theme.surface,
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600',
              color: theme.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              border: `1px solid ${theme.border}`
            }}>
              Philosophy
            </span>
            <span style={{ fontSize: '13px', color: theme.muted }}>
              4 min read
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)',
            fontWeight: '700',
            marginBottom: '16px',
            lineHeight: '1.25',
            letterSpacing: '-0.5px',
            color: theme.text,
            fontFamily: serif
          }}>
            Kinetic Energy and the Cost of Pity
          </h1>

          <p style={{
            fontSize: '14px',
            color: theme.muted
          }}>
            Published on November 26, 2026
          </p>
        </div>

        {/* Article Content */}
        <article style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: theme.text,
          paddingBottom: '72px',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>
          <p style={paragraph}>
            When I share kinetic energy with someone who&apos;s not making an effort to move, I lose a part of myself. My speed decreases while the other person gains momentum:
          </p>

          <MathBlock
            theme={theme}
            tex="M_{\text{me}} V_{\text{me, initial}} = M_{\text{me}} V_{\text{me, final}} + M_{\text{person}} V_{\text{person}}"
          />

          <p style={paragraph}>
            I become weaker and quickly need to refuel my tank, converting chemical energy into kinetic energy by pumping gas into my core, to catch up to who I&apos;d be if I had never shared that energy:
          </p>

          <MathBlock
            theme={theme}
            tex="M_{\text{now}} V_{\text{now}} < M_{\text{full-energy}} V_{\text{full-energy}}"
          />

          <p style={paragraph}>
            In other words, the opportunity cost is high, especially if my growth follows a quadratic path (<MathInline tex="O(N^2)" />). In some cases, after so many attempts to get the gas and spark a fire in it, I might be unable to ever catch up again. Then, a dilemma presents itself:
          </p>

          <ol style={{ margin: '0 0 24px 22px', padding: 0 }}>
            <li style={listItem}>
              I become angry and resentful, waste more energy trying to catch up, lose myself, and eventually stop moving. Back to square one, now needing far more energy to start pushing from <MathInline tex="\text{Velocity} = 0" />.
            </li>
            <li style={{ ...listItem, marginBottom: '24px' }}>
              I accept reality and settle for the new pace, while still staying optimistic that something might eventually push me faster than I could ever have gone if I were still in my prime.
            </li>
          </ol>

          <p style={paragraph}>
            Overall, this is what Nietzsche meant when he said pity makes us weak.
          </p>

          <p style={paragraph}>
            Now let&apos;s take a look at the person I helped: he could waste my effort by doing nothing to maintain or improve the velocity I initiated, hoping to move forever without his own input, or he could actually pump more gas like a proper Yoruba man trying to kickstart his car after it develops a faulty alternator, while someone&apos;s hand is on the car&apos;s boot pushing it to initiate a gravity-assisted movement.
          </p>

          <p style={paragraph}>
            Now, if the car actually starts and moves down the slope, most of the momentum gain is due to gravity! How skillful is the driver? Can he maintain the new speed? Can he avoid obstacles that reduce momentum? The truth becomes evident when the car reaches flat ground. I guess I might never know!
          </p>

          <p style={paragraph}>
            Still, I&apos;m supposed to analyze the situation and render help only to those who are actively driving themselves to the top of a slope and need an extra push beyond their strength to slide down.
          </p>

          <p style={paragraph}>
            Even with this, I&apos;ll lose energy, but it&apos;s tiny compared to what I&apos;d lose if I spent time pushing an inactive person.
          </p>

          {/* Comment / note notification */}
          <aside style={{
            marginTop: '40px',
            display: 'flex',
            gap: '12px',
            padding: '18px 20px',
            backgroundColor: theme.surface,
            border: `1px dashed ${theme.border}`,
            borderRadius: '10px',
            fontSize: '14px',
            lineHeight: '1.65',
            color: theme.muted
          }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flexShrink: 0, marginTop: '2px' }}
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>
              I actually wrote all of these without using em-dashes, but my LLM introduced them while correcting my grammatical errors. Now I&apos;m curious to know why LLMs love em-dashes. Future article.
            </span>
          </aside>
        </article>

        {/* Footer */}
        <footer style={{
          marginTop: '40px',
          paddingTop: '28px',
          paddingBottom: '56px',
          borderTop: `1px solid ${theme.border}`,
          fontSize: '13px'
        }}>
          <a
            href={`${base}/`}
            style={{
              color: theme.muted,
              textDecoration: 'none',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = theme.accent; }}
            onMouseOut={(e) => { e.currentTarget.style.color = theme.muted; }}
          >
            ← Back to all posts
          </a>
        </footer>
      </div>
    </div>
  );
}
