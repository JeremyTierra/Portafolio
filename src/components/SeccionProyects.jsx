import React from 'react';
import imgAppRecetas from "../images/imgRecipes/imgAppRecetas.png";
import Post from './Post';
function SeccionProyects() {
    const posts = [
        {
            image: imgAppRecetas,
            title: "Mis recetas: Tu plataforma para crear y editar recetas de manera sencilla",
            description: "Mis Recetas es una plataforma intuitiva y versátil que te permite crear y editar recetas de forma práctica y eficiente. Con una interfaz fácil de usar, podrás organizar tus ingredientes, instrucciones y fotos en un solo lugar, facilitando la planificación de tus comidas y la compartición de tus deliciosas creaciones culinarias.",
            git: "https://github.com/JeremyTierra/app_recetas",
            web: "https://curious-beijinho-d5edce.netlify.app/",
        },
        {
            image: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
            title: "Coffee Roasting Basics: Developing Flavour by Roasting",
            description: "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
            git: "https://github.com/JeremyTierra/app_recetas",
           
        },
        {
            image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
            title: "Latte vs. Flat White - What is the Difference?",
            description: "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
            git: "https://github.com/JeremyTierra/app_recetas",
           
        },

    ];

    return (
        <section className="bg-gray-100  py-10 px-12 pt-28 min-h-screen ">
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
               
               image= {imgAppRecetas}
               title= "Mis recetas: Tu plataforma para crear y editar recetas de manera sencilla"
               description= "Mis Recetas es una plataforma intuitiva y versátil que te permite crear y editar recetas de forma práctica y eficiente. Con una interfaz fácil de usar, podrás organizar tus ingredientes, instrucciones y fotos en un solo lugar, facilitando la planificación de tus comidas y la compartición de tus deliciosas creaciones culinarias."
               git= "https://github.com/JeremyTierra/app_recetas"
               web= "https://curious-beijinho-d5edce.netlify.app/"

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
