import ListSkills from "./ListSkills";

function MySkills() {
    return (
        <div id={"MySkills"} className=" flex justify-center items-center flex-wrap content-center relative " style={{ minHeight:"100vh" }}>
            <h2 className="mb-10 text-4xl text-center font-semibold sm:text-5xl ">My Skills</h2>
            <div className="  grid grid-cols-3 overflow-hidden rounded-md bg-white" style={{ width: "90%", height: "90%" }}>
                <ListSkills ></ListSkills>
                <div className="md:col-span-1 col-span-3   border-stone-300 border-r-2 border-t-2" >
                    <h2 className="mb-10 text-2xl text-center font-semibold sm:text-1xl  text-gray-400 m-6 " >Educacion</h2>

                    <div className="flex w-11/12 items-center justify-center rounded-md border-l-4 border-teal-500 bg-white p-5 shadow-xl m-3">
                        <div className="text-center text-sm font-bold">Bootcamp X</div>
                    </div>
                    <div className="flex w-11/12 items-center justify-center rounded-md border-l-4 border-teal-500 bg-white p-5 shadow-xl m-3">
                        <div className="text-center text-sm font-bold">Open Bootcamp</div>
                    </div>
                    <div className="flex w-11/12 items-center justify-center rounded-md border-l-4 border-teal-500 bg-white p-5 shadow-xl m-3">
                        <div className="text-center text-sm font-bold">Autodidacta</div>
                    </div>
                    <div className="flex w-11/12 items-center justify-center rounded-md border-l-4 border-teal-500 bg-white p-5 shadow-xl m-3">
                        <div className="text-center text-sm font-bold">Software Engenier -Actuality</div>
                    </div>


                  


                </div>
            </div>

        </div>)
}
export default MySkills;