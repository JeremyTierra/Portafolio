import PropTypes from 'prop-types';

export default function SimpleCard({ text }) {
return (
<div className="flex w-11/12 items-center justify-center rounded-md border-l-4 border-teal-500 bg-white p-5 shadow-xl m-3">
<div className="text-center text-sm font-bold">{text}</div>
</div>
);
}

SimpleCard.propTypes = {
text: PropTypes.string,
};
