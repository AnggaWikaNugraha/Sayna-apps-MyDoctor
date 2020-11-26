import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';
import Older from './Older';

const ChatItem = ({isme, text, date, photo}) => {
  if (isme) {
    return <IsMe text={text} date={date} />;
  }
  return <Older text={text} date={date} photo={photo} />;
};

export default ChatItem;

const styles = StyleSheet.create({});
