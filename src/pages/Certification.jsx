import ScrollReveal from "../components/ScrollReveal";
import CertificationCard from "../components/CertificationCard";
import javaCert from "../assets/certificates/java_certification.pdf";
import fullStackCert from "../assets/certificates/fullstack_certification.pdf"; // ✅ add this file

function Certification() {
  return (
    <ScrollReveal>
      <section
        id="certifications"
        className="bg-gray-900 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Java Certificate */}
            <CertificationCard
              title="Java Foundation Certification"
              provider="Infosys Springboard"
              duration="Dec 2025"
              description="Completed Java Foundation Certification covering Core Java, OOP concepts, and backend development fundamentals."
              link={javaCert}
            />

            {/* Java Certificate */}
            <CertificationCard
              title="Programming in Java"
              provider="NPTEL Elite Certification"
              duration="Jan–Apr 2026 • 12 Week Course"
              description="Successfully completed NPTEL Programming in Java certification with 80% score. Covered Core Java, Object-Oriented Programming (OOP), exception handling, collections, and backend development fundamentals."
              link={javaCert}
            />

            {/* Full Stack Certificate */}
            <CertificationCard
              title="Building Full-Stack Apps with React and Spring"
              provider="LinkedIn Learning"
              duration="Feb 2026"
              description="Completed LinkedIn Learning certification focused on building end-to-end full-stack applications using React.js and Spring Framework."
              link={fullStackCert}
            />

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Certification;