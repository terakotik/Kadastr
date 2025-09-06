import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import ProgressTrackerSection from '@/components/progress-tracker-section';
import PricesSection from '@/components/prices-section';
import AdvantagesSection from '@/components/advantages-section';
import CertificatesAndReviewsSection from '@/components/certificates-and-reviews-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import DocumentCheckSection from '@/components/document-check-section';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProgressTrackerSection />
        <PricesSection />
        <AdvantagesSection />
        <DocumentCheckSection />
        <CertificatesAndReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
