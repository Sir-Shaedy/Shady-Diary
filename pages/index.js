import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const theme = {
    backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
    dateColor: darkMode ? '#ff5900ff' : '#ff0008ff',
    textColor: darkMode ? '#ffffff' : '#1a1a1a',
    accentColor: darkMode ? '#f3f1f1ff' : '#000000ff',
    borderColor: darkMode ? '#2a2a2a' : '#e5e5e5',
    linkColor: darkMode ? '#60a5fa' : '#2563eb',
    badgeBg: darkMode ? '#1e1e1e' : '#f3f4f6',
    badgeText: darkMode ? '#e5e5e5' : '#4b5563',
    cardBg: darkMode ? '#141414' : '#fafafa',
    cardHoverBg: darkMode ? '#1a1a1a' : '#f5f5f5',
    searchBg: darkMode ? '#1a1a1a' : '#f9fafb',
    gradientFrom: darkMode ? '#3b82f6' : '#2a00feff',
    gradientTo: darkMode ? '#8b5cf6' : '#7c3aed'
  };

  const categoryColors = {
    'Blockchain Security': {
      bg: darkMode ? '#1e3a5f' : '#dbeafe',
      text: darkMode ? '#60a5fa' : '#1e40af',
      border: darkMode ? '#2563eb' : '#3b82f6'
    },
    'Philosophy': {
      bg: darkMode ? '#4c1d95' : '#ede9fe',
      text: darkMode ? '#a78bfa' : '#5b21b6',
      border: darkMode ? '#7c3aed' : '#8b5cf6'
    },
    'Engineering': {
      bg: darkMode ? '#164e63' : '#cffafe',
      text: darkMode ? '#22d3ee' : '#0e7490',
      border: darkMode ? '#06b6d4' : '#22d3ee'
    }
  };

  const articles = [
    {
      id: 'security_1',
      title: "Understanding Pcaversaccio's Whitehat Frontrunning Script",
      category: 'Blockchain Security',
      date: 'November 16, 2025',
      preview: 'The script is a practical example of turning MEV mechanics into a security tool.',
      slug: 'security_1',
      readTime: '8 min read'
    }
    // {
    //   id: 'philosophy_1',
    //   title: 'On Building in Public',
    //   category: 'Philosophy',
    //   date: 'November 15, 2025',
    //   preview: 'Why I believe sharing your journey is more valuable than hiding until perfection.',
    //   slug: 'philosophy_1',
    //   readTime: '5 min read'
    // },
    // {
    //   id: 'engineering_1',
    //   title: 'Improving API Rate Limiting Systems',
    //   category: 'Engineering',
    //   date: 'November 15, 2025',
    //   preview: 'Current rate limiting approaches are broken. Here\'s how we can do better.',
    //   slug: 'engineering_1',
    //   readTime: '10 min read'
    // }
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const titleText = "Shady's Diary";
  const titleLetters = titleText.split('');

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Gradient background overlay - FIXED */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '250px',
        background: `linear-gradient(135deg, ${theme.gradientFrom}15 0%, ${theme.gradientTo}15 100%)`,
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'background 0.3s ease'
      }} />

      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Header - ALIGNED WITH BUTTON */}
        <header style={{ 
          paddingTop: '30px',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div style={{ flex: 1 }}>
            {/* Animated Title */}
            <h1 style={{ 
              fontSize: '56px', 
              marginBottom: '12px',
              fontWeight: '800',
              letterSpacing: '-1px',
              lineHeight: '1.1',
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              {titleLetters.map((letter, index) => (
                <span
                  key={index}
                  onMouseEnter={() => setHoveredLetter(index)}
                  onMouseLeave={() => setHoveredLetter(null)}
                  style={{
                    display: 'inline-block',
                    // background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                    WebkitBackgroundClip: 'text',
                    // WebkitTextFillColor: 'transparent',
                    color: theme.gradientFrom,
                    backgroundClip: 'text',
                    cursor: 'default',
                    transform: hoveredLetter === index ? 'translateY(-8px) scale(1.1)' : 'translateY(0) scale(1)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    marginRight: letter === ' ' ? '12px' : '0'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>

            <p style={{ 
              fontSize: '16px', 
              color: theme.accentColor,
              fontWeight: '500',
              letterSpacing: '0.5px',
              marginBottom: '12px',
              fontFamily: 'Georgia, serif'
            }}>
              Blockchain • Life • Engineering
            </p>
            <p style={{
              fontSize: '14px',
              color: theme.accentColor,
              fontStyle: 'italic',
              maxWidth: '600px',
              fontFamily: 'Georgia, serif'
            }}>
              My public journal of ideas, research, and thoughts on building secure systems.
            </p>
          </div>

          {/* Dark Mode Button - ALIGNED */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            style={{
              padding: '10px 20px',
              backgroundColor: theme.cardBg,
              color: theme.textColor,
              border: `2px solid ${theme.borderColor}`,
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)',
              flexShrink: 0,
              marginLeft: '20px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.borderColor = theme.linkColor;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = theme.borderColor;
            }}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>

        {/* Navigation */}
        <nav style={{ 
          borderBottom: `2px solid ${theme.borderColor}`,
          paddingBottom: '16px',
          display: 'flex',
          gap: '30px',
          marginBottom: '40px'
        }}>
          <a href="/" style={{ 
            textDecoration: 'none',
            color: theme.textColor,
            fontWeight: '700',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            position: 'relative',
            paddingBottom: '16px',
            borderBottom: `3px solid ${theme.linkColor}`,
            marginBottom: '-18px'
          }}>
            All Posts
          </a>
          <a href="/about" style={{ 
            textDecoration: 'none',
            color: theme.accentColor,
            fontWeight: '600',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = theme.textColor}
          onMouseOut={(e) => e.currentTarget.style.color = theme.accentColor}
          >
            About
          </a>
        </nav>

        {/* Main Content */}
        <main>
          {/* Section Header with Search */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <h2 style={{ 
              fontSize: '34px',
              fontWeight: '700',
              color: theme.textColor,
              letterSpacing: '-0.5px',
              margin: 0
            }}>
              Latest Articles
            </h2>

            {/* Search Box */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: theme.searchBg,
                  border: `2px solid ${theme.borderColor}`,
                  borderRadius: '50px',
                  color: theme.textColor,
                  fontSize: '14px',
                  width: '220px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = theme.linkColor;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.linkColor}25`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = theme.borderColor;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <span style={{
                fontSize: '13px',
                color: theme.accentColor,
                fontWeight: '500'
              }}>
                {filteredArticles.length} {filteredArticles.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
          </div>

          {/* Article List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => {
                const colors = categoryColors[article.category];
                return (
                  <article 
                    key={article.id}
                    style={{
                      padding: '28px',
                      backgroundColor: theme.cardBg,
                      borderRadius: '12px',
                      border: `1px solid ${theme.borderColor}`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow: darkMode 
                        ? '0 2px 12px rgba(0,0,0,0.2)' 
                        : '0 2px 12px rgba(0,0,0,0.04)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = darkMode 
                        ? '0 8px 24px rgba(0,0,0,0.3)' 
                        : '0 8px 24px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = colors.border;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = darkMode 
                        ? '0 2px 12px rgba(0,0,0,0.2)' 
                        : '0 2px 12px rgba(0,0,0,0.04)';
                      e.currentTarget.style.borderColor = theme.borderColor;
                    }}
                  >
                    <div style={{ marginBottom: '14px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        backgroundColor: colors.bg,
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '700',
                        color: colors.text,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        border: `1px solid ${colors.border}`
                      }}>
                        {article.category}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: theme.accentColor,
                        fontWeight: '500'
                      }}>
                        {article.readTime}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '29px',
                      marginBottom: '8px',
                      fontWeight: '700',
                      lineHeight: '1.3',
                      letterSpacing: '-0.3px'
                    }}>
                      <a 
                        href={`/posts/${article.slug}`}
                        style={{
                          color: theme.textColor,
                          textDecoration: 'none'
                        }}
                      >
                        {article.title}
                      </a>
                    </h3>

                    <p style={{
                      fontSize: '17px',
                      color: theme.dateColor,
                      marginBottom: '12px',
                      fontWeight: '900'
                    }}>
                      {article.date}
                    </p>

                    <p style={{
                      fontSize: '20px',
                      lineHeight: '1.6',
                      color: theme.accentColor,
                      marginBottom: '16px',
                      fontWeight: '500'
                    }}>
                      {article.preview}
                    </p>

                    <div style={{
            margin: '40px 0',
            padding: '5px',
            width: '400px',
            // height: '500px', 
            alignItems: 'center', 
            backgroundColor: theme.cardBg,
            borderRadius: '12px',
            border: `1px solid ${theme.borderColor}`,
            marginLeft: '100px'
          }}>
            <img 
              src="/images/frontrun.png"
              alt="Sandwich Attack Diagram"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: darkMode 
                  ? '0 4px 20px rgba(0,0,0,0.4)' 
                  : '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
          </div>

                    <a 
                      href={`/posts/${article.slug}`}
                      style={{
                        color: theme.linkColor,
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                        letterSpacing: '0.3px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'gap 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.gap = '10px';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.gap = '6px';
                      }}
                    >
                      Read article <span style={{ fontSize: '16px' }}>→</span>
                    </a>
                  </article>
                );
              })
            ) : (
              <p style={{ 
                textAlign: 'center', 
                color: theme.accentColor,
                padding: '40px',
                fontSize: '16px'
              }}>
                No articles found matching "{searchQuery}"
              </p>
            )}
          </div>
        </main>

        {/* Footer - TIGHTER SPACING */}
        <footer style={{
          marginTop: '60px',
          paddingTop: '30px',
          paddingBottom: '40px',
          borderTop: `2px solid ${theme.borderColor}`,
          textAlign: 'center',
          color: theme.accentColor,
          fontSize: '13px'
        }}>
          <p style={{ marginBottom: '12px', fontWeight: '500' }}>
            © 2025 Musa Ayomide Idris. All rights reserved.
          </p>
          <div style={{ 
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <a 
              href="https://twitter.com/0xShaedyW" 
              style={{ 
                color: theme.linkColor,
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              X (Twitter)
            </a>
            <a 
              href="https://github.com/sir-shaedy" 
              style={{ 
                color: theme.linkColor,
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}