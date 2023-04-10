import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <div id="seccion-blog">
        <h2>eTrain Blog</h2>
        <h5>
          Aquí te cuento todo lo que sé. Podrás encontrar la solución a tus
          preguntas y dudas más comunes.
        </h5>
      </div>

      <div>
        <h4>Titulo ejemplo</h4>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto neque voluptatem eius deserunt doloribus.
        </h6>
        <Link to= "">Leer más</Link>
         <hr />
        <h4>Titulo ejemplo</h4>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto neque voluptatem eius deserunt doloribus.
        </h6>
        <Link to= "">Leer más</Link>
        <hr />
        <h4>Titulo ejemplo</h4>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          iusto neque voluptatem eius deserunt doloribus.
        </h6>
        <Link to= "">Leer más</Link>
      </div>
      <br />
    </div>
  );
}

export default Blog;
