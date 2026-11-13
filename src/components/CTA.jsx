import GradientButton from "./GradientButton";
import Reveal from "./Reveal";

const CTA = () => {
  return (
    <section className="bg-black text-white">
      <div className="main-container py-24 lg:py-32 flex flex-col gap-8 justify-center items-center text-center">
        <Reveal>
          <h2 className="max-w-4xl text-3xl md:text-4xl xl:text-5xl font-heading font-bold leading-[1.15]">
            Projects, collaborations and full-time opportunities. Let&rsquo;s get acquainted.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <GradientButton text="Book a Call" link="https://cal.com/tolulola/15min" />
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
