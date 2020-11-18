import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        onPress={() => navigation.navigate('Chatting')}
        type="next"
        profile={DummyDoctor1}
        name="alexander janie"
        desc="wanita"
      />
      <List
        type="next"
        profile={DummyDoctor2}
        name="jogin McPaker Steve"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyDoctor3}
        name="nairobi putri Hayza"
        desc="wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {color: colors.white, flex: 1},
});
