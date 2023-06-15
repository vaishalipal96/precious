import React from 'react';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import {
  Colors,
  WindowWidth as wp,
  headingTextSize,
  inputTextSize,
} from '../Utility';
import Fonts from '../Utility/Fonts';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SafeAreaView style={styles.headerTheme} />
        <View style={styles.container}>
          <View style={styles.topView}>
            <View style={styles.headerView}></View>
            <View style={styles.headerName}>
              <Text style={styles.homeText}>{this.props.name}</Text>
            </View>
            <View style={styles.headerView}></View>
          </View>
          <View style={styles.searchBox}>
            <TextInput
              ref={input => {
                this.props.textinput(input);
              }}
              placeholder={'Search Movie'}
              placeholderTextColor={Colors.placeholder}
              onChangeText={text => this.props.submit(text)}
              style={styles.inputText}
              keyboardType="default"
              returnKeyLabel="done"
              returnKeyType="done"
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />
            <View style={{width: '20%'}}>
              <Image
                style={styles.searchIcon}
                source={require('../assets/icons/search.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: (wp * 10) / 100,
    backgroundColor: Colors.theme2,
    borderBottomLeftRadius: (wp * 10) / 100,
    borderBottomRightRadius: (wp * 10) / 100,
  },
  headerTheme: {
    backgroundColor: Colors.theme2,
  },
  headerName: {
    width: '80%',
    alignItems: 'center',
  },
  headerView: {
    width: '10%',
    alignItems: 'center',
  },
  searchIcon: {
    width: (wp * 5) / 100,
    height: (wp * 5) / 100,
    tintColor: Colors.theme2,
  },
  topView: {
    width: (wp * 90) / 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: headingTextSize,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.NEC_Bold,
  },
  searchBox: {
    width: (wp * 90) / 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.borderColor,
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginTop: '5%',
  },
  inputText: {
    width: '85%',
    alignSelf: 'center',
    marginLeft: '5%',
    color: Colors.placeholder,
    fontSize: inputTextSize,
    fontFamily: Fonts.NEC_Regular,
    paddingVertical: (wp * 2) / 100,
  },
});

export default Header;
