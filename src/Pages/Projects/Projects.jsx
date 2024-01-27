import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("./../../../public/projects.json").then((res) => {
      setProjects(res.data);
    });
  }, []);
  return (
    <div className="px-5 lg:p-8 z-10 overflow-hidden " >
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold gradient">
        My All Projects
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pb-20 lg:pb-14">
        {projects.map((item) => (
          <div key={item.id} className=" bg-[rgba(0,0,0,0.6)] shadow-xl" >
            <figure >
              <img src={item.image} alt={item.name} className="h-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title overflow-hidden">{item.name}</h2>

              <div className="flex items-center gap-3 overflow-hidden" data-aos="fade-left">
                <div className="badge badge-outline">
                  <a
                    href={item.client}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client Side Code Link
                  </a>
                </div>{" "}
                <FaArrowLeft className="animate-ping" />
              </div>
              <div className="card-actions justify-end overflow-hidden" data-aos="fade-right">
                <div className="flex items-center gap-3">
                  <FaArrowRight className="animate-ping" />
                  <div className="badge badge-outline">
                    <a
                      href={item.server}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server Side Code Link
                    </a>
                  </div>{" "}
                </div>
              </div>
              <div className="flex items-center gap-3 overflow-hidden" data-aos="fade-left">
                <div className="badge badge-outline">
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    Live Link of the Project
                  </a>
                </div>{" "}
                <FaArrowLeft className="animate-ping" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
