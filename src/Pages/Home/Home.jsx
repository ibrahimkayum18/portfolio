import { useEffect, useState, useRef } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("https://task-manager-server-xi-pied.vercel.app/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" data-aos="fade-left">
        {" "}
        <span className="gradient" >Greetings and welcome</span> ! Explore my
        works and endeavors .
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 pb-14">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-10 border text-center rounded-lg bg-[rgba(0,0,0,0.6)]">
              <h2 className="text-4xl font-bold" data-aos="fade-up">{projects.length}+</h2>
              <h3 className="gradient font-bold text-2xl underline" data-aos="fade-up">
                Total Projects
              </h3>
            </div>
            <div className="p-10 border text-center rounded-lg bg-[rgba(0,0,0,0.6)]">
              <h2 className="text-4xl font-bold" data-aos="fade-up">1+</h2>
              <h2 className="gradient font-bold text-2xl underline" data-aos="fade-up">Blogs</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="py-14 border text-center rounded-lg bg-[rgba(0,0,0,0.5)]">
              <h2 className="text-3xl font-bold" data-aos="fade-up">House Hunter</h2>
              <h3 className="gradient font-bold text-2xl underline pt-3" data-aos="fade-up">
                Current Project
              </h3>
            </div>
            <div className="py-16 border text-center rounded-lg bg-[rgba(0,0,0,0.5)]">
              <h2 className="text-2xl lg:text-4xl font-bold" data-aos="fade-up">Resume</h2>
              <div className="flex items-center gradient font-bold text-2xl pt-3 justify-center" data-aos="fade-up">
                <button>
                  <a
                    className="border px-5 rounded-full"
                    href="https://drive.google.com/file/d/10wy3BWhXcWtY3dGH_nXR67JahxBNi35b/view?usp=drive_link"
                  >
                    View{" "}
                  </a>
                </button>
                <MdArrowOutward />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-10 border rounded-lg bg-[rgba(0,0,0,0.5)]">
          <h2 className="text-2xl lg:text-4xl font-bold mb-3">Featired Projects</h2>
          <Link to={"/projects"} className="gradient font-bold text-2xl border px-5 rounded-full">
            Explore
          </Link>
          <div className="h-full w-full mt-6 rounded-lg">
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map(item => <SwiperSlide key={item.id}>
          <img src={item.image} className="h-full" alt="" />
        </SwiperSlide>)}
      </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
