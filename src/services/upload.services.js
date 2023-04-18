import service from "./config.services";

const uploadPhotoBlogService = (photo) => {
  return service.post("/upload/blog", photo);
};

export { uploadPhotoBlogService };