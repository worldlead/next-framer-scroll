import SmoothScroll from "../components/smooth-scroll";
import Navbar from "../components/navbar";
import PageTransition from "../components/page-transition";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import SocialPanel from "../components/social-panel";

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
