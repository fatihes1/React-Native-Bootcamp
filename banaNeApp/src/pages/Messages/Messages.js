import React from 'react';
import {SafeAreaView} from 'react-native';

import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal';
import styles from '././Messages.style.js';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    console.log(content);
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
