import ScrollReveal from "../components/ScrollReveal";
import CertificationCard from "../components/CertificationCard";
import javaCert from "../assets/certificates/java_certification.pdf";

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

            <CertificationCard
              title="Java Foundation Certification"
              provider="Infosys Springboard"
              duration="Dec 2025"
              description="Completed Java Foundation Certification covering Core Java, OOP concepts, and backend development fundamentals."
              link={javaCert}
            />

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Certification;