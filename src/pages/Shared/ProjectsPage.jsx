import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import SearchBar from '../../components/SearchBar';
import Projects from '../../components/Projects';
import CategoryFilterBar from '../../components/CategoryFilterBar';
import { LuFileStack } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { SlBookOpen } from "react-icons/sl";
import { GiStethoscope } from "react-icons/gi";

const ProjectsPage = () => {
  const location = useLocation();
  const exhibitionYear = location.state?.year;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // const { data: projectsFromApi, isLoading } = useGetProjectsQuery();

  // static مؤقتة
  const fallbackProjects = [
    {
      id: 1,
      name: "موقع للتواصل الاجتماعي",
      category: "تكنولوجي",
      team: "Green Panda",
      members: ["نصوح شاهين", "علي احمد"],
      year: 2024,
    },
    {
      id: 2,
      name: "منصة تعليمية",
      category: "تعليمي",
      team: "Green Panda",
      members: ["نصوح شاهين", "علي احمد"],
      year: 2024,
    },
    {
      id: 3,
      name: "نظام إدارة طلاب",
      category: "تعليمي",
      team: "Green Panda",
      members: ["نصوح شاهين", "علي احمد"],
      year: 2023,
    },
    {
      id: 4,
      name: "تطبيق طبي",
      category: "طبي",
      team: "Green Panda",
      members: ["نصوح شاهين", "علي احمد"],
      year: 2024,
    },
  ];

  // projects = projectsFromApi
  const projects = fallbackProjects;

  const filteredByYear = exhibitionYear
    ? projects.filter((p) => p.year === exhibitionYear)
    : projects;

  const filteredProjects = filteredByYear.filter((project) => {
    const matchCategory =
      selectedCategory === "all" || project.category === selectedCategory;

    const matchSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  const categories = [
    { id: "all", label: "الكل", icon: <LuFileStack /> },
    { id: "تكنولوجي", label: "تكنولوجي", icon: <GrTechnology /> },
    { id: "تعليمي", label: "تعليمي", icon: <SlBookOpen /> },
    { id: "طبي", label: "طبي", icon: <GiStethoscope /> },
  ];

  return (
    <div className='container'>
      <h2 className="text-xl font-bold mt-6 mb-4 text-main-color">
        {exhibitionYear ? `مشاريع معرض ${exhibitionYear}` : "جميع المشاريع"}
      </h2>

      <div className="mt-4">
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
};

export default ProjectsPage;
