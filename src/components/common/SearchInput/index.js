import React from 'react';
import { TextInput, View, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { colors } from '../../../utils';

import styles from './styles';

class SearchInput extends React.PureComponent {
  handleDone = () => {
    Keyboard.dismiss();
  }

  render() {
    const {
      onChangeText, value, keyboardType, placeholder,
      placeholderColor, autoCapitalize, editable, autoFocus,
    } = this.props;

    return (
      <View style={styles.inputContainer}>
        <TextInput
          editable={editable}
          autoFocus={autoFocus}
          value={value}
          pointerEvents={editable ? 'auto' : 'none'}
          returnKeyLabel="Done"
          returnKeyType="done"
          onSubmitEditing={this.handleDone}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={styles.input}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
        />

        <Icon size={18} color={colors.darkGrey} name="search1" />
      </View>
    );
  }
}

SearchInput.defaultProps = {
  placeholderColor: '#CFCED0',
  placeholder: 'Search',
  autoCapitalize: 'none',
  editable: true,
};

export default SearchInput;
