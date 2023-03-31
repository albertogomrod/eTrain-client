import React from "react";
import sentadillabyn from "../assets/sentadillabyn.jpg";

function Home() {
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
          <h4 id="num-etrains">51</h4>
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
        <img  className= "img-centro-vertical" src={sentadillabyn} alt="sentadilla-byn" />
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
    </div>
  );
}

export default Home;
