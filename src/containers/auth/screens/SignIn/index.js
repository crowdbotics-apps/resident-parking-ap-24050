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

class SignIn extends React.PureComponent {
  state = {
    email: '',
    password: '',
    validation: {},
    isSubmitting: false,
  };

  validateForm = () => {
    const res = isValid([
      // eslint-disable-next-line
      {key: 'email address', value: this.state.email, isRequired: true},
      // eslint-disable-next-line
      {key: 'password', value: this.state.password, isRequired: true},
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
    const { email, password } = this.state;

    return (
      <KeyboardWrapper>
        <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.screen}>
          <View style={{ flex: 1 }} />

          <Text style={styles.mainTitle}>Welcome</Text>
          <Text style={styles.subTitle}>Sign in.</Text>

          <View style={{ flex: 1 }} />

          <Input
            value={email}
            placeholder="Email"
            onChangeText={(val) => this.handleInputChange('email', val)}
            keyboardType="email-address"
          />
          <Input
            isPassword
            placeholder="Password"
            value={password}
            onChangeText={(val) => this.handleInputChange('password', val)}
          />

          {/* <Text onPress={() => navigation.push('Request')} style={styles.link}>Request account.</Text> */}
          {/* <Text onPress={this.goToPasswordRecover} style={styles.link}>Property rules.</Text> */}

          {this.renderErrors()}

          <View style={{ flex: 1.5 }} />

          <View style={styles.buttonsContainer}>
            <Button theme="dark" onPress={this.submitLogin}>
              Sign in
            </Button>
          </View>

          <View style={{ flex: 1 }} />
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
)(SignIn);
