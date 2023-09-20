import { Navigation } from "../components/nav";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import SmoothScroll from "../components/smooth-scroll";

export default function About() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <div className="about ">
        <div className="about-page flex flex-col gap-16 mx-auto max-w-screen-xl p-24 md:p-20 relative">
          <div className="banner">
            <h1 className="text-7xl font-medium tracking-tighter leading-11 text-center">
              Fylo{" "}
              <span className="text-gray-400">
                allows the brightest minds to&nbsp;scale their time, infinitely.
              </span>
            </h1>
            <div className="relative overflow-hidden max-h-[340px] min-h-[auto] h-[564px] md:h-[846px] mt-20 mb-0 rounded-3xl">
              <Image
                src="/assets/about-banner.avif"
                alt="Description"
                width="100"
                height="846"
                className="ukiyo-header object-cover max-h-[340px] md:h-auto mt-[10rem] mb-0 w-full transform -translate-y-[148.431px]"
              />
            </div>
          </div>
          <div className="about-grid about-grid grid grid-cols-4 gap-6 mt-40">
            <div className="sticky">
              <p className="toc selected text-gray-400 cursor-pointer filter blur-[0.5px] pb-8 transition-color duration-200 ease-in-out filter duration-200 ease-in-out">
                An Introduction
              </p>
              <p className="toc text-gray-400 cursor-pointer filter blur-[0.5px] pb-8 transition-color duration-200 ease-in-out filter duration-200 ease-in-out">
                The Product
              </p>
              <p className="toc text-gray-400 cursor-pointer filter blur-[0.5px] pb-8 transition-color duration-200 ease-in-out filter duration-200 ease-in-out">
                Our Vision
              </p>
            </div>

            <div className="content flex flex-col gap-4 col-span-2">
              <div className="group flex flex-col gap-4">
                <h1
                  className="text-3xl text-gray-700 font-medium leading-137 tracking-wide"
                  id="item0"
                >
                  An Introduction
                </h1>
                <hr className="my-4" />
                <div>
                  <p className="text-sm leading-6">
                    In the heart of ancient Greece, the Oracle of Delphi stood
                    revered, a beacon drawing seekers from distant lands in
                    their quest for guidance and foresight.
                  </p>
                </div>
                <div>
                  <Image
                    src="/assets/1.avif"
                    alt="Image"
                    className="rounded-lg my-4"
                    width="500"
                    height="300"
                  />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    But while many journeyed to hear the Oracle's cryptic
                    prophecies, Greek elites sought a different, more direct
                    wisdom. They understood the power of personalized
                    mentorship, investing fortunes to secure the brightest mind
                    to directly mold their heirs.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-6">
                    Among these relationships, none shone brighter than
                    Aristotle tutoring young Alexander the Great. For them,
                    wisdom wasn't just in collective prophecies, but in the
                    intimate, tailored guidance that only the elite could
                    afford.
                  </p>
                </div>
                <div>
                  <Image
                    src="/assets/2.avif"
                    alt="Image"
                    className="rounded-lg my-4"
                    width="500"
                    height="300"
                  />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    As shown in Bloom’s 2 sigma problem, 1 on 1 mastery learning
                    improves one’s learning pace by two standard deviations, and
                    up until now, it has been a luxury available only to a
                    select few.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-6">
                    Tim Ferriss, in Tools of Titans, presents the paradigm of
                    seeking guidance from the seasoned to avoid pitfalls. Yet,
                    accessibility remains a issue. While many harbor dreams and
                    aspirations, few have the luxury of engaging 1-1 with those
                    who have the insights they need to level up.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-6">
                    They're trapped in an ocean of overwhelming digital content,
                    yearning for a compass to navigate them towards growth and
                    clarity. This disconnect isn't just an information overload
                    issue; it's a matter of time.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-6">
                    Titans of our age—be they entrepreneurs, celebrities, or
                    thought leaders—are bottlenecked by their most valuable
                    asset - time. Their wisdom, though invaluable, is restricted
                    to those with deep pockets or privileged networks.
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-6">
                    The pertinent question then becomes: What if these titans
                    weren't bound by time?
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-6">
                    There are products that save money. There are products that
                    make money. There are many products that save time, but
                    there are few products that create time.
                  </p>
                </div>{" "}
                <br /> <br />
              </div>

              <div className="mb-24 group">
                <h1 className="text-3xl text-gray-700 font-medium leading-137 tracking-wide">
                  The Product
                </h1>
                <hr className="my-4" />
                <div>
                  <p className="text-sm leading-6">
                    In the heart of ancient Greece, the Oracle of Delphi stood
                    revered, a beacon drawing seekers from distant lands in
                    their quest for guidance and foresight.
                  </p>
                  <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    Delphi works by leveraging publicly available and
                    open-source AI models to capture how someone thinks and
                    reasons, and their knowledge on the topics they know best.
                  </p>
                  <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    To get started, simply upload information from any source
                    (podcasts, YouTube, text, docs, Notion - you name it), and
                    our cloning architecture will meticulously analyze and
                    extract information such as principles and thought patterns
                    to better understand how you think, so your clone can reason
                    on new situations, rather than just regurgitate old
                    anecdotes, offering a dynamic, one-of-a-kind experience for
                    your audience.
                  </p>
                  <br />
                </div>
                <div>
                  <Image
                    src="/assets/3.avif"
                    alt="Image"
                    className="rounded-lg my-4"
                    width="500"
                    height="300"
                  />
                </div>
                <br />

                <div>
                  <p className="text-sm leading-6">
                    With Delphi, your audience isn't just passively consuming
                    content; they're engaging in personalized dialogues, akin to
                    Aristotle's and Alexander's interactions.
                  </p>
                  <br />
                </div>

                <div>
                  <p className="text-sm leading-6">
                    Integration with popular platforms ensures your clone
                    remains omnipresent, constantly engaging, inspiring, and
                    educating. And with robust analytics, this interaction is
                    continually refined, adapting to the ever-evolving needs of
                    your audience.
                  </p>
                  <br />
                </div>

                <div>
                  <p className="text-sm leading-6">
                    From providing conversation starters to monetizing
                    interactions and serving as an inbound channel for other
                    offerings, Delphi ensures a holistic, immersive experience.
                  </p>
                  <br />
                </div>
              </div>

              <div className="mb-24 group">
                <h1 className="text-3xl text-gray-700 font-medium leading-137 tracking-wide">
                  Our Vision
                </h1>
                <hr className="my-4" />
                <div>
                  <p className="text-sm leading-6">
                    Delphi was built with a simple idea: help the movers and
                    shakers of our world — be it the YouTube creator, startup
                    CEO, or influential thinker — touch more lives.
                  </p>
                  <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    These folks have game-changing insights but there’s only so
                    much of them to go around. Delphi’s here to multiply their
                    impact. Think of it as giving them a megaphone to reach
                    every corner of a room, ensuring no comment goes unnoticed
                    and no fan feels left out.
                  </p>
                  <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    While our primary focus revolves around empowering creators,
                    professors, CEOs, politicians, and more, the ripple effects
                    benefit everyone. As consumers gain unprecedented access to
                    tailored expertise, leaders gain deeper insights, broader
                    reach, and lasting legacies. Delphi isn't just a product;
                    it's a revolution in how we perceive, disseminate, and
                    consume wisdom.
                  </p>
                  <br />
                </div>
                <div>
                  <Image
                    src="/assets/4.avif"
                    alt="Image"
                    className="rounded-lg my-4"
                    width="500"
                    height="300"
                  />
                </div>{" "}
                <br />
                <div>
                  <p className="text-sm leading-6">
                    As more and more people create digital clones, Delphi can
                    become the the modern-day GPS for life's journey—a tool
                    where you input your past experiences and future
                    aspirations, and it presents you with a path illuminated by
                    mentors who've treaded similar roads.
                  </p>
                  <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    In charting this journey, Delphi achieves two feats.
                    Primarily, it democratizes mentorship, breaking down the
                    barriers of time and access. Secondly, it inadvertently
                    births digital immortality.
                  </p>
                  <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    Your Delphi clone doesn't merely represent you; it ensures
                    your wisdom transcends time, impacting generations to come.
                  </p>
                  <br />
                </div>
              </div>
              <div className="footer flex flex-col gap-4 col-span-2 mt-30">
                <p className="text-sm leading-6">
                  Explore our{" "}
                  <a href="/careers" className="button underline">
                    Open Roles
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
