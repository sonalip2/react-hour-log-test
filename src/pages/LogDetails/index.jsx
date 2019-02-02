import React, { Component } from 'react';
import BasicInput from '../../components/BasicInput';
import Button from '../../components/Button';
import { addEditHourLog } from '../../actions'
import { connect } from 'react-redux';
import s from './LogDetails.module.scss'

class LogDetails extends Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: ''
    }

    componentDidMount() {
        const { hourData, match } = this.props;
        if (hourData[match.params.hour]) {
            const editData = hourData[match.params.hour];
            this.setState(editData)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { match, addEditHourLog, history } = this.props
        const data = {
            [match.params.hour]: this.state
        }
        addEditHourLog({ data });
        history.push('/')
    }

    onCancelSubmit = () => {
        const { history } = this.props;
        history.push('/')
    }

    render() {
        const { firstName, lastName, phoneNumber } = this.state;
        return (
            <div className={`${s.logDetailsContainer}`}>
                <form onSubmit={this.onSubmit}>
                    <div>   
                        <BasicInput value={firstName} required label="First Name" onChange={this.handleInputChange} name="firstName" />
                        <BasicInput value={lastName} required label="Last Name" onChange={this.handleInputChange} name="lastName" />
                        <BasicInput pattern="[789][0-9]{9}" value={phoneNumber} required label="Mobile Number" onChange={this.handleInputChange} name="phoneNumber" />
                    </div>
                    <div className={s.btnContainer}>
                        <Button className="primary" type="submit">Save</Button>
                        <Button className="danger" type="button" onClick={this.onCancelSubmit}>Cancel</Button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hourData: state.hourLog
    }
}
function mapDispatchToProps(dispatch) {
    return ({
        addEditHourLog: (data) => {
            dispatch(addEditHourLog(data.data));
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(LogDetails);