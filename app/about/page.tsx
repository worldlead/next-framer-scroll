import SmoothScroll from "../components/smooth-scroll";
import Navbar from "../components/navbar";
import PageTransition from "../components/page-transition";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function About() {
  return (
    <>
    <div>
    <div className="z-[9999999] bg-white mb-[800px] md:mb-[600px]  shadow-md"> 
      <Navbar />
      <PageTransition />
      <SmoothScroll />
      </div>
      <div className="fixed left-0 bottom-0  h-[800px] md:h-[600px] bg-black w-full -z-[99] px-[1rem] md:px-[10rem] py-36 md:py-48  text-white leading-[1.5px]">
       
       <div className="text-4xl mt-10">*</div>
       <div className=" z-10 flex-col-reverse flex md:flex-row justify-between   ">
         <div className="w-full md:w-[40%] flex flex-col">
         <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in similique voluptates? Officia quos voluptate nisi enim, eligendi natus.</p>
         <div className="text-white flex w-full md:w-[50%] justify-around md:justify-between items-center my-10">
           <Twitter strokeWidth={1.5} />
           <Youtube strokeWidth={1.5} />
           <Facebook strokeWidth={1.5}/>
           <Linkedin strokeWidth={1.5} />
           <Instagram strokeWidth={1.5}/>
           </div>
           <div className="text-[12px]">&copy;2023 lorem ipsum | All right reserved</div>
         </div>
       
       <div className="w-full md:w-[40%] mb-10 md:mb-0 leading-3">
      <h1 className="text-4xl md:text-5xl hover:blur-[1px] hover:cursor-pointer">About Us</h1>
      <h1 className="text-4xl md:text-5xl hover:blur-[1px] hover:cursor-pointer">Careers</h1>
       </div>
       </div>
      
       </div>
       </div>
         </>

  );
}
