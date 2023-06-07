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
            <a href="">Via email</a>
          </div>
          <div>
            <h2 className="titles">Remoto</h2>
            <p>+34 688 48 83 21</p>
            <a href="">etrain@gmail.com</a>
          </div>
          <br />
        </div>

        <div className="rrssFooter">
          <button className="btnRRSS">
            <a
              className="buttonRRSSFooter"
              href="https://www.instagram.com/etrain_pt/"
            >
              IG
            </a>
          </button>

          <button className="btnRRSS">
            <a href="https://twitter.com/home">
              Tw
            </a>
          </button>

          <button className="btnRRSS">
            <a  href="https://es.linkedin.com/">
              In
            </a>
          </button>
          <button className="btnRRSS">
            <a
              href="https://www.youtube.com/?hl=es"
            >
              YT
            </a>
          </button>
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
