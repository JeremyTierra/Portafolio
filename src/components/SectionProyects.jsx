import imgAppRecetas from "../images/imgPost/imgAppRecetas.png";
import imgAppTareas from "../images/imgPost/imgAppTareas.png";
import imgPortafolio from "../images/imgPost/imgPortafolio.png";
import imgATM from "../images/imgPost/imgATM.png";
import imgServidor from "../images/imgPost/imgServidor.jpg";
import Post from "./Post";

const SeccionProyects = () => {
  return (
    <section className="bg-gray-100 py-10 px-12 pt-28">
      <h1 className="mb- text-4xl text-center font-semibold sm:text-4xl">
        Proyectos
      </h1>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate__animated animate__fadeInUp">
        <Post
          image={imgPortafolio}
          title="Portafolio Personal"
          description="Mi portafolio web es una muestra de mis habilidades y proyectos. Desde diseño web hasta desarrollo de aplicaciones, cada proyecto demuestra mi experiencia y pasión por crear soluciones digitales efectivas."
          git="https://github.com/JeremyTierra/Portafolio"
          web="/"
        />
        <Post
          image={imgATM}
          title="ATM"
          description="Desarrollé un proyecto universitario que consistió en la creación de un cajero automático utilizando programación orientada a objetos. Implementé funcionalidades como retiros, depósitos y consultas de saldo, siguiendo principios modulares y reutilizables. Obtuve una solución funcional y adquirí experiencia en desarrollo de aplicaciones orientadas a objetos."
          git="https://github.com/JeremyTierra/ATM"
        />
        <Post
          image={imgAppRecetas}
          title="Mis recetas: Tu plataforma para crear y editar recetas de manera sencilla"
          description="Mis Recetas es una plataforma intuitiva y versátil que te permite crear y editar recetas de forma práctica y eficiente. Con una interfaz fácil de usar, podrás organizar tus ingredientes, instrucciones y fotos en un solo lugar, facilitando la planificación de tus comidas y la compartición de tus deliciosas creaciones culinarias."
          git="https://github.com/JeremyTierra/app_recetas"
          web="https://curious-beijinho-d5edce.netlify.app/"
        />
        <Post
          image={imgAppTareas}
          title="App de tareas"
          description="Mis Tareas es una aplicacion web con diseño móvil que te permite anotar tareas, realizar un seguimiento y ver cuántas has completado"
          git="https://github.com/JeremyTierra/AppTareas/"
        />
        <Post
          image={imgServidor}
          title="Servidor de Login-registro con Node-Express"
          description="Desarrollé un servidor de Login y Registro utilizando Node.js y Express. Este servidor incluye funcionalidades para realizar validaciones de roles, como administrador y usuario, y se conecta a una base de datos PostgreSQL. Además, implementé el uso de tokens para la autorización y autenticación de usuarios. El servidor proporciona una capa segura para la gestión de usuarios y sus respectivos roles, garantizando la protección de la información confidencial y permitiendo un acceso controlado a los recursos del sistema."
          git="https://github.com/JeremyTierra/login-register"
        />
      </div>
    </section>
  );
};

export default SeccionProyects;
