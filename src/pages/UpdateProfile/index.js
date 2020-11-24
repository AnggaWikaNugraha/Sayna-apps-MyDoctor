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
import {showError} from '../../utils/ShowMessage';

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
    if (password.length > 0) {
      if (password < 6) {
        showError('password kurang dari 6');
      } else {
        //update password
        updatePassword();
        updateProfileData();
        navigation.navigate('MainApp');
      }
    } else {
      updateProfileData();
      navigation.navigate('MainApp');
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showError(err.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDb;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then((res) => {
        storeData('user', data);
      })
      .catch((err) => {
        showError(err.message);
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
          showError('oops tidak memilih foto');
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
            onChangeText={(e) => setpassword(e)}
            secureTextEntry
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
