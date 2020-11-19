import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/mollecules/Header';
import {Profile} from '../../components/mollecules';
import {Button, Gap, Input} from '../../components';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <Profile isRemive />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input label="full Name" />
          <Gap height={26} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={24} />
          <Input label="Save profile" />
          <Gap height={40} />
          <Button
            title="Save profile"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
