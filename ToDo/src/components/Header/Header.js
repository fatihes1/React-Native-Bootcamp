import React from 'react'
import { View,Text } from 'react-native'
import styles from './Header.style'
const Header = props => {

  const filteredTodos = props.item.filter(todo => todo.completed);

  return (
    <View style={styles.container}>
        <Text style={styles.brandText}>TODO APP</Text>
        <Text style={styles.todoLength}>{filteredTodos.length}</Text>
    </View>
  )
}

export default Header