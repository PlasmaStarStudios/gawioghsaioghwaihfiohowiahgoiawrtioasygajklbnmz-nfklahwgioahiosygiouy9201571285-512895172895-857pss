const topbarTemplate = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #722a9e;
    min-height: 90px;
    position: relative;
    z-index: 1000;
  }

  body { margin: 0; font-family: "Segoe UI", sans-serif; }

  .logo img { height: 90px; width: auto; }

  nav ul {
    display: flex;
    list-style: none;
    gap: 12px;
    margin: 0;
    padding: 0;
  }

  /* Main Buttons */
  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    white-space: nowrap;
    transition: 0.3s;
    display: inline-block;
  }

  nav ul li { position: relative; }

  /* --- DROPDOWNS (Level 1) --- */
  .dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #722a9e;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 5px 5px;
    transition: 0.3s;
  }

  /* --- SIDE MENUS (Level 2 - Software/Other) --- */
  .side-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 100%;
    background-color: #8732bb;
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    border-radius: 5px 0 0 5px;
    transition: 0.3s;
  }

  /* SHOW LOGIC */
  nav ul li:hover > .dropdown,
  .has-submenu:hover > .side-menu {
    visibility: visible;
    opacity: 1;
  }

  .dropdown li a, .side-menu li a {
    border: none;
    width: 180px;
    text-align: left;
    padding: 10px;
    margin: 2px 0;
  }

  /* --- MOBILE FIXES (No more stacking!) --- */
  @media (max-width: 800px) {
    header { padding: 5px 10px; min-height: 70px; }
    .logo img { height: 50px; }
    
    /* Allows the menu to slide left/right on tiny screens instead of breaking */
    nav {
      overflow-x: auto;
      max-width: 70%;
    }
    
    nav ul { gap: 8px; }
    nav ul li a { padding: 5px 10px; font-size: 12px; }
    
    /* On mobile, complex nested hovers are disabled to prevent glitches */
    .dropdown, .side-menu { right: auto; left: 0; }
  }
</style>

<header>
  <div class="logo">
    <img src="https://raw.githubusercontent.com/PlasmaStarStudios/pssweb/refs/heads/main/Devs.PN/logo.png" alt="PSS">
  </div>
  <nav>
    <ul>
      <li><a href="https://plasmastarstudios.github.io/pssweb/index.html">Home</a></li>
      <li>
        <a href="#">Projects ▾</a>
        <ul class="dropdown">
          <li class="has-submenu">
            <a href="#">Games ❯</a>
            <ul class="side-menu">
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/iifpp/">IIFPP (BETA)</a></li>
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/rrp/">RRP</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Software ❯</a>
            <ul class="side-menu">
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/incom">Incom</a></li>
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/psspocket/">psspocket</a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Other ❯</a>
            <ul class="side-menu">
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/Bots/adp/">ADP</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Account/Consumer/login/">Account</a></li> 
      <li><a href="#">🧺</a></li> 
      <li><a href="#" style="border:none; opacity:0.5; font-size:10px;">v1.1.13  BETA</a></li>
    </ul>
  </nav>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', topbarTemplate);