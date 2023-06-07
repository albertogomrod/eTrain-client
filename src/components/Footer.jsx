import navLogo from "../assets/logoipsum-218.svg";
function Footer() {
  return (
    <div className="section">
      <footer className="top">
        <img id="logoFooter" src={navLogo} alt="logo-etrain" />
        <br />
        <div className="links">
          <div>
            <h2 className="titles">Madrid</h2>
            <p>40.4356° Lat, -3.7057° Long</p>
            <p>etrain.com</p>
            <p>+34 688 48 83 21</p>
            <a>Via email</a>
          </div>
          <div>
            <h2 className="titles">Remoto</h2>
            <p>+34 688 48 83 21</p>
            <a href="">etrain@gmail.com</a>
          </div>
          <br />
          <div>
            <div>
              <h2 className="titles">Redes Sociales</h2>
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
