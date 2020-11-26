import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import List from '../../components/mollecules/List';
import {colors, fonts} from '../../utils';
import Fire from '../../config/firebase';
import {getData} from '../../utils/LocalStorage';

const Messages = ({navigation}) => {
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
  const [user, setuser] = useState({});
  const [historyChat, sethistoryChat] = useState([]);
  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user.uid}/`;
    Fire.database()
      .ref(urlHistory)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const newData = [];
          Object.keys(oldData).map((key) => {
            newData.push({
              id: key,
              ...oldData[key],
            });
          });
          console.log(newData);
          sethistoryChat(newData);
        }
      });
  }, [user.id]);
  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setuser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map((chat) => (
          <List
            key={chat.id}
            desc={chat.lastContentChat}
            name={chat.uidPartner}
            profile={chat.uidPartner}
            onPress={() => navigation.navigate('Chatting')}
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
