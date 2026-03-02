import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Name is required";

    // Proper email regex validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email required";

    if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (anti-spam)
    if (form.website) return;

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-6 text-white">
        
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-8">
          Interested in backend development opportunities or collaboration?
          Feel free to reach out.
        </p>

        {/* Direct Contact Info */}
        <div className="mb-10 space-y-2 text-gray-400">
          <p>
            📧 Email:
            <a
              href="mailto:vivek39101@gmail.com"
              className="text-blue-400 hover:underline ml-1"
            >
              vivek39101@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/in/vivek-kr-mehta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
            >
              View Profile
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/Vivekkushwahaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
            >
              Vivekkushwahaofficial
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-xl"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;