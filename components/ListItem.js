import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listitem}>
      <View style={styles.listitemview}>
        <Text style={styles.listitemtext}>{item.text}</Text>
        <Icon
          name="delete"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  listitemview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listitemtext: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ListItem;
