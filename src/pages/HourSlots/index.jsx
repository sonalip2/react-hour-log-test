import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Hours from './Hours';
import s from './HourSlots.module.scss'

class HourSlots extends Component {

    onHourClick = (hour) => {
        const { history } = this.props;
        history.push(`/log-details/${hour}`)
    }

    render() {
        const { hourData } = this.props;
        return (
            <div className={s.hourLogSlotContainer}>
                <Hours onHourClick={this.onHourClick} hourData={hourData} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hourData: state.hourLog
    }
}

export default withRouter(connect(mapStateToProps)(HourSlots));