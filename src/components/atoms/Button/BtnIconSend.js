import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SendActive, SendUn} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <SendUn />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      {!disable && <SendActive />}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 3,
  }),
});
