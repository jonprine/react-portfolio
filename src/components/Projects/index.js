import React, { useState } from "react";
import Modal from "../Modal";

const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Bone Apple Tea",
      category: 'portfolio',
      // image: require('../../assets/Portfolio/boneappletea.png'),
      deployedLink: "https://tranquil-ridge-22533.herokuapp.com/",
      repoLink: "https://github.com/KRAY306090/project-two",
      description:
        "An online recipe database that allows users to login and share their own receipes and comment on others.",
    },
    {
      name: "News By the Map",
      category: 'portfolio',
      // image: require('../../assets/newsbythemap.png'),
      deployedLink: "https://adamkeyser45.github.io/newsbythemap/",
      repoLink: "https://github.com/adamkeyser45/newsbythemap",
      description:
        "Users can search news specific to a google maps search of a city.",
    },
    {
      name: "Tech Blog",
      category: 'portfolio',
      // image: require('../../assets/techblog.png'),
      deployedLink: "https://serene-falls-33864.herokuapp.com/",
      repoLink: "https://github.com/jonprine/tech-blog",
      description:
        "Users can log in and post, comment on a tech message board.",
    },
    {
      name: "Weather Dashboard",
      category: 'portfolio',
      // image: require('../../assets/weather.png'),
      deployedLink: "https://jonprine.github.io/weather-dashboard/",
      repoLink: "https://github.com/jonprine/weather-dashboard",
      description:
        "User can search 5 day weather forecast for a particular city.",
    },
    {
      name: "Social Media App",
      category: 'portfolio',
      // image: require('../../assets/screenshot3.png'),
      deployedLink: "https://github.com/jonprine/social-media",
      repoLink: "https://github.com/jonprine/social-media",
      description: "Social network api using MongoDB and Mongoose.",
    },
    {
      name: "Coding Quiz",
      category: 'portfolio',
      // image: require('../../assets/codingquiz.png'),
      deployedLink: "https://jonprine.github.io/coding-quiz/",
      repoLink: "https://github.com/jonprine/coding-quiz",
      description: "A timed quiz to test your knowledge of JavaScript.",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
