import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003f5c" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/e.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: '003f5c',
          },
        ]}
        animation="fadeInUpBig">
        <Text style={styles.titleLogo}> MOBILEDU</Text>
        <Text style={styles.title}> "Öğrenci Dostu Üniversite"</Text>
        <Text style={styles.text} />
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#fb5b5a', '#fb5b5a']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Başlayın</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height ,width} = Dimensions.get('screen');
const height_logo = height * 0.45;
const width_logo= width * 0.95;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#003f5c',
    paddingTop: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogo: {
    color: '#fff',
    fontSize: 35,
    justifyContent: 'center',
    paddingBottom: 25,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: width_logo,
    height: height_logo,
  },
});
