import React from 'react';

import api from "../api";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from '../images/badge-header.svg'

import './styles/BadgNew.css'
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    };
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }

        return (
            <React.Fragment>

                <div className="BadgeNew__hero">
                    <img src={header} alt="Logo" className="BadgeNew__hero-image img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge name={this.state.form.firstName || 'first name'}
                                   lastName={this.state.form.lastName || 'last name'}
                                   jobTitle={this.state.form.jobTitle || 'Job Title'}
                                   twitter={this.state.form.twitter || 'Twitter'}
                                   email={this.state.form.email}/>
                        </div>
                        <div className="col">
                            <h1>New attendant</h1>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}
                                       onSubmit={this.handleSubmit} error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;