import React, {Component} from 'react';
import Header from '../Component/Header';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  WindowWidth as wp,
  titleTextSize,
} from '../Utility';
import Fonts from '../Utility/Fonts';
import {Rating} from 'react-native-rating-element';
import {connect} from 'react-redux';
import {arrayValidator} from '../Utility/validator';
import Loader from '../Component/Loader';
import NoDataFound from '../Component/noDataFound';
import {getMovieList} from '../Redux/actions/movieAction';

class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: null,
      pullRefresh: false,
      topRated: false,
    };
  }

  componentDidMount() {
    this.getMovieListing(0);
  }

  getMovieListing = async () => {
    await this.props.getMovieList();
    if (arrayValidator(this.props.movieData)) {
      this.setState({
        movieList: this.props.movieData,
        searchList: this.props.movieData,
        pullRefresh: false,
      });
    } else {
      this.setState({
        movieList: [],
      });
    }
  };

  SearchMovie = text => {
    console.log('search', text);
    let masterDataSource = this.state.searchList;

    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.movie
          ? item.movie.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log('newDatanewData', newData);
      this.setState({movieList: newData});
    } else {
      this.setState({movieList: this.state.searchList});
    }
  };

  sortMovie = value => {
    let sortMovieList = [];
    if (this.state.topRated) {
      sortMovieList = this.props.movieData.sort((a, b) => a.rating - b.rating);
    } else {
      sortMovieList = this.props.movieData.sort((a, b) => b.rating - a.rating);
    }
    this.setState({
      movieList: sortMovieList,
    });
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <StatusBar backgroundColor={Colors.theme2} barStyle="light-content" />
          <Header
            name={'Movies'}
            search={true}
            back={() => {
              this.props.navigation.goBack();
            }}
            submit={text => {
              this.SearchMovie(text);
            }}
            textinput={input => {
              this.textinput = input;
            }}
          />
          <View style={styles.mainView}>
            <View style={{width: '95%', alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    topRated: !this.state.topRated,
                  });
                  this.sortMovie();
                }}
                style={[
                  styles.btnStyle,
                  {
                    backgroundColor: this.state.topRated
                      ? Colors.theme2
                      : Colors.white,
                  },
                ]}>
                <Text style={[styles.btnText,{ color: this.state.topRated ? Colors.white : Colors.black}]}>Top Rated Movies</Text>
              </TouchableOpacity>
              {this.props.movieData != null && (
                <FlatList
                  data={this.state.movieList}
                  onRefresh={() => this.getMovieListing()}
                  refreshing={this.state.pullRefresh}
                  renderItem={({item, index}) => {
                    return (
                      <View key={index} style={styles.cardView}>
                        <View style={styles.listView}>
                          <Text numberOfLines={1} style={styles.listText}>
                            {item.movie}
                          </Text>
                          <View style={styles.ratingView}>
                            <Rating
                              rated={10}
                              totalCount={item.rating}
                              size={15}
                              type="custom"
                              selectedIconImage={require('../assets/icons/star.png')}
                            />
                            <Text style={styles.ratingText}>
                              ({item.rating})
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              )}
              {this.state.movieList?.length == 0 && <NoDataFound />}
            </View>
          </View>
        </View>
        {this.props.loading === true && <Loader />}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightpink,
  },
  mainView: {
    flex: 1,
    width: (wp * 95) / 100,
    alignSelf: 'center',
    marginBottom: (wp * 25) / 100,
  },
  btnStyle: {
    borderColor: Colors.theme2,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: '5%',
    width: '50%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingVertical: '4%',
  },
  btnText: {
    width: '90%',
    fontSize: titleTextSize,
    fontFamily: Fonts.NEC_Bold,
    textAlign: 'center',
  },
  cardView: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightpink,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '5%',
    paddingVertical: '2%',
    shadowOffset: {width: -2, height: 4},
    shadowColor: Colors.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  listView: {
    marginTop: '3%',
    width: '100%',
    alignSelf: 'center',
  },
  listText: {
    width: '90%',
    fontSize: titleTextSize,
    fontFamily: Fonts.NEC_Bold,
    color: Colors.black,
    alignSelf: 'center',
  },
  ratingView: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: '2%',
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: titleTextSize,
    fontFamily: Fonts.NEC_Bold,
    color: Colors.black,
    left: '5%',
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    loading: state.movieReducer.loading,
    errMsg: state.movieReducer.errMsg,
    movieData: state.movieReducer.movieData,
  };
};

const mapDispatchToProps = {getMovieList};

export default connect(mapStateToProps, mapDispatchToProps)(APP);
