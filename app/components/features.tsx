"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { allFeatures } from "contentlayer/generated";

// Define the createSections function
const createSections = (title: string, rawContent: string) => {
  const contentLines = rawContent?.split("\n");
  const sections: {
    title: string;
    content: {
      type: string;
      text?: string;
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    }[];
  }[] = [];

  let currentSection: {
    title: string;
    content: {
      type: string;
      text?: string;
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    }[];
  } = {
    title: title,
    content: [],
  };

  for (let i = 0; i < contentLines?.length; i++) {
    const line = contentLines[i].trim();

    if (line.startsWith("![")) {
      // If the line starts with an image tag
      const regex = /!\[(.*?)\]\((.*?)\)/;
      const matches = line.match(regex);

      if (matches && matches.length === 3) {
        // Extract the image source and alt text
        const alt = matches[1];
        const src = matches[2];

        // Push the image object to the current section's content
        currentSection.content.push({
          type: "image",
          src: src,
          alt: alt,
          width: 500, // Set your desired width
          height: 300, // Set your desired height
        });
      }
    } else {
      // Otherwise, treat it as text
      currentSection.content.push({
        type: "text",
        text: line,
      });
    }

    if (i === contentLines.length - 1) {
      sections.push(currentSection);
    }
  }

  // Log the final sections for debugging
  console.log("Sections:", sections);

  return sections;
}

const Features = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const numSections = 3;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array.from({ length: numSections }, () => null)
  );

  const allFeaturesData = {
    nonlinear: allFeatures.find((feature) => feature.slug === "nonlinear")!,
    questioning: allFeatures.find((feature) => feature.slug === "questioning")!,
    newcontent: allFeatures.find((feature) => feature.slug === "new_content")!,
  }
  

  // Create sections for each source with unique section titles
  const nonlinearSections = createSections(
    allFeaturesData.nonlinear.title,
    allFeaturesData.nonlinear.body.raw
  );
  const questioningSections = createSections(
    allFeaturesData.questioning.title,
    allFeaturesData.questioning.body.raw
  );
  const newContentSections = createSections(
    allFeaturesData.newcontent.title,
    allFeaturesData.newcontent.body.raw
  );

  // Combine sections into a single array
  const sections = [...nonlinearSections, ...questioningSections, ...newContentSections];

  const [activeSection, setActiveSection] = useState<number | null>(null);

  // Create an array of refs for navigation links
  const navigationRefs = useRef<(HTMLParagraphElement | null)[]>(
    Array.from({ length: numSections }, () => null)
  );

  // Function to handle intersection
  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
      if (entry.isIntersecting && index !== -1) {
        setActiveSection(index); // Update the active section index
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
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const targetY = elementTop + scrollTop + yOffset - 100;

            window.scrollTo({ top: targetY, behavior: "smooth" });

            // Update the active section index when the link is clicked
            setActiveSection(index);
          }
        }}
      >
        {section.title}
      </p>
    );
  });

  return (
    <>
      <div className="about shadow-[0_100px_100px_-15px_rgba(0,0,0,1)]">
        <div
          className={`about-page flex transition duration-1000 flex-col gap-16 mx-auto max-w-screen-xl px-4 sm:px-24 relative ${
            isPageLoaded ? "pt-[90px] sm:pt-[180px]" : "pt-[25px] sm:pt-[50px]"
          }`}
        >
          <div className="banner">
            <h1 className="text-3xl sm:text-7xl font-light tracking-tighter leading-11 text-center space-2 max-w-[90%] m-auto">
              Lorem Ipsum{" "}
              <span className="text-[#d3d3d3]">
                is simply dummy text buddy.
              </span>
            </h1>
            <div className="relative sm:overflow-hidden max-h-[340px] min-h-[auto] md:h-[846px] mt-10 sm:mt-20 mb-0 rounded-3xl">
              <Image
                src="/assets/2.avif"
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
                      {contentItem.type === "image" && contentItem?.src && (
                        <Image
                          src={contentItem?.src ?? ""}
                          alt={contentItem?.alt ?? ""}
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

export default Features;
