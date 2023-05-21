import PropTypes from 'prop-types';
import 'animate.css';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Card({ text, icon, progress, color }) {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`flex w-full flex-row flex-wrap items-center justify-center rounded-md border-l-4 ${color} bg-white p-5 shadow-xl sm:w-1/4 sm:flex-col ${
        visible ? 'animate__animated animate__fadeInLeft' : ''
      }`}
    >
      {progress && (
        <div className="flex w-full justify-end">
          <div style={{ paddingTop: '0.1em', paddingBottom: '0.1rem' }} className="flex items-center rounded-full bg-green-200 px-3 text-xs text-green-800">
            progress
          </div>
        </div>
      )}
      <div>
        <img className="w-28" src={icon} alt="" />
        <div className="text-center text-sm font-bold">{text}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  progress: PropTypes.bool,
};

export default Card;