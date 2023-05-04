import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listaEntradasBlogService } from "../../services/blog.services";
import { AuthContext } from "../../context/auth.context";
import { borrarEntradaService } from "../../services/blog.services";

function Blog() {
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AuthContext);

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

  const handleDeleteBlog = async (id) => {
    try {
      await borrarEntradaService(id);
      navigate("/blog");
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <p>Cargando...</p>;
  }

  if (isLoggedIn === true) {
    return (
      <div>
        <h2>eTrain Blog</h2>
        <h3>
        Gestiona aquí las entradas del blog
        </h3>
        {allBlogs.length === 0 ? <h4>No hay blogs disponibles</h4> : null}
        {allBlogs.map((cadaBlog) => {
          return (
            <div>
              <h4>{cadaBlog.title}</h4>
              <h5>{cadaBlog.subtitle}</h5>
              <Link to={`/blog/${cadaBlog._id}`}> Leer mas</Link>
              
          <Link to={`/editar-blog/${cadaBlog._id}`}> Editar </Link>
        
        <button
          onClick={() => {
            handleDeleteBlog(cadaBlog._id);
          }}
        >
          Borrar
        </button>
            </div>
          );
        })}
      </div>
    );
  } else{
    return(
      <div>
        <h2>eTrain Blog</h2>
        <h3>
          Aquí te cuento todo lo que sé. Podrás encontrar la solución a tus
          preguntas y dudas más comunes.
        </h3>
        {allBlogs.length === 0 ? <h4>No hay blogs disponibles</h4> : null}
        {allBlogs.map((cadaBlog) => {
          return (
            <div>
              <h4>{cadaBlog.title}</h4>
              <h5>{cadaBlog.subtitle}</h5>
              <Link to={`/blog/${cadaBlog._id}`}> Leer mas</Link>
            </div>
          );
        })}
      </div>
    )
  }
}

export default Blog;
