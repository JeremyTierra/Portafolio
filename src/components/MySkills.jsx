import ListSkills from "./ListSkills";
import Education from "./Education";

function MySkills() {
    return (
        <div id={"MySkills"} className=" flex justify-center items-center flex-wrap content-center relative " style={{ minHeight:"100vh" }}>
            <h2 className="mb-10 text-4xl text-center font-semibold sm:text-5xl ">My Skills</h2>
            <div className="  grid grid-cols-3 overflow-hidden rounded-md bg-white p-4" style={{ width: "90%", height: "90%" }}>
                <ListSkills ></ListSkills>
                <Education></Education>
            </div>
        </div>)
}
export default MySkills;