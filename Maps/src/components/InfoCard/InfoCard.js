import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './InfoCard.style';

const InfoCard = ({visible, close, user}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackdropPress={close}
      onBackButtonPress={close}
      backdropOpacity={0.2}>
      <View style={styles.container}>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.full_name}>
          {user.first_name} - {user.last_name}
        </Text>
      </View>
    </Modal>
  );
};
export default InfoCard;
