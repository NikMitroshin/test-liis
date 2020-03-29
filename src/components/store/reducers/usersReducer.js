const initState = {
   users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'usersReducer/CREATE_USER':
            console.log('created user', action.user );
            return state;
        case 'usersReducer/CREATE_USER_ERROR':
            console.log('create user error', action.error)
            return state;
        default: 
            return state;
    }
}
        
export default usersReducer;    