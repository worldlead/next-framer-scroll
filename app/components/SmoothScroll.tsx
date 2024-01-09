"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


export default function SmoothScroll() {
  const numSections = 3;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array.from({ length: numSections }, () => null)
  );

  const [activeSection, setActiveSection] = useState<number | null>(null);

  // Create an array of refs for navigation links
  const navigationRefs = useRef<(HTMLParagraphElement | null)[]>(
    Array.from({ length: numSections }, () => null)
  );

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // const lenisConfig = {
  //   wrapper: document.documentElement,
  // };
  // const lenis = new Lenis(lenisConfig);
  // lenis

  // Function to handle intersection
  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
      if (entry.isIntersecting && index !== -1) {
        setActiveSection(index); // Update the active section index
        console.log(`Section ${index} is in view.`);
      }
    });
  };

  // Create an Intersection Observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "0px 0px -50% 0px", // Adjust the root margin to prevent immediate triggering
      threshold: 0.1, // When at least 10% of the section is in view
    });

    // Observe each section
    sectionRefs.current.forEach((sectionRef) => {
      if (sectionRef) {
        observer.observe(sectionRef);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      sectionRefs.current.forEach((sectionRef) => {
        if (sectionRef) {
          observer.unobserve(sectionRef);
        }
      });
    };
  }, []);

  // Content
  const sections = [
    {
      title: "An Introduction",
      content: [
        {
          type: "text",
          text: "In the heart of ancient Greece, the Oracle of Delphi stood revered, a beacon drawing seekers from distant lands in their quest for guidance and foresight.",
        },
        {
          type: "image",
          src: "/assets/1.avif",
          alt: "Image Description",
          width: 500,
          height: 300,
        },
        {
          type: "text",
          text: "But while many journeyed to hear the Oracle's cryptic prophecies, Greek elites sought a different, more direct wisdom. They understood the power of personalized mentorship, investing fortunes to secure the brightest mind to directly mold their heirs.",
        },
        {
          type: "text",
          text: "Among these relationships, none shone brighter than Aristotle tutoring young Alexander the Great. For them, wisdom wasn't just in collective prophecies, but in the intimate, tailored guidance that only the elite could afford.",
        },
        {
          type: "image",
          src: "/assets/2.avif",
          alt: "Image Description",
          width: 500,
          height: 300,
        },
        {
          type: "text",
          text: "As shown in Bloom’s 2 sigma problem, 1 on 1 mastery learning improves one’s learning pace by two standard deviations, and up until now, it has been a luxury available only to a select few.",
        },
        {
          type: "text",
          text: "Tim Ferriss, in Tools of Titans, presents the paradigm of seeking guidance from the seasoned to avoid pitfalls. Yet, accessibility remains an issue. While many harbor dreams and aspirations, few have the luxury of engaging 1-1 with those who have the insights they need to level up.",
        },
        {
          type: "text",
          text: "They're trapped in an ocean of overwhelming digital content, yearning for a compass to navigate them towards growth and clarity. This disconnect isn't just an information overload issue; it's a matter of time.",
        },
        {
          type: "text",
          text: "Titans of our age—be they entrepreneurs, celebrities, or thought leaders—are bottlenecked by their most valuable asset - time. Their wisdom, though invaluable, is restricted to those with deep pockets or privileged networks.",
        },
        {
          type: "text",
          text: "The pertinent question then becomes: What if these titans weren't bound by time?",
        },
        {
          type: "text",
          text: "There are products that save money. There are products that make money. There are many products that save time, but there are few products that create time.",
        },
      ],
    },
    {
      title: "The Product",
      content: [
        {
          type: "text",
          text: "In the heart of ancient Greece, the Oracle of Delphi stood revered, a beacon drawing seekers from distant lands in their quest for guidance and foresight.",
        },
        {
          type: "image",
          src: "/assets/3.avif",
          alt: "Image Description",
          width: 500,
          height: 300,
        },
        {
          type: "text",
          text: "Delphi works by leveraging publicly available and open-source AI models to capture how someone thinks and reasons, and their knowledge on the topics they know best.",
        },
        {
          type: "text",
          text: "To get started, simply upload information from any source (podcasts, YouTube, text, docs, Notion - you name it), and our cloning architecture will meticulously analyze and extract information such as principles and thought patterns to better understand how you think, so your clone can reason on new situations, rather than just regurgitate old anecdotes, offering a dynamic, one-of-a-kind experience for your audience.",
        },
        {
          type: "image",
          src: "/assets/4.avif",
          alt: "Image Description",
          width: 500,
          height: 300,
        },
        {
          type: "text",
          text: "With Delphi, your audience isn't just passively consuming content; they're engaging in personalized dialogues, akin to Aristotle's and Alexander's interactions.",
        },
        {
          type: "text",
          text: "Integration with popular platforms ensures your clone remains omnipresent, constantly engaging, inspiring, and educating. And with robust analytics, this interaction is continually refined, adapting to the ever-evolving needs of your audience.",
        },
        {
          type: "text",
          text: "From providing conversation starters to monetizing interactions and serving as an inbound channel for other offerings, Delphi ensures a holistic, immersive experience.",
        },
      ],
    },
    {
      title: "Our Vision",
      content: [
        {
          type: "text",
          text: "Delphi was built with a simple idea: help the movers and shakers of our world — be it the YouTube creator, startup CEO, or influential thinker — touch more lives.",
        },
        {
          type: "image",
          src: "/assets/1.avif",
          alt: "Image Description",
          width: 500,
          height: 300,
        },
        {
          type: "text",
          text: "These folks have game-changing insights but there’s only so much of them to go around. Delphi’s here to multiply their impact. Think of it as giving them a megaphone to reach every corner of a room, ensuring no comment goes unnoticed and no fan feels left out.",
        },
        {
          type: "text",
          text: "While our primary focus revolves around empowering creators, professors, CEOs, politicians, and more, the ripple effects benefit everyone. As consumers gain unprecedented access to tailored expertise, leaders gain deeper insights, broader reach, and lasting legacies. Delphi isn't just a product; it's a revolution in how we perceive, disseminate, and consume wisdom.",
        },
        {
          type: "image",
          src: "/assets/2.avif",
          alt: "Image Description",
          width: 500,
          height: 300,
        },
        {
          type: "text",
          text: "As more and more people create digital clones, Delphi can become the modern-day GPS for life's journey—a tool where you input your past experiences and future aspirations, and it presents you with a path illuminated by mentors who've treaded similar roads.",
        },
        {
          type: "text",
          text: "In charting this journey, Delphi achieves two feats. Primarily, it democratizes mentorship, breaking down the barriers of time and access. Secondly, it inadvertently births digital immortality.",
        },
        {
          type: "text",
          text: "Your Delphi clone doesn't merely represent you; it ensures your wisdom transcends time, impacting generations to come.",
        },
      ],
    },
  ];

  // Navigations
  const navigationLinks = sections.map((section, index) => {
    const isLinkSelected = activeSection === index; // Check if this link is selected

    return (
      <p
        key={index}
        ref={(el) => (navigationRefs.current[index] = el)}
        className={`toc text-[#d3d3d3] backdrop-blur-0.5 cursor-pointer pb-4 sm:pb-8 transition-color duration-200 ease-in-out ${
          isLinkSelected ? "selected" : "" // Add "selected" class if the link is selected
        }`}
        onClick={() => {
          // Scroll to the corresponding section when a navigation link is clicked
          if (sectionRefs.current[index]) {
            const yOffset = -100; // Adjust the yOffset as needed
            const elementTop =
              sectionRefs.current[index]!.getBoundingClientRect().top;
              if (typeof window !== "undefined") {
                // Client-side-only code
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const targetY = elementTop + scrollTop + yOffset - 100;
    
                window.scrollTo({ top: targetY, behavior: "smooth" });
    
                // Update the active section index when the link is clicked
                setActiveSection(index);
              }
          }
        }}
      >
        {section.title}
      </p>
    );
  });

  // interface LenisScrollEvent {
  //   animatedScroll: number;
  // }

  // lenis.on("scroll", (e: LenisScrollEvent) => {
  //   //console.log(e);
  // });

  // function raf(time: number) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  return (
    <>
      <div className="about shadow-[0_100px_100px_-15px_rgba(0,0,0,1)]">
        <div
          className={`about-page flex transition duration-1000 flex-col gap-16 mx-auto max-w-screen-xl px-4 sm:px-24 relative  ${
            isPageLoaded ? "pt-[90px] sm:pt-[180px]" : "pt-[25px] sm:pt-[50px]"
          }`}
        >
          <div className="banner">
            <h1 className="text-3xl sm:text-7xl font-light tracking-tighter leading-11 text-center space-2 max-w-[90%] m-auto">
              Fylo{" "}
              <span className="text-[#d3d3d3]">
                allows the brightest minds to scale their time, infinitely.
              </span>
            </h1>
            <div className="relative sm:overflow-hidden max-h-[340px] min-h-[auto] md:h-[846px] mt-10 sm:mt-20 mb-0 rounded-3xl">
              <Image
                src="/assets/about-banner.avif"
                alt="Description"
                width="100"
                height="846"
                className="ukiyo-header rounded-3xl object-cover mb-0 w-full transform"
              />
            </div>
          </div>
          <div className="about-grid about-grid grid sm:grid-cols-4 gap-6 sm:mt-40">
            <div className="sm:sticky top-32 h-fit">{navigationLinks}</div>

            <div className="content flex flex-col gap-4 col-span-2">
              {sections.map((section, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`group mb-[30px] content-with-gap`}
                >
                  <h1 className="text-3xl text-gray-700 font-medium leading-137 tracking-wide">
                    {section.title}
                  </h1>
                  <hr className="my-4" />
                  {section.content.map((contentItem, i) => (
                    <div key={i}>
                      {contentItem.type === "text" && (
                        <p className="text-md leading-6 my-8 text-black">
                          {contentItem.text}
                        </p>
                      )}
                      {contentItem.type === "image" && contentItem.src && (
                        <Image
                          src={contentItem.src}
                          alt={contentItem.alt}
                          className="rounded-lg my-4"
                          width={contentItem.width}
                          height={contentItem.height}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


