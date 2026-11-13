import { Link } from "react-router-dom";

const GradientButton = ({ text, link, className = "" }) => {
  const classes = `btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg inline-block ${className}`;
  const isExternal = /^https?:\/\//.test(link);

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={classes}>
        {text}
      </a>
    );
  }
  return (
    <Link to={link} className={classes}>
      {text}
    </Link>
  );
};

export default GradientButton;
