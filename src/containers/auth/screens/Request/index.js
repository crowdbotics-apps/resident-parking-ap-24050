import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';

import { login } from '../../redux/actions';
import Input from '../../../../components/common/Input';
import KeyboardWrapper from '../../../../components/common/KeyboardWrapper';
import Button from '../../../../components/common/Button';
import ErrorBox from '../../../../components/common/ErrorBox';
import { isValid } from '../../../../utils';

import { styles } from './styles';

class Request extends React.PureComponent {
  state = {
    email: '',
    validation: {},
    isSubmitting: false,
  };

  validateForm = () => {
    const res = isValid([
      // eslint-disable-next-line
      {key: 'email address', value: this.state.email, isRequired: true},
    ]);

    this.setState({
      validation: res,
    });

    return res;
  };

  handleInputChange = (key, value) => {
    this.setState({ [key]: value }, () => {
      if (this.state.isSubmitting) {
        this.validateForm();
      }
    });
  };

  submitLogin = () => {
    const { email, password } = this.state;

    this.setState({
      isSubmitting: true,
    });

    const formValidation = this.validateForm();

    if (formValidation.isValid) {
      this.props.login({ email, password });
    }
  };

  renderErrors = () => {
    const { signInError } = this.props;
    const { validation } = this.state;
    const validationError = validation.message;

    return <ErrorBox errorText={validationError || signInError} />;
  };

  render() {
    const { email } = this.state;

    return (
      <KeyboardWrapper>
        <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.screen}>
          <View style={{ flex: 2 }} />

          <Text style={styles.mainTitle}>Welcome</Text>
          <Text style={styles.subTitle}>Request account.</Text>

          <View style={{ flex: 1 }} />

          <Input
            value={email}
            placeholder="Email"
            onChangeText={(val) => this.handleInputChange('email', val)}
            keyboardType="email-address"
          />

          {/* <Text onPress={this.goToPasswordRecover} style={styles.link}>Reset password.</Text> */}
          {/* <Text onPress={this.goToPasswordRecover} style={styles.link}>Property rules.</Text> */}

          {this.renderErrors()}

          <View style={{ flex: 1.8 }} />

          <View style={styles.buttonsContainer}>
            <Button theme="dark" onPress={this.submitLogin}>
              Request
            </Button>
          </View>
        </ScrollView>
      </KeyboardWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  signInError: state.Auth.errors.SignIn,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Request);
