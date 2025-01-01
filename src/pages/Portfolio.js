// src/pages/Portfolio.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white shadow-md rounded p-4">
            <img src={project.thumbnailUrl} alt={project.title} className="rounded" />
            <h2 className="text-lg font-semibold mt-4">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
