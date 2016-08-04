import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}
export default IScrolledDownAndWhatHappenedNextShockedMe;