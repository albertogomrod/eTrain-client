import service from "./config.services.js";

const listaEntradasBlogService = () => {
  return service.get("/blog");
};

const detallesEntradaService = (blogId) => {
  return service.get(`/blog/${blogId}`);
};

const crearEntradaService = (newBlog) => {
  return service.post("/blog", newBlog);
};

const editarEntradaService = (blogId, updatedBlog) => {
  return service.patch(`/blog/edit/${blogId}`, updatedBlog);
};

const borrarEntradaService = (blogId) => {
    return service.patch(`/blog/delete/${blogId}`);
  };

export {
   listaEntradasBlogService,
   detallesEntradaService,
   crearEntradaService,
   editarEntradaService,
   borrarEntradaService
  };