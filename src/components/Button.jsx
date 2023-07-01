import PropTypes from 'prop-types';

function Button({ text }) {
  const handleClick = () => {
    const element = document.getElementById('MySkills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <button
      className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
      onClick={handleClick}
    >
      <div className="absolute inset-0 w-3 bg-teal-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white">{text}</span>
    </button>

  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
