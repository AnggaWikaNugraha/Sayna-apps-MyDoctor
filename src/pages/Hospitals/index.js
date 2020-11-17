import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../assets';
import ListHospital from '../../components/mollecules/ListHospital';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground style={styles.background} source={ILHospitalBG}>
        <Text style={styles.title}>Nearby hospital</Text>
        <Text style={styles.desc}>Tersedia</Text>
      </ImageBackground>
      <View style={styles.contexnt}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy family and kids"
          address="Jln. langen"
          pic={DummyHospital2}
        />
        <ListHospital
          address="Jln. merdeka adipatur"
          type="Rumah Sakit jiwa"
          name="Tingkatan paling atas"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  contexnt: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    marginTop: 6,
    textAlign: 'center',
  },
});
