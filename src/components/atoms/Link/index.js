import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, colors } from '../../../utils/Colors';

const Link = ({title , size , align}) => {
      return (
            <View>
                  <Text style={styles.Link(size , align)}>{title}</Text>
            </View>
      )
}

export default Link

const styles = StyleSheet.create({
      Link:(size , align) => ({
            fontSize:size,
            color: colors.text.secondary,
            textDecorationLine:"underline",
            textAlign:align
      })
})
