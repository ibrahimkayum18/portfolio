import { useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([])
    return (
        <div className="p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">My All Projects</h2>
        </div>
    );
};

export default Projects;