import PropTypes from 'prop-types';
import 'animate.css';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SimpleCard({ text,link }) {
    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true, // La animación se activará solo una vez
      threshold: 0.1, // El componente se considerará visible cuando esté al menos un 10% visible en el viewport
    });
  
    // Cuando el componente sea visible, actualiza el estado para activar la animación
    useEffect(() => {
      if (inView) {
        setVisible(true);
      }
    }, [inView]);
    return (<>

      
        <a href={link} target='_blank' ref={ref} 
         className={ `animate__slower ${
            visible ? 'animate__animated animate__fadeInLeft' : ''
          }`}
          }`} rel="noreferrer"
        >
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
