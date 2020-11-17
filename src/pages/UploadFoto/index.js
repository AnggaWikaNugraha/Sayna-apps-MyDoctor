import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'
import Header from '../../components/mollecules/Header';
import { ILUserFotoNull } from '../../assets/ilustration';
import { BtnAddFoto } from '../../assets/icon';
import { Button, Link, Gap } from '../../components/atoms';
import { colors, fonts } from '../../utils';

const UploadFoto = ({navigation}) => {
      return (
            <View style={styles.page}>
                  <Header title='Upload Foto' onPress={() => navigation.goBack()}/>
                  <View style={styles.content}>
                        <View style={styles.profile}>
                              <View style={styles.avatarWrapper}>
                                    <Image source={ILUserFotoNull} style={styles.avatar}/>
                                    <BtnAddFoto style={styles.addFoto}/>
                              </View>
                              <Text style={styles.name}>Shayna Melinda</Text>
                              <Text style={styles.profession}>Product Deisgner</Text>
                        </View>
                        <View style={styles.click}>
                              <Button title='Upload and Continue'/>
                              <Gap height={30}/>
                              <Link title='Skip for this' align='center'size={16}/>
                        </View>
                  </View>
            </View>
      )
}

export default UploadFoto

const styles = StyleSheet.create({
      profile:{
            alignItems:"center",
            flex:1,
            justifyContent:"center"
      },
      profession:{
            fontSize:18,
            fontFamily:fonts.primary.normal,
            textAlign:"center",
            color:colors.text.secondary,
            marginTop:4
      },
      name:{
            fontSize:24,
            color:colors.text.primary,
            fontFamily:fonts.primary[600],
            textAlign:"center"
      },
      page:{
            flex:1,
            backgroundColor:colors.white
      },
      content:{
            // backgroundColor:'red',
            display:"flex",
            flex:1,
            justifyContent:"space-between",
            paddingBottom:40,
            paddingHorizontal:40
      },
      avatar:{
            width:110,
            height:110
      },
      avatarWrapper:{
            width:130,
            height:130,
            borderWidth:1,
            borderColor:colors.border,
            borderRadius: 130/2,
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
      },
      addFoto:{
            position:"absolute",
            bottom:8,
            right:6
      }
})
