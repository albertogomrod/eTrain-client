import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { listaEntradasBlogService } from "../services/blog.services";
import { Link } from "react-router-dom";

import sentadillabyn from "../assets/sentadillabyn.jpg";
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
    <div>
      <section id="seccion1-home">
        <div>
          <h4>¿Quieres formar parte de e-Train?</h4>
          <button className="button-s1">Conocer más</button>
          <button className="button-s1">¡Apúntate!</button>
        </div>
      </section>
      <section>
        <div>
          <h4 id="num-etrains">
            <CountUp end={51} duration={4} />
          </h4>
          <p>e-Trainers</p>
        </div>
        <div>
          <h4>El bueno de Antoñito haciendo cosas buenas para la gente </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quo asperiores accusantium repudiandae porro natus modi, ab ut
            facere ad at nam soluta itaque quibusdam tempora ipsa atque? Esse,
            dicta. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
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
      <div>
        <img
          className="img-centro-vertical"
          src={sentadillabyn}
          alt="sentadilla-byn"
        />
      </div>
      <section id="seccion4-home">
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
              <img src={cadaBlog.photo} alt="fotoportada-blog" width={"60%"} />{" "}
              <Link to={`/blog/${cadaBlog._id}`}>
                <h4>{cadaBlog.title}</h4>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
