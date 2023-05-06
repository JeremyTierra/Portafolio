import NavBar from "./NavBar";

function SeccionHero() {

  return (
    <div >
      <NavBar />
      <div className="">
        <div className="w-3/4 mx-auto flex flex-col gap-5 justify-center items-center" style={{ height: '82vh' }}>
          <h1 className="font-bold text-6xl text-center sm:text-7xl lg:text-8xl">
            Jeremy Tierra
          </h1>
          <p className="font-semibold text-gray-700 text-sm text-center sm:text-xl lg:text-2xl">
            Software Developer
          </p>
        </div>
      </div>

    </div>
  );
}

export default SeccionHero;

