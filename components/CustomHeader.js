import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

function CustomHeader(props) {
  const toggleDrawer = () =>
    props.navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <SafeAreaView>
     
       
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  headerLeft: {
    flexDirection: 'row',
  },
  leftButton: {
    marginLeft: 10,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 40,
  },
  buttonTxt: {
    color: '#ddd',
    fontWeight: 'bold',
  },
  headerTxt: {
    color: '#ddd',
  },
});

export default CustomHeader;
