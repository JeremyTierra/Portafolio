import Card from "./Card";
import iconHtml from "../images/imgSkills/iconHtml.svg";
import iconCss from "../images/imgSkills/iconCss.svg";
import iconJavascript from "../images/imgSkills/iconJavascript.svg";
import iconReact from "../images/imgSkills/iconReact.svg";
import iconNode from "../images/imgSkills/iconNode.svg";
import iconExpress from "../images/imgSkills/iconExpress.svg";
import iconPostgresql from "../images/imgSkills/iconPostgresql.svg";
import iconJava from "../images/imgSkills/iconJava.svg";
import iconGit from "../images/imgSkills/iconGit.svg";
import iconGitHub from "../images/imgSkills/iconGitHub.svg";
import iconTailwind from "../images/imgSkills/iconTailwind.svg";
import iconBootstrap from "../images/imgSkills/iconBootstrap.svg";
function ListSkills() {
    return(<>
    <div className="md:col-span-2 col-span-3 flex  w-full flex-row items-center justify-center space-y-2 sm:flex-row sm:space-x-2 relative flex-wrap">
    <Card text={"HTML"} color={"border-orange-300"} icon={iconHtml} ></Card>
    <Card text={"Css"} color={"border-blue-300"}icon={iconCss} ></Card>
    <Card text={"Javascript"} color={"border-yellow-300"}icon={iconJavascript} ></Card>
    <Card text={"React"} color={"border-blue-300"}icon={iconReact} ></Card>
    <Card text={"Node js"} color={"border-green-300"}icon={iconNode} ></Card>
   <Card text={"Express"} icon={iconExpress} ></Card>

   <Card text={"Postgresql"} icon={iconPostgresql} color={"border-blue-300"} ></Card>
   <Card text={"Git"} icon={iconGit} color={"border-orange-300"} ></Card>
   <Card text={"GitHub"} icon={iconGitHub} color={""} ></Card>
   <Card text={"Bootstrap"} icon={iconBootstrap} color={"border-purple-300"} ></Card>
   <Card text={"Tailwind"} icon={iconTailwind} color={"border-blue-300"} ></Card>
   <Card text={"Java"} icon={iconJava} progress={true}></Card>
    </div>
    </>)
}
export default ListSkills;