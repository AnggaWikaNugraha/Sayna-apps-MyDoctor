import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ILCatObat, IlCatPsikiater, ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILCatUmum style={styles.ILCatUmum} />;
    }
    if (category === 'psikiater') {
      return <IlCatPsikiater style={styles.ILCatUmum} />;
    }
    if (category === 'dokter obat') {
      return <ILCatObat style={styles.ILCatUmum} />;
    }
    return <ILCatObat style={styles.ILCatUmum} />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  ILCatUmum: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
