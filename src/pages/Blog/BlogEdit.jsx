import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  detallesEntradaService,
  editarEntradaService,
} from "../../services/blog.services";

function BlogEdit() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleSubtitleChange = (event) => setSubtitle(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await detallesEntradaService(params.blogId);
      const { title, subtitle, description, photo } = response.data;
      setTitle(title);
      setSubtitle(subtitle);
      setDescription(description);
      setPhoto(photo);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updateBlog = {
        title: title,
        subtitle: subtitle,
        description: description,
        photo: photo,
      };
      await editarEntradaService(params.blogId, updateBlog);
      navigate(`/blog/${params.blogId}`);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <h3>Editar entrada de blog</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />
        <br />
        <label htmlFor="subtitle">Subtítulo:</label>
        <input
          type="text"
          name="subtitle"
          onChange={handleSubtitleChange}
          value={subtitle}
        />
        <br />
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <br />
        <label htmlFor="photo">Foto:</label>
        <input
          type="file"
          name="photo"
          onChange={handlePhotoChange}
          value={photo}
        />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default BlogEdit;
