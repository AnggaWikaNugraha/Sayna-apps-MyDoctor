import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header} from '../../components';
import InputChat from '../../components/mollecules/InputChat';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Nairobi Putri Hayza" />
      <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
      <View style={styles.content}>
        <ChatItem />
        <ChatItem isme />
        <ChatItem />
        <ChatItem isme />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  content: {flex: 1},
  page: {backgroundColor: colors.white, flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
