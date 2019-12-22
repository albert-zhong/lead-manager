import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';
import { changeForm, clearForm } from '../../actions/form';

export class Form extends Component {
    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getForm = this.getForm.bind(this);
    }

    getForm() {
        return {
            name: this.props.name,
            email: this.props.email,
            message: this.props.message,
        };
    }

    onChange(e) {
        const currentForm = this.getForm();
        currentForm[e.target.name] = e.target.value;
        this.props.changeForm(currentForm);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addLead(this.getForm());
    }

    render() {
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.props.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={this.props.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={this.props.message}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.form.name,
    email: state.form.email,
    message: state.form.message,
});

export default connect(mapStateToProps, { addLead, changeForm, clearForm })(Form);
