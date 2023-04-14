import { useScroll, useTransform } from "framer-motion";
import { Title } from "./style.js";

function Contacto() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <div>
      <div id="ruleta">
        <Title style={{ x }}>¡Hablemos!</Title>

        <h6>holaantoñito@etrain.com</h6>
      </div>
      <div>
        <h4>eTrain</h4>
        <hr />
        <h6>40.4356° Lat, -3.7057° Long</h6>
        <h6>eTrain.com</h6>
        <h6>+34 910 51 94 90</h6>
        <h6>holaantoñito@etrain.com</h6>
      </div>
    </div>
  );
}

export default Contacto;
