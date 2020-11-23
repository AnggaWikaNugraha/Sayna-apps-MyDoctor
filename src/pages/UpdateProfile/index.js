import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/mollecules/Header';
import {Profile} from '../../components/mollecules';
import {Button, Gap, Input} from '../../components';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {getData, storeData} from '../../utils/LocalStorage';
import Fire from '../../config/firebase';
import {showMessage} from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import {ILUserFotoNull} from '../../assets';

const UpdateProfile = ({navigation}) => {
  const [profile, setprofile] = useState({
    fullName: '',
    proffesion: '',
    email: '',
  });

  const [password, setpassword] = useState('');
  const [photo, setphoto] = useState(ILUserFotoNull);
  const [photoForDb, setphotoForDb] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setphoto({uri: res.photo});
      setprofile(data);
    });
  }, []);

  const update = (e) => {
    console.log('updatennya :', profile);
    const data = profile;
    data.photo = photoForDb;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then((res) => {
        console.log('succes:', data);
        storeData('user', data);
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

  const changeText = (key, value) => {
    setprofile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        if (response.didCancel || response.error) {
          showMessage({
            message: 'ops , tidak memilih foto',
            type: 'defaults',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          //ambil type dan data untuk mmendapatkan data foto
          setphotoForDb(`data:${response.type};base64, ${response.data}`);
          const source = {uri: response.uri};

          setphoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <Profile isRemive photo={photo} onPress={getImage} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            label="full Name"
            value={profile.fullName}
            onChangeText={(e) => changeText('fullName', e)}
          />
          <Gap height={26} />
          <Input
            label="Pekerjaan"
            value={profile.proffesion}
            onChangeText={(e) => changeText('proffesion', e)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={(e) => changeText('email', e)}
          />
          <Gap height={24} />
          <Button title="Save profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
