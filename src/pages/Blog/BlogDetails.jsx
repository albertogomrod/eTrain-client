import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  borrarEntradaService,
  detallesEntradaService,
} from "../../services/blog.services";
import { AuthContext } from "../../context/auth.context";

function BlogDetails() {
  const navigate = useNavigate();
  const params = useParams();

  const [blogDetails, setBlogDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await detallesEntradaService(params.blogId);
      setBlogDetails(response.data);
      setIsFetching(false);
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
    return <h4>Cargando...</h4>;
  }
if (isLoggedIn=== true){
  return (
    <div key={blogDetails._id}>
      <div>
        <img src={blogDetails.photo} alt="fotoportada-blog" width={"60%"} />
        <h2>{blogDetails.title}</h2>
        <h4>{blogDetails.subtitle}</h4>
        <p>{blogDetails.description}</p>
        <button>
          <Link to={`/editar-blog/${blogDetails._id}`}> Editar </Link>
        </button>
        <button
          onClick={() => {
            handleDeleteBlog(blogDetails._id);
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  );

} else{
  return(
    <div key={blogDetails._id}>
      <div>
        <img src={blogDetails.photo} alt="fotoportada-blog" width={"60%"} />
        <h2>{blogDetails.title}</h2>
        <h4>{blogDetails.subtitle}</h4>
        <p>{blogDetails.description}</p>
      </div>
    </div>
  )
}
  
}

export default BlogDetails;
