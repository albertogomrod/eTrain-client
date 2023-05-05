import navLogo from "../assets/logoipsum-218.svg";
function Footer() {
  return (
    <div className="section">
      <footer className="top">
        <img src={navLogo} alt="logo-etrain" />
        <div className="links">
          <div>
            <h2>Contacta con eTrain</h2>
            <a>Via email</a>
          </div>
          <div>
            <h2>Redes Sociales</h2>
            <a href="https://www.instagram.com/etrain_pt/">Instagram</a>
            <a href="https://twitter.com/home">Twitter</a>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <div className="legal">
          <span> 2023 Todos los derechos reservados</span>
          <a href="">Licencia</a>
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
