import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { listaEntradasBlogService } from "../services/blog.services";
import { Link } from "react-router-dom";

import sentadillabyn from "../assets/sentadillabyn.jpg";
import flexionesbyn from "../assets/pexels-ketut-subiyanto-4812848-3840x2160-25fps (1).mp4";
import CountUp from "react-countup";
import Marquee from "react-marquee-master";

function Home() {
  const navigate = useNavigate();

  const [allBlogs, setAllBlogs] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsFetching(true);
    try {
      const response = await listaEntradasBlogService();
      setIsFetching(false);
      setAllBlogs(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="home">
      <section id="seccion1-home">
        <div id="divSeccion1">
          <h4>¿Quieres formar parte de e-Train?</h4>
          <div id="divBotonesHome">
            <button as={Link} to="/que-es-etrain" className="btnHome">
              Conocer más
            </button>
            <button className="btnHome">¡Apúntate!</button>
          </div>
        </div>
      </section>
      <section>
        <div id="numHome">
          <h4 id="num-etrains">
            <CountUp end={51} duration={4} />
          </h4>
          <p id="etrainers">e-Trainers</p>
        </div>
        <div id="videoHome">
          <video
            loop
            autoPlay
            muted
            id="video-centro-vertical"
            src={flexionesbyn}
            alt="sentadilla-byn"
          >
            <div id="numHome">
              <h4 id="num-etrains">
                <CountUp end={51} duration={4} />
              </h4>
              <p id="etrainers">e-Trainers</p>
            </div>
          </video>
        </div>
      </section>
      <section id="seccion3-home">
        <h4>¡Hazlo!</h4>
        <p>
          Haz un trabajo por el que sientas orgullo. Da lo mejor de ti.
          Diviértete haciéndolo. Sé valiente y empezarás a notar los resultados.
          Ama lo que haces.
        </p>
      </section>

      <section id="seccion4-home">
        <marquee width="100%" scrollamount="15">
          <h2>El bueno de Antoñito haciendo cosas buenas para la gente </h2>
        </marquee>
        <h4>Acerca de e-Train</h4>
        <p>
          El puto entrenamiento personal de Antoñito y ahora un lorem ipsum que
          te vas a cagar. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt, eligendi a? At recusandae magnam repudiandae iure
          tempora ab quasi id dolore. Neque enim animi quam cum sit facere
          laborum dolor!
        </p>
      </section>
      <section>
        <h4>eTrain Blog</h4>
        {allBlogs.length === 0 ? <h4>No hay blogs disponibles</h4> : null}
        {allBlogs.map((cadaBlog) => {
          return (
            <div>
              <img src={cadaBlog.photo} alt="fotoportada-blog" width={"10%"} />{" "}
              <Link to={`/blog/${cadaBlog._id}`}>
                <h4 className="tituloBlog">{cadaBlog.title}</h4>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
