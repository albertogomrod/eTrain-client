import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { listaEntradasBlogService } from "../services/blog.services";
import { Link } from "react-router-dom";

import flexionesbyn from "../assets/pexels-ketut-subiyanto-4812848-3840x2160-25fps (1).mp4";
import CountUp from "react-countup";

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
      {/* <section id="seccion1-home">
        <div id="divSeccion1">
          <h4>¿Quieres formar parte de e-Train?</h4>
          <div id="divBotonesHome">
            <button as={Link} to="/que-es-etrain" className="btnHome">
              Conocer más
            </button>
            <button className="btnHome">¡Apúntate!</button>
          </div>
        </div>
      </section> */}
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
      <section id="secc3">
        <div id="tituloSecc3">
          <p> ETRAIN</p>
          <hr />
        </div>

        <div id="seccion3-home">
          <div>
            <h4>¡Hazlo!</h4>
            <p>
              Haz un trabajo por el que sientas orgullo. Da lo mejor de ti.
              Diviértete haciéndolo. Sé valiente y empezarás a notar los
              resultados. Ama lo que haces.
              <br />
              <br />
              Antoñito te hace un Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. ¡Y ni te enteras! Increible.
            </p>
            <hr />
            <p> ➯ Servicios</p>
            <hr />
          </div>
          <div>
            <p id="elenaSecc3">
              Y en esta parte
              <br />
              Llega la Elena
              <br />
              La de los clicks
              <br />
              Y te mete un diseño to guapo
              <br />Y me arregla toda la web del Antoñio
            </p>
          </div>
        </div>
      </section>
      <marquee width="100%" scrollamount="15">
        <h2>El bueno de Antoñito haciendo cosas buenas para la gente </h2>
      </marquee>
      <section id="seccion4-home">
        <p id="acercaDe">Acerca de e-Train</p>
        <div id="seccion4-beneficios">
          <div>
            <p className="numeroSecc4">01.</p>
            <hr />
            <p className="tituloSecc4">Especialización</p>
            <hr />
            <p>
              El puto entrenamiento personal de Antoñito y ahora un lorem ipsum
              que te vas a cagar. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt, eligendi a? At recusandae magnam
              repudiandae iure tempora ab quasi id dolore. Neque enim animi quam
              cum sit facere laborum dolor! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Doloremque iusto consequuntur
              voluptas explicabo alias laudantium dolor illum, nisi, eius
              eveniet atque similique fugit ullam. Molestiae corrupti doloribus
              quo unde vero. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae qui eveniet numquam quos totam perspiciatis nulla ad
              nobis aliquid est, sequi maiores tempore ab facere natus
              praesentium magni veniam suscipit?
            </p>
          </div>
          <div>
            <p className="numeroSecc4">02.</p>
            <hr />
            <p className="tituloSecc4">Readaptación</p>
            <hr />
            <p>
              El puto entrenamiento personal de Antoñito y ahora un lorem ipsum
              que te vas a cagar. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt, eligendi a? At recusandae magnam
              repudiandae iure tempora ab quasi id dolore. Neque enim animi quam
              cum sit facere laborum dolor! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Doloremque iusto consequuntur
              voluptas explicabo alias laudantium dolor illum, nisi, eius
              eveniet atque similique fugit ullam. Molestiae corrupti doloribus
              quo unde vero. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae qui eveniet numquam quos totam perspiciatis nulla ad
              nobis aliquid est, sequi maiores tempore ab facere natus
              praesentium magni veniam suscipit?
            </p>
          </div>
          <div>
            <p className="numeroSecc4">03.</p>
            <hr />
            <p className="tituloSecc4">Flexibilidad</p>
            <hr />
            <p>
              El puto entrenamiento personal de Antoñito y ahora un lorem ipsum
              que te vas a cagar. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt, eligendi a? At recusandae magnam
              repudiandae iure tempora ab quasi id dolore. Neque enim animi quam
              cum sit facere laborum dolor! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Doloremque iusto consequuntur
              voluptas explicabo alias laudantium dolor illum, nisi, eius
              eveniet atque similique fugit ullam. Molestiae corrupti doloribus
              quo unde vero. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae qui eveniet numquam quos totam perspiciatis nulla ad
              nobis aliquid est, sequi maiores tempore ab facere natus
              praesentium magni veniam suscipit?
            </p>
          </div>
        </div>
        <div id="saberSecc4">
          <hr />
          <Link to={`/que-es-etrain`}>➯ Saber más de eTrain</Link>
          <hr />
        </div>
      </section>
      <section id="seccionBlog">
        <p>Ultimas entradas</p>
        <hr />
        <h4>eTrain Blog</h4>
        <hr />
        {allBlogs.length === 0 ? <h4>No hay blogs disponibles</h4> : null}
        <div id="carrouselBlog">
          {allBlogs.map((cadaBlog) => {
            return (
              <div id="cadaBlog">
                <img
                  src={cadaBlog.photo}
                  alt="fotoportada-blog"
                  width={"10%"}
                />{" "}
                <hr />
                <p className="tituloBlog">{cadaBlog.title}</p>
                <Link to={`/blog/${cadaBlog._id}`}>➯ Ver más</Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
