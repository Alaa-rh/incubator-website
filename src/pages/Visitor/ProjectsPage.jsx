import React from 'react'
import SearchBar from '../../components/SearchBar';
import Projects from '../../components/Projects';
import CategoryFilterBar from '../../components/CategoryFilterBar';
import { useState } from 'react';
import { LuFileStack } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { SlBookOpen } from "react-icons/sl";
import { GiStethoscope } from "react-icons/gi";
const ProjectsPage = () => {
     const [selectedCategory, setSelectedCategory] = useState("all")
     const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "الكل", icon: <LuFileStack /> },
    { id: "تكنولوجي", label: "تكنولوجي", icon: <GrTechnology /> },
    { id: "تعليمي", label: "تعليمي", icon: <SlBookOpen /> },
    { id: "طبي", label: "طبي", icon: <GiStethoscope /> },
  ]
  const projects = [
  {
    id: 1,
    name: "موقع للتواصل الاجتماعي",
    category: "تكنولوجي",
    team: "Green Panda",
    members: ["نصوح شاهين", "علي احمد"],
  },
  {
    id: 2,
    name: "موقع للتواصل الاجتماعي",
    category: "تعليمي",
    team: "Green Panda",
    members: ["نصوح شاهين", "علي احمد"],
  },
  {
    id: 3,
    name: "موقع للتواصل الاجتماعي",
    category: "تعليمي",
    team: "Green Panda",
    members: ["نصوح شاهين", "علي احمد"],
  },
  {
    id: 4,
    name: "موقع للتواصل الاجتماعي",
    category: "طبي",
    team: "Green Panda",
    members: ["نصوح شاهين", "علي احمد"],
  },
];

    const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === "all" || project.category === selectedCategory

    const matchSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase())

    return matchCategory && matchSearch
  })


  return (
    <div className='container'>
    <div className=" mt-4">
      <CategoryFilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </div>
        <SearchBar onSearch={setSearchQuery} />
       <Projects projects={filteredProjects} />
      </div>
  );
}

export default ProjectsPage