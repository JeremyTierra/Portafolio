import SimpleCard from "./SimpleCard";

export default function Education() {
    return (
     
<div className="md:col-span-1 col-span-3 border-stone-300 border-r-2 border-t-2">
  <h2 className="mb-10 text-2xl text-center font-semibold sm:text-1xl text-gray-400 m-6">Educación</h2>
  <SimpleCard text="Bootcamp X" />
  <SimpleCard text="Open Bootcamp" />
  <SimpleCard text="Autodidacta" />
  <SimpleCard text="Software Engineer - Actuality" />
</div>
    )
}


