import Navbar from "@/components/clinic/Navbar";
import Hero from "@/components/clinic/Hero";
import TrustBar from "@/components/clinic/TrustBar";
import AboutClinic from "@/components/clinic/AboutClinic";
import Services from "@/components/clinic/Services";
import Team from "@/components/clinic/Team";
import SmileJourney from "@/components/clinic/SmileJourney";
import TreatmentQuiz from "@/components/clinic/TreatmentQuiz";
import Testimonials from "@/components/clinic/Testimonials";
import CTABanner from "@/components/clinic/CTABanner";
import FAQ from "@/components/clinic/FAQ";
import Contact from "@/components/clinic/Contact";
import Footer from "@/components/clinic/Footer";
import WhatsAppButton from "@/components/clinic/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutClinic />
      <Services />
      <Team />
      <SmileJourney />
      <TreatmentQuiz />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
