import axios from "axios";
import { useEffect, useState } from "react";
import graduation from './../../graduation.json'
import Lottie from "lottie-react";

const About = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        axios.get('https://task-manager-server-xi-pied.vercel.app/skills')
        .then(res => {
            setSkills(res.data)
        })
    },[])
  return (
    <div className="" data-aos="fade-up">
      <section className=" pt-10 py-8 px-6">
        <div className="container mx-auto">
          <span className="text-4xl font-bold mb-1 gradient">WEB DEVELOPER</span>
          <h2 className=" text-xl font-semibold ">
            Dhaka, Bangladesh
          </h2>
          <div className="flex flex-col md:flex-row items-center lg:my-10">
            <div className="md:flex justify-center items-center gap-5 w-full mb-4 md:mb-0" >
              <img
                src="https://i.ibb.co/9w7HLF9/1702063616077-removebg-preview-1.png" // Replace with the actual path to your profile image
                alt="Profile"
                className=" h-80 w-80 mx-auto md:mx-0"
                data-aos="fade-left"
              />
              <div className="mt-5 md:mt-0" data-aos="fade-right">
                <span className="gradient text-3xl font-semibold ">Tools I Frequently Use</span>
                <div className="flex flex-wrap gap-3 lg:gap-6 mt-5">
                    {
                        skills.map((item, index) => <div key={index} className="text-center">
                            <img src={item.image} className="w-14 h-14 mx-auto gap-5" alt="" />
                            <h2 className="text-white p-3">{item.name}</h2>
                        </div>)
                    }
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="mt-7" >
            <p className="text-lg leading-relaxed">
              Hi there! I'm S M Ibrahim Kayum, a passionate web developer specializing
              in the MERN stack. With a strong foundation in MongoDB,
              Express.js, React, and Node.js, I bring creativity and technical
              expertise to every project I work on.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              My goal is to create seamless and efficient web applications that
              not only meet but exceed the expectations of clients. I love
              learning about new technologies and staying up-to-date with the
              latest trends in web development.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Let's collaborate and turn your ideas into reality! Feel free to
              explore my portfolio to see some of the exciting projects I've
              worked on.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[rgba(0,0,0,0.6)] px-5" data-aos="fade-left">
        <h2 className="gradient text-3xl font-bold pt-5">Educational Background</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div>
                <h2 className="text-xl lg:text-2xl font-bold">Bachelor of Science in Computer Science and Engineering</h2>
                <p className=" text-base-300">Green University of Bangladesh</p>
                <p>Expected Passing Year: 2024</p>
            </div>
            <Lottie animationData={graduation}/>
        </div>
      </section>
    </div>
  );
};


export default About;
