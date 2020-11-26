import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import List from '../../components/mollecules/List';
import {colors, fonts} from '../../utils';
import Fire from '../../config/firebase';
import {getData} from '../../utils/LocalStorage';

const Messages = ({navigation}) => {
  const [user, setuser] = useState({});
  const [historyChat, sethistoryChat] = useState([]);
  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messageDB = rootDB.child(urlHistory);
    messageDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const newData = [];
        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDcotor = await rootDB.child(urlUidDoctor).once('value');
          console.log(detailDcotor.val());
          newData.push({
            id: key,
            detailDoctor: detailDcotor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
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
        {historyChat.map((chat) => {
          const dataDoctor = {
            id: chat.detailDoctor.uid,
            data: chat.detailDoctor,
          };
          return (
            <List
              key={chat.id}
              desc={chat.lastContentChat}
              name={chat.detailDoctor.fullName}
              profile={{uri: chat.detailDoctor.photo}}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
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
