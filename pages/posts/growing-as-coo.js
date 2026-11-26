import { useState, useEffect } from 'react';

export default function PhilosophyArticle1() {
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
    surface: darkMode ? '#171a1f' : '#fafafa',
    accent: darkMode ? '#7aa2f7' : '#1f6feb',
    highlight: darkMode ? '#e5c07b' : '#9a6700'
  };

  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const callout = {
    margin: '0 0 28px',
    padding: '20px 0',
    fontSize: '20px',
    lineHeight: '1.7',
    color: theme.text,
    fontFamily: "Georgia, 'Times New Roman', serif",
    borderTop: `1px solid ${theme.border}`,
    borderBottom: `1px solid ${theme.border}`
  };

  const calloutItalic = { ...callout, fontStyle: 'italic', color: theme.muted };

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
              Career
            </span>
            <span style={{ fontSize: '13px', color: theme.muted }}>
              10 min read
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)',
            fontWeight: '700',
            marginBottom: '16px',
            lineHeight: '1.25',
            letterSpacing: '-0.5px',
            color: theme.text,
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            Growing as a COO: Lessons from Building Detova Labs
          </h1>

          <p style={{
            fontSize: '14px',
            color: theme.muted
          }}>
            Published on December 9, 2025
          </p>
        </div>

        {/* Disclaimer */}
        <aside style={{
          display: 'flex',
          gap: '14px',
          padding: '18px 20px',
          marginBottom: '40px',
          backgroundColor: theme.surface,
          borderRadius: '10px',
          fontSize: '14px',
          lineHeight: '1.65',
          color: theme.muted
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: `${theme.highlight}22`,
            flexShrink: 0
          }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme.highlight}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: theme.highlight,
              marginBottom: '6px'
            }}>
              Disclaimer
            </div>
            <span>
              Detova actually didn&apos;t survive the internal friction. I&apos;ll write my thoughts on that soon.
              Also, although the information here is 100% true, it was drafted by an AI. I&apos;ve decided to
              write myself and use AI for proofreading.
            </span>
          </div>
        </aside>

        {/* Article Content */}
        <article style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: theme.muted,
          paddingBottom: '80px',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>

          {/* Opening */}
          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I joined <strong style={{ color: theme.text, fontWeight: '700' }}>Detova Labs</strong> on October 1st, 2025 as a smart contract developer.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Why? <em>To win a hackathon.</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            It all started when Demi messaged me on X. He sent a wall of text: ideas, vision, plans, stuff I didn&apos;t fully understand at first. I didn&apos;t even bother reading most of it. But one thing caught my eye. One thing made my heart skip.
          </p>

          <p style={{
            marginBottom: '40px',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: '700',
            color: theme.highlight,
            fontFamily: "Georgia, 'Times New Roman', serif",
            textAlign: 'center',
            padding: '24px 0'
          }}>
            $20,000 for the winners.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I said yes. Immediately.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Joined the WhatsApp group, introduced myself, and within days, we had grown into a 10-member team.
          </p>

          <hr style={{
            border: 'none',
            borderTop: `1px solid ${theme.border}`,
            margin: '44px 0'
          }} />

          {/* The Beginning */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
            marginTop: '48px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            Beautiful Chaos
          </h2>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Our first meeting was... humbling. I shared my ideas, and quickly realized something: <em>most of us didn&apos;t know what we were doing.</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Including me.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I had never worked in a formal institution as a decision-maker. My thoughts were scattered, ideas floating everywhere but connecting nowhere. Everything felt like chaos.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Then Demi stepped up. He created a structure, a flowchart detailing everyone&apos;s tasks. Finally, some clarity.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I dove into my part. Wrote the smart contracts. Tested them. Ready to deploy on Somnia chain.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            And then... <em>errors. Everywhere.</em>
          </p>

          <p style={calloutItalic}>
            I spent two days debugging. Two full days, staring at code, running tests, pulling my hair. All to discover that the chain RPC and token address were wrong.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Two days. For a typo.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            But once it worked? <em>Magic.</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Fast forward four days. We had built <strong style={{ color: theme.text, fontWeight: '700' }}>Tavern AI</strong>, a system that simulates price changes in game market utilities, represented as NFTs.
          </p>

          <p style={{
            marginBottom: '28px',
            fontSize: '20px',
            fontWeight: '600',
            color: theme.text,
            textAlign: 'center',
            padding: '16px 0'
          }}>
            In my eyes, it was incredible. Revolutionary even.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px', textAlign: 'center' }}>
            <em>Now? I look back and smile. It was basic. But it was ours.</em>
          </p>

          <hr style={{
            border: 'none',
            borderTop: `1px solid ${theme.border}`,
            margin: '44px 0'
          }} />

          {/* Building a Company */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
            marginTop: '48px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            From Hackathon to Company
          </h2>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Tavern AI isn&apos;t functional anymore. After the hackathon, we tried to shape it into a real product. But we couldn&apos;t find game developers. Progress stalled. Dreams paused.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            But something else was brewing.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            While I was still trying to salvage Tavern AI, we made a bigger decision: <strong style={{ color: theme.text, fontWeight: '700' }}>let&apos;s build a company.</strong>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We called it <strong style={{ color: theme.accent, fontWeight: '700' }}>Detova Labs</strong>.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            At first, we had no clear vision. Meeting after meeting. Discussions that went in circles. Looking back, most weren&apos;t really productive. But we were trying. That counts for something.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We assigned ourselves titles. Demi became CEO. I became COO. Salam, CTO. And so on.
          </p>

          <p style={callout}>
            Titles felt good. Felt official. But titles without action are just words.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We brought in new members. Sulaimon joined and immediately added value: suggestions, strategies, a formal Google Drive setup. <em>(Which, honestly, we still don&apos;t use properly. Till date!)</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We drafted documents. So many documents. Policies. Plans. Roadmaps.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            But here&apos;s the truth: <em>most of us skipped them.</em>
          </p>

          <p style={calloutItalic}>
            It&apos;s hard to read through pages of documentation when new ones keep coming every day. Frustrating. Time-consuming. I get it.
          </p>

          {/* The Struggle */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
            marginTop: '48px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            The Reality of Building
          </h2>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We scheduled meetings every two days.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Most people couldn&apos;t make it. They were busy. <em>I was busy.</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Then came our main website. We started development, expecting quick results. It took us <strong style={{ color: theme.highlight, fontWeight: '700' }}>over two weeks</strong> to deploy.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Why?
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Because we didn&apos;t fully understand the requirements before starting. We jumped in without a clear implementation plan.
          </p>

          <p style={callout}>
            And then there was the AI problem. We used AI to speed up development. It built something in 2 days. <strong style={{ color: theme.text }}>But we spent 14+ days</strong> trying to merge what the AI created with our actual scope.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px', textAlign: 'center', fontWeight: '600', color: theme.text }}>
            It was exhausting.
          </p>

          <hr style={{
            border: 'none',
            borderTop: `1px solid ${theme.border}`,
            margin: '44px 0'
          }} />

          {/* Operation Sage */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
            marginTop: '48px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            Operation Sage II
          </h2>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Activity was dying. People were drifting. Something had to change.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            So I wrote a new plan: <strong style={{ color: theme.accent, fontWeight: '700' }}>Operation Sage II</strong>.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            The concept was simple: give our technical team one month to ideate and build MVPs in their own areas of interest. The following month would be for refining those MVPs together.
          </p>

          <p style={{
            marginBottom: '28px',
            fontSize: '20px',
            fontWeight: '600',
            color: theme.text,
            textAlign: 'center',
            padding: '16px 0'
          }}>
            It felt like fire. A spark of hope.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            The idea was born from understanding: we all come from different backgrounds. Different passions. Different strengths. OS II would let everyone build something they genuinely cared about.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We were about to launch on December 1st.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            And then...
          </p>

          <p style={calloutItalic}>
            Salam, our CTO, resigned.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            His reasons were honest. Genuine. Solid. I couldn&apos;t argue. I just had to respect it.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            We didn&apos;t let it stop us. <em>We couldn&apos;t afford to.</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Operation Sage launched. Our first meeting was... okay. Average. But it was a start. I reduced meeting frequency from every 2 days to every 3-4 days, giving everyone room to breathe and create.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Progress came. Demi, brilliant as always, already had 2+ ideas working. Sulaimon too. I developed some of my own and I&apos;m working on another.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Others are still ideating, and <em>that&apos;s okay</em>. It&apos;s only the 9th. There&apos;s still time. I believe in them.
          </p>

          <hr style={{
            border: 'none',
            borderTop: `1px solid ${theme.border}`,
            margin: '44px 0'
          }} />

          {/* The Revelation */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
            marginTop: '48px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            The Moment Everything Clicked
          </h2>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Today, while studying, I came across something that hit different.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            <strong style={{ color: theme.text, fontWeight: '700' }}>Organizational structure.</strong>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I learned that there&apos;s no &quot;best&quot; structure. Every structure must be tailored to the company&apos;s core goals, its field, its people.
          </p>

          <p style={{
            marginBottom: '32px',
            fontSize: '22px',
            fontWeight: '600',
            color: theme.text,
            padding: '24px 0',
            textAlign: 'center',
            lineHeight: '1.7',
            fontFamily: "Georgia, 'Times New Roman', serif",
            borderTop: `1px solid ${theme.border}`,
            borderBottom: `1px solid ${theme.border}`
          }}>
            That&apos;s when it hit me. <br /><br />
            <span style={{ color: theme.accent }}>We had been doing it all wrong.</span>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            The C-suite structure (CEO, COO, CTO, CFO) looked professional. Looked official. But for a startup like ours? It made us fragmented. Idle. It drew boundaries that didn&apos;t need to exist and assigned roles we didn&apos;t actually need.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I had to fix this.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Immediately, I drafted a document outlining key structural changes. I repositioned people into roles that actually fit their talents.
          </p>

          <p style={callout}>
            Take Akpan, for example. What was he doing as CFO when he&apos;s actually a brilliant UI/UX designer? We moved him out of that role. Because honestly, <em>we don&apos;t even need a CFO right now.</em>
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px', fontStyle: 'italic', color: theme.muted }}>
            ...Or do we?
          </p>

          <hr style={{
            border: 'none',
            borderTop: `1px solid ${theme.border}`,
            margin: '44px 0'
          }} />

          {/* Moving Forward */}
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
            marginTop: '48px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.text,
            letterSpacing: '-0.5px',
            fontFamily: "Georgia, 'Times New Roman', serif"
          }}>
            A New Beginning
          </h2>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Now, we have a clearer structure. Three main groups, organized systematically.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            I spoke with everyone affected by the changes. They supported it. They believed in it.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            That night, I made the announcement to the whole team.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            Only 60% reacted to the message.
          </p>

          <p style={{
            marginBottom: '32px',
            fontSize: '22px',
            fontWeight: '600',
            fontStyle: 'italic',
            color: theme.text,
            textAlign: 'center',
            padding: '24px 0'
          }}>
            Are we still on the right path?
          </p>

          <p style={{
            marginBottom: '28px',
            fontSize: '20px',
            textAlign: 'center',
            color: theme.muted
          }}>
            I hope so.
          </p>

          <p style={{
            marginBottom: '28px',
            fontSize: '24px',
            fontWeight: '700',
            textAlign: 'center',
            color: theme.accent
          }}>
            No, I <em>believe</em> so.
          </p>

          <hr style={{
            border: 'none',
            borderTop: `1px solid ${theme.border}`,
            margin: '44px 0'
          }} />

          {/* Reflection */}
          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            This is probably just part of being a startup. Coordination is rough. Tough. Messy.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            As the COO, I&apos;m constantly trying to stay on top of every message, every update, every concern. And honestly? I&apos;ve missed some. That&apos;s on me.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            But we&apos;re learning. Growing. Adapting.
          </p>

          <p style={{ marginBottom: '28px', fontSize: '18px' }}>
            It&apos;s time to embrace this new structure. To keep looking for gaps. To fix what&apos;s broken before it breaks us.
          </p>

          {/* Conclusion */}
          <p style={{
            marginBottom: '32px',
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: theme.text,
            padding: '28px 0',
            textAlign: 'center',
            borderTop: `1px solid ${theme.border}`,
            borderBottom: `1px solid ${theme.border}`
          }}>
            I am not giving up on Detova Labs.
            <br /><br />
            <span style={{
              fontSize: '20px',
              color: theme.accent
            }}>
              Cheers to a brighter future. 🥂
            </span>
          </p>
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
