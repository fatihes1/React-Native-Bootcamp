import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions} from "react-native";

import NEWS_DATA from "./news_data.json";
import NEWS_BANNER_DATA from "./news_banner_data.json";
import NewsCard from "./components/NewsCard";

const App = () => {
  const renderNews = ({item}) =>   <NewsCard news={item}/>;
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.header_text}>News</Text>
        {/* <FlatList
          data={[1,2,3,4,5]}
          renderItem={(data) => <Text>{data.item}</Text>}
         /> */}
        <FlatList
          ListHeaderComponent={() => (<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              NEWS_BANNER_DATA.map(bannerNews => (<Image key={bannerNews.id} style={Styles.banner_image} source={{uri: bannerNews.imageUrl}} />))
            }
          </ScrollView>)}
          keyExtractor={(item, index) => item.u_id.toString()}
          data={NEWS_DATA}
          renderItem={renderNews}
          // bu alanda her item json içerisindeki her bir nesneyi temsil eder 
        />
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#eceff1'
  },
  banner_image : {
    height : Dimensions.get('window').height / 4,
    width : Dimensions.get('window').width / 2
  },
  header_text : {
    fontWeight: 'bold',
    fontSize : 40,
    color : 'black',
    textAlign : 'center'
  }
})

export default App;