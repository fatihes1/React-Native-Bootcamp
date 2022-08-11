import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';

import FloatingButton from '../../components/FloatingButton';
import MessageCard from '../../components/MessageCard';
import ContentInputModal from '../../components/Modal/ContentInputModal';
import parseContentData from '../../utils/parseContentData';
import styles from '././Messages.style.js';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    const reference = firebase.app().database(Config.DB_URL).ref('/messages');
    reference.on('value', snapshot => {
      const contentData = snapshot.val();
      if (!contentData) {
        return;
      }
      const parsedData = parseContentData(contentData || {});
      setContentList(parsedData);
    });
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
    // database().ref('/messages/');
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    console.log(contentObject);

    const reference = firebase.app().database(Config.DB_URL).ref('/messages');
    reference.push(contentObject);
  };

  const handleBanane = item => {
    const reference = firebase
      .app()
      .database(Config.DB_URL)
      .ref(`/messages/${item.id}`);
    reference.update({dislike: item.dislike + 1});
  };

  const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={() => handleBanane(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Messages</Text> */}
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton iconName="plus" onPressMethod={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Messages;
