import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView } from 'react-native';

import { styles } from './styles';
import Input from '../../../../components/common/Input';
import Header from '../../../../components/shared/Header';
import { getProfile } from '../../redux/actions';
import Button from '../../../../components/common/Button';

const Credentials = (props) => {
  const { profile, navigation } = props;

  useEffect(() => {
    props.getProfile();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header title="Credentials" />

        <View style={{ paddingHorizontal: 24 }}>
          <Input
            style={styles.input}
            editable={false}
            value={profile.company}
            placeholder="Company Name"
          />
          <Input
            style={styles.input}
            editable={false}
            value={profile.full_name}
            placeholder="Full Name"
          />
          <Input
            style={styles.input}
            editable={false}
            value={profile.address}
            placeholder="Address"
          />
          <Input
            style={styles.input}
            editable={false}
            value={profile.email}
            placeholder="Email"
          />
          <Input
            style={styles.input}
            editable={false}
            value={profile.password}
            placeholder="Password"
          />
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button onPress={() => navigation.goBack()} small block={false}>
            Back
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  profile: state.App.profile,
});

const mapDispatchToProps = {
  getProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Credentials);
