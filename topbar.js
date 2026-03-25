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

  a:focus { outline: none; }
</style>

<header>
  <div class="logo">
  <img src="https://raw.githubusercontent.com/PlasmaStarStudios/pssweb/refs/heads/main/Devs.PN/logo.png" alt="PSSLOGOEXPANDABLE">
  </div>
  <nav>
    <ul>
      <li><a href="https://plasmastarstudios.github.io/pssweb/index.html">Home</a></li>
      <li>
        <a href="#">Projects</a>
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
      <li><a herf="#">Version Beta 1.1.11</a></li>
    </ul>
  </nav>
</header>
`;

// This line "injects" the code into the top of your body
document.body.insertAdjacentHTML('afterbegin', topbarTemplate);