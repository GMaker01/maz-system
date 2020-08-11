import {
    CREATE,
} from './types';

export const create = (payload) => (dispatch) => {
    dispatch({
        type: CREATE,
        payload,
    })
};
