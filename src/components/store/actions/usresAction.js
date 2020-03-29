export const createUser = (user) => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add(user)
        .then(() =>  {
            dispatch ({ type: 'usersReducer/CREATE_USER', user });
        }).catch ( (error) => {
            dispatch ({ type: 'usersReducer/CREATE_USER_ERROR', error });
        })    
    }
};
