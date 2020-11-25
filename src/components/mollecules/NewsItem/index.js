import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title__wrapper}>
        <View style={styles.title}>
          <Text>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      {/* cara memanggil image karena bentuk link http */}
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingTop: 1,
    paddingBottom: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 150,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  image: {width: 80, height: 60, borderRadius: 11},
  title__wrapper: {flex: 1},
});
