export default function Navbar({ navigate, currentPage }) {
    const links = [
      { id: 'main',    label: '🏠 Home' },
      { id: 'wishes',  label: '💌 Wishes' },
      { id: 'gallery', label: '📸 Gallery' },
      { id: 'letter',  label: '✉️ Letter' },
    ];
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">💖 Samikshya</div>
        <div className="navbar-links">
          {links.map(l => (
            <button
              key={l.id}
              className={`nav-btn${currentPage === l.id ? ' active' : ''}`}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    );
  }