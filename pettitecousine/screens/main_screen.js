import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MainScreen = () => (
  <ScrollView contentContainerStyle={styles.scrollViewStyle}>
    <View style={styles.container}>
      {/* Fondo del Contenedor */}
      <View style={styles.card}>
        <Image source={require('../assets/tacos.jpg')} style={styles.image} />
        <View style={styles.imageOverlay}>
          <Text style={styles.title}>Tacos</Text>
      {/* Pais de Origen */}
          <Image source={require('../assets/mexico.png')} style={styles.flagIcon} />
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/pollo.png')} style={styles.image} />
        <View style={styles.imageOverlay}>
          <Text style={styles.title}>Pollo Frito</Text>
          <Image source={require('../assets/usa.jpg')} style={styles.flagIcon} />
        </View>
      </View>
      
      <View style={styles.card}>
        <Image source={require('../assets/dumplings.jpg')} style={styles.image} />
        <View style={styles.imageOverlay}>
          <Text style={styles.title}>Dumplings</Text>
          <Image source={require('../assets/china.jpg')} style={styles.flagIcon} />
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollViewStyle: {
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#5F8670',
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '85%',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  flagIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 45,
    height: 25,
    borderRadius: 30,
    resizeMode: 'contain',
  },
});

export default MainScreen;
