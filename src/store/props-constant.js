import { create } from 'store/appointment/action';

export const mapStateToProps = (state) => {
    return {
        appointment: state?.appointment,
        blockList: state?.blockList,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        createAppointment: (payload) => {
            dispatch(create(payload));
        },
    };
};
