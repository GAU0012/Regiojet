import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const ImageListViewWithLinks = () => {
  const data = [
    { id: '1', imageUrl: 'https://brn-web-strapi.sa.cz/uploads/okoberfest_840x352_1458f45e38.png', websiteUrl: 'https://regiojet.cz/kam-jezdime/oblibene-trasy/mnichov', topic: 'Do Mnichova na festival? OK, TO BERu FEST!' },
    { id: '2', imageUrl: 'https://brn-web-strapi.sa.cz/uploads/840x352_Article_carousel_na_HP_2_14e0729177.png',  websiteUrl: 'https://regiojet.cz/chorvatsko', topic: 'Do Chorvatska letos jedině s RegioJetem'},
    { id: '3', imageUrl: 'https://brn-web-strapi.sa.cz/uploads/840x420_Article_carousel_obecny_mobil_2_9f286d18bf.png', websiteUrl: 'https://regiojet.cz/akce-a-novinky/novinky/praha-kosice', topic: 'Z Prahy do Košic a zpátky třikrát denně v super časech'},
  ];

  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openWebsite(item.websiteUrl)} style={styles.item}>
      <Text style={styles.name}>{item.topic}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200, 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default ImageListViewWithLinks;