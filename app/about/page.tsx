import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import SocialPanel from "../components/SocialPanel";

const About = () => {
  return (
    <>
      <div>
        <div className="z-[9999999] bg-white mb-[800px] md:mb-[600px]  shadow-md">
          <Navbar />
          <PageTransition />
          <SmoothScroll />
        </div>
        <SocialPanel />
      </div>
    </>

  );
};

export default About;
