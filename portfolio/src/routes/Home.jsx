import Aboutpage from '../components/Aboutpage';
import Intropage from '../components/Intropage';
import Projectcard from '../components/Projectcard';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Aboutpage />
      <br />
      <Intropage />
      <br />
      <Projectcard />
      <br />
      <Skills />
      <br />
      <Contact />
    </>
  );
}
