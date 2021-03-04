import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/action/authAction';

const AccountScreen = () => {
  const dispatch = useDispatch();
  return <Button title="Logout" onPress={() => dispatch(logoutAction())} />;
};

export default AccountScreen;
