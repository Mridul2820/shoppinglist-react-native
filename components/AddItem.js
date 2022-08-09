import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        value={text}
        onChangeText={text => setText(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Text style={styles.btntext}>
          Add Item <Icon name="plus" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btntext: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
