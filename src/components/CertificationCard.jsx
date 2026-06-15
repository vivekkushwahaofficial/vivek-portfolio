function CertificationCard({
  title,
  provider,
  duration,
  description,
  link
}) {
  return (
    <div className="bg-gray-800 p-5 sm:p-6 rounded-xl hover:shadow-xl transition border border-white/5 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-blue-400">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {provider} • {duration}
        </p>

        <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Certificate Link (Accessible touch targets) */}
      {link && (
        <div className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-400/20 hover:border-blue-400/40 rounded-lg text-xs font-semibold tracking-wide transition duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none cursor-pointer"
          >
            View Certificate →
          </a>
        </div>
      )}
    </div>
  );
}

export default CertificationCard;
