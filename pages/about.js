import { useState } from 'react';

export default function About() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
    textColor: darkMode ? '#ffffffff' : '#000000ff',
    header1Color: darkMode ? '#bbff00ff' : '#0000ffff',
    inlineColor: darkMode ? '#00ff55ff' : '#ff0008ff',
    accentColor: darkMode ? '#beb9b9ff' : '#000000ff',
    borderColor: darkMode ? '#2a2a2a' : '#e5e5e5',
    linkColor: darkMode ? '#60a5fa' : '#2563eb',
    cardBg: darkMode ? '#141414' : '#fafafa',
    gradientFrom: darkMode ? '#3b82f6' : '#2563eb',
    gradientTo: darkMode ? '#8b5cf6' : '#7c3aed'
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
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
        maxWidth: '700px', 
        margin: '0 auto', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        
        <header style={{ 
          paddingTop: '30px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="/" style={{
            color: theme.linkColor,
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            ← Back to Home
          </a>

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
              transition: 'all 0.3s ease'
            }}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>

        <main style={{ paddingBottom: '80px' }}>
          <h1 style={{ 
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '30px',
            // background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
            WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: theme.header1Color,
            letterSpacing: '-1px'
          }}>
            About Me
          </h1>

          <div style={{ 
            fontSize: '17px', 
            lineHeight: '1.8',
            color: theme.textColor,
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            <p style={{ marginBottom: '24px' }}>
              Hey! <br/><br/>I'm <b>Musa Ayomide</b>, a security researcher focused on blockchain trends, smart contract 
              security, privacy and decentralized system. This blog is my public diary where 
              I share my findings, thoughts, and ideas.
            </p>

            <h2 style={{ 
              fontSize: '28px',
              fontWeight: '700',
              marginTop: '40px',
              color: theme.header1Color,
              marginBottom: '20px',
              fontFamily: 'system-ui'
            }}>
              What I Write About
            </h2>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ color: theme.inlineColor }}>Blockchain Security:</strong> Deep 
              dives into blockchain updates, smart contract vulnerabilities, audit findings, and security patterns. 
              I break down complex patterns into understandable concepts.
            </p>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ color: theme.inlineColor }}>Philosophy:</strong> My thoughts on 
              building in public, continuous learning, and the mindset needed for security work.
            </p>

            <p style={{ marginBottom: '24px' }}>
              <strong style={{ color: theme.inlineColor }}>Engineering:</strong> System design, 
              API architecture, and how we can improve existing infrastructure.
            </p>

            <h2 style={{ 
              fontSize: '28px',
              fontWeight: '700',
              color: theme.header1Color,
              marginTop: '40px',
              marginBottom: '20px',
              fontFamily: 'system-ui'
            }}>
              Why This Blog?
            </h2>

            <p style={{ marginBottom: '24px' }}>
              I believe in learning and building in public. Writing forces me to understand 
              concepts deeply, and sharing helps others avoid the mistakes I've made. Plus, 
              future-me will thank current-me for these notes.
            </p>

            <h2 style={{ 
              fontSize: '28px',
              fontWeight: '700',
              color: theme.header1Color,
              marginTop: '40px',
              marginBottom: '20px',
              fontFamily: 'system-ui'
            }}>
              Get in Touch
            </h2>

            <p style={{ marginBottom: '16px' }}>
              I'm always open to discussions about security, blockchain, or anything interesting. 
              Reach out on:
            </p>

            <div style={{ marginTop: '20px' }}>
              <a 
                href="https://twitter.com/0xShaedyW"
                style={{
                  color: theme.linkColor,
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'block',
                  marginBottom: '12px'
                }}
              >
                Twitter / X →
              </a>
              <a 
                href="https://github.com/sir-shaedy"
                style={{
                  color: theme.linkColor,
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'block'
                }}
              >
                GitHub →
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}