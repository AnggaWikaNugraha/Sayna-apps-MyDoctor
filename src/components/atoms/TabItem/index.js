import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDoctor, IconMessages, IconHospitals, IconDoctorActive, IconMessagesActive, IconHospitalsActive } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TabItem = ({title , active , onPress , onLongPress}) => {
      const Icon = () => {
            if (title=== 'Doctor'){
                  return active ? <IconDoctorActive/> : <IconDoctor/>
            }
            if(title=== 'Message'){
                  return active ? <IconMessagesActive/> : <IconMessages/>
            }
            if(title=== 'Hospitals'){
                  return active ? <IconHospitalsActive/> : <IconHospitals/>
            }
            return <IconDoctor/>
      }
      return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
                  <Icon/>
                  <Text style={styles.Text(active)}>{title}</Text>
            </TouchableOpacity>
      )
}

export default TabItem

const styles = StyleSheet.create({
      container:{
            alignItems:"center"
      },
      Text:(active) => (
            {
                  fontSize:10,
                  color: active ? colors.text.menuactive : colors.text.menuinactive,
                  fontFamily: fonts.primary[600],
                  marginTop:4
            }
      )
})
