import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detallesEntradaService } from "../../services/blog.services";

function BlogDetails() {
  const navigate = useNavigate();
  const params = useParams();

  const [blogDetails, setBlogDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

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

  if (isFetching === true) {
    return <h4>Cargando...</h4>;
  }

  return (
    <div key={blogDetails._id}>
      <div>
        <img src={blogDetails.photo} alt="fotoportada-blog" width={"60%"} />
        <h2>{blogDetails.title}</h2>
        <h4>{blogDetails.subtitle}</h4>
        <p>{blogDetails.description}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
