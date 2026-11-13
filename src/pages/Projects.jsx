import projects from "../components/projectsData";
import CTA from "../components/CTA";
import Reveal from "../components/Reveal";

const Projects = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container py-28 lg:py-36">
          <Reveal>
            <p className="font-heading font-medium uppercase text-sm tracking-widest text-center opacity-60">
              Selected Work
            </p>
            <h1 className="text-5xl lg:text-[6vw] font-heading font-bold leading-[1] tracking-tight text-center mt-3">
              Projects
            </h1>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-10 lg:mt-16">
            {projects.map(({ id, name, image, link }, i) => {
              const Tag = link ? "a" : "div";
              return (
                <Reveal key={id} delay={(i % 2) * 100}>
                  <Tag
                    {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="overflow-hidden flex flex-col"
                  >
                    <div className="group overflow-hidden rounded-2xl aspect-[16/10] bg-neutral-100">
                      <img
                        src={image}
                        alt={`${name} project preview`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4">
                      {name}
                    </span>
                  </Tag>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Projects;
