import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import EmailValidator from 'email-validator'

class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            role: 'Member',
            showErr: false
        }
    }

    validate(){
        if(EmailValidator.validate(this.state.email) && this.state.name !== ''){
            this.props.addUser(this.state.name,this.state.email,this.state.role);
            this.setState({ name: '', email: '', role: 'Member', showErr: false });
        }
        else{
            this.setState({showErr: true});
        }
    }

    render(){
        return(
            <form className="form form-group row">
                <div className="col-sm-12">
                    <input type="text" value={this.state.name} className="form-control" placeholder="Full Name" onChange={e => this.setState({ name: e.target.value })} />
                    <input type="email" value={this.state.email} className="form-control" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                    <select name="role" value={this.state.role} onChange={e => this.setState({ role: e.target.value })} className="form-control">
                        <option value="Member">Member</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button type="button" onClick={ () => this.setState({ name: '', email: '', role: 'Member', showErr: false }) } style={{marginRight: "15px"}} className="btn btn-danger">Cancel</button>
                    <button type="button" onClick={() => this.validate() } className="btn btn-success">Submit</button>
                    <div className="error-message" style={this.state.showErr ? {} : { display: 'none' }} >
                        Please fill the valid details
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addUser
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateUser)
