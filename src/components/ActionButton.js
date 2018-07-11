// @flow
import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

type Props = {
  label: string,
  onPress?: Function,
  style?: ViewStyleProp
}

const ActionButton = ({ label, onPress, style }: Props) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={styles.text}>
      {label}
    </Text>
  </TouchableOpacity>
)

ActionButton.defaultProps = {
  onPress: () => {},
  style: {}
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})

export default ActionButton