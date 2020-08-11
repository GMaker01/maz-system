/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const OpenAppointmentModal = (props) => {
    const [visible, setVisibility] = useState(false);

    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        setVisibility(props.showModal);
    }, [props.showModal]);

    const handleCancel = (e) => {
        setVisibility(false);
        props.onClose();
    };

    const onSubmit = (data) => {
        props.onClose({
            date: `${props.data.date.format('YYYY-MM-DD')}T${props.data.time.format('HH:mm:ss')}`,
            userName: data.userName
        });
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
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="relative p-6 px-24 flex-auto">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Name</label>
                                    <input ref={register({ required: true })} name="userName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                                </div>
                                {errors.userName && <p class="text-red-500 text-xs italic">Name is required.</p>}

                            </div>
                            {/*footer*/}
                            <div className="flex items-center flex-row-reverse p-6">
                                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
                                <a onClick={() => handleCancel(false)} className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800 mr-5" href="#">Cancel</a>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null);
}

OpenAppointmentModal.defaultProps = {
    showModal: false,
    data: {}
};

OpenAppointmentModal.propTypes = {
    showModal: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object,
};

export default OpenAppointmentModal;
