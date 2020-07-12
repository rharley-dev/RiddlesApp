import React from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

function Home(props) {
  const renderHomeItem = ({ item }) => {
    return (
      <ListItem title={item.name} subtitle={item.riddle} bottomDivider />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <FlatList
        
        data={props.riddles}
        renderItem={renderHomeItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
  },
});

export default Home;
