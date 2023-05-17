import NavBar from "./NavBar";
import "../styles/seccionHero.css"
import Button from "./Button";
function SeccionHero() {

  return (
    <div  >
      <NavBar />
      <div className="">
        <div className="w-3/4 mx-auto flex flex-col gap-5 justify-center items-center dataContainer" style={{ height: '100vh' }}>
          <h1 className="font-bold text-6xl text-center sm:text-7xl lg:text-8xl p-3">
            Jeremy Tierra
          </h1>
          <p className="font-semibold text-gray-700 text-sm text-center sm:text-xl lg:text-2xl p-3">
            <b>Software Developer </b>
            Soy un apasionado de la tecnología, con una sed incansable por aprender. Mi objetivo es formar parte de una empresa líder en el campo, donde pueda poner en práctica mis habilidades y conocimientos, aportando valor y creciendo profesionalmente junto a un equipo talentoso.
          </p>
          <Button text={"My skills"} ></Button>
        </div>
      </div>

    </div>
  );
}

export default SeccionHero;

