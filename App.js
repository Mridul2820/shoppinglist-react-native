import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import AddItem from './components/AddItem';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const data = [
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ];

  const [items, setItems] = useState(data);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Header.defaultProps = {
  title: 'Shopping List',
};

export default App;
