import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            const { user } = action.payload;
            user ?
                AsyncStorage.setItem('@USER', JSON.stringify(user))
                :
                AsyncStorage.removeItem('@USER')
            return { ...state, user };
            break;
        default:
            return state;
    }
}

export default reducers;