
function Button({text}) {
    return(<>
    <a href="#MySkills"><button    className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-teal-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">{text}</span>
  </button>
  </a> 
    </>)
}
export default Button;