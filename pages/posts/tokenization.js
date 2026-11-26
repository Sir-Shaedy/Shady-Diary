import { useState, useEffect } from 'react';

export default function TokenizationArticle() {
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
    accent: darkMode ? '#7aa2f7' : '#1f6feb'
  };

  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const serif = "Georgia, 'Times New Roman', serif";

  const paragraph = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: theme.text,
    marginBottom: '24px'
  };

  const h2 = {
    fontSize: 'clamp(1.4rem, 3.2vw, 1.75rem)',
    marginTop: '44px',
    marginBottom: '18px',
    fontWeight: '700',
    color: theme.text,
    letterSpacing: '-0.5px',
    fontFamily: serif
  };

  const codeStyle = {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: '0.86em',
    padding: '2px 6px',
    borderRadius: '4px',
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    color: theme.text
  };

  const ulStyle = { margin: '0 0 24px 22px', padding: 0 };
  const liStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: theme.text,
    marginBottom: '8px'
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
              Engineering
            </span>
            <span style={{ fontSize: '13px', color: theme.muted }}>
              6 min read
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
            Tokenization by Hand: How LLMs Turn Text Into IDs
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
            LLMs, at their core, operate using the Transformer model to predict the most likely words and sentences that align with the context of a user prompt.
          </p>

          <p style={paragraph}>
            However, before the Transformer does its computations, the input must first be translated. Since computers work with numbers, every input has to be broken down somehow.
          </p>

          <p style={paragraph}>
            Around 8:45 pm, I started writing this to cement my knowledge of how LLMs (particularly GPT models) work. This article is solely about converting the input into IDs before the Transformer model works with it. To make it easier to understand, I&apos;ll walk through some examples.
          </p>

          <p style={paragraph}>
            According to public information, GPT uses the Byte-Level BPE technique to build a dictionary, split inputs, and assign them numbers. I&apos;ve noticed there are many English examples online, so I&apos;m going to use my indigenous words to break the process down.
          </p>

          <h2 style={h2}>The setup</h2>

          <p style={paragraph}>
            Imagine we want to build a simplified tokenizer dictionary from a Yoruba book that only contains three words: <em>ayomide</em>, <em>ayoyemi</em>, and <em>ayomipo</em>. Let&apos;s ignore the tone marks for now (and note that in real GPT models, the dictionary actually starts with 256 raw byte IDs, <code style={codeStyle}>0</code>–<code style={codeStyle}>255</code>, rather than single letters).
          </p>

          <h2 style={h2}>Step one: break the words into letters</h2>

          <p style={paragraph}>
            The first step is to split these into letters, arrange them alphabetically, and assign numbers:
          </p>

          <ul style={ulStyle}>
            <li style={liStyle}><code style={codeStyle}>a</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>d</code> → 2</li>
            <li style={liStyle}><code style={codeStyle}>e</code> → 3</li>
            <li style={liStyle}><code style={codeStyle}>i</code> → 4</li>
            <li style={liStyle}><code style={codeStyle}>m</code> → 5</li>
            <li style={liStyle}><code style={codeStyle}>o</code> → 6</li>
            <li style={liStyle}><code style={codeStyle}>p</code> → 7</li>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>y</code> → 8</li>
          </ul>

          <p style={paragraph}>
            Now we have the first dictionary with 8 IDs.
          </p>

          <h2 style={h2}>Step two: start merging</h2>

          <p style={paragraph}>
            First, we lay the words out, separated by word boundaries so merges don&apos;t cross between words:
          </p>

          <ul style={ulStyle}>
            <li style={liStyle}><code style={codeStyle}>a-y-o-m-i-d-e</code></li>
            <li style={liStyle}><code style={codeStyle}>a-y-o-y-e-m-i</code></li>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>a-y-o-m-i-p-o</code></li>
          </ul>

          <p style={paragraph}>
            Second, we take pairs from the words.
          </p>

          <p style={paragraph}>
            From <code style={codeStyle}>a-y-o-m-i-d-e</code>, we have <code style={codeStyle}>a-y</code>, <code style={codeStyle}>y-o</code>, <code style={codeStyle}>o-m</code>, <code style={codeStyle}>m-i</code>, <code style={codeStyle}>i-d</code>, <code style={codeStyle}>d-e</code>. From <code style={codeStyle}>a-y-o-y-e-m-i</code>, we have <code style={codeStyle}>a-y</code>, <code style={codeStyle}>y-o</code>, <code style={codeStyle}>o-y</code>, <code style={codeStyle}>y-e</code>, <code style={codeStyle}>e-m</code>, <code style={codeStyle}>m-i</code>. And from <code style={codeStyle}>a-y-o-m-i-p-o</code>, we have <code style={codeStyle}>a-y</code>, <code style={codeStyle}>y-o</code>, <code style={codeStyle}>o-m</code>, <code style={codeStyle}>m-i</code>, <code style={codeStyle}>i-p</code>, <code style={codeStyle}>p-o</code>.
          </p>

          <p style={paragraph}>
            Now we list the unique pairs and count how many times they occur across the three words:
          </p>

          <ul style={ulStyle}>
            <li style={liStyle}><code style={codeStyle}>a-y</code> → 3</li>
            <li style={liStyle}><code style={codeStyle}>y-o</code> → 3</li>
            <li style={liStyle}><code style={codeStyle}>o-m</code> → 2 (only in <em>ayomide</em> and <em>ayomipo</em>)</li>
            <li style={liStyle}><code style={codeStyle}>m-i</code> → 3</li>
            <li style={liStyle}><code style={codeStyle}>i-d</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>d-e</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>o-y</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>y-e</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>e-m</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>i-p</code> → 1</li>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>p-o</code> → 1</li>
          </ul>

          <p style={paragraph}>
            Since <code style={codeStyle}>a-y</code>, <code style={codeStyle}>y-o</code>, and <code style={codeStyle}>m-i</code> all have the same frequency (3), we merge the first pair, <code style={codeStyle}>a-y</code>.
          </p>

          <p style={paragraph}>
            <code style={codeStyle}>ay</code> is added to our dictionary with a new ID:
          </p>

          <ul style={ulStyle}>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>ay</code> → 9</li>
          </ul>

          <h2 style={h2}>Step three: repeat</h2>

          <p style={paragraph}>
            Now we repeat the merging process!
          </p>

          <ul style={ulStyle}>
            <li style={liStyle}><code style={codeStyle}>ay-o-m-i-d-e</code></li>
            <li style={liStyle}><code style={codeStyle}>ay-o-y-e-m-i</code></li>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>ay-o-m-i-p-o</code></li>
          </ul>

          <p style={paragraph}>
            Splitting <em>ayomide</em> into pairs gives: <code style={codeStyle}>ay-o</code>, <code style={codeStyle}>o-m</code>, <code style={codeStyle}>m-i</code>, <code style={codeStyle}>i-d</code>, <code style={codeStyle}>d-e</code>.
          </p>

          <p style={paragraph}>
            Splitting <em>ayoyemi</em> into pairs gives: <code style={codeStyle}>ay-o</code>, <code style={codeStyle}>o-y</code>, <code style={codeStyle}>y-e</code>, <code style={codeStyle}>e-m</code>, <code style={codeStyle}>m-i</code>.
          </p>

          <p style={paragraph}>
            Splitting <em>ayomipo</em> into pairs gives: <code style={codeStyle}>ay-o</code>, <code style={codeStyle}>o-m</code>, <code style={codeStyle}>m-i</code>, <code style={codeStyle}>i-p</code>, <code style={codeStyle}>p-o</code>.
          </p>

          <p style={paragraph}>
            We list the pairs and their frequencies:
          </p>

          <ul style={ulStyle}>
            <li style={liStyle}><code style={codeStyle}>ay-o</code> → 3</li>
            <li style={liStyle}><code style={codeStyle}>o-m</code> → 2 (only in <em>ayomide</em> and <em>ayomipo</em>)</li>
            <li style={liStyle}><code style={codeStyle}>m-i</code> → 3</li>
            <li style={liStyle}><code style={codeStyle}>i-d</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>d-e</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>o-y</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>y-e</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>e-m</code> → 1</li>
            <li style={liStyle}><code style={codeStyle}>i-p</code> → 1</li>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>p-o</code> → 1</li>
          </ul>

          <p style={paragraph}>
            As before, two pairs share the same frequency, so we merge the first: <code style={codeStyle}>ay-o</code> → <code style={codeStyle}>ayo</code>.
          </p>

          <p style={paragraph}>
            And <code style={codeStyle}>ayo</code> is assigned ID 10:
          </p>

          <ul style={ulStyle}>
            <li style={{ ...liStyle, marginBottom: 0 }}><code style={codeStyle}>ayo</code> → 10</li>
          </ul>

          <h2 style={h2}>Why I did this by hand</h2>

          <p style={paragraph}>
            I&apos;m doing the computation manually because I want a hands-on experience of how tokenization works. I could have used a Python script or something. I&apos;m even curious to know how I can automate this using a Python script!
          </p>

          <p style={paragraph}>
            In light of all this, my maximum respect goes to the engineers at the top AI firms who were able to build token-ID mappings for thousands of tokens (and it&apos;s even crazier when you consider that they had to write complicated scripts with no AI help!).
          </p>

          <p style={paragraph}>
            So yeah, that&apos;s it.
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
              I think I&apos;m going to do more research on a more efficient way to do the tokenization process. Wish my delusional ass good luck.
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
