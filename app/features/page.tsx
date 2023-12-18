import Navbar from "../components/Navbar";
import Features from "../components/Features";
import PageTransition from "../components/PageTransition";
import SmoothScroll from "../components/SmoothScroll";
import SocialPanel from "../components/SocialPanel";

const FeaturesPage = ()=> {
  return (
    <>
      <div className="z-[99999] bg-white mb-[800px] md:mb-[600px]">
        <PageTransition />
        <Navbar />
        <Features />
      </div>
      <SocialPanel />
    </>
  );
};

export default FeaturesPage;
