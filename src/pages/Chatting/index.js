import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChatItem, Header} from '../../components';
import InputChat from '../../components/mollecules/InputChat';
import {colors, fonts, getChattime, setDateChat} from '../../utils';
import Fire from '../../config/firebase';
import {getData} from '../../utils/LocalStorage';
import {min} from 'react-native-reanimated';
import {showError} from '../../utils/ShowMessage';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatChontent, setchatChontent] = useState('');
  const [user, setuser] = useState({});
  useEffect(() => {
    getData('user').then((res) => {
      setuser(res);
    });
  }, []);
  const chatSend = () => {
    const today = new Date();
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChattime(today),
      chatContent: chatChontent,
    };
    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then((res) => {
        setchatChontent('');
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
          <ChatItem />
          <ChatItem isme />
          <ChatItem />
          <ChatItem isme />
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
