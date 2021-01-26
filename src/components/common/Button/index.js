import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Button(props) {
  const {
    onPress, small, block, buttonStyle, textStyle, theme, icon, children, content, disabled,
  } = props;
  const buttonStyles = [
    styles.button,
    theme === 'light' ? styles.light : styles.dark,
    small ? styles.small : {},
    block ? styles.block : {},
    disabled ? { opacity: 0.5 } : {},
    buttonStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    >
      {icon || null}
      {content || (
      <Text
        uppercase={false}
        style={[styles.buttonText, small ? styles.smallText : {}, textStyle]}
      >
        {children}
      </Text>
      )}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  block: true,
};

export default React.memo(Button);
