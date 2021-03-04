import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const FeedScreen = () => {
  const {dataList} = useSelector((state) => state.datas);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text>Covid-19</Text>
      </View>
      <View>
        <View style={styles.totalContainer}></View>
        <View style={styles.recoveredContainer}></View>
        <View style={styles.deathContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  dataContainer: {
    flex: 1,
  },
  totalContainer: {
    flex: 1,
  },
  recoveredContainer: {
    flex: 1,
  },
  deathContainer: {
    flex: 1,
  },
});

export default FeedScreen;
