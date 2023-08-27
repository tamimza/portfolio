import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setFormSubmitted(true);
    }
  };

  return (
    <div id="Contact" className="flex flex-col items-center mt-16 mb-16">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      {formSubmitted ? (
        <h2 className="text-2xl font-bold mb-8">
          Thanks for your message! I'll get back to you as soon as possible.
        </h2>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"
              id="message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Or Reach Me At</h3>
        <p className="mb-2">Email: kaytotamim@gmail.com</p>
        <p className="mb-2">Phone: 92528234</p>
        <div className="flex justify-center mt-4">
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-600"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-black"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
