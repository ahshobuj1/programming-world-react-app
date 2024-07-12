import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, price, credit, remaining}) => {
    return (
        <div className="p-5 rounded-xl shadow-xl">
            <h2 className="font-bold text-lg text-[#2F80ED] border-b-2 py-4">
                Credit Hour Remaining: {remaining} hr
            </h2>

            <h2 className="font-bold text-lg  border-b-2 py-4">
                Total Credit Hour : {credit}
            </h2>

            <h2 className="font-bold text-lg  border-b-2 py-4">
                Total Price : {parseFloat(price).toFixed(2)} USD
            </h2>

            <h2 className="text-xl font-bold my-5 ">Course Name</h2>
            <ul className="list-decimal pl-5">
                {bookmarks.map((bookmark, idx) => (
                    <Bookmark key={idx} bookmark={bookmark} />
                ))}
            </ul>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    price: PropTypes.number,
    credit: PropTypes.number,
    remaining: PropTypes.number,
};

export default Bookmarks;
