import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/writeups" style={{ margin: '0 10px' }}>CTF Write-ups</Link>
      <Link to="/projects" style={{ margin: '0 10px' }}>Projects</Link>
      <Link to="/notes" style={{ margin: '0 10px' }}>Learning Notes</Link>
    </nav>
  );
}
