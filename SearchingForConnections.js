import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TrainConnectionSearch = () => {
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [traveler, setTraveler] = useState('');
    const [filteredConnections, setFilteredConnections] = useState([]);

    const allConnections = [
      { id: '1', city_1: 'Praha', city_2: 'Havirov', Time: "10:00"},
      { id: '2', city_1: 'Praha', city_2: 'Havirov' , Time: "16:00"},
      { id: '3', city_1: 'Praha', city_2: 'Havirov' , Time: "17:00"},
      { id: '4', city_1: 'Havirov', city_2: 'Praha' , Time: "19:00"},
      { id: '5', city_1: 'Havirov', city_2: 'Praha' , Time: "13:00"},
      { id: '6', city_1: 'Havirov', city_2: 'Praha' , Time: "10:00"},
    ];

  
    const updateFilteredConnections = () => {
      if (city1.trim() !== '' && city2.trim() !== '') {
        const filtered = allConnections.filter((connection) =>
          connection.city_1.toLowerCase().includes(city1.toLowerCase()) &&
          connection.city_2.toLowerCase().includes(city2.toLowerCase())
        );
        setFilteredConnections(filtered);
      } else {
        setFilteredConnections([]);
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Havířov, Česko"
            onChangeText={(text) => setCity1(text)}
            value={city1}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Praha, Česko"
            onChangeText={(text) => setCity2(text)}
            value={city2}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Odjezd"
            onChangeText={(text) => setTime1(text)}
            value={time1}
          />
          <TextInput
            style={styles.input}
            placeholder="Návrat"
            onChangeText={(text) => setTime2(text)}
            value={time2}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cestujíci"
            onChangeText={(text) => setTraveler(text)}
            value={traveler}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.searchButton} onPress={updateFilteredConnections}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        data={filteredConnections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultBox}>
            <Text>From: {item.city_1}</Text>
            <Text>To: {item.city_2}</Text>
            <Text>Time: {item.Time}</Text>
            <Text>Ticket: {traveler}</Text>
          </View>
        )}
      />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center',
      backgroundColor: "#FABB00",
      
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#FABB00",
    },
    input: {
      flex: 1,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      padding: 10,
    },
    searchButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      flex: 1,
    },
    searchButtonText: {
      color: 'white',
      textAlign: 'center',
    },
    resultBox: {
      borderColor: '#ccc',
      backgroundColor: "white",
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      backgroundColor: "#FABB00",
      justifyContent:'space-between',
    },
  });
  
  export default TrainConnectionSearch;