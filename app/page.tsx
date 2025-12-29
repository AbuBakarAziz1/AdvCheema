import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import WhyChoose from './Components/WhyChoose';
import Process from './Components/Process';
import Approvals from './Components/Approvals';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SocialMediaIcons from './Components/SocialMediaIcons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <Approvals />
      <Contact />
      <Footer />
      <SocialMediaIcons />
    </div>
  );
}
