
import imgAppRecetas from "../images/imgPost/imgAppRecetas.png";
import imgAppTareas from "../images/imgPost/imgAppTareas.png";
import Post from './Post';
function SeccionProyects() {

    return (
        <section className="bg-gray-100  py-10 px-12 pt-28  ">
            <h1 className='mb- text-4xl text-center font-semibold sm:text-4xl '>Proyects</h1>
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate__animated animate__fadeInUp">
               <Post
               image= {imgAppRecetas}
               title= "Mis recetas: Tu plataforma para crear y editar recetas de manera sencilla"
               description= "Mis Recetas es una plataforma intuitiva y versátil que te permite crear y editar recetas de forma práctica y eficiente. Con una interfaz fácil de usar, podrás organizar tus ingredientes, instrucciones y fotos en un solo lugar, facilitando la planificación de tus comidas y la compartición de tus deliciosas creaciones culinarias."
               git= "https://github.com/JeremyTierra/app_recetas"
               web= "https://curious-beijinho-d5edce.netlify.app/"

               ></Post>
               <Post
               
               image= {imgAppTareas}
               title= "App de tareas"
               description= "Mis Tareas es una aplicacion web con diseño móvil que te permite anotar tareas, realizar un seguimiento y ver cuántas has completado"
               git= "https://github.com/JeremyTierra/app_recetas"


               ></Post>
               <Post
               image= {imgAppRecetas}
               title= "Mis recetas: Tu plataforma para crear y editar recetas de manera sencilla"
               description= "Mis Recetas es una plataforma intuitiva y versátil que te permite crear y editar recetas de forma práctica y eficiente. Con una interfaz fácil de usar, podrás organizar tus ingredientes, instrucciones y fotos en un solo lugar, facilitando la planificación de tus comidas y la compartición de tus deliciosas creaciones culinarias."
               git= "https://github.com/JeremyTierra/app_recetas"
               web= "https://curious-beijinho-d5edce.netlify.app/"

               ></Post>

            </div>
        </section>
    );
}

export default SeccionProyects;
