import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { SearchBar, Card, Button, Icon } from 'react-native-elements';


state = {
  search: '',
};

updateSearch = search => {
  this.setState({ search });
};

export default function HomeScreen() {
  
  const { search } = this.state;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <SearchBar
            placeholder="Type Here...." 
            lightTheme={true}
            platform="android"
            round={true}
            containerStyle={styles.searchbar}
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        <View style={styles.twoActivities}>
          <Image
            source={require('../assets/images/bicycle.jpg')}
            style={styles.cardstyle}
          />
          <Image
            source={require('../assets/images/bicycle.jpg')}
            style={styles.cardstyle}
          />
        </View>
        <View style={styles.twoActivities}>
          <ImageBackground
            source={require('../assets/images/bicycle.jpg')}
            style={styles.cardstyle}
          >
            <Text>Hello</Text>
          </ImageBackground>
          <Image
            source={require('../assets/images/bicycle.jpg')}
            style={styles.cardstyle}
          />
        </View>
        <View style={styles.twoActivities}>
          <Image
            source={require('../assets/images/bicycle.jpg')}
            style={styles.cardstyle}
          />
          <Image
            source={require('../assets/images/bicycle.jpg')}
            style={styles.cardstyle}
          />
        </View>
      </ScrollView>

      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbar:{
    backgroundColor: '#fafafa',
    width: '95%',
    borderRadius: 10,
  },
  cardstyle:{
    flex: 1,
    borderRadius: 10,
    margin: 10,
    opacity: 0.6,
  },
  twoActivities:{
    flexDirection: 'row',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
