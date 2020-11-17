import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Input, Button, Gap } from '../../components'
import { colors } from '../../utils'


const Register = ({navigation}) => {
      return (
            <View style={styles.page}>
                  <Header onPress={() => navigation.goBack() } title='Daftar Akun'/>
                 <View style={styles.container}>
                        <Input label='Full Name'/>
                        <Gap height={24}/>
                        <Input label='Pekerjaan'/>
                        <Gap height={24}/>
                        <Input label='Email Address'/>
                        <Gap height={24}/>
                        <Input label='Password'/>
                        <Gap height={40}/>
                        <Button title='Continue' size={18} onPress={ () => navigation.replace('UploadFoto')}/>
                 </View>
            </View>
      )
}
export default Register;

const styles = StyleSheet.create({
      container:{
            padding:40,
            paddingTop:0
      },
      page:{
            flex:1,
            backgroundColor: colors.white
      }
})
