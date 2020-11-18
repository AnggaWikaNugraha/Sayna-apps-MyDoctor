import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SendActive, SendUn} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <SendActive />}
      {!disable && <SendUn />}
    </View>
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
