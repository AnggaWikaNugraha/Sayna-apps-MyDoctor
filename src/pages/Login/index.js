import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';
import {useForm} from '../../utils/UseForm';
import Fire from '../../config/firebase';
import {ScrollView} from 'react-native-gesture-handler';
import {storeData} from '../../utils/LocalStorage';
import {useDispatch} from 'react-redux';
import {showError} from '../../utils/ShowMessage';

const Login = ({navigation}) => {
  const [form, setform] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true,
    });
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
        //ambil data user dari database
        Fire.database()
          .ref(`users/${res.user.uid}`)
          .once('value')
          .then((resDb) => {
            console.log('data user', resDb.val());
            if (resDb.val()) {
              storeData(resDb.val());
              navigation.navigate('MainApp');
            }
          });
      })
      .catch((err) => {
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
        showError(err.message);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Gap height={40} />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Gap height={40} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(e) => setform('email', e)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(e) => setform('password', e)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign in" size={18} onPress={login} />
          <Gap height={30} />
          <Link
            onPress={() => navigation.navigate('Register')}
            title="Cerate New Accout"
            size={16}
            align="center"
          />
        </ScrollView>
      </View>
    </>
  );
};
export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    maxWidth: 153,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 20,
  },
});
