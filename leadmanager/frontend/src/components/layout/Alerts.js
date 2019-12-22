import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            for (const [label, errorMessage] of Object.entries(error.msg)) {
                if (Array.isArray(errorMessage)) {
                    alert.error(`${label}: ${errorMessage[0]}`);
                } else {
                    alert.error(`${label}: ${errorMessage}`);
                }
            }
        }
        if (message !== prevProps.message) {
            if (message.deleteLead) {
                alert.success(message.deleteLead);
            }
            if (message.addLead) {
                alert.success(message.addLead);
            }
            if (message.passwordNotMatch) {
                alert.error(message.passwordNotMatch);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
