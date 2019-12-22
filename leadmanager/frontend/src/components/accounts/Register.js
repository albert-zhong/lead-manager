import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Register extends Component {
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password !== this.state.password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match'});
        } else {
            this.props.register(this.state);
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={this.state.username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={this.state.password}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                onChange={this.onChange}
                                value={this.state.password2}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { register, createMessage })(Register);

