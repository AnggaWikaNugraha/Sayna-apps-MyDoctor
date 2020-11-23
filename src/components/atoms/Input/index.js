import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setborder] = useState(colors.border);
  const onFocusForm = () => {
    setborder(colors.tertiary);
  };
  const onBlurForm = () => {
    setborder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlurForm}
        style={styles.Input(border)}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}></TextInput>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  Input: (border) => ({
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: border,
  }),
});
