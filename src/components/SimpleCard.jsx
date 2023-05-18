import PropTypes from 'prop-types';

export default function SimpleCard({ text,link }) {
    return (<>
      
        <a href={link} target='_blank'>
        <button className="flex w-11/12 items-center justify-center rounded-md p-5 shadow-xl m-3 group relative overflow-hidden bg-white ">
            <div className="absolute inset-0 w-1 bg-teal-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="text-center text-sm font-bold relative text-black group-hover:text-white">{text}</span>
        </button>
        </a>
    </>
    );
}

SimpleCard.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
};
