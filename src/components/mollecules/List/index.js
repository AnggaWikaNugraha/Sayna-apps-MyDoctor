import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  AccountIcon,
  LanguageIcon,
  RateIcon,
  DescIcon,
  IconNext,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({onPress, icon, profile, name, desc, type}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <AccountIcon />;
    }
    if (icon === 'language') {
      return <LanguageIcon />;
    }
    if (icon === 'rate') {
      return <RateIcon />;
    }
    if (icon === 'help') {
      return <DescIcon />;
    }
    return <AccountIcon />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? <Icon /> : <Image style={styles.avatar} source={profile} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
