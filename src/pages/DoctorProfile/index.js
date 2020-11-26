import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import Header from '../../components/mollecules/Header';
import Profile from '../../components/mollecules/Profile';
import ProfileItem from '../../components/mollecules/ProfileItem';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  //ambil data yg sudah d kirim lewat navigation
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Doctor Profile" />
      <Profile
        name={dataDoctor.data.fullName}
        profesi={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
      />
      <Gap height={10} />
      <ProfileItem label="alumnus" value={dataDoctor.data.university} />
      <ProfileItem
        label="Tempat praktek "
        value={dataDoctor.data.hospital_address}
      />
      <ProfileItem label="no. STR" value={dataDoctor.data.str_number} />
      <Gap height={23} />
      <View style={styles.action}>
        <Button
          title="Start Consultasi"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
