import React from 'react';
import { TextInput } from 'react-native';

import { colors } from '../../../utils';

import styles from './styles';


class SimpleInput extends React.PureComponent {
  render() {
    const {
      onChangeText, value, keyboardType, placeholder, isPassword, onEndEditing,
      style, placeholderColor, autoCapitalize, multiline, editable,
    } = this.props;

    return (
      <TextInput
        editable={editable}
        multiline={multiline}
        secureTextEntry={isPassword}
        onEndEditing={onEndEditing}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderColor}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        style={[styles.input, style]}
        keyboardType={keyboardType}
      />
    );
  }
}

SimpleInput.defaultProps = {
  placeholderColor: colors.grey,
  autoCapitalize: 'none',
};

export default SimpleInput;
