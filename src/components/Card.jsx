function Card() {
    return(<>
     <div className="flex w-full flex-row flex-wrap items-center justify-center rounded-md border-l-4 border-blue-300 bg-white p-5 shadow-xl sm:w-1/4 sm:flex-col ">
    <div className="flex w-full justify-end">
        <div style={{paddingTop: "0.1em", paddingBottom: "0.1rem"}} className="flex items-center rounded-full bg-blue-200 px-3 text-xs text-blue-800">React</div>
    </div>
    <div>
      <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
      <div className="text-center text-sm font-bold">React</div>
    </div>
  </div>
    </>)
}
export default Card;