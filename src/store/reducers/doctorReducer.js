const initState={
    projects:[
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const doctorReducer = (state = initState,action) =>{
    //console.log(action);
    
    switch(action.type){
        case 'CREATE_DOCTOR':
          //  console.log('created project',action.project);
            return state;
        case 'CREATE_DOCTOR_ERROR':
            //console.log("create doctor error",action.err);
            return state;            
        default:
            return state;            
    }
}

export default doctorReducer;