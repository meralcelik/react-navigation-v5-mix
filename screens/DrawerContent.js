import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image size={90} source={require('../assets/a.png')} />

              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Meral Çelik</Title>
                <Caption style={styles.caption}>@meral</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="home-outline" style={styles.iconColor} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="account-outline" style={styles.iconColor} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="bookmark-outline" style={styles.iconColor} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Icon name="settings-outline" style={styles.iconColor} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              style={styles.item}
              icon={({color, size}) => (
                <Icon name="account-check-outline" style={styles.iconColor} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              style={styles.item}
              icon={({color, size}) => (
                <Icon name="account-check-outline" style={styles.iconColor} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              style={styles.item}
              icon={({color, size}) => (
                <Icon name="account-check-outline" style={styles.iconColor} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              style={styles.item}
              icon={({color, size}) => (
                <Icon name="account-check-outline" style={styles.iconColor} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              style={styles.item}
              icon={({color, size}) => (
                <Icon name="account-check-outline" style={styles.iconColor} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              style={styles.drawerItem}
              style={styles.item}
              icon={({color, size}) => (
                <Icon name="account-check-outline" style={styles.iconColor} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" style={styles.iconColor} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  drawerItem: {
    borderBottomColor: '#003f5c',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#003f5c',
  },
  iconColor: {
    color: '#fb5b5a',
    fontSize: 25,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#003f5c',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  drawerSection: {
    marginTop: 15,
    color: '#fff',
    borderTopColor: '#fb5b5a',
    borderTopWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#fb5b5a',
    backgroundColor: '#fff',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopColor: '#003f5c',
    borderTopWidth: 1,
    borderBottomColor: '#003f5c',
    borderBottomWidth: 1,
  },
});
