function Card({ title, description, tech, github, live }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition duration-300">

      {/* Live Badge */}
      {live && (
        <span className="inline-block mb-3 px-3 py-1 text-xs bg-green-600 text-white rounded-full">
          Live
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-blue-400">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.split(",").map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-gray-700 rounded-full text-gray-300"
          >
            {item.trim()}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex gap-6 items-center flex-wrap text-sm">

        {/* GitHub Section */}
        {github === "#" ? (
          <span className="text-gray-500">
            🔒 Source Code: Private (Internship Project)
          </span>
        ) : (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        )}

        {/* Live Demo */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}

      </div>
    </div>
  );
}

export default Card;