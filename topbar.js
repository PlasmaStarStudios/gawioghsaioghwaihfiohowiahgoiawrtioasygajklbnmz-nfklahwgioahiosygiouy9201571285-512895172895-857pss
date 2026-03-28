(function() {
    // Check if a favicon already exists to avoid duplicates
    if (!document.querySelector("link[rel*='icon']")) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        // USE THE FULL URL TO YOUR LOGO/ICON HERE
        link.href = 'https://github.com/PlasmaStarStudios/pssweb/blob/main/icon.png?raw=true'; 
        document.getElementsByTagName('head')[0].appendChild(link);
    }
})();
const topbarTemplate = `

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #722a9e;
  }

  body {
    margin: 0;
    font-family: "Calibri", "Candara", "Segoe UI", "Optima", "Arial", sans-serif;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }

  .logo img {
    height: 110px;
    width: auto;
  }

  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    background-color: transparent; 
    border: 2px solid #ffffff;
    padding: 8px 18px;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    transition: 0.3s;
  }

  nav ul li { position: relative; }

  .dropdown {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: translateY(-10px);
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #722a9e;
    padding: 10px;
    list-style: none;
    flex-direction: column;
    z-index: 100;
    border-radius: 0 0 5px 5px;
    border-top: 20px solid #722a9e;
    margin-top: -1px;
    width: max-content;
  }

  .side-menu {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: translateX(10px);
    position: absolute;
    top: 0;
    right: 100%;
    background-color: #8732bb;
    padding: 10px;
    list-style: none;
    flex-direction: column;
    z-index: 101;
    border-radius: 5px 0 0 5px;
    border-right: 30px solid #722a9e;
    margin-right: -40px;
    width: max-content;
  }

  nav ul li:hover > .dropdown,
  .has-submenu:hover > .side-menu {
    visibility: visible;
    opacity: 1;
    transform: translate(0);
    display: flex;
  }

  nav ul li a { outline: none; }

  .dropdown li, .side-menu li {
    width: 100%;
    display: block;
  }

  .dropdown li a, .side-menu li a {
    display: block;
    box-sizing: border-box;
    margin: 4px 0;
    text-align: center;
    min-width: 160px;
  }

  .menu-toggle {
    display: none;
    background: #fff;
    border: 2px solid #fff;
    color: #722a9e;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .menu-toggle:focus {
    outline: 2px dashed #fff;
  }

  nav.open > ul {
    display: flex !important;
    max-height: 800px;
  }

  @media (max-width: 860px) {
    header {
      flex-wrap: wrap;
      padding: 8px 12px;
    }

    .logo img {
      height: 50px;
    }

    .menu-toggle {
      display: flex;
    }

    nav {
      width: 100%;
    }

    nav ul {
      display: none;
      flex-direction: column;
      width: 100%;
      gap: 8px;
      background-color: #722a9e;
      margin: 0;
      padding: 8px 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    nav.open > ul {
      max-height: 600px;
    }

    nav ul li {
      width: 100%;
      margin: 0;
    }

    nav ul li a {
      width: calc(100% - 40px);
      margin: 0 20px;
      text-align: center;
      border: 1px solid #fff;
      padding: 10px 12px;
    }

    .dropdown, .side-menu {
      position: relative;
      top: 0;
      right: 0;
      margin: 0;
      border: none;
      border-radius: 0;
      background-color: #8b41c2;
      box-shadow: none;
      transform: none;
      opacity: 1;
      visibility: visible;
      width: 100%;
      border-top: none;
      display: none;
    }

    .dropdown li,
    .side-menu li {
      width: 100%;
    }

    .has-submenu.open > .side-menu,
    .has-dropdown.open > .dropdown {
      display: flex;
    }

    .has-submenu > a::after,
    .has-dropdown > a::after {
      content: " ▾";
      font-size: 0.8em;
      margin-left: 6px;
    }

    body {
      overflow-x: hidden;
    }

    nav.open > ul {
      max-height: 100vh;
    }

    nav ul li a {
      width: 90%;
      margin: 0.2rem auto;
      font-size: 1.2rem;
      letter-spacing: 0.02em;
    }

    .dropdown li a, .side-menu li a {
      min-width: auto;
      padding: 8px 12px;
      text-align: left;
    }
  }

  a:focus { outline: none; }
</style>

<header>
  <div class="logo">
  <img src="https://raw.githubusercontent.com/PlasmaStarStudios/pssweb/refs/heads/main/Devs.PN/logo.png" alt="PSSLOGOEXPANDABLE">
  </div>
  <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
  <nav>
    <ul>
      <li><a href="https://plasmastarstudios.github.io/pssweb/index.html">Home</a></li>
      <li class="has-dropdown">
        <a href="https://plasmastarstudios.github.io/pssweb/Projects/">Projects</a>
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
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/incom">Incom (discontinued)</a></li>
              <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/software/psspocket/">psspocket(reconstruction)</a></li>
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
      <li><a href="#">Version Beta 1.1.13</a></li>
    </ul>
  </nav>
</header>
`;

// This line "injects" the code into the top of your body
document.body.insertAdjacentHTML('afterbegin', topbarTemplate);

const topbarNav = document.querySelector('header nav');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle && topbarNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = topbarNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', expanded);
  });
}

const submenuTriggers = document.querySelectorAll('li.has-submenu > a');
submenuTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    const isMobile = window.matchMedia('(max-width: 860px)').matches;
    if (!isMobile) return;

    event.preventDefault();
    const parentLi = trigger.parentElement;
    parentLi.classList.toggle('open');
  });
});