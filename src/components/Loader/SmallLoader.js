import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const TableLoader = () => {
    return (
        <span className="small__loader">
            <FontAwesomeIcon icon={faSpinner} className='fa-spin' />
        </span>
    );
};

export default TableLoader;
