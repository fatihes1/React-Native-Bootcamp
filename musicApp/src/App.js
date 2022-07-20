import React, {useState} from "react";
import { View, SafeAreaView, Text, FlatList, StyleSheet} from "react-native";


import MUSIC_DATA from './songs_info.json';
import SongCard from './components/SongCard';
import SearchBar from "./components/SearchBar";


const App = () => {
  
  // filtre işlemini music datasında yapacağımız için burada state tanımlamamız lazım.
  const [list, setList] = useState(MUSIC_DATA);

  // SongCard'ın render edilmesi için kullanılır. FlatList içerisinde dönen değer için
  const renderSong = ({item}) => {
    return <SongCard song={item} />;
  }

  // SongCard'lar arasında border oluşturmak için
  const renderSeperator = () => {
    return <View style={styles.seperator}></View>
  }

  // SearchBar'da yakalananları bu iişlevde tutup SearchBar compnent'ine props ile atıyoruz. 
  const handleSearch = text =>  {
    const filteredList = MUSIC_DATA.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList);
  }



  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.inner_container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  inner_container : {
    flex : 1,
  },
  seperator : {
    borderWidth : 0.8,
    borderColor : '#e0e0e0'
  }
})

export default App;