import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import Header from '../../components/mollecules/Header';
import Profile from '../../components/mollecules/Profile';
import ProfileItem from '../../components/mollecules/ProfileItem';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Doctor Profile" />
      <Profile name="Nairobi Putri Hayza" profesi="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="alumnus" value="Universitas indonesia , 2020" />
      <ProfileItem label="Tempat praktek " value="Rumah sakit Umum" />
      <ProfileItem label="no. STR" value="0001116662087" />
      <Gap height={23} />
      <View style={styles.action}>
        <Button
          title="Start Consultasi"
          onPress={() => navigation.navigate('Chatting')}
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
