import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const BookedAppointmentModal = (props) => {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        setVisibility(props.showModal);
    }, [props.showModal]);


    const handleCancel = (e) => {
        setVisibility(false);
        props.onClose();
    };

    return (visible ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="p-5">
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-gray-300 opacity-5 text-6xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => handleCancel(false)}
                            >
                                <span className="bg-transparent font-light text-gray-300 opacity-5 h-6 w-6 text-5xl block outline-none focus:outline-none">×</span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 px-24 flex-auto">
                            <p className="font-sans font-extrabold text-3xl">{props.data.userName}</p>
                            <p className="font-sans font-semibold">{moment(props.data.date).format('dddd, MMMM DD [at] hha')}</p>
                            <button className="flex flex-row w-full bg-transparent border-0 text-green-500 opacity-5 text-xl leading-none outline-none focus:outline-none mt-10">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="refresh w-6 h-6 mr-2"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path></svg>
                                <span>Repeats every day</span>
                            </button>

                        </div>
                        {/*footer*/}
                        {/* <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b"> */}
                        <div className="grid grid-cols-2 px-24 gap-4 p-6">
                            <button
                                className="flex flex-row bg-yellow-500 text-white active:bg-green-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => handleCancel(false)}
                            >
                                <svg viewBox="0 0 20 20" fill="currentColor" className="calendar w-6 h-6 mr-2"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                <span>Reschedule</span>
                            </button>
                            <button
                                className="flex flex-row bg-red-500 text-white active:bg-green-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => handleCancel(false)}
                            >
                                <svg viewBox="0 0 20 20" fill="currentColor" className="x-circle w-6 h-6 mr-2"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null);
}

BookedAppointmentModal.defaultProps = {
    showModal: false,
    data: {}
};

BookedAppointmentModal.propTypes = {
    showModal: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object,
};

export default BookedAppointmentModal;
