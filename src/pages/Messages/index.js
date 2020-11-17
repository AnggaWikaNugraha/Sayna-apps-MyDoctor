import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {ListDoctor} from '../../components/mollecules';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander janni',
      desc: 'Baik bu , terimakasih',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'nairobi putri hayza',
      desc: 'oh tentu saja tidak',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Johm Mcpaker steve',
      desc: 'Oke menuru saya dokter bagaimana',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doc) => (
          <ListDoctor
            key={doc.id}
            desc={doc.desc}
            name={doc.name}
            profile={doc.profile}
          />
        ))}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
