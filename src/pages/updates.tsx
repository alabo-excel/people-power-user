import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const updates = () => {
    return <div>
        <div className="w-2/3 mx-auto  text-center">
            <div className="text-5xl p-10">Post Update on your Campaign</div>
            <div className="mt-4">
                <textarea name="" placeholder="Post Update on your Campaign" className="w-full rounded-md h-40"></textarea>
                <button className="bg-warning p-2 mt-1 w-32  rounded-md">Send </button>
            </div>
        </div>
    </div>;
}

updates.propTypes = propTypes;
updates.defaultProps = defaultProps;
// #endregion

export default updates;