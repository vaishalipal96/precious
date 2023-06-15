import React from 'react';
import {  StyleSheet, View} from 'react-native';
import { Colors} from '../Utility';
import {DotIndicator} from 'react-native-indicators';
const Loader = props => {
  return (
   
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <DotIndicator size={15} color={Colors.themeColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    position: "absolute",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: "100%",
    width: "100%"
  },
  activityIndicatorWrapper: {
    height: 150,
    width: 150,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default Loader