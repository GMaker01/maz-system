import React, { useState } from 'react';
import { connect } from 'react-redux';
import CalendarCard from 'elements/calendar-card';
import BookedAppointmentModal from 'elements/booked-appointment-modal';
import OpenAppointmentModal from 'elements/open-appointment-modal';
import { mapStateToProps, mapDispatchToProps } from 'store/props-constant';
import moment from 'moment';

const Home = (props) => {

    const [showBookedAppointmentModal, setShowBookedAppointmentModal] = useState(false);
    const [showOpenAppointmentModal, setShowOpenAppointmentModal] = useState(false);
    const [openAppointmentData, setOpenAppointmentData] = useState(null);
    const [bookedAppointmentData, setBookedAppointmentData] = useState(null);
    const [hoursForCalendar,] = useState(window.$utility.getHours());
    const [weeksForCalendar,] = useState(window.$utility.getCurrentWeekDays());

    const bookedAppointmentCalendarClickHandler = (appointmentData) => {
        setBookedAppointmentData(appointmentData);
        setShowBookedAppointmentModal(true);
    }

    const openAppointmentCalendarClickHandler = (data) => {
        setOpenAppointmentData(data);
        setShowOpenAppointmentModal(true);
    }

    const onBookedClose = () => {
        setShowBookedAppointmentModal(false);
    }

    const onOpenClose = (e) => {
        setShowOpenAppointmentModal(false);
        if (e) {
            props.createAppointment(e);
        }
    }

    const renderCalendarCard = (item, time) => {
        if (props.blockList.blockedDays.includes(item.day)) {
            return (<CalendarCard time={time.format("h a")} type={"blocked"} />);
        } else if (props.blockList.blockedTime.find(x => time.isSame(moment(x, 'HH:mm:ss'), 'hour'))) {
            return (<CalendarCard time={time.format("h a")} type={"blocked"} />);
        } else if (props.appointment.length) {
            const appointmentData = props.appointment.find(x =>
                item.date.isSame(moment(x.date, 'YYYY-MM-DDTHH:mm:ss'), 'day')
                && item.date.isSame(moment(x.date, 'YYYY-MM-DDTHH:mm:ss'), 'month')
                && item.date.isSame(moment(x.date, 'YYYY-MM-DDTHH:mm:ss'), 'year')
                && time.isSame(moment(moment(x.date).format('HH:mm:ss'), 'HH:mm:ss'), 'hour')
            );

            if (appointmentData) {
                return (<CalendarCard time={time.format("h a")} onClick={bookedAppointmentCalendarClickHandler} data={appointmentData} type={"booked"} userName={appointmentData.userName} />);
            }
        }
        return (<CalendarCard time={time.format("h a")} onClick={openAppointmentCalendarClickHandler} data={{ ...item, time }} type={"open"} />);
    }

    return (
        <>
            <table className="table-fixed w-full mt-10 mb-10">
                <thead>
                    <tr>
                        <th></th>
                        {weeksForCalendar.map((x, i) =>
                            <th key={i}>
                                <p className="font-sans font-semibold">{x.day}</p>
                                <p className="font-sans font-extrabold text-3xl">{x.date.format("DD")}</p>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {hoursForCalendar.map((x, i) =>
                        <tr key={i}>
                            <td className="font-sans font-semibold text-center text-2xl">{x.format("h a")}</td>
                            {weeksForCalendar.map((item, i) =>
                                <td key={i}>
                                    {renderCalendarCard(item, x)}
                                </td>
                            )}

                        </tr>
                    )}
                </tbody>
            </table>
            <BookedAppointmentModal
                showModal={showBookedAppointmentModal}
                onClose={onBookedClose}
                data={bookedAppointmentData}
            />
            <OpenAppointmentModal
                showModal={showOpenAppointmentModal}
                onClose={onOpenClose}
                data={openAppointmentData}
            />
        </>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
