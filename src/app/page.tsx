import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillSection from "@/components/skill-section";
import ProjectSection from "@/components/project-section";
import ContactSection from "@/components/contact-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer-section";
import SkillMap from "@/components/skill-map";

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
        <SkillMap/>
        <Footer />
      </main>
    </div>
    // <div className="bg-zinc-50 text-zinc-900 dark:bg-[#0b0d11] dark:text-zinc-100">
  );
}
