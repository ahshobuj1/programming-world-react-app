import PropTypes from 'prop-types';
import {BsBookmarkHeartFill} from 'react-icons/bs';

const Crouse = ({crouse, handleBookmark, handleCreditHours}) => {
    const {
        image,
        title,
        name,
        user,
        user_image,
        description,
        duration_hours,
        price,
    } = crouse;
    return (
        <div className="p-4 flex flex-col shadow-xl rounded-lg">
            <div className=" mb-4">
                <img
                    className="w-full h-56 rounded-xl"
                    src={image}
                    alt={title}
                />
            </div>

            <div className="flex gap-4 mb-4">
                <img
                    className="w-10 h-10 rounded-full"
                    src={user_image}
                    alt={name}
                />

                <div>
                    <p className="font-bold">{name}</p>
                    <p>username: {user}</p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semiBold mb-3">{title}</h2>
                <p className="text-sm text-[#1c1b1b97] mb-4 flex-grow">
                    {description}
                </p>

                <p className="space-x-4 mb-6 flex-grow flex items-center">
                    $
                    <span className="text-sm text-[#1c1b1b97] ml-2">
                        price:{price}
                    </span>
                    <button onClick={() => handleCreditHours(duration_hours)}>
                        <BsBookmarkHeartFill />
                    </button>
                    <span className="text-sm text-[#1c1b1b97]">
                        Credit:{duration_hours}
                    </span>
                </p>

                <button
                    onClick={() => handleBookmark(title, price)}
                    className="w-full bg-[#2F80ED] rounded-lg text-white btn hover:bg-red-400">
                    Select
                </button>
            </div>
        </div>
    );
};

Crouse.propTypes = {
    crouse: PropTypes.object,
    handleBookmark: PropTypes.func,
    handleCreditHours: PropTypes.func,
};

export default Crouse;
