import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("./../../../public/projects.json").then((res) => {
      setProjects(res.data);
    });
  }, []);
  console.log(projects);
  return (
    <div className="p-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        {" "}
        <span className="gradient">Greetings and welcome</span> ! Explore my
        works and endeavors .
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-10 border text-center rounded-lg bg-[rgba(0,0,0,0.6)]">
              <h2 className="text-4xl font-bold">{projects.length}+</h2>
              <h3 className="gradient font-bold text-2xl underline">
                Total Projects
              </h3>
            </div>
            <div className="p-10 border text-center rounded-lg bg-[rgba(0,0,0,0.6)]">
              <h2 className="text-4xl font-bold">1+</h2>
              <h2 className="gradient font-bold text-2xl underline">Blogs</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-10 border text-center rounded-lg bg-[rgba(0,0,0,0.5)]">
              <h2 className="text-3xl font-bold">Project Name</h2>
              <h3 className="gradient font-bold text-2xl underline">
                Current Project
              </h3>
            </div>
            <div className="p-10 border text-center rounded-lg bg-[rgba(0,0,0,0.5)]">
              <h2 className="text-2xl lg:text-4xl font-bold">Resume</h2>
              <h2 className="gradient font-bold text-2xl underline">View</h2>
            </div>
          </div>
        </div>
        <div className="text-center p-10 border rounded-lg bg-[rgba(0,0,0,0.5)]">
          <h2 className="text-2xl lg:text-4xl font-bold">Featired Projects</h2>
          <Link to={"/projects"} className="gradient font-bold">
            Explore
          </Link>
          <img src="https://i.ibb.co/t87s4br/pexels-magda-ehlers-772177.jpg" className="h-4/6 w-full mt-6 rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
