import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

export default class ImagePlaceholder extends Component {

  static defaultProps = {
    duration: 750,
    showActivityIndicator: true,
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fadeAnim: new Animated.Value(1),
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this._renderPlaceholder.bind(this)()}
        <Image 
          onProgress={this._onProgress.bind(this)}
          style={[styles.image, this.props.imageStyle]}
          source={{ uri: this.props.src }}
        />
      </View>
      );
  }

  _onProgress( event ){
    const progress = event.nativeEvent.loaded / event.nativeEvent.total;
    this.setState({ isLoading: progress < 1 });
  }

  _renderPlaceholder() {
    return (
      <Animated.View 
        style={this._getPlaceholderStyles()}>
        <Image 
          style={[styles.placeholder, this.props.placeholderStyle]}
          source={{ uri: this.props.placeholder }}
        />
        {this._renderActivityIndicator()}
      </Animated.View>
      );
  }

  _getPlaceholderStyles() {
    let container = [styles.placeholderContainer];
    if ( ! this.state.isLoading ) {
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: this.props.duration,
      }).start();  
      container.push({ opacity: this.state.fadeAnim });
    }
    container.push(this.props.placeholderContainerStyle);
    return container;
  }

  _renderActivityIndicator() {
    if ( this.props.showActivityIndicator ) {
      if ( this.props.ActivityIndicator ) {
        return this.props.ActivityIndicator;
      } else {
        return (
          <ActivityIndicator
            {...this.props.activityIndicatorProps}
            animating={this.state.isLoading}
          />
          );
      }
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  placeholderContainer: {
    flex:  1, 
    alignSelf: 'stretch',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    flex:  1, 
    alignSelf: 'stretch',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    flex: 1,
  },
});
