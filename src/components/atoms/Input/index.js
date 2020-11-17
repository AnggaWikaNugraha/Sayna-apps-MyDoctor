import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

const Input = ({label}) => {
      return (
            <View>
                  <Text style={styles.label}>{label}</Text>
                  <TextInput style={styles.Input}></TextInput>
            </View>
      )
}
export default Input;

const styles = StyleSheet.create({
      label:{
            fontSize:16,
            color:colors.text.secondary
      },
      Input:{
            borderWidth:1,
            padding:10,
            borderRadius:10,
            borderColor: colors.border
      }
})
