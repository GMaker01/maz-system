import {
    CREATE,
} from './types';

const initialState = [{
    date: '2020-08-11T10:00:00',
    userName: 'Justin Canetti'
}, {
    date: '2020-08-13T12:00:00',
    userName: 'Nick'
}];

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case CREATE: {
            return [...state, payload];
        }
        default: return state
    }
};
