import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILLogo, IGetStarted } from '../../assets'
import { Button, Gap } from '../../components'
import { colors } from '../../utils'

const GetStarted = ({navigation}) => {
      return (
            <ImageBackground source={IGetStarted} style={styles.page}>
                 <View style={styles.logoTitle}>
                        <ILLogo/>
                 </View>
                  <View style={{marginTop:70}}>
                                                                              {/* navigate bisa back */}
                        <Button size={18} title='Get Started' onPress={() => navigation.navigate('Register')}/>
                        <Gap height={16}/>
                                                                              {/* replace tidak bisa back  */}
                        <Button size={18} title='Sign In' type='secondary' onPress={ () => navigation.replace('Login')}/>
                  </View>
            </ImageBackground>
      )
}

export default GetStarted;
const styles = StyleSheet.create({
      page:{
            flex:1,
            backgroundColor:colors.white,
            padding:40,
            justifyContent:"space-between"
      },
      logoTitle:{
            flex:1 , 
            justifyContent:"flex-start"
      },
})
