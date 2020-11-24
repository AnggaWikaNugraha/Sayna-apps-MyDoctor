import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILUserFotoNull} from '../../assets';
import {Gap, Header, Profile} from '../../components';
import List from '../../components/mollecules/List';
import {getData} from '../../utils/LocalStorage';
import Fire from '../../config/firebase';
import {showMessage} from 'react-native-flash-message';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setprofile] = useState({
    fullName: '',
    proffesion: '',
    photo: ILUserFotoNull,
  });
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setprofile(res);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then((res) => {
        console.log('succes signout ', res);
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          profesi={profile.proffesion}
          photo={profile.photo}
        />
      )}

      <Gap height={14} />
      <List
        name="edit profile"
        desc="Last uptade yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="language"
        desc="Avaible 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Sign out"
        desc="Read out Guideines"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
