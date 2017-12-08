
const initialState = {
    forename: 'Joe',
    surname: 'Smith'
}

function userReducer(state = initialState, action) {

    switch (action.type) {
        default: {
            return state;
        }
    }



}

export default userReducer;