export default function Projects() {
    const projects = [
      {
        title: 'VulnHub Lab: Stapler',
        description: 'A full penetration test on the Stapler vulnerable VM, covering enumeration, exploitation, and privilege escalation.',
        link: 'https://yourblog.com/projects/vulnhub-stapler',
      },
      {
        title: 'Burp Suite Extension: Param Scanner',
        description: 'A custom Burp Suite extension written in Python to scan hidden HTTP parameters for fuzzing and discovery.',
        link: 'https://github.com/yourusername/param-scanner',
      },
      {
        title: 'Recon Automation Script',
        description: 'Bash script to automate recon for bug bounty targets including subdomain enumeration, port scanning, and tech stack detection.',
        link: 'https://github.com/yourusername/recon-automation',
      },
    ];
  
    return (
      <div style={{ padding: '2rem' }}>
        <h1>🔧 Security Projects</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Here are some personal projects, scripts, and write-ups from hands-on pentesting labs and security tooling.
        </p>
  
        <ul>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '1.5rem' }}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  