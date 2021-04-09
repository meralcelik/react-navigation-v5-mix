import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {Avatar, Title, Caption} from 'react-native-paper';
import {AuthContext} from '../components/context';
function CustomDrawerContent(props) {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const onItemParentPress = key => {
    const filteredMainDrawerRoutes = props.drawerItems.find(e => {
      return e.key === key;
    });
    if (filteredMainDrawerRoutes.routes.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes.routes[0];
      props.navigation.toggleDrawer();
      props.navigation.navigate(selectedRoute.nav, {
        screen: selectedRoute.routeName,
      });
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
    }
  };

  const {signOut, toggleTheme} = React.useContext(AuthContext);


  function renderMainDrawer() {
    return (
      <View>
        {props.drawerItems.map(parent => (
          <View key={parent.key}>
            <TouchableOpacity
              key={parent.key}
              testID={parent.key}
              onPress={() => {
                onItemParentPress(parent.key);
              }}>
              <View style={styles.parentItem}>
                <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {renderLogoutBtn()}
      </View>
    );
  }

  function renderFilteredItemsDrawer() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => toggleMainDrawer()}
          style={styles.backButtonRow}>
          <Text style={[styles.backButtonText, styles.title]}>{'GERİ'}</Text>
        </TouchableOpacity>
        {filteredItems.routes.map(route => {
          return (
            <TouchableOpacity
              key={route.routeName}
              testID={route.routeName}
              onPress={() =>
                props.navigation.navigate(route.nav, {
                  screen: route.routeName,
                })
              }
              style={styles.item}>
              <Text style={styles.title}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  function renderLogoutBtn() {
    return (
      <View>
        <TouchableOpacity     onPress={() => {
            signOut();
          }} testID="customDrawer-logout">
          <View style={styles.parentItem}>
            <Text style={styles.title}>{'Çıkış Yap'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                size={90}
                source={require('../assets/profil.jpeg')}
              />

              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Meral Çelik</Title>
                <Caption style={styles.caption}>@meral</Caption>
              </View>
            </View>
          </View>
        </View>
        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  drawerContainer: {
    backgroundColor: '#222222',
  },
  container: {
    flex: 1,
    zIndex: 1000,
  },
  caption: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize:20,
  },
  centered: {},
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    margin: 16,
    marginTop: 25,
    fontWeight: 'bold',
    color: '#F0F0F0',
    textAlign: 'center',
  },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  },
  backButtonText: {
    marginLeft: 10,
    color: '#F0F0F0',
  },
});

export default CustomDrawerContent;
