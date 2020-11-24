import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import Fire from '../../config/firebase';

const Splash = ({navigation}) => {
  //hooks
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.navigate('MainApp');
        } else {
          navigation.navigate('GetStarted');
        }
      }, 3000);
    });
    //unttuk menghapus page ini agar tidak d render ulang
    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.TextStyle}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  TextStyle: {
    fontSize: 20,
    fontFamily: fonts.primary[400],
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 20,
  },
});
