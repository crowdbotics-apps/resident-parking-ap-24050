import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View, SafeAreaView, TouchableOpacity, Text, Alert,
} from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Input from '../../../../components/common/Input';
import Button from '../../../../components/common/Button';
import DateTimePicker from '../../../../components/common/DateTimePicker';
import Header from '../../../../components/shared/Header';
import { addGuest } from '../../redux/actions';

const AddGuest = (props) => {
  const [values, setValues] = useState({
    date: new Date(),
  });
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const onSave = () => {
    if (!values?.name) {
      Alert.alert('Name is a required field.');
      return;
    }
    if (!values?.license_plate) {
      Alert.alert('License plate is a required field.');
      return;
    }
    if (!values?.car_model) {
      Alert.alert('Car model is a required field.');
      return;
    }
    if (!values?.car_color) {
      Alert.alert('Car color is a required field.');
      return;
    }
    if (!values?.date) {
      Alert.alert('Date is a required field.');
      return;
    }
    props.addGuest({ ...values, date: moment(values.date).format('YYYY-MM-DD') });
    props.navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const showPicker = () => {
    setDatePickerVisible(true);
  };

  const hidePicker = () => {
    setDatePickerVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header title="Add New Guest" />

        <View style={{ paddingHorizontal: 24 }}>
          <Input
            style={styles.input}
            onChangeText={(v) => onChange('name', v)}
            value={values.name}
            placeholder="Name"
          />
          <Input
            style={styles.input}
            onChangeText={(v) => onChange('license_plate', v)}
            value={values.license_plate}
            placeholder="License plate"
          />
          <Input
            style={styles.input}
            onChangeText={(v) => onChange('car_model', v)}
            value={values.car_model}
            placeholder="Car model"
          />
          <Input
            style={styles.input}
            onChangeText={(v) => onChange('car_color', v)}
            value={values.car_color}
            placeholder="Car color"
          />

          <TouchableOpacity onPress={showPicker}>
            <Text style={styles.label}>Date:</Text>
            <View style={styles.input}>
              <Text style={styles.inputText}>{moment(values.date).format('LL')}</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 32 }}>
            <Button small block={false} buttonStyle={styles.cancelButton} onPress={() => props.navigation.goBack()}>
              Cancel
            </Button>
            <Button small block={false} buttonStyle={styles.saveButton} onPress={onSave}>
              Save
            </Button>
          </View>
        </View>
      </View>

      <DateTimePicker value={values.date} onChange={(v) => onChange('date', v)} visible={isDatePickerVisible} onClose={hidePicker} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

const mapDispatchToProps = {
  addGuest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddGuest);
