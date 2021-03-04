import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginAction} from '../redux/action/authAction';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput placeholder="Username" onChangeText={(e) => setUsername(e)} />
      <TextInput placeholder="Password" onChangeText={(e) => setPassword(e)} />
      <Button title="Login" onPress={() => dispatch(loginAction(username))} />
    </View>
  );
};

export default LoginScreen;
