import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { StorageUtils, addTokenToHttp } from '../../../../utils';
import { setUser } from '../../redux/actions';

const Splash = (props) => {
  useEffect(() => {
    (async () => {
      if (props.navigation) {
        const token = await StorageUtils.getAccessToken();
        const user = await StorageUtils.getUser();

        if (token) {
          props.setUser(user, token);
          addTokenToHttp(token)
            .then(() => {
              props.navigation.navigate('App');
            });
        } else {
          props.navigation.navigate('Auth');
        }
      }
    })();
  }, [props.navigation]);

  return (
    <View />
    // <ImageBackground source={require('../../../../assets/images/splash.jpg')} style={styles.container} />
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
