interface CardProps {
  title: string;
  description: string;
  tech: string;
  github?: string;
  live?: string;
}

function Card({
  title,
  description,
  tech,
  github,
  live,
}: CardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      {/* Live Badge */}
      {live && (
        <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400">
          Live
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-blue-400">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.split(",").map((item, index) => (
          <span
            key={`${item.trim()}-${index}`}
            className="rounded-full border border-white/5 bg-gray-800 px-3 py-1 text-xs text-gray-300"
          >
            {item.trim()}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        {/* GitHub */}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-blue-400 transition duration-200 hover:border-blue-400/40 hover:bg-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            GitHub Repo →
          </a>
        ) : (
          <span className="cursor-default rounded-lg border border-white/5 bg-gray-900/30 px-3 py-2.5 text-xs text-gray-500">
            🔒 Private Repository
          </span>
        )}

        {/* Live Demo */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-green-400/20 bg-green-500/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-green-400 transition duration-200 hover:border-green-400/40 hover:bg-green-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default Card;