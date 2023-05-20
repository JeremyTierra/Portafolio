import React from 'react'
import Card from './Card'
import ContactForm from './ContactForm'
export default function SectionContact() {
  return (<>

    <section className='pt-28 p-7'>
      <h1 className="mb- text-4xl text-center font-semibold sm:text-4xl" >Contact</h1>
      <div className="md:col-span-2 col-span-3 flex  w-full flex-row items-center justify-center space-y-2 sm:flex-row sm:space-x-2 relative flex-wrap mt-12 animate__animated animate__fadeInLeft">




        <a href="https://www.linkedin.com/in/jeremy-tierra-0638061a9/" className="flex w-full flex-row flex-wrap items-center justify-center rounded-md border-l-4  bg-white p-5 shadow-xl sm:w-1/4 sm:flex-col    hover:-translate-y-1 duration-300 hover:text-gray-400" target="_blank" rel="noreferrer" >
        <div>
          <svg aria-hidden="true" className="min-w-[80px]" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z" ></path>
          </svg>
          <div className="text-center text-sm font-bold">Linkedin</div>
          </div>
        </a>
        <a href="https://github.com/JeremyTierra" className="flex w-full flex-row flex-wrap items-center justify-center rounded-md border-l-4  bg-white p-5 shadow-xl sm:w-1/4 sm:flex-col    hover:-translate-y-1 duration-300 hover:text-gray-400" target="_blank" rel="noreferrer" >
        <div>
        <svg className="min-w-[80px]" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
          <div className="text-center text-sm font-bold">GitHub</div>
          </div>
        </a>
        <a href="#formEmail" className="flex w-full flex-row flex-wrap items-center justify-center rounded-md border-l-4  bg-white p-5 shadow-xl sm:w-1/4 sm:flex-col    hover:-translate-y-1 duration-300 hover:text-gray-400" >
        <div>
          <svg  aria-hidden="true" className="flex justify-center align-middle min-w-[80px]" fill="currentColor" viewBox="0 -1 20 20">
          <path  clipRule="evenodd" fillRule="evenodd" d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51-.13.16-.43.15-.56.05l-4.37-3.73-2.14 1.95-2.13-1.95-4.37 3.73c-.13.1-.43.11-.56-.05-.14-.15-.06-.37.06-.51l3.9-4.06-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04 6.25-5.04c.28-.24.62-.4.95-.07z"/>
          </svg>
          <div className="text-center text-sm font-bold">Email</div>
          </div>
        </a>






</div>

    </section>
  <ContactForm></ContactForm>
    </>
  )
}
