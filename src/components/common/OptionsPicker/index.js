import React from 'react';
import {
  Platform, Picker, View, Text,
} from 'react-native';

import BottomModalIOS from '../BottomModalIOS';

import styles from './styles';


function OptionsPicker({
  options, value, onChange, width, labelSuffix, visible, onClose, defaultValue,
}) {
  const getOptionsPicker = () => (
    <Picker
      // Package issue: now working
      mode="dialog"
      prompt="Select your age"
      selectedValue={value || defaultValue}
      style={Platform.OS === 'android' ? { maxHeight: 30, color: '#707070', width } : {}}
      onValueChange={(itemValue) => onChange(itemValue)}
    >
      {options.map((item) => (
        <Picker.Item key={item} label={String(item.label)} value={item.value} />
      ))}
    </Picker>
  );

  if (Platform.OS === 'ios') {
    const selectedOption = options.find((o) => o.value === value);

    return (
      <View>
        <Text style={styles.label}>
          {selectedOption ? `${selectedOption.label}${labelSuffix || ''}` : 'Select'}
        </Text>

        <BottomModalIOS visible={visible} onClose={onClose}>
          {getOptionsPicker()}
        </BottomModalIOS>
      </View>
    );
  }

  return getOptionsPicker();
}

OptionsPicker.defaultProps = {
  options: [],
  labelSuffix: '',
  width: '35%',
};

export default React.memo(OptionsPicker);
