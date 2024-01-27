import { NavLink, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./Main.css";
import Lottie from "lottie-react";
import homeIcon from './../homeIcon.json';
import project from './../project.json';
import about from './../aboutIcon.json';
import contact from './../contactIcon.json';

const Main = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            <Lottie animationData={homeIcon} className="w-7 "/>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            <Lottie animationData={project} className="w-7 "/>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            <Lottie animationData={about} className="w-7 "/>
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            <Lottie animationData={contact} className="w-7 "/>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      <div className="drawer lg:drawer-open lg:w-80 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="flex justify-between items-center bg-[#0C0C0B] text-white shadow-2xl w-full lg:hidden p-4">
            <h2 className="text-2xl md:text-3xl font-bold z-20">
              S M Ibrahim Kayum
            </h2>
            <label htmlFor="my-drawer-2" className="text-4xl drawer-button ">
              <IoMdMenu />
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 md:w-80 min-h-full text-white fixed py-12 lg:pt-10 z-40 bg-gradient">
            <div className=" mx-auto pb-10">
              <h2 className="text-white text-3xl font-bold mb-8 text-center hidden lg:block gradient">S M Ibrahim Kayum</h2>
              <img
                className="rounded-full w-40 h-40 mx-auto mt-10 lg:mt-0"
                src="https://i.ibb.co/9w7HLF9/1702063616077-removebg-preview-1.png"
                alt=""
              />
            </div>
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="w-full flex-1 bg-gradient">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
