## A counter with useState()

```
import React, {useState} from "react";
import {View, SafeAreaView, Text, Button} from "react-native";


const App = () => {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    setCounter(counter + 1);
  }
  const decCounter = () => {
    setCounter(counter -1)
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize : 40}}>Counter : {counter}</Text>
      <Button title="Increase counter" onPress={incCounter}></Button>
      <Button title="Decrease counter" onPress={decCounter}></Button>
    </SafeAreaView>
  )
}

export default App;

```

## Switch button and show just liked on the list (State usage)

```
import React, {useState} from "react";
import {View, SafeAreaView, Text, Button, StyleSheet, FlatList, Switch} from "react-native";

const data = [
  {id : 0, name : "KafeKafe", isFavorite : false},
  {id : 1, name : "cafe.exe", isFavorite : true},
  {id : 2, name : "BugG", isFavorite : false},
  {id : 3, name : "Rock n Code", isFavorite : true},
  {id : 4, name : "do(drink)", isFavorite : true},
  {id : 5, name : "esc", isFavorite : false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showFav, setShowFav] = useState(false);

  const renderList = ({item}) => {
    return <Text style={styles.text}>{item.name}</Text>
  }

  const onSwitchChange = (isSwitchSelected) => {
    setShowFav(isSwitchSelected);
    isSwitchSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite)) : setCafeList(data);
  }

  return (
    <SafeAreaView>
      <View >
        <Text style={styles.checkboxText}>Show only favourites</Text>
        <Switch value={showFav} onValueChange={onSwitchChange} />
      </View>
      <FlatList data={cafeList} renderItem={renderList} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text : {
    fontSize : 20,
    marginStart : 20,
  },
  checkboxText : {
    fontSize : 20,
    textAlign : 'right',
    marginEnd : 10,
  }
})

export default App;

```


## Following the state value/changes with useEffect
```
const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  // console.log('render'); her bir up butonunda(state güncellemesinde) 
  // bu component tekrar render edilir.
  useEffect(() => {
    console.log("Number Updated : " + number);
  }, [number]);

  useEffect(() => {
    console.log("Counter Updated : " + counter);
  }, [counter])

  return (
    <SafeAreaView>
      <Text> Hello Lifecycle Topic</Text>
      <Text>Number ---- {number}</Text>
      <Text>Counter ---- {counter}</Text>
      <Button title="Up !" onPress={() => setNumber(number+1)} />
      <Button title="Up 100 times !" onPress={() => setCounter(counter + 100)} />
    </SafeAreaView>
  )
}
```

## Using useEffect as a 'mounted' func

```
const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  // console.log('render'); her bir up butonunda(state güncellemesinde) 
  // bu component tekrar render edilir.
  useEffect(() => {
    console.log("Number Updated : " + number);
  }, [number]);

  useEffect(() => {
    console.log("Counter Updated : " + counter);
  }, [counter])

  return (
    <SafeAreaView>
      <Text> Hello Lifecycle Topic</Text>
      <Text>Number ---- {number}</Text>
      <Text>Counter ---- {counter}</Text>
      <Button title="Up !" onPress={() => setNumber(number+1)} />
      <Button title="Up 100 times !" onPress={() => setCounter(counter + 100)} />
    </SafeAreaView>
  )
}
```

## If we wanted to trigger something else when a component die --> Clean up function is useEffect

```
import React, {useState, useEffect} from "react";
import {View, SafeAreaView, Text, Button, StyleSheet, FlatList, Switch} from "react-native";


const App = () => {
  const [helloFlag, sethelloFlag] = useState(true);


  useEffect(() => {
    console.log("Mounting");
  }, [])
  
  const updateFlag = () => {
    console.log("First log - number's value : " + helloFlag);
    sethelloFlag(!helloFlag);
    console.log("First log - number's value : " + helloFlag);
  }

  return (
    <SafeAreaView>
      <Text> Hello Lifecycle Topic</Text>
      <Text>Number ---- {helloFlag}</Text>
      <Button title="Up !" onPress={updateFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  )
}



export default App;

// Bu durumda hello dışarıdan içeri 'import' anahtar kelimesi ile alınmış
// Bir component gibi düşünelim

const Hello = () => {
  useEffect(() => {
    console.log("Mounted !");

    return () => {
      console.log("Removed !");
    }
  }, []);
  return (
    <Text style={{backgroundColor : 'aqua', padding: 10, marginTop: 5}}>I'm hello componenet</Text>
  )
}
```

