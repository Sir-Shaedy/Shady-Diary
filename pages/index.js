import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = {
    bg: darkMode ? '#111318' : '#ffffff',
    text: darkMode ? '#e6e6e6' : '#000000',
    muted: darkMode ? '#9aa0a6' : '#1f2328',
    border: darkMode ? '#2a2e35' : '#e5e7eb',
    surface: darkMode ? '#171a1f' : '#f7f7f8',
    accent: darkMode ? '#7aa2f7' : '#1f6feb'
  };

  const articles = [
    {
      id: 'tokenization',
      title: 'Tokenization by Hand: How LLMs Turn Text Into IDs',
      category: 'Engineering',
      date: 'November 26, 2026',
      preview: 'A hands-on walkthrough of byte-level BPE, using Yoruba words to see how GPT-style models turn text into IDs.',
      slug: 'tokenization',
      readTime: '6 min read'
    },
    {
      id: 'kinetic-energy',
      title: 'Kinetic Energy and the Cost of Pity',
      category: 'Philosophy',
      date: 'November 26, 2026',
      preview: "Sharing momentum with someone who won't move has a cost. On energy, opportunity cost, and why pity makes us weak.",
      slug: 'kinetic-energy',
      readTime: '4 min read'
    },
    {
      id: 'growing-as-coo',
      title: 'Growing as a COO: Lessons from Building Detova Labs',
      category: 'Career',
      date: 'December 9, 2025',
      preview: 'From hackathon team to company. The chaos, the lessons, and why the C-suite structure was wrong for us.',
      slug: 'growing-as-coo',
      readTime: '10 min read'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const serif = "'Playfair Display', Georgia, 'Times New Roman', serif";
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.bg,
      color: theme.text,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 24px'
      }}>

        {/* Header */}
        <header style={{
          paddingTop: '64px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '24px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease'
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3rem)',
              marginBottom: '14px',
              fontWeight: '700',
              letterSpacing: '-1px',
              lineHeight: '1.1',
              fontFamily: serif,
              color: theme.text
            }}>
              AIM&apos;s Spot<span style={{ color: theme.accent }}>.</span>
            </h1>
            <p style={{
              fontSize: '16px',
              color: theme.muted,
              maxWidth: '520px',
              fontFamily: serif,
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}>
              My journal on things I&apos;ve tried, studied and failed. I&apos;m self-reflecting here.
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="no-print"
            style={{
              padding: '7px 13px',
              backgroundColor: 'transparent',
              color: theme.muted,
              border: `1px solid ${theme.border}`,
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.3px',
              flexShrink: 0,
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

        {/* Navigation */}
        <nav style={{
          borderBottom: `1px solid ${theme.border}`,
          display: 'flex',
          gap: '26px',
          marginBottom: '48px'
        }}>
          <a href={`${base}/`} style={{
            textDecoration: 'none',
            color: theme.accent,
            fontWeight: '600',
            fontSize: '13px',
            letterSpacing: '0.3px',
            paddingBottom: '14px',
            marginBottom: '-1px',
            borderBottom: `2px solid ${theme.accent}`
          }}>
            All Posts
          </a>
          <a href={`${base}/about/`} style={{
            textDecoration: 'none',
            color: theme.muted,
            fontWeight: '500',
            fontSize: '13px',
            letterSpacing: '0.3px',
            paddingBottom: '14px',
            transition: 'color 0.2s ease'
          }}
            onMouseOver={(e) => { e.currentTarget.style.color = theme.text; }}
            onMouseOut={(e) => { e.currentTarget.style.color = theme.muted; }}
          >
            About
          </a>
        </nav>

        {/* Main Content */}
        <main>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              color: theme.muted
            }}>
              Latest Writing
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: '6px',
                  color: theme.text,
                  fontSize: '13px',
                  width: '170px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = theme.accent; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = theme.border; }}
              />
              <span style={{ fontSize: '12px', color: theme.muted }}>
                {filteredArticles.length} {filteredArticles.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => {
                const isHovered = hoveredId === article.id;
                return (
                  <article
                    key={article.id}
                    onMouseEnter={() => setHoveredId(article.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      padding: '26px 28px',
                      backgroundColor: theme.surface,
                      border: `1px solid ${isHovered ? theme.accent : theme.border}`,
                      borderRadius: '10px',
                      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: isHovered
                        ? (darkMode ? '0 10px 28px rgba(0,0,0,0.35)' : '0 10px 28px rgba(0,0,0,0.08)')
                        : 'none',
                      transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '14px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: theme.accent,
                        display: 'inline-block'
                      }} />
                      <span style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: theme.muted
                      }}>
                        {article.category}
                      </span>
                      <span style={{ color: theme.border }}>·</span>
                      <span style={{ fontSize: '12px', color: theme.muted }}>{article.date}</span>
                      <span style={{ color: theme.border }}>·</span>
                      <span style={{ fontSize: '12px', color: theme.muted }}>{article.readTime}</span>
                    </div>

                    <h3 style={{
                      fontSize: 'clamp(1.35rem, 2.6vw, 1.65rem)',
                      marginBottom: '10px',
                      fontWeight: '600',
                      lineHeight: '1.3',
                      fontFamily: serif,
                      letterSpacing: '-0.3px'
                    }}>
                      <a
                        href={`${base}/posts/${article.slug}/`}
                        style={{
                          color: isHovered ? theme.accent : theme.text,
                          textDecoration: 'none',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {article.title}
                      </a>
                    </h3>

                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                      color: theme.muted,
                      marginBottom: '18px'
                    }}>
                      {article.preview}
                    </p>

                    <a
                      href={`${base}/posts/${article.slug}/`}
                      style={{
                        color: theme.accent,
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Read article
                      <span style={{
                        transition: 'transform 0.2s ease',
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                      }}>
                        →
                      </span>
                    </a>
                  </article>
                );
              })
            ) : (
              <p style={{
                textAlign: 'center',
                color: theme.muted,
                padding: '48px 24px',
                fontSize: '16px'
              }}>
                No articles found matching &quot;{searchQuery}&quot;
              </p>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          marginTop: '80px',
          paddingTop: '24px',
          paddingBottom: '64px',
          borderTop: `1px solid ${theme.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          color: theme.muted,
          fontSize: '12px',
          letterSpacing: '0.3px'
        }}>
          <p>© 2026 Musa Ayomide Idris.</p>
          <p style={{ fontStyle: 'italic', fontFamily: serif }}>
            Writing to think.
          </p>
        </footer>
      </div>
    </div>
  );
}
