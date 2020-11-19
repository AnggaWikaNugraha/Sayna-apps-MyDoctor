import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';
import {Header, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';
import {useForm} from '../../utils/UseForm';
import Fire from 'firebase';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((suc) => {
        console.log('succes :', suc);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log('error register', errorMessage);
        // ...
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={(e) => setForm('fullName', e)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={(e) => setForm('profession', e)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(e) => setForm('email', e)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(e) => setForm('password', e)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Continue" size={18} onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
