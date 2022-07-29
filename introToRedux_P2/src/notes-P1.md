## One Page - Redux Logic

```
import React from "react";
import { Text, SafeAreaView, View, Button } from 'react-native'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'


const initalState = {
  counter: 0,
}

const reducers = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return { ...state, counter: state.counter + 1 }

    default:
      return state;

  }
}


export default () => {
  return (
    <Provider store={createStore(reducers, initalState)}>
      <SafeAreaView style={{ flex: 1 }} >
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  )
}

const First = () => {
  // selector --> initalState'in kendisi --> global state'lerin tutulduğu obje
  const counter = useSelector(selector => selector.counter)

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch({type : 'UPDATE_COUNTER'})
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <Text style={{ color: 'white', fontSize: 30 }}>
        First : {counter}
      </Text>
      <Button title="Update Counter" onPress={handleUpdate} />
    </View>
  )
}

const Second = () => {
  const counter = useSelector(selector => selector.counter)
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 30 }}>
        Second : {counter}
      </Text>
    </View>
  )
}
```


## Tekrar --> Bir bakılabilir 
```
import React from "react";
import { Text, SafeAreaView, View, Button } from 'react-native'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'


const initalState = {
  counter: 0,
}

const reducers = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return { ...state, counter: state.counter + 1 }
      
    case 'DEC_COUNTER':
      return {...state, counter: state.counter -1}
    
    default:
      return state;

  }
}


export default () => {
  const store = createStore(reducers, initalState);
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }} >
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  )
}

const First = () => {
  // selector --> initalState'in kendisi --> global state'lerin tutulduğu obje
  const counter = useSelector(selector => selector.counter)

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch({type : 'UPDATE_COUNTER'})
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <Text style={{ color: 'white', fontSize: 30 }}>
        First : {counter}
      </Text>
      <Button title="Update Counter" onPress={handleUpdate} />
    </View>
  )
}

const Second = () => {
  const counter = useSelector(selector => selector.counter)

  const dispatch = useDispatch();
  const handleDec = () => {
    dispatch({type : 'DEC_COUNTER'})
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 30 }}>
        Second : {counter}
      </Text>
      <Button title="Decs Counter" color='red' onPress={handleDec} />
    </View>
  )
}

```