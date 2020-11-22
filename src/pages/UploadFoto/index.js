import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Header from '../../components/mollecules/Header';
import {ILUserFotoNull} from '../../assets/ilustration';
import {BtnAddFoto, IcRemove} from '../../assets/icon';
import {Button, Link, Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {showMessage} from 'react-native-flash-message';
import Fire from '../../config/firebase';

const UploadFoto = ({navigation, route}) => {
  const {fullName, proffesion, uid} = route.params;
  const [photoForDb, setphotoForDb] = useState('');

  const [photo, setphoto] = useState(ILUserFotoNull);
  const [hasPhoto, sethasPhoto] = useState(false);
  const GetImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
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
        sethasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDb});
    navigation.navigate('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Foto" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={GetImage}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto && <BtnAddFoto style={styles.addFoto} />}
            {hasPhoto && <IcRemove style={styles.addFoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{proffesion}</Text>
        </View>
        <View style={styles.click}>
          <Button
            onPress={uploadAndContinue}
            disable={!hasPhoto}
            title="Upload and Continue"
          />
          <Gap height={30} />
          <Link
            onPress={() => navigation.replace('MainApp')}
            title="Skip for this"
            align="center"
            size={16}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadFoto;

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    // backgroundColor:'red',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  avatar: {
    borderRadius: 100 / 2,
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
