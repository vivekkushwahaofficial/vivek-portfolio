interface CertificationCardProps {
  title: string;
  provider: string;
  duration: string;
  description: string;
  link?: string;
}

function CertificationCard({
  title,
  provider,
  duration,
  description,
  link,
}: CertificationCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Provider and Duration */}
      <p className="mt-1 text-sm text-gray-400">
        {provider} • {duration}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
        {description}
      </p>

      {/* Certificate Link */}
      {link && (
        <div className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-blue-400 transition duration-200 hover:border-blue-400/40 hover:bg-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            View Certificate →
          </a>
        </div>
      )}
    </article>
  );
}

export default CertificationCard;