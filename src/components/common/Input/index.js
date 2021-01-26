import React from 'react';
import {
  TextInput, View, TouchableOpacity, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import { colors } from '../../../utils';

import styles from './styles';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordHidden: true,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      isPasswordHidden: !prevState.isPasswordHidden,
    }));
  }

  render() {
    const {
      onChangeText, value, keyboardType, placeholder, isPassword, editable,
      style, placeholderColor, autoCapitalize, multiline,
    } = this.props;
    const { isPasswordHidden } = this.state;

    const renderInput = () => {
      if (isPassword) {
        return (
          <View style={styles.inputContainer}>
            <TextInput
              editable={editable}
              value={value}
              onChangeText={onChangeText}
              placeholder={`Enter Your ${placeholder}`}
              placeholderTextColor={placeholderColor}
              style={styles.input}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              secureTextEntry={isPasswordHidden}
            />

            <TouchableOpacity style={styles.iconContainer} onPress={this.togglePasswordVisibility}>
              <Icon size={18} color={colors.black} name={isPasswordHidden ? 'eye-closed' : 'eye'} />
            </TouchableOpacity>
          </View>
        );
      }

      return (
        <TextInput
          editable={editable}
          multiline={multiline}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderColor}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          placeholder={`Enter ${placeholder}`}
          style={[styles.input, style]}
          keyboardType={keyboardType}
        />
      );
    };

    return (
      <View>
        <Text style={styles.label}>{`${placeholder}:`}</Text>
        {renderInput()}
      </View>
    );
  }
}

Input.defaultProps = {
  placeholderColor: colors.grey,
  autoCapitalize: 'none',
};

export default Input;
