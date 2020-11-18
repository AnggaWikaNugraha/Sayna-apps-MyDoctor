import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';
import Older from './Older';

const ChatItem = ({isme}) => {
  if (isme) {
    return <IsMe />;
  }
  return <Older />;
};

export default ChatItem;

const styles = StyleSheet.create({});
