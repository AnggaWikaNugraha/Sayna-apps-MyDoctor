import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ChatItem, Header} from '../../components';
import InputChat from '../../components/mollecules/InputChat';
import {colors, fonts} from '../../utils';
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
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatChontent,
    };
    console.log(
      `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
    );
    Fire.database()
      .ref(
        `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,
      )
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
