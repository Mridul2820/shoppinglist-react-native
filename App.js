import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';

const App = () => {
  const data = [
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ];

  const [items, setItems] = useState(data);
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
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
