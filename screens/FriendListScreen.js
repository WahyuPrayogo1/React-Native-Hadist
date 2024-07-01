// FriendListScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFriends } from '../context/FriendContext';

const FriendListScreen = ({ navigation }) => {
  const { friends } = useFriends();

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FriendDetail', { friend: item })}>
            <View style={styles.friendContainer}>
              <Image source={{ uri: item.image }} style={styles.friendImage} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>{item.name}</Text>
                <Text style={styles.friendPhone}>{item.phone}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  friendImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 18,
  },
  friendPhone: {
    color: 'gray',
  },
});

export default FriendListScreen;
