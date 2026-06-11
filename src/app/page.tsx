import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectSection from "@/components/project-section";
import ContactSection from "@/components/contact-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer-section";
import SkillSection from "@/components/skill-section";

export default function Home() {
  return (
    <div>
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
