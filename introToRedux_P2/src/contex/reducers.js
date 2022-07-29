export default (state, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            // Yeni gelen name değeri
            const {name} = action.payload 
            // Eski hali + yeni gelen payload.name ekle
            const newList = [...state.nameList, name]
            return {...state, nameList: newList}
        case 'CLEAN_LIST':
            return {...state, userName: []}
        
        case 'SET_USERNAME':
            return {...state, userName: action.payload.username}
    default:
        return state;
        
    
    }
}