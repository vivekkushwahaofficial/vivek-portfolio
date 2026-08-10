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
    <article className="group min-w-0 border-b border-white/[0.08] py-7 transition-colors duration-300 first:pt-0 last:border-b-0 last:pb-0 sm:py-8">
      {/* =====================================================
          Title
          ===================================================== */}

      <h3 className="max-w-3xl break-words text-lg font-medium leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-blue-50 sm:text-xl lg:text-2xl">
        {title}
      </h3>

      {/* =====================================================
          Provider + Duration
          ===================================================== */}

      <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
        <span className="text-slate-400">{provider}</span>

        <span
          aria-hidden="true"
          className="mx-2 text-slate-700"
        >
          •
        </span>

        <span>{duration}</span>
      </p>

      {/* =====================================================
          Description
          ===================================================== */}

      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 sm:mt-4 sm:text-[15px] sm:leading-7">
        {description}
      </p>

      {/* =====================================================
          Certificate link
          ===================================================== */}

      {link && (
        <div className="mt-4 sm:mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} certificate`}
            className="group/link inline-flex min-h-10 items-center rounded-lg border border-blue-400/20 bg-blue-500/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-blue-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.10] hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:px-4 sm:py-2.5"
          >
            <span>View Certificate</span>

            <span
              aria-hidden="true"
              className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      )}
    </article>
  );
}

export default CertificationCard;