import React from "react";
import { SafeAreaView, Text } from "react-native";

import FloatingButton from "../../components/FloatingButton";
import styles from '././Messages.style.js';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" />
    </SafeAreaView>
  );
};

export default Messages;