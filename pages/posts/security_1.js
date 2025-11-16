import { useState } from 'react';

export default function SecurityArticle1() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
    textColor: darkMode ? '#ffffff' : '#0000ffff',
    accentColor: darkMode ? '#e7e2e2ff' : '#000000ff',
    borderColor: darkMode ? '#2a2a2a' : '#e5e5e5',
    linkColor: darkMode ? '#60a5fa' : '#fa1d00ff',
    cardBg: darkMode ? '#141414' : '#fafafa',
    codeBg: darkMode ? '#1a1a1a' : '#f6f8fa',
    codeText: darkMode ? '#e5e5e5' : '#1a1a1a',
    gradientFrom: darkMode ? '#3b82f6' : '#2563eb',
    gradientTo: darkMode ? '#8b5cf6' : '#7c3aed',
    categoryBg: darkMode ? '#1e3a5f' : '#dbeafe',
    categoryText: darkMode ? '#60a5fa' : '#1e40af',
    categoryBorder: darkMode ? '#2563eb' : '#3b82f6'
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Gradient overlay */}
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
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Header */}
        <header style={{ 
          paddingTop: '30px',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a 
            href="/"
            style={{
              color: theme.linkColor,
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'gap 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.gap = '10px'}
            onMouseOut={(e) => e.currentTarget.style.gap = '6px'}
          >
            ← Back to all posts
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
              transition: 'all 0.3s ease',
              boxShadow: darkMode ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)'
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

        {/* Article Header */}
        <div style={{ marginBottom: '50px' }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              backgroundColor: theme.categoryBg,
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              color: theme.categoryText,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              border: `1px solid ${theme.categoryBorder}`
            }}>
              Blockchain Security
            </span>
            <span style={{
              fontSize: '13px',
              color: theme.accentColor,
              fontWeight: '500'
            }}>
              12 min read
            </span>
          </div>

          <h1 style={{
            fontSize: '44px',
            fontWeight: '800',
            marginBottom: '16px',
            lineHeight: '1.2',
            letterSpacing: '-1px',
            color: theme.textColor
          }}>
            Understanding Pcaversaccio's Whitehat Frontrunning Script
          </h1>

          <p style={{
            fontSize: '14px',
            color: theme.accentColor,
            fontWeight: '500'
          }}>
            Published on November 16, 2025
          </p>
        </div>

        {/* Article Content */}
        <article style={{
          fontSize: '17px',
          lineHeight: '1.8',
          color: theme.accentColor,
          paddingBottom: '60px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            marginTop: '50px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.textColor,
            letterSpacing: '-0.5px'
          }}>
            Introduction: What is Frontrunning?
          </h2>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Frontrunning is a common occurrence in blockchain, especially in DeFi trades where opportunistic actors exploit transaction timing to steal value. Put simply, frontrunning is the act of anticipating someone else's transaction and submitting your own first, usually with a higher fee, since validators prioritize transactions that maximize their income.
          </p>

          <p style={{ marginBottom: '20px', fontSize: '22px'}}>
            While often malicious, frontrunning can also be used defensively. In cases of wallet compromise, the rightful owner can race the hacker by submitting a replacement transaction with the same nonce but a higher fee. Recently, I discovered Pcaversaccio's whitehat frontrunning script, which turns this tactic into a powerful rescue tool. In this article, I'll explore how it works.
          </p>

          <hr style={{ 
            border: 'none', 
            borderTop: `1px solid ${theme.borderColor}`,
            margin: '40px 0'
          }} />

          <h2 style={{ 
            fontSize: '32px', 
            marginTop: '50px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.textColor,
            letterSpacing: '-0.5px'
          }}>
            How Exactly Does Frontrunning Happen?
          </h2>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Consider this simple analogy:
          </p>

          <p style={{ 
            marginBottom: '20px',
            padding: '20px',
            fontSize: '22px',
            backgroundColor: theme.cardBg,
            borderLeft: `4px solid ${theme.linkColor}`,
            borderRadius: '4px'
          }}>
            Imagine Alice, a Justin Bieber fan, wants to buy a concert ticket online. There's only one ticket left. Bob sees Alice's request and quickly submits his own purchase with faster processing. Bob gets the ticket first, leaving Alice out. Unfair, right?
          </p>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Now replace <strong style={{ color: theme.textColor }}>"ticket"</strong> with <strong style={{ color: theme.textColor }}>"transaction"</strong> and <strong style={{ color: theme.textColor }}>"processing speed"</strong> with <strong style={{ color: theme.textColor }}>"gas fee."</strong> This scenario happens a lot in DeFi, where trades affect token prices. For example, Mark submits a large buy order that will raise a token's price. A frontrunner can jump ahead, buy at the lower price, then sell immediately after Mark's transaction executes. This is called a <strong style={{ color: theme.textColor }}>sandwich attack</strong>.
          </p>

          {/* Sandwich Attack Diagram */}
          <div style={{
            margin: '40px 0',
            padding: '10px',
            width: '500px',
            alignItems: 'center', 
            backgroundColor: theme.cardBg,
            borderRadius: '12px',
            border: `1px solid ${theme.borderColor}`,
            marginLeft: '70px'
          }}>
            <img 
              src="/images/sandwich.png"
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

          <hr style={{ 
            border: 'none', 
            borderTop: `1px solid ${theme.borderColor}`,
            margin: '40px 0'
          }} />

          <h2 style={{ 
            fontSize: '32px', 
            marginTop: '50px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.textColor,
            letterSpacing: '-0.5px'
          }}>
            What the Whitehat Script Does
          </h2>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Imagine logging into your wallet and realizing it's been hacked. Normally, you'd try to quickly transfer funds out, but reflexes alone rarely beat automated bots.
          </p>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Instead, Pcaversaccio's script lets you craft a transaction with the <strong style={{ color: theme.textColor }}>same nonce</strong> as the hacker's, but with a <strong style={{ color: theme.textColor }}>higher priority fee</strong>. Submitted via <strong style={{ color: theme.textColor }}>Flashbots</strong>, your transaction stays private (hidden from the public mempool), giving you a higher chance of winning the race. In short: you frontrun the hacker to rescue your own funds.
          </p>

          <hr style={{ 
            border: 'none', 
            borderTop: `1px solid ${theme.borderColor}`,
            margin: '40px 0'
          }} />

          <h2 style={{ 
            fontSize: '32px', 
            marginTop: '50px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.textColor,
            letterSpacing: '-0.5px'
          }}>
            Bash Script Breakdown
          </h2>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            We'll break the script into 7 sections. You can follow along{' '}
            <a 
              href="https://github.com/pcaversaccio/white-hat-frontrunning/blob/main/go.sh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.linkColor, textDecoration: 'none', fontWeight: '600' }}
            >
              here
            </a>.
          </p>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            1. Variable Checks
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Ensures required environment variables (like private keys, RPC URLs) are set.
          </p>

          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`check_var() {
  if [[ -z "\${!1}" ]]; then
    echo "Error: $1 is not set in the .env file"
    exit 1
  else
    echo "$1 is set"
  fi
}`}
            </code>
          </pre>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Variables checked:
          </p>

          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`vars=(
  PROVIDER_URL
  RELAY_URL
  VICTIM_PK
  GAS_PK
  FLASHBOTS_SIGNATURE_PK
  TOKEN_CONTRACT
)`}
            </code>
          </pre>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            This prevents runtime errors if something is missing in <code style={{ 
              backgroundColor: theme.cardBg, 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: '15px'
            }}>.env</code>.
          </p>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            2. Wallet Derivation
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Derives wallet addresses from private keys using Foundry's <code style={{ 
              backgroundColor: theme.cardBg, 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: '15px'
            }}>cast</code>.
          </p>

          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`derive_wallet() {
  local pk="$1"
  cast wallet address --private-key "$pk"
}`}
            </code>
          </pre>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            3. Flashbots Signature Creation
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Creates a signature so Flashbots can authenticate the bundle.
          </p>

          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`create_flashbots_signature() {
  local payload="$1"
  local private_key="$2"
  local payload_keccak=$(cast keccak "$payload")
  local payload_hashed=$(cast hash-message "$payload_keccak")
  local signature=$(cast wallet sign "$payload_hashed" \\
    --private-key "$private_key" --no-hash | tr -d '\\n')
  echo "$signature"
}`}
            </code>
          </pre>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            4. Transaction Building
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Instead of <code style={{ 
              backgroundColor: theme.cardBg, 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: '15px'
            }}>cast send</code>, we use <code style={{ 
              backgroundColor: theme.cardBg, 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: '15px'
            }}>cast mktx</code> to manually craft transactions with nonce and gas fee control.
          </p>
          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`cast mktx --private-key "$from_pk"
		--rpc-url "$PROVIDER_URL"
		"$to_address" $([[ -n "$data" ]] && echo -n "$data")
		--value "$value"
		--nonce "$nonce"
		--gas-price "$gas_price"
		--priority-gas-price "$priority_gas_price"
		--gas-limit "$gas_limit"
}`}
            </code>
          </pre>
          <div style={{ 
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: theme.cardBg,
            borderLeft: `4px solid ${theme.categoryBorder}`,
            borderRadius: '4px'
          }}>
            <p style={{ margin: 0, fontWeight: '600', color: theme.textColor, marginBottom: '12px' }}>
              Nonce logic:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '16px' }}>
              <li style={{ marginBottom: '8px' }}>If confirmed nonce = 6, the next valid nonce = 7.</li>
              <li style={{ marginBottom: '8px' }}>Hacker submits tx with nonce 7.</li>
              <li style={{ marginBottom: '8px' }}>You also submit tx with nonce 7, but with higher priority fee.</li>
              <li>Validator includes yours, hacker's is dropped.</li>
            </ul>
          </div>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            5. Transaction Bundle Creation
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Bundles multiple transactions into JSON for Flashbots.
          </p>
          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`BUNDLE_JSON="{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"eth_sendBundle\",\"params\":[{\"txs\":[$txs_string],\"blockNumber\":\"$(cast to-hex "$BLOCK_NUMBER")\",\"minTimestamp\":0}]}"`}
            </code>
          </pre>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Looks like this in json format.
          </p>
          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`"jsonrpc": "2.0",
  "id": 1,
  "method": "eth_sendBundle",
  "params": [
    {
      "txs": ["Tx1", "Tx2"],
      "blockNumber": "BlockNumberHex",
      "minTimestamp": 0
    }
  ]
}`}

            </code>
          </pre>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Flashbots expects this exact format. Bundling ensures atomic execution, all rescue txs succeed together.
          </p>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            6. Sending the Bundle
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Sends the bundle to Flashbots relay using curl with proper headers.
          </p>
          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`curl -X POST "{headers[@]}" 
		-d "$(echo -n "$bundle_json")" "$RELAY_URL"
`}
            </code>
          </pre>

          <h3 style={{ 
            fontSize: '24px', 
            marginTop: '40px',
            marginBottom: '16px',
            fontWeight: '700',
            color: theme.textColor
          }}>
            7. User Customization
          </h3>

          <p style={{ marginBottom: '16px', fontSize: '22px' }}>
            Here's where you tweak gas fees and limits.
          </p>

          <pre style={{
            backgroundColor: theme.codeBg,
            padding: '20px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '20px',
            border: `1px solid ${theme.borderColor}`,
            lineHeight: '1.6'
          }}>
            <code style={{ color: theme.codeText }}>
{`GAS_PRICE=$(cast gas-price --rpc-url "$PROVIDER_URL")
GAS_PRICE=$(((GAS_PRICE * 125) / 100))   # bump by 25%`}
            </code>
          </pre>

          <hr style={{ 
            border: 'none', 
            borderTop: `1px solid ${theme.borderColor}`,
            margin: '40px 0'
          }} />

          <h2 style={{ 
            fontSize: '32px', 
            marginTop: '50px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.textColor,
            letterSpacing: '-0.5px'
          }}>
            How Can We Improve This?
          </h2>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Two main ideas:
          </p>

          <ol style={{ marginLeft: '20px', marginBottom: '20px', fontSize: '22px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong style={{ color: theme.textColor }}>Multi-relay submission:</strong> so that if one relay fails, others may succeed.
            </li>
            <li>
              <strong style={{ color: theme.textColor }}>Secure key storage:</strong> .env is convenient but unsafe. For production or rescue scripts, use Foundry’s keystore system (cast wallet import) so private keys stay encrypted and invisible. This makes your whitehat frontrunning bot far more secure.
            </li>
          </ol>

          <hr style={{ 
            border: 'none', 
            borderTop: `1px solid ${theme.borderColor}`,
            margin: '40px 0'
          }} />

          <h2 style={{ 
            fontSize: '32px', 
            marginTop: '50px',
            marginBottom: '20px',
            fontWeight: '700',
            color: theme.textColor,
            letterSpacing: '-0.5px'
          }}>
            Key Takeaway
          </h2>

          <p style={{ marginBottom: '20px', fontSize: '22px' }}>
            Frontrunning is often seen as malicious, but Pcaversaccio's script shows how it can be repurposed as a <strong style={{ color: theme.textColor }}>whitehat defense mechanism</strong>. By racing hackers with higher-fee replacement transactions, owners can protect compromised wallets.
          </p>

          <p style={{ 
            marginBottom: '20px',
            fontSize: '18px',
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif'
          }}>
            Sometimes the best defense in blockchain is to play the attacker's game, but smarter.
          </p>
        </article>

        {/* Footer */}
        <footer style={{
          marginTop: '40px',
          paddingTop: '30px',
          paddingBottom: '40px',
          borderTop: `2px solid ${theme.borderColor}`,
          textAlign: 'center',
          color: theme.accentColor,
          fontSize: '13px'
        }}>
          <a 
            href="/"
            style={{
              color: theme.linkColor,
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'gap 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.gap = '10px'}
            onMouseOut={(e) => e.currentTarget.style.gap = '6px'}
          >
            ← Back to all posts
          </a>
        </footer>
      </div>
    </div>
  );
}