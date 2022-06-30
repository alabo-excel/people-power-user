import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const report = () => {
    return (
        <div>
            <div className="font-bold uppercase text-3xl text-center p-4">Report violation</div>
            <div className="text-lg mx-8">Campaigns or comments can be rreported if they are in breach of our userguide, terms and condition and privacy policies.</div>
            <div className="mx-10 my-4">
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Deceptive and fraudulent</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Breaches human rights</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Guilty of hate speech</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Obscene image</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Harmful to children</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Incites violence, sucide or harm</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Encourages racism</div>
                </div>
                <div className="flex">
                    <input type="radio" className="m-1" />
                    <div className="px-2">Impersonation</div>
                </div>
                <div>
                    <textarea name="" id="" className="w-full h-32 my-3 rounded-md" placeholder="Please type the reason for making this report for a review by the admin."></textarea>
                    <div className="text-center">
                        <button className="bg-red-500 w-80 rounded-md text-white p-2">Report</button>
                    </div>
                </div>
            </div>
            <div className="text-lg mx-8">Your report will be reviewed by our admin to access if they are in breach of our userguide, Terms of service and privacy policies.</div>
        </div>
    )
}

report.propTypes = propTypes;
report.defaultProps = defaultProps;
// #endregion

export default report;