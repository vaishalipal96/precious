import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  Colors,
  WindowHeight as hp,
  WindowWidth as wp,
  titleTextSize,
} from '../Utility';
import Fonts from '../Utility/Fonts';

const NoDataFound = props => {
  return (
    <View style={styles.NoDataFoundCss}>
      <Image
        style={styles.NoDataFoundImage}
        source={require('../assets/icons/notfound.png')}
      />
      <Text style={styles.NoDataFoundMsg}>No Data Found !</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  NoDataFoundCss: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: (hp * 50) / 100,
    width: wp,
  },
  NoDataFoundImage: {
    width: '17%',
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  NoDataFoundMsg: {
    marginTop: '3%',
    fontSize: titleTextSize,
    fontFamily: Fonts.NEC_Bold,
    color: Colors.black,
  },
});

export default NoDataFound;
