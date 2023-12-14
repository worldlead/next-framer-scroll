import Navbar from "../components/navbar";
import Features from "../components/features";
import PageTransition from "../components/page-transition";
import SmoothScroll from "../components/smooth-scroll";
import SocialPanel from "../components/social-panel";

export default function FeaturesPage() {
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
}
