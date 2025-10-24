import React, { useState } from 'react';

// N'oublie pas d'ajouter ce lien dans ton index.html ou Head:
// <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet">

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    { id: 1, title: "E-Commerce Platform", description: "Une plateforme de commerce électronique moderne avec panier et paiement", tech: ["React", "Node.js", "MongoDB"] },
    { id: 2, title: "Application Mobile", description: "Application de gestion de tâches avec synchronisation cloud", tech: ["React Native", "Firebase"] },
    { id: 3, title: "Dashboard Analytics", description: "Tableau de bord interactif pour visualisation de données", tech: ["React", "D3.js", "Express"] }
  ];

  const styles = {
    body: { margin: 0, padding: 0, fontFamily: "'Reenie Beanie', cursive", color: '#f0f9ff', backgroundColor: '#000' },
    navbar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' },
    logo: { fontFamily: "'Reenie Beanie', cursive", fontSize: '2.5em', fontWeight: 'normal', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center' },
    redText: { color: '#ef4444', fontFamily: "'Reenie Beanie', cursive" },
    whiteText: { color: '#ffffff', fontFamily: "'Reenie Beanie', cursive" },
    navLinks: { display: 'flex', listStyle: 'none', gap: '40px', margin: 0, padding: 0 },
    navButton: { background: 'none', border: 'none', color: '#f0f9ff', fontSize: '1em', cursor: 'pointer', transition: 'color 0.3s', fontFamily: 'inherit' },
    activeNav: { color: '#dc2626', fontWeight: 600 },
    heroSection: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom right, #000, #1f2937, #450a0a)', textAlign: 'center', padding: '20px' },
    heroTitle: { fontSize: '4em', fontWeight: 'normal', marginBottom: '20px', fontFamily: "'Reenie Beanie', cursive" },
    heroSubtitle: { fontSize: '1.5em', color: '#d1d5db', marginBottom: '30px', fontFamily: "'Reenie Beanie', cursive" },
    button: { padding: '15px 40px', backgroundColor: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1em', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'inherit' },
    section: { minHeight: '100vh', padding: '80px 50px', backgroundColor: '#111827' },
    sectionDark: { minHeight: '100vh', padding: '80px 50px', backgroundColor: '#000' },
    sectionTitle: { fontSize: '3em', fontWeight: 'normal', textAlign: 'center', marginBottom: '60px', fontFamily: "'Reenie Beanie', cursive" },
    projectGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' },
    projectCard: { backgroundColor: '#1f2937', borderRadius: '10px', padding: '25px', transition: 'all 0.3s', cursor: 'pointer' },
    projectImage: { height: '200px', background: 'linear-gradient(to bottom right, #7f1d1d, #1f2937)', borderRadius: '8px', marginBottom: '20px' },
    projectTitle: { fontSize: '1.5em', fontWeight: 'bold', color: '#f87171', marginBottom: '15px', fontFamily: "'Reenie Beanie', cursive" },
    projectDesc: { color: '#d1d5db', marginBottom: '20px', lineHeight: '1.6' },
    techTags: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
    techTag: { padding: '5px 15px', backgroundColor: 'rgba(220,38,38,0.2)', color: '#f87171', borderRadius: '20px', fontSize: '0.9em', fontFamily: "'Reenie Beanie', cursive" },
    supportGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' },
    supportCard: { backgroundColor: '#111827', padding: '40px', borderRadius: '10px', textAlign: 'center', transition: 'background-color 0.3s' },
    supportIcon: { fontSize: '3em', marginBottom: '20px' },
    supportTitle: { fontSize: '1.5em', fontWeight: 'bold', color: '#f87171', marginBottom: '15px', fontFamily: "'Reenie Beanie', cursive" },
    supportDesc: { color: '#d1d5db', lineHeight: '1.6' },
    contactForm: { maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' },
    formGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { color: '#d1d5db', fontSize: '1em', fontFamily: "'Reenie Beanie', cursive" },
    input: { padding: '12px', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff', fontSize: '1em', fontFamily: "'Reenie Beanie', cursive" },
    textarea: { padding: '12px', backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff', fontSize: '1em', resize: 'none', fontFamily: "'Reenie Beanie', cursive" },
    aboutContent: { maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
    aboutText: { fontSize: '1.2em', color: '#d1d5db', lineHeight: '1.8', marginBottom: '20px', fontFamily: "'Reenie Beanie', cursive" },
    socialLinks: { display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' },
    socialIcon: { fontSize: '2.5em', textDecoration: 'none', transition: 'transform 0.3s' },
    footer: { backgroundColor: '#111827', padding: '30px', textAlign: 'center', color: '#9ca3af', fontFamily: "'Reenie Beanie', cursive" }
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé! Merci ${formData.name}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <a href="#" style={styles.logo}>
          <span style={styles.redText}>Malagasy</span>
          <span style={styles.whiteText}>React</span>
        </a>
        <ul style={styles.navLinks}>
          {['home', 'project', 'support', 'contact', 'apropos'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                style={{ ...styles.navButton, ...(activeSection === item ? styles.activeNav : {}) }}
                onMouseEnter={(e) => e.target.style.color = '#ef4444'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item ? '#dc2626' : '#f0f9ff'}
              >
                {item === 'apropos' ? 'À propos' : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Bienvenue sur <span><span style={styles.redText}>Malagasy</span><span style={styles.whiteText}>React</span></span>
        </h1>
        <p style={styles.heroSubtitle}>Hooké à React depuis Madagascar ️</p>
        <button style={styles.button} onClick={() => scrollToSection('project')}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#b91c1c'; e.target.style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#dc2626'; e.target.style.transform = 'scale(1)'; }}
        >
          Découvrir mes projets
        </button>
      </section>

      {/* Projects Section */}
      <section id="project" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Projets <span style={styles.redText}>Réaliser</span>
        </h2>
        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#374151';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1f2937';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={styles.projectImage}></div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <div style={styles.techTags}>
                {project.tech.map((tech, index) => (
                  <span key={index} style={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section id="support" style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>
          Besoin d'<span style={styles.redText}>Aide</span>?
        </h2>
        <p style={{...styles.heroSubtitle, textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px'}}>
          <strong>MalagasyReact</strong> est prêt à vous accompagner dans vos projets web et mobile.
            Que ce soit pour du développement sur mesure, du conseil stratégique ou des formations personnalisées,
            nous mettons notre expertise au service de vos ambitions numériques.
        </p>
        <div style={styles.supportGrid}>
          <div
            style={styles.supportCard}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            <div style={styles.supportIcon}>💻</div>
            <h3 style={styles.supportTitle}>Développement</h3>
            <p style={styles.supportDesc}>Applications web et mobile sur mesure</p>
          </div>
          <div
            style={styles.supportCard}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            <div style={styles.supportIcon}>🎯</div>
            <h3 style={styles.supportTitle}>Conseil</h3>
            <p style={styles.supportDesc}>Accompagnement stratégique et technique</p>
          </div>
          <div
            style={styles.supportCard}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            <div style={styles.supportIcon}>📚</div>
            <h3 style={styles.supportTitle}>Formation</h3>
            <p style={styles.supportDesc}>Sessions de formation personnalisées</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Me <span style={styles.redText}>Contacter</span>
        </h2>
        <div style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nom</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={styles.input}
              placeholder="Votre nom"
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = '#374151'}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={styles.input}
              placeholder="votre adresse email"
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = '#374151'}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              style={styles.textarea}
              placeholder="Votre message..."
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = '#374151'}
            />
          </div>
          <button
            onClick={handleSubmit}
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#b91c1c';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#dc2626';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Envoyer le message
          </button>
        </div>
      </section>

{/* About Section */}
<section id="apropos" style={styles.sectionDark}>
  <h2 style={styles.sectionTitle}>
    À <span style={styles.redText}>Propos</span>
  </h2>

  <div style={styles.aboutContent}>
    <p style={styles.aboutText}>
      Né à Madagascar, <strong>MalagasyReact</strong> incarne la fusion entre
      <strong> innovation technologique </strong> et <strong>créativité locale</strong>.
    </p>

    <p style={styles.aboutText}>
      Spécialisé dans le <strong>développement web moderne</strong>,
      MalagasyReact met à profit <strong>React</strong>, <strong>Node.js</strong> et
      d’autres technologies de pointe pour construire des solutions performantes,
      évolutives et élégantes.
    </p>

    <p style={styles.aboutText}>
      L’objectif : <strong>faire rayonner le savoir-faire malgache</strong> dans le monde du numérique.
    </p>

    {/* Social Links */}
    <div style={styles.socialLinks}>
      <a
        href="#"
        style={styles.socialIcon}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        title="Portfolio"
      >
        🔗
      </a>

      <a
        href="#"
        style={styles.socialIcon}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        title="LinkedIn"
      >
        💼
      </a>

      <a
        href="#"
        style={styles.socialIcon}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        title="Contact"
      >
        📧
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 MalagasyReact by Dan Ahmed.</p>
      </footer>
    </div>
  );
}