import navLogo from "../assets/logoipsum-218.svg";
function Footer() {
  return (
    <div className="section">
      <footer className="top">
        <img src={navLogo} alt="logo-etrain" />
        <br />
        <div className="links">
          <div>
            <h2>Contacta con eTrain</h2>
            <a>Via email</a>
          </div>
          <br />
          <div>
            <div>
              <h2>Redes Sociales</h2>
              <a href="https://www.instagram.com/etrain_pt/">Instagram</a>
              <br />
              <a href="https://twitter.com/home">Twitter</a>
              <br />
              
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom">
        <div className="legal">
          <a href="">Legal Notice</a>

          <a href="">Privacy Police</a>

          <a href="">Cookies</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
