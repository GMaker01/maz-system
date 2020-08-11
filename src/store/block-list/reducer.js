const initialState = {
    blockedDays: ['Saturday', 'Sunday'],
    blockedTime: ['08:00:00', '13:00:00', '19:00:00', '20:00:00']
};

export default function (state = initialState, { type, payload }) {
    return state;
};
