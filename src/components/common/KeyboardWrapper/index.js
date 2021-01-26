import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';

const KeyboardWrapper = ({ children }) => {
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView behavior="padding">
        {children}
      </KeyboardAvoidingView>
    );
  }
  return (
    <>
      {children}
    </>
  );
};

export default KeyboardWrapper;
