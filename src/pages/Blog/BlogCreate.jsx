import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearEntradaService } from "../../services/blog.services";
import { uploadPhotoBlogService } from "../../services/upload.services";

function BlogCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const [isUploading, setIsUploading] = useState(false)

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSubtitleChange = (e) => setSubtitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleFileUpload = async (e)=>{
    if (!e.target.files[0]){
      return
    }
    setIsUploading (true)

    const uploadData = new FormData()
    uploadData.append("photo", e.target.files[0])

    try {
      const response = await uploadPhotoBlogService(uploadData)
      setPhoto(response.data.photo)

      setIsUploading(false)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const newBlog= {
            title,
            subtitle,
            description,
            photo,
        };
      await crearEntradaService (newBlog);
      navigate("/blog")
    } catch (error) {
        console.log(error)
        navigate("/error")
    }
  };

  return (
    <div>
      <h3>Nueva entrada de blog</h3>
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
          onChange={handleFileUpload}
          disabled={isUploading}

        />
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default BlogCreate;
