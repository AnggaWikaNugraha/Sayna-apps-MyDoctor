import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyUser, ILUserFotoNull} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {getData} from '../../../utils/LocalStorage';

const HomeProfile = ({onPress}) => {
  useEffect(() => {
    getData('user').then((res) => {
      console.log(res);
      //foto berupa string kita rubah ke sebuah objek
      const data = res;
      data.photo = {uri: res.photo};

      setprofile(res);
    });
  }, []);
  const [profile, setprofile] = useState({
    photo: ILUserFotoNull,
    fullName: '',
    proffesion: '',
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profesi}>{profile.proffesion}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    marginRight: 12,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
  },
  profesi: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
