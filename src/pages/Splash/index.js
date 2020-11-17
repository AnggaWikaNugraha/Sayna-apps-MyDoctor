import React, { useEffect } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import {ILLogo} from '../../assets';
import { colors, fonts } from '../../utils';

const Splash = ({navigation}) => {
      //hooks
      useEffect ( () => {
            setTimeout(() => {
                  //replace untuk pindah halaman tanpa bisa back
                  navigation.replace('GetStarted')
            }, 3000);
      },[])
      return (
            <View style={styles.page}>
                  <ILLogo/>
                  <Text style={styles.TextStyle}>My Doctor</Text>
            </View>
      )
}

export default Splash;

const styles = StyleSheet.create({
     page:{
           flex:1,
           justifyContent:"center",
           alignItems:"center",
           backgroundColor:colors.white
     },
     TextStyle :{
           fontSize:20,
           fontFamily : fonts.primary[400],
           fontWeight: '600',
           color: colors.text.primary,
           marginTop:20
     }
})
