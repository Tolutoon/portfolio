import Reveal from "../components/Reveal";

const services = [
  {
    n: "01",
    title: "Mobile App Development",
    body: "I build Flutter apps that feel clean, modern, and easy to use — thoughtfully designed with good typography, smooth animations, and layouts that make the whole experience feel effortless.",
    theme: "bg-black text-white",
  },
  {
    n: "02",
    title: "Illustration",
    body: "From custom visuals to expressive artwork, I create illustrations that elevate your brand and engage your users. Distinct styles, hand-crafted details, and thoughtful storytelling — all designed for clarity, personality, and impact.",
    theme: "bg-[#161616] text-white",
  },
];

const Services = () => {
  return (
    <section className="bg-white text-black">
      <div className="main-container pt-20 lg:pt-28 pb-10 lg:pb-14">
        <Reveal>
          <h2 className="font-heading font-medium uppercase text-2xl">Services in Detail</h2>
        </Reveal>
      </div>

      <div className="bg-black px-2 sm:px-4 pb-4">
        {services.map((s, i) => (
          <div
            key={s.n}
            className="sticky rounded-t-[2rem] lg:rounded-t-[3rem]"
            style={{ top: `calc(5.5rem + ${i * 2.5}rem)` }}
          >
            <div className={`${s.theme} rounded-t-[2rem] lg:rounded-t-[3rem] min-h-[72vh] flex items-center border-t border-white/10`}>
              <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center py-20 w-full">
                <Reveal className="flex gap-6 lg:gap-8 items-start">
                  <span className="opacity-50 text-lg lg:text-2xl font-heading tracking-wide block">{s.n}</span>
                  <h3 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold leading-[1.05] normal-case">
                    {s.title}
                  </h3>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-lg lg:text-xl leading-relaxed opacity-90">{s.body}</p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
