import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, start} from '../../../assets';
import {Start} from '../../../../src/assets/icon';
import {colors, fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RatedDoctor = ({onPress, name, desc, avatar}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <Start />
        <Start />
        <Start />
        <Start />
        <Start />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {fontSize: 12, fontFamily: fonts.primary.normal, marginTop: 2},
});
