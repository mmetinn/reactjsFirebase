import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { singOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {

    return(
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><NavLink to="/createdoctor">New Doctor</NavLink></li>
            <li><a onClick={props.singOut}>Log Out</a></li>
            <li><NavLink to="/singup" className="btn btn-floating pink lighten-1">
                {
                    props.profile.initials
                }
                </NavLink></li>        
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        singOut: ()=>dispatch(singOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);