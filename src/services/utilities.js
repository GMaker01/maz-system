import moment from 'moment';

const service = {
    getCurrentWeekDays() {
        const currentDate = moment('2020-08-15');

        const weekStart = currentDate.clone().startOf('isoWeek');
        // var weekEnd = currentDate.clone().endOf('isoWeek');

        const days = [];
        for (let i = 0; i <= 6; i++) {
            days.push({ day: moment(weekStart).add(i, 'days').format("dddd"), date: moment(weekStart).add(i, 'days') });
        }

        return days;
    },
    getHours() {
        const startDate = moment('8:00:00', 'hh:mm:ss');
        const hours = [];
        for (let i = 0; i <= 12; i++) {
            hours.push(moment(startDate).add(i, 'hour'));
        }

        return hours;
    },
};

window.$utility = service;

export default service;
