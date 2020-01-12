import React from 'react';

class BadgeForm extends React.Component {

    handleClick = (e) => {
        console.log('Button pressed');
    };

    render() {
        return (
            <div>
                <form action="/" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="firstName"
                               value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="lastName"
                               value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.onChange} type="email" className="form-control" name="email"
                               value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="jobTitle"
                               value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="twitter"
                               value={this.props.formValues.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm;