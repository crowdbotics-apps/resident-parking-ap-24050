import React from 'react';
import {
  View, Dimensions, Modal, ActivityIndicator, Text,
} from 'react-native';

const Loader = ({ isLoading }) => (
  <Modal transparent visible={isLoading}>
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 70,
      }}
    >
      <ActivityIndicator color="white" />
      <Text style={{ color: 'white', marginTop: 8, fontSize: 16 }}>Loading...</Text>
    </View>
  </Modal>
);

export default React.memo(Loader);
