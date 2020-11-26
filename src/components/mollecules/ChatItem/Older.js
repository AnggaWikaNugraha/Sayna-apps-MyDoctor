import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Older = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={photo} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Older;

const styles = StyleSheet.create({
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  text: {fontSize: 14, fontFamily: fonts.primary.normal, color: colors.white},
  container: {
    paddingLeft: 16,
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
    maxWidth: '80%',
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.primary,
  },
});
