import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View, SafeAreaView, Text, Alert,
} from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import Input from '../../../../components/common/Input';
import Button from '../../../../components/common/Button';
import Header from '../../../../components/shared/Header';
import { addGuest } from '../../redux/actions';

const AddCar = (props) => {
  const [values, setValues] = useState({
    date: new Date(),
  });
  const onSave = () => {
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
    props.addGuest({ ...values, date: moment(values.date).format('YYYY-MM-DD') });
    props.navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header title="Request a New Vehicle" />

        <View style={{ paddingHorizontal: 24 }}>
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
          <Input
            style={styles.input}
            onChangeText={(v) => onChange('parking_space', v)}
            value={values.parking_space}
            placeholder="Parking Space"
          />

          <Text style={styles.photoInfo}>
            In order to request new vehicle, please upload photos of your Registration, Insurance, Licence Plate, Vehicle, Drivers Licence:
          </Text>

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
)(AddCar);
