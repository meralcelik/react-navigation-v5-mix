

import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text,View, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Veri Yapıları",
    description :"5 saat U 2 saat T"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Algoritma Analizi",
    description :"5 saat U 2 saat T"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Veri Tabanı",
    description :"5 saat U 2 saat T"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Yapay Zeka",
    description :"5 saat U 2 saat T"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Algoritma",
    description :"5 saat U 2 saat T"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Lojik Devre Tasarımı",
    description :"5 saat U 2 saat T"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Veri Yapıları",
    description :"5 saat U 2 saat T"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Algoritma Analizi",
    description :"5 saat U 2 saat T"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Veri Tabanı",
    description :"5 saat U 2 saat T"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Yapay Zeka",
    description :"5 saat U 2 saat T"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Algoritma",
    description :"5 saat U 2 saat T"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Lojik Devre Tasarımı",
    description :"5 saat U 2 saat T"
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemContainer, {backgroundColor:  '#fafafa' }]}>
   <View style={styles.textContainer}>
				<Text style={styles.name}>{item.title} </Text>
				<Text>{item.description}</Text>
			</View>
    
  </TouchableOpacity>
);

const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" : "#ffffff";
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    textAlign:'center',

    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  descriptionContent:{
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 22,
    justifyContent: 'space-around'
  },
  description: {
    fontSize: 12,

  	justifyContent: 'space-around'
  },
  itemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
  textContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 16
	},
});

export default ProfileScreen;




  //DetailsScreen

  // data={DATA}