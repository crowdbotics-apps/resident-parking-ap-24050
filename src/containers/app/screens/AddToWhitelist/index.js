import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView } from 'react-native';

import { styles } from './styles';
import Input from '../../../../components/common/Input';
import Button from '../../../../components/common/Button';
import Header from '../../../../components/shared/Header';
import { addWhitelist } from '../../redux/actions';

const AddToWhitelist = (props) => {
  const [number, setNumber] = useState('');
  const onSave = () => {
    props.addWhitelist({ licence_plate: number });
    props.navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header title="Add to Whitelist" />

        <View style={{ paddingHorizontal: 24 }}>
          <Input onChangeText={setNumber} value={number} placeholder="License Plate Number" />

          <View style={{ flexDirection: 'row', marginTop: 32 }}>
            <Button
              small
              block={false}
              buttonStyle={{ flex: 1, marginRight: 8, backgroundColor: '#E1E1E1' }}
              onPress={() => props.navigation.goBack()}
            >
              Cancel
            </Button>
            <Button
              small
              block={false}
              buttonStyle={{ flex: 1, marginLeft: 8 }}
              onPress={onSave}
            >
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
  addWhitelist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddToWhitelist);
