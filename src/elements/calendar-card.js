import React, { Component } from 'react';
import PropTypes from 'prop-types';

const OpenCalendarCard = (props) => {
    const openCalendarClickHandler = () => {
        props.onClick(props.data);
    }
    return (
        <div onClick={openCalendarClickHandler} className="cursor-pointer shadow hover:shadow-lg max-w-sm border border-purple-600 rounded-lg overflow-hidden m-4">
            <div className="bg-purple-100 px-6 py-4">
                <div className="font-bold text-xl text-purple-800 mb-2">{props.time}</div>
                <p className="text-purple-800 text-base">Open</p>
            </div>
        </div>
    );
}

const BookedCalendarCard = (props) => {
    const bookedCalendarClickHandler = () => {
        props.onClick(props.data);
    }
    return (
        <div onClick={bookedCalendarClickHandler} className="cursor-pointer shadow hover:shadow-lg max-w-sm border border-green-400 bg-green-400 rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">{props.time}</div>
                <p className="text-white text-base">{props.userName}</p>
            </div>
        </div>
    );
}

const BlockedCalendarCard = (props) => {
    return (
        <div className="cursor-not-allowed max-w-sm border border-gray-300 rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-300 mb-2">{props.time}</div>
                <p className="text-gray-300 text-base">Blocked</p>
            </div>
        </div>
    );
}

class CalendarCard extends Component {
    render() {
        switch (this.props.type) {
            case 'booked':
                return <BookedCalendarCard {...this.props} />;
            case 'blocked':
                return <BlockedCalendarCard {...this.props} />;
            default:
                return <OpenCalendarCard {...this.props} />;
        }
    }
}

CalendarCard.defaultProps = {
    type: 'open',
    time: '',
};

CalendarCard.propTypes = {
    type: PropTypes.string,
    time: PropTypes.string,
    userName: PropTypes.string,
};

export default CalendarCard;
