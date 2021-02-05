import React from 'react';
import { TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { styles } from './styles';

class ImageUploader extends React.PureComponent {
  handleImageUpload = () => {
    /**
    * The first arg is the options object for customization
    (it can also be null or omitted for default options),
    * The second arg is the callback which sends object: response (more info in the API Reference)
    */
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.props.onUpload(response);
      }
    });
  }

  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity onPress={this.handleImageUpload} style={[styles.container, style]}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default ImageUploader;
