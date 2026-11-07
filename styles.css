:root {
  --black: #141414;
  --dark: #2a2a2a;
  --cream: #fcf9f4;
  --warm: #f6f0e6;
  --gold: #b8a47c;
  --gold-light: #d4c7a9;
  --gold-deep: #9a855c;
  --muted: #7a756b;
  --accent: #c4a882;
  --serif: 'Cormorant Garamond', Georgia, serif;
  --display: 'Playfair Display', serif;
  --sans: 'Inter', 'Helvetica Neue', sans-serif;
  --shadow-sm: 0 2px 10px rgba(0,0,0,0.04);
  --shadow-md: 0 8px 30px rgba(0,0,0,0.06);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.08);
  --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--sans);
  background: var(--cream);
  color: var(--dark);
  line-height: 1.7;
  overflow-x: hidden;
}

/* Progress Bar */
.progress-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 1000;
  background: transparent;
}
.progress-bar {
  height: 3px;
  background: linear-gradient(90deg, var(--gold-deep), var(--gold-light));
  width: 0%;
  transition: width 0.1s ease;
}

/* Header */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(252, 249, 244, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(184, 164, 124, 0.15);
  transition: var(--transition);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-family: var(--display);
  font-size: 1.4rem;
  letter-spacing: 0.2em;
  color: var(--black);
  text-decoration: none;
  font-weight: 600;
}
.brand span {
  color: var(--gold);
}
.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
}
.nav-link {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dark);
  text-decoration: none;
  position: relative;
  transition: var(--transition);
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: var(--transition);
}
.nav-link:hover {
  color: var(--gold-deep);
}
.nav-link:hover::after {
  width: 100%;
}
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}
.menu-toggle span {
  width: 26px;
  height: 1px;
  background: var(--dark);
  transition: var(--transition);
}

/* Fade-in Animation */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8
