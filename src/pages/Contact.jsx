import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "f9267ea9-6bad-4927-8005-4dbc5bfa4bae"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      event.target.reset();
    } else {
      setResult("Error Sending Message");
    }
  };

  return (
    <section className="py-20 bg-[#081229] text-white py-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-6">
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-10">
          Interested in backend development opportunities or collaboration?
          Feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-12">

          <p>
            📧 Email:{" "}
            <a
              href="mailto:vivek39101@gmail.com"
              className="text-blue-400 hover:underline"
            >
              vivek39101@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Profile
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Vivekkushwahaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Vivekkushwahaofficial
            </a>
          </p>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 p-8 rounded-2xl space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3.5 rounded-lg bg-[#0b1736] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3.5 rounded-lg bg-[#0b1736] outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3.5 rounded-lg bg-[#0b1736] outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
          >
            Send Message
          </button>

          {/* Result Message */}
          <p className="text-sm text-gray-300">
            {result}
          </p>

        </form>
      </div>
    </section>
  );
}