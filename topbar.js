const topbarTemplate = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #722a9e;
    position: relative;
    z-index: 1000;
  }

  .logo img { height: 60px; width: auto; }

  /* Desktop Navigation */
  nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
    margin: 0;
    padding: 0;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    border: 2px solid white;
    padding: 6px 15px;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s;
  }

  /* Dropdown Styles (Desktop Only) */
  @media (min-width: 769px) {
    nav ul li:hover > .dropdown {
      display: flex;
      visibility: visible;
      opacity: 1;
    }
    .dropdown {
      position: absolute;
      display: none;
      flex-direction: column;
      background: #722a9e;
      padding: 10px;
      border-radius: 0 0 5px 5px;
      top: 100%;
    }
  }

  /* Mobile Hamburger Button */
  .menu-toggle {
    display: none;
    background: none;
    border: 2px solid white;
    color: white;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Mobile Viewport */
  @media (max-width: 768px) {
    .menu-toggle { display: block; }
    
    nav {
      display: none; /* Hidden by default on mobile */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #5a217d;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    nav.active { display: block; }

    nav ul {
      flex-direction: column;
      padding: 20px;
      gap: 10px;
    }

    nav ul li a {
      display: block;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
    }

    .dropdown { display: none !important; } /* Simplify mobile by hiding complex nesting */
  }
</style>

<header>
  <div class="logo">
    <img src="https://raw.githubusercontent.com/PlasmaStarStudios/pssweb/refs/heads/main/Devs.PN/logo.png" alt="PSSLOGO">
  </div>
  
  <button class="menu-toggle" onclick="toggleMenu()">☰</button>

  <nav id="topNav">
    <ul>
      <li><a href="https://plasmastarstudios.github.io/pssweb/index.html">Home</a></li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/iifpp/">Projects</a></li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Account/Consumer/login/">Account</a></li>
      <li><a href="#">🧺</a></li>
      <li><a href="#" style="opacity: 0.7; border-color: transparent;">v1.1.12</a></li>
    </ul>
  </nav>
</header>

<script>
  function toggleMenu() {
    const nav = document.getElementById('topNav');
    nav.classList.toggle('active');
  }
</script>
`;

document.body.insertAdjacentHTML('afterbegin', topbarTemplate);