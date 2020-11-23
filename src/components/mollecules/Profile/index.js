import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyUser, IcRemove} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, profesi, isRemive, photo, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemive && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.avatar} />
          {isRemive && <IcRemove style={styles.removeFoto} />}
        </View>
      )}
      {isRemive && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemive && <IcRemove style={styles.removeFoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.nama}>{name}</Text>
          <Text style={styles.profesi}>{profesi}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profesi: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  nama: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeFoto: {position: 'absolute', right: 8, bottom: 8},
});
