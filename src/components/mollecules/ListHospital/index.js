import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {DummyHospital} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospital = ({type, name, address, pic}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={pic} />
      <View>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.addres}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  addres: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  container: {flexDirection: 'row', padding: 16},
  picture: {
    marginTop: 6,
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
});
