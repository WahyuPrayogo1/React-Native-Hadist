// FriendDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: friend.image }} style={styles.image} />
      <Text style={styles.text}>Nama: {friend.name}</Text>
      <Text style={styles.text}>Nomor Telepon: {friend.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default FriendDetailScreen;
