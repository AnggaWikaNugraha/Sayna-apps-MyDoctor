import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import List from '../../components/mollecules/List';
import {Header} from '../../components';
import {colors} from '../../utils';
import Fire from '../../config/firebase';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setlistDoctor] = useState([]);
  const doktorCategory = route.params;
  useEffect(() => {
    callDoctorByCategory(doktorCategory.category);
  }, []);

  //ambil category secara spesifik parameter sesuai yg d klik
  const callDoctorByCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setlistDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`pilih ${doktorCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((doc) => {
        return (
          <List
            onPress={() => navigation.navigate('Chatting')}
            type="next"
            profile={{uri: doc.data.photo}}
            name={doc.data.fullName}
            desc={doc.data.gender}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {color: colors.white, flex: 1},
});
