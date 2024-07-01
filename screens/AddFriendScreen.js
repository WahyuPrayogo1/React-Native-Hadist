// AddFriendScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useFriends } from '../context/FriendContext';

const AddFriendScreen = ({ navigation }) => {
  const { addFriend } = useFriends();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddFriend = () => {
    if (name.trim() === '' || image.trim() === '' || phone.trim() === '') {
      Alert.alert('Error', 'Nama, URL Gambar, dan Nomor Telepon tidak boleh kosong');
      return;
    }

    const newFriend = {
      id: Date.now().toString(),
      name,
      image,
      phone,
    };

    addFriend(newFriend);
    Alert.alert('Sukses', 'Teman berhasil ditambahkan', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
    setName('');
    setImage('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Tambah Teman" onPress={handleAddFriend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default AddFriendScreen;
