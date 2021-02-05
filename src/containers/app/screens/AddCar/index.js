import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View, SafeAreaView, Text, Alert, Image,
  TouchableOpacity, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { styles } from './styles';
import Input from '../../../../components/common/Input';
import Button from '../../../../components/common/Button';
import Loader from '../../../../components/common/Loader';
import ImageUploader from '../../../../components/common/ImageUploader';
import Header from '../../../../components/shared/Header';
import { addCar, updateCar } from '../../redux/actions';
import { colors } from '../../../../utils';

const AddCar = (props) => {
  const carData = props.navigation.getParam('carData');
  const [values, setValues] = useState(carData || {});
  const [newImageLoading, setImageLoading] = useState(false);

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

    if (carData) {
      if (!values.image.uri) {
        delete values.image;
      }
      delete values.property;
      delete values.resident;

      props.updateCar(values);
    } else {
      props.addCar(values);
    }
  };

  const onChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const selectImage = (img) => {
    setImageLoading(true);
    const fileNameParts = img.filename ? img.filename?.split('.') : [];
    const extension = fileNameParts.pop();
    const isHeic = extension?.toLowerCase() === 'heic';
    const finalName = isHeic || !img.filename || !extension
      ? `${fileNameParts.join() || Math.random()}.jpg`
      : img.filename;
    const item = {
      name: finalName,
      type: img.type,
      uri: img.uri,
    };

    setValues({ ...values, image: item });
    setImageLoading(false);
  };

  const removeImage = () => {
    setValues({
      ...values,
      image: null,
    });
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

          {/* <Text style={styles.photoInfo}>
            In order to request new vehicle, please upload photos of your Registration, Insurance, Licence Plate, Vehicle, Drivers Licence:
          </Text> */}

          {values.image ? (
            <View style={{ position: 'relative' }}>
              <Image style={styles.image} source={{ uri: values.image.uri || values.image }} />
              <TouchableOpacity style={styles.cross} onPress={() => removeImage()}>
                <Icon color="#000" size={16} name="circle-with-cross" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.uploadContainer}>
              <ImageUploader onUpload={selectImage} style={styles.addContainer}>
                <Image style={styles.addIcon} source={require('../../../../assets/images/plus.png')} />
                <Text style={{ color: colors.darkGrey, marginLeft: 8, fontSize: 16 }}>Upload</Text>
              </ImageUploader>
            </View>
          )}

          {newImageLoading ? <ActivityIndicator /> : null}

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

      <Loader isLoading={props.isLoading} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.App.isLoading,
});

const mapDispatchToProps = {
  addCar,
  updateCar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCar);
