import React, { useState, useEffect } from "react";
import { User, Mail, Send } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const form = e.target;
      const formData = new FormData(form);
      await form.submit();

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
    id="contact"
    className="text-center p-20 lg:mb-8 mb-2 px-[5%] sticky top-[90px] flex flex-col items-center justify-center"
    style={{ scrollMarginTop: window.innerWidth < 768 ? "-5px" : "-5px" }}
    >
  <h2
    data-aos="fade-up"
    data-aos-duration="600"
    className="text-4xl md:text-6xl mt-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white"
  >
    Contact Me
  </h2>
  <p
    data-aos="fade-up"
    data-aos-duration="800"
    className="text-gray-400 mb-0 mt-5 max-w-lg text-center leading-tight md:text-lg"
  >
    Want to chat? Send me an E-mail through this section and I'll respond whenever I can :D
  </p>

  <form
    action="https://formsubmit.co/naranabildaffai@gmail.com"
    method="POST"
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-black backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-4"
  >
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />

    <div className="relative">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        disabled={isSubmitting}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full p-4 bg-black rounded-xl border border-white placeholder-gray-500 text-white focus:outline-none transition duration-300 disabled:opacity-50"
        required
      />
    </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            data-aos="fade-up"
            data-aos-duration="1100"
            className="w-full p-4 bg-black rounded-xl border border-white placeholder-gray-500 text-white focus:outline-none focus:ring-2 transition duration-300 disabled:opacity-50"
            required
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            data-aos="fade-up"
            data-aos-duration="1200"
            className="w-full p-4 bg-black rounded-xl border border-white placeholder-gray-500 text-white focus:outline-none transition duration-300 resize-none h-32 disabled:opacity-50"
            required
          ></textarea>
        </div>


        <button
  type="submit"
  disabled={isSubmitting}
  data-aos="fade-up"
  data-aos-duration="1300"
  aria-label="Send Message"
  className="w-full text-black py-3 rounded-xl font-semibold duration-300 bg-white hover:bg-black hover:text-white hover:border hover:border-white active:scale-95 transition-transform ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <Send className="w-5 h-5" aria-hidden="true" />
  {isSubmitting ? "Sending..." : "Send Message"}
</button>

      </form>
    </div>
  );
};

export default ContactPage;