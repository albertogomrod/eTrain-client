import React from "react";

function Footer() {
  return (
    <div className="section">
      <footer className="top">
        <img src="" alt="logo-etrain" />
        <div className="links">
          <div>
            <h2>Plataform</h2>
            <a>Directus Core</a>
          </div>
          <div>
            <h2>Cloud</h2>
            <a>Directus Core</a>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <div className="legal">
          <span> 2023 Aal rigths reserverd</span>
          <a href="">License</a>
        </div>
        <div class="links">
          <a class="fa-brands fa-github"></a>
          <a class="fa-brands fa-linkedin"></a>
          <a class="fa-brands fa-docker"></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
