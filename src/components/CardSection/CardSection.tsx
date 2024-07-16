import React, { useState, useEffect } from "react";
import { Card } from "./Card/Card.tsx";
import { styled } from "styled-components";
import { getDataApi, deleteDataApi } from "../../API/API.tsx";

interface Category {
  id: number;
  title: string;
  color: string;
}

interface Video {
  id: number;
  img: string;
  title: string;
  video: string;
  category: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const Tag = styled.div`
  max-width: 420px;
  width: 50%;
  background-color: ${(props) => props.color};
  color: var(--white);
  height: 70px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;

  .videos{
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
`;



export const CardSection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getDataApi(
          "http://localhost:3000/categories"
        );
        setCategories(categoriesData);

        const videosData = await getDataApi("http://localhost:3000/videos");
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDlete = async (id) => {
    try {
      await deleteDataApi("http://localhost:3000/videos", id);
      alert("Video eliminado correctamente");
      // Actualizar la lista de videos en el estado si es necesario
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error al eliminar el video:", error);
      alert("Error al eliminar el video");
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
        console.error("Error al eliminar el video:", error);
        alert("Error al eliminar el video");
    }
  };


  return (
    <Container>
      {categories.map((category) => (
        <ContainerCards key={category.id}>
          <Tag color={category.color}>{category.title}</Tag>
          <div className="videos">
            {videos
              .filter((video) => video.category === category.title)
              .map((filteredVideo) => (
                <Card
                  key={filteredVideo.id}
                  id={filteredVideo.id}
                  img={filteredVideo.img}
                  title={filteredVideo.title}
                  video={filteredVideo.video}
                  color={category.color}
                  onDelete={() => handleDelete(filteredVideo.id)}
                />
              ))}
          </div>
        </ContainerCards>
      ))}
    </Container>
  );
};
