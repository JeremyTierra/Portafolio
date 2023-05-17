import PropTypes from 'prop-types';
function Card({text,icon, progress,color}) {
    return(<>
     <div className={`flex w-full flex-row flex-wrap items-center justify-center rounded-md border-l-4 ${color} bg-white p-5 shadow-xl sm:w-1/4 sm:flex-col `}>
  { progress && <div className="flex w-full justify-end">
        <div style={{paddingTop: "0.1em", paddingBottom: "0.1rem"}} className="flex items-center rounded-full bg-green-200 px-3 text-xs text-green-800">progress</div>
    </div>}
    <div>
      <img className="w-28" src={icon} alt="" />
      <div className="text-center text-sm font-bold">{text}</div>
    </div>
  </div>
    </>)
}

Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  progress: PropTypes.bool,
};
export default Card;
