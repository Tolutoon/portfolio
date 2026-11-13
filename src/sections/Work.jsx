import GradientButton from "../components/GradientButton";
import Reveal from "../components/Reveal";
import projects from "../components/projectsData";

const Work = () => {
  return (
    <section className="bg-white text-black py-24 lg:py-32">
      <div className="main-container pb-10 lg:pb-14 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
        <Reveal className="max-w-xl">
          <h2 className="font-heading font-medium uppercase text-2xl mb-3">Selected Work</h2>
          <p className="text-lg lg:text-xl">
            A showcase of my selected projects — designed to inspire, engage,
            and deliver real results.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <GradientButton text="Explore All" link="/projects" className="btn-light" />
        </Reveal>
      </div>

      <div className="main-container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {projects.map(({ id, name, image, link }, i) => {
          const Tag = link ? "a" : "div";
          return (
            <Reveal key={id} delay={(i % 3) * 100}>
              <Tag
                {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative rounded-2xl block overflow-hidden group aspect-[4/3] bg-neutral-100"
              >
                <img
                  src={image}
                  alt={`${name} project preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-base uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {name}
                </span>
              </Tag>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
