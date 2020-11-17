import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {ILLogo} from '../../assets';
import { Input, Link, Button, Gap } from '../../components/atoms';
import { colors, fonts } from '../../utils';

const Login = ({navigation}) => {
      return (
            <View style={styles.page}>
                  <ILLogo/>
                  <Gap height={40}/>
                  <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                  <Gap height={40}/>
                  <Input label='Email Address'/>
                  <Gap height={24}/>
                  <Input label='Password'/>
                  <Gap height={10}/>
                  <Link title='Forgot My Password' size={12}/>
                  <Gap height={40}/>
                  <Button title='Sign in' size={18} onPress={()=> navigation.replace('MainApp')}/>
                  <Gap height={30}/>
                  <Link title='Cerate New Accout' size={16} align='center'/>
            </View>
      )
}
export default Login;

const styles = StyleSheet.create({
      page:{
            padding:40,
            flex:1,
            backgroundColor:colors.white
      },
      title:{
            maxWidth:153,
            fontFamily:fonts.primary[400],
            color:colors.text.primary,
            fontSize:20,
      }
})
