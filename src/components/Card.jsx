function Card({ title, description, tech, github, live }) {
  return (
    <div className="bg-gray-900 p-5 sm:p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition duration-300 border border-white/5 flex flex-col justify-between h-full">
      <div>
        {/* Live Badge */}
        {live && (
          <span className="inline-block mb-3 px-3 py-1 text-xs bg-green-600 text-white rounded-full font-medium">
            Live
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-400">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.split(",").map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gray-850 rounded-full text-gray-300 border border-white/5"
            >
              {item.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Links (Accessible touch targets) */}
      <div className="mt-6 flex flex-wrap gap-3 items-center text-sm">
        {/* GitHub Section */}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-400/20 hover:border-blue-400/40 rounded-lg text-xs font-semibold tracking-wide transition duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none cursor-pointer"
          >
            GitHub Repo →
          </a>
        ) : (
          <span className="text-gray-500 bg-gray-900/30 px-3 py-2.5 rounded-lg text-xs border border-white/5 cursor-default">
            🔒 Private Repository
          </span>
        )}

        {/* Live Demo */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-400/20 hover:border-green-400/40 rounded-lg text-xs font-semibold tracking-wide transition duration-200 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:outline-none cursor-pointer"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;