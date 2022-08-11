import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Config from 'react-native-config';

import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal';
import styles from '././Messages.style.js';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
    console.log(Config);
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
    };
    console.log(contentObject);

    const reference = firebase.app().database(Config.DB_URL).ref('/messages');
    reference.push(contentObject);
    // database().ref('/messages').push(contentObject);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Messages</Text> */}
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
