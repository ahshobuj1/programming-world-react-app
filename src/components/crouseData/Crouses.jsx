import {useEffect, useState} from 'react';
import axios from 'axios';
import Crouse from '../crouse/Crouse';
import PropTypes from 'prop-types';

const Crouses = ({handleBookmark, handleCreditHours}) => {
    const [crouses, setCrouses] = useState([]);

    useEffect(() => {
        axios
            .get('data/Data.json')
            .then((res) => {
                setCrouses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="md:col-span-3 ">
            <h2 className="text-xl text-center mb-8 bg-gray-300 rounded-lg py-2">
                Purchase and Register Crouse
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {crouses.map((crouse) => (
                    <Crouse
                        key={crouse.id}
                        crouse={crouse}
                        handleBookmark={handleBookmark}
                        handleCreditHours={handleCreditHours}
                    />
                ))}
            </div>
        </div>
    );
};

Crouses.propTypes = {
    handleBookmark: PropTypes.func,
    handleCreditHours: PropTypes.func,
};

export default Crouses;
