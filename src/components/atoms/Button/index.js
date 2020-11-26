import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, size, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.textDisable}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type, size)}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  disableBg: {
    backgroundColor: colors.button.disabe.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textDisable: {
    fontSize: 18,
    textAlign: 'center',
    //apakah dia typenya secondary ? kalo iya warna hitam kalo tidak warna putih
    color: colors.button.disabe.text,
  },
  container: (type) => ({
    //apakah dia typenya secondary ? kalo iya warna hitam kalo tidak warna putih
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type, size) => ({
    fontSize: size,
    textAlign: 'center',
    //apakah dia typenya secondary ? kalo iya warna hitam kalo tidak warna putih
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
});
