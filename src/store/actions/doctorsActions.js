export const createDoctor = (project) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) => {        
        //make async call to database
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Muhammet',
            authorLastName:'Metin',
            authorId:123456,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'CREATE_DOCTOR',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_DOCTOR_ERROR',err});             
        })
    }
}