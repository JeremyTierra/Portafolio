import React from 'react';
import imgAppRecetas from "../images/imgRecipes/imgAppRecetas.png";
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
        <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12 pt-16 min-h-screen ">
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {posts.map((post, index) => (
                    <div key={index} className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp  ">
                        <div href={post.link} className="cursor-pointer h-full">
                            <figure className='pb-16'>
                                <img src={`${post.image}`} className="rounded-t h-72 w-full object-cover" alt="Post" />
                                <figcaption className="p-4">
                                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{post.title}</p>
                                    <small className="leading-5 text-gray-500 dark:text-gray-400">{post.description}</small>
                                   
                                </figcaption>
                            </figure>
                            <div className='flex w-full p-3 justify-between bottom-1 absolute min-h-[60px]'>
                                        <a href={post.git} target="_blank" className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 g  ">
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                            </svg>
                                        </a>

                                        {post.web && <a href={post.web} target="_blank" className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate__animated animate__fadeInLeft  animate__slower">

                                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </a>}
                                    </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SeccionProyects;
