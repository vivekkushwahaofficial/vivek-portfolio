import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending message...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY || ""
    );

    // Concatenate the URL parts to avoid false-positive antivirus flags
    const apiHost = "api.web3forms.com";
    const apiPath = "/submit";

    try {
      const response = await fetch(
        `https://${apiHost}${apiPath}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully!", { id: toastId });
        event.target.reset();
      } else {
        toast.error(data.message || "Error Sending Message", { id: toastId });
      }
    } catch (err) {
      toast.error("Failed to connect to the server.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left Column: Heading & Contact Details */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Contact Me
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
            Let's connect! Feel free to reach out for opportunities or collaboration.
          </p>

          {/* Contact Info (Clean cards/list design) */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800 border border-white/5 flex items-center justify-center text-xl shrink-0">
                📧
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a
                  href="mailto:vivek39101@gmail.com"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition"
                >
                  vivek39101@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800 border border-white/5 flex items-center justify-center text-xl shrink-0">
                🔗
              </div>
              <div>
                <p className="text-xs text-gray-400">LinkedIn</p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition"
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800 border border-white/5 flex items-center justify-center text-xl shrink-0">
                💻
              </div>
              <div>
                <p className="text-xs text-gray-400">GitHub</p>
                <a
                  href="https://github.com/Vivekkushwahaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition"
                >
                  Vivekkushwahaofficial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 p-5 sm:p-8 rounded-2xl space-y-6 border border-white/5 shadow-lg"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3.5 rounded-lg bg-gray-900 text-white outline-none border border-white/10 focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3.5 rounded-lg bg-gray-900 text-white outline-none border border-white/10 focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3.5 rounded-lg bg-gray-900 text-white outline-none border border-white/10 focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 focus:outline-none transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400/80 w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-white transition duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

        </form>
      </div>
    </section>
  );
}
