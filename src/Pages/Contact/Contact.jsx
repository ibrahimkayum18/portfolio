import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";


const Contact = () => {
  return (
      <div data-aos="fade-up">
        <section className=" py-10">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="w-full mx-auto p-5">
              <h2 className="text-3xl font-semibold pb-8 text-center">
                Contact Me
              </h2>

              <form className="max-w-lg mx-auto " >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="John Doe"
                    data-aos="fade-left"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md overflow-hidden"
                    placeholder="john@example.com"
                    data-aos="fade-right"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md overflow-hidden"
                    placeholder="Type your message here..."
                    data-aos="fade-left"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full sm:w-auto"
                  data-aos="fade-right"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="w-full  mt-4 sm:mt-0 overflow-hidden" data-aos="fade-left">
              
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>

                <div className="flex space-x-4">
                  {/* Replace the following with your actual social media links/icons */}
                  <a
                    href="https://www.facebook.com/smibrahim.kayum"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaFacebook className="text-4xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/s-m-ibrahim-kayum"
                    className="text-blue-700 hover:text-blue-800"
                  >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/ibrahim_kayum"
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaInstagram className="text-4xl" />
                  </a>
                  <a href="#" className="text-green-500 hover:text-green-600">
                    <FaWhatsapp className="text-4xl" />
                  </a>
                  {/* Add more social media links/icons as needed */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;
