import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChatItem, Header} from '../../components';
import InputChat from '../../components/mollecules/InputChat';
import {colors, fonts, getChattime, setDateChat} from '../../utils';
import Fire from '../../config/firebase';
import {getData} from '../../utils/LocalStorage';
import {showError} from '../../utils/ShowMessage';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatChontent, setchatChontent] = useState('');
  const [user, setuser] = useState({});
  const [chatData, setchatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setchatData(allDataChat);
        }
      });
  }, []);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setuser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChattime(today),
      chatContent: chatChontent,
    };
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatID}`;
    const dataHistoryChatForUser = {
      lastContentChat: chatChontent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.data.uid,
    };
    const dataHistoryChatForDoctor = {
      lastContentChat: chatChontent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then((res) => {
        setchatChontent('');
        //set history untuk user
        Fire.database().ref(urlMessageUser).set(dataHistoryChatForUser);
        //set history untuk doctor
        Fire.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor);
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        desc={dataDoctor.data.profession}
        title={dataDoctor.data.fullName}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isme={itemChat.data.sendBy === user.uid}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={
                        itemChat.data.sendBy === user.uid
                          ? null
                          : {uri: dataDoctor.data.photo}
                      }
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatChontent}
        onChangeText={(value) => setchatChontent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  content: {flex: 1},
  page: {backgroundColor: colors.white, flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
