import React, { useState } from "react";
import emailjs from "emailjs-com";

function Email() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46jamv7",
        "template_fuqcq6w",
        e.target,
        "ZuluNHpnCwFBdv0lM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again.");
        }
      );

    setFormData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="lg:min-h-screen min-w-full bg-light min-h-44 font-poppins py-20 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium text-slate-700 mb-8">
        Let's Get In Touch!
      </h1>
      <h2 className="w-2/3 text-slate-700 text-center mb-4">
        Ready to bring your next project to life? Let's connect! Send me a
        message and I'll get back to you promptly. Excited to collaborate with
        you!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-2/3 bg-white p-8 rounded-lg shadow-2xl mt-5"
      >
        <div className="mb-4 lg:flex flex-row gap-4 ">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none h-44 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 nav-bg text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 button-hover-effect"
        >
          Send ✉
        </button>
      </form>
    </div>
  );
}

export default Email;
