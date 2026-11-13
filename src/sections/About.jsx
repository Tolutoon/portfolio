import Reveal from "../components/Reveal";

const About = () => {
  return (
    <section className="bg-white rounded-tl-[2.5rem] rounded-tr-[2.5rem] lg:rounded-tl-[60px] lg:rounded-tr-[60px] relative z-10 -mt-16">
      <div className="main-container py-20 lg:py-28 min-h-[70vh] flex justify-center items-center">
        <Reveal>
          <p className="font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25] max-w-6xl">
            My approach combines clean design, smooth interactions, and
            thoughtful details to ensure every project feels both visually
            striking and highly functional. Whether it&rsquo;s designing a
            portfolio, building a business website, or shaping a brand&rsquo;s
            online presence, I focus on creating work that not only looks good
            but also connects with people in a meaningful way.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
