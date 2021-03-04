import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {keepLogin} from '../redux/action/authAction';
import LoginScreen from '../screen/LoginScreen';
import HomeDrawer from './HomeDrawer';

const MainNav = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(keepLogin());
  //   }, [dispatch]);

  const {isLogin} = useSelector((state) => state.auth);
  return <>{isLogin ? <HomeDrawer /> : <LoginScreen />}</>;
};

export default MainNav;
