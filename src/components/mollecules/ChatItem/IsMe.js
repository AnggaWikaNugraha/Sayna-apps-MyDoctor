import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({isMe}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>apakah betul memakan jeruk bagus ?</Text>
      </View>
      <Text style={styles.date}>4.20 Am</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  text: {fontSize: 14, fontFamily: fonts.primary.normal},
  container: {paddingRight: 16, marginBottom: 20, alignItems: 'flex-end'},
  chatContent: {
    maxWidth: '70%',
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    backgroundColor: colors.cardLight,
  },
});
