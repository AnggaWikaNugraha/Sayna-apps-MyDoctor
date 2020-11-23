import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILUserFotoNull} from '../../assets';
import {Gap, Header, Profile} from '../../components';
import List from '../../components/mollecules/List';
import {getData} from '../../utils/LocalStorage';

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
        name="Help Center"
        desc="Read out Guideines"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
