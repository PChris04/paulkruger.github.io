export default function Notes() {
    const notes = [
      {
        title: 'Web Application Security Basics',
        description: 'Covers OWASP Top 10, common web vulnerabilities (XSS, SQLi, CSRF), and testing techniques.',
        link: 'https://yourblog.com/notes/web-security-basics',
      },
      {
        title: 'Burp Suite Cheatsheet',
        description: 'My go-to guide for using Burp Suite effectively — includes Repeater, Intruder, extensions, and tips.',
        link: 'https://yourblog.com/notes/burp-suite-cheatsheet',
      },
      {
        title: 'OSINT Toolkit & Workflow',
        description: 'How I approach Open Source Intelligence gathering — tools, browser extensions, and search techniques.',
        link: 'https://yourblog.com/notes/osint-workflow',
      },
      {
        title: 'Linux Privilege Escalation Guide',
        description: 'Checklist and commands for enumerating and escalating privileges on Linux boxes.',
        link: 'https://yourblog.com/notes/linux-priv-esc',
      },
    ];
  
    return (
      <div style={{ padding: '2rem' }}>
        <h1>📘 Learning Notes</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Here’s a collection of my notes from studying cybersecurity topics, tools, and techniques.
          These are living documents that I update regularly.
        </p>
  
        <ul>
          {notes.map((note, index) => (
            <li key={index} style={{ marginBottom: '1.5rem' }}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <a href={note.link} target="_blank" rel="noopener noreferrer">
                View Notes →
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  