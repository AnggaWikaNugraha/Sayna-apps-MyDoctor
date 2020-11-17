import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type , title , onPress ,size , icon}) => {
      if (type === 'icon-only'){
            return <IconOnly icon={icon} onPress={onPress}/>
      }
      else{
            return (
                  <TouchableOpacity style={styles.container(type)} onPress={onPress}>
                        <Text style={styles.text(type ,size)}>{title}</Text>
                  </TouchableOpacity>
            )
      }
      
}
export default Button;

const styles = StyleSheet.create({
      container: (type) =>({
            //apakah dia typenya secondary ? kalo iya warna hitam kalo tidak warna putih
            backgroundColor:type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
            paddingVertical: 10,
            borderRadius:10
      }),
      text:(type ,size) => ({
            fontSize:size,
            textAlign:"center",
            //apakah dia typenya secondary ? kalo iya warna hitam kalo tidak warna putih
            color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text ,
            fontFamily:fonts.primary[600],

      })
})
