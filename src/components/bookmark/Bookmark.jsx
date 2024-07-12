import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <>
            <li className="text-[#1c1b1b95] text-base">{bookmark}</li>
        </>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;
