import Footer from '../components/Footer';
import SectionSkills from '../components/SectionSkills';
import ParticlesBackground from '../components/ParticlesBackground';
import SectionHero from '../components/SectionHero';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <ParticlesBackground />
      <SectionHero />
      <SectionSkills />
      <Footer />
    </>
  );
}

export default Home;

