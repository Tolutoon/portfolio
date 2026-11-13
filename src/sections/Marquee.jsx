import star from "../assets/images/star.svg";

const WORDS = ["Create", "Design", "Inspire"];

const Row = ({ hidden = false }) => (
  <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
    {[...WORDS, ...WORDS].map((word, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span className="text-6xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight uppercase px-4 lg:px-8">
          {word}
        </span>
        <img src={star} alt="" loading="lazy" decoding="async" className="marquee-star w-[12vw] sm:w-[8vw] lg:w-[4vw] h-auto shrink-0" />
      </span>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <section aria-label="Create, design, inspire" className="overflow-hidden bg-white text-black pb-24 lg:pb-32">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
      <div className="marquee-track marquee-reverse mt-2 lg:mt-4">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
};

export default Marquee;
