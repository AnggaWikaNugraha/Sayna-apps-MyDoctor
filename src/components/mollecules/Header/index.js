import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../atoms';
import {colors, fonts} from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type}) => {
  if (type == 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 10 : 0,
    borderBottomRightRadius: type === 'dark' ? 10 : 0,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
  }),
  title: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.primary[600],
  }),
});
