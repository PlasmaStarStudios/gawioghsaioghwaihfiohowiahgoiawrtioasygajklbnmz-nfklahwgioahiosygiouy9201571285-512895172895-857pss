const topbarTemplate = `
<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #722a9e;
    min-height: 80px;
    position: relative;
    z-index: 1000;
  }

  body { margin: 0; font-family: "Segoe UI", sans-serif; }

  .logo img {
    height: 80px;
    width: auto;
    display: block;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 10px;
    margin: 0;
    padding: 0;
  }

  /* Standard Button Style */
  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    white-space: nowrap;
    transition: 0.2s;
  }

  nav ul li a:hover { background-color: rgba(255,255,255,0.2); }

  /* --- DROPDOWN LOGIC (Restored for PC) --- */
  .dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #722a9e;
    flex-direction: column;
    padding: 10px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: 0.3s ease;
  }

  /* This is what broke: Re-adding the hover trigger */
  nav ul li:hover > .dropdown {
    visibility: visible;
    opacity: 1;
  }

  .dropdown li a {
    border: none;
    display: block;
    width: 150px;
    padding: 10px;
    text-align: left;
  }

  /* --- MOBILE FIXES --- */
  @media (max-width: 850px) {
    header {
      padding: 10px;
      justify-content: space-around; /* Spread logo and nav better */
    }
    
    .logo img { height: 50px; } /* Shrink logo to save room */

    nav ul {
      gap: 5px;
    }

    nav ul li a {
      font-size: 12px;
      padding: 5px 8px;
    }

    /* Hide specific non-essential items on very small screens to prevent clutter */
    .version-tag { display: none; }
    
    /* On mobile, dropdowns can be tricky; 
       We keep them hidden unless clicked, or redirect to a dedicated page */
    .dropdown { display: none; } 
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
        <a href="https://plasmastarstudios.github.io/pssweb/Projects/">Projects ▾</a>
        <ul class="dropdown">
          <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/iifpp/">IIFPP</a></li>
          <li><a href="https://plasmastarstudios.github.io/pssweb/Projects/games/rrp/">RRP</a></li>
        </ul>
      </li>
      <li><a href="https://plasmastarstudios.github.io/pssweb/Account/Consumer/login/">Account</a></li> 
      <li><a href="#">🧺</a></li> 
      <li class="version-tag"><a href="#" style="border:none; opacity:0.6;">v1.1.12</a></li>
    </ul>
  </nav>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', topbarTemplate);