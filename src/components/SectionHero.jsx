import '../styles/seccionHero.css';
import Button from './Button';

function SectionHero() {
  return (
    <section>
        <div className="w-3/4 mx-auto flex flex-col gap-5 justify-center items-center dataContainer" style={{ height: '100vh' }}>
          <h1 className="font-bold text-6xl text-center sm:text-7xl lg:text-8xl p-3" style={{ userSelect: 'none' }}>
            Jeremy Tierra
          </h1>
          <p className="font-semibold text-gray-700 text-sm text-center sm:text-xl lg:text-2xl p-3" style={{ userSelect: 'none' }}>
            <b>Software Developer</b>
            <br/> Mi objetivo es formar parte de una empresa líder en el campo, donde pueda poner en práctica mis habilidades y conocimientos, aportando valor y creciendo profesionalmente junto a un equipo talentoso.
          </p>
          <Button text="My skills" />
        </div>
    </section>
  );
}

export default SectionHero;