const initState={
    authError:null
}

const authReducer = (state = initState,action) =>{
//  console.log(action);
    
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError:'Login failed'
        };
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:null
            };            
            
        case 'SIGNOUT_SUCCESS':
            //console.log('outsuccess');            
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up success');
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('sign up error');
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state;            
    }
}

export default authReducer;