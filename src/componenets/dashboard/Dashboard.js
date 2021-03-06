import React,{Component} from 'react';
import Notifications from './Notifications';
import Projectlist from '../projects/PorjectList';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
class Dashboard extends Component{
    render(){
        const {projects,auth,notifications} = this.props;
        if(!auth.uid) return <Redirect to="/singin"/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projectlist projects={projects}></Projectlist>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}></Notifications>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToPorps = (state) =>{

    return{
        projects:state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToPorps),
    firestoreConnect([
        {collection:'projects'},
        {collection: 'notifications', limit:3}
    ])
)(Dashboard);