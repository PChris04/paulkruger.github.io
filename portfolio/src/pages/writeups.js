export default function Writeups() {
    const writeups = [
      {
        title: 'HTB: Optimum',
        description: 'Windows box exploiting HttpFileServer 2.3 vulnerability and privilege escalation via exploit suggester.',
        link: 'https://yourblog.com/writeups/htb-optimum',
      },
      {
        title: 'TryHackMe: Mr. Robot',
        description: 'CTF based on the Mr. Robot series involving WordPress enumeration and reverse shell.',
        link: 'https://yourblog.com/writeups/thm-mr-robot',
      },
      {
        title: 'CTF: Web Exploitation - SQLi Challenge',
        description: 'A beginner-friendly write-up for exploiting SQL Injection to extract user data.',
        link: 'https://yourblog.com/writeups/sql-injection-ctf',
      },
    ];
  
    return (
      <div style={{ padding: '2rem' }}>
        <h1>🕵️‍♂️ CTF Write-ups</h1>
        <p style={{ marginBottom: '1.5rem' }}>Here’s a collection of my CTF write-ups with detailed steps, tools, and techniques used.</p>
        
        <ul>
          {writeups.map((item, index) => (
            <li key={index} style={{ marginBottom: '1.5rem' }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Read Write-up →
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  