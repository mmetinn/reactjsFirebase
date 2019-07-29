import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createDoctor } from '../../store/actions/doctorsActions';


class addDoctors extends Component {

state = {
    dName:'',
    dSurname:'',
    departman:''
}

handleChange = (e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
handleSubmit=(e)=>{        
    e.preventDefault();
    this.props.createDoctor(this.state);
} 
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">      
                    <h5 className="grey-text text-darken-3">New Doctor</h5>
                    <div className="input-field">
                        <label htmlFor="dName">Name</label>
                        <input type="text" id="dName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="dSurname">Surname</label>
                        <input type="text" id="dSurname" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="departman">Departman</label>
                        <input type="text" id="departman" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create New Doctor</button>
                    </div>
                </form>  
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch) => {
    return{
        createDoctor:(project) => dispatch(createDoctor(project))
    }
}
export default connect(null,mapDispatchToProps)(addDoctors)
