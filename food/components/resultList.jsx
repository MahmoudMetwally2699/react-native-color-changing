import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link  href={{
            pathname: "/(tabs)/(home)/mahmoud",
            params: { id: item.id },
          }} style={styles.link}>
            <View style={styles.card}>
              <Image style={styles.imgStyle} source={{ uri: item.image_url }} />
              <Text style={styles.subtextStyle}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                <View style={styles.ratingLeft}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Icon name="star" size={16} color="#FFD700" />
                </View>
                <Text style={styles.reviewText}>{item.review_count} Reviews</Text>
              </View>
            </View>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 18,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#333', // Optional: Add a background color for better visibility
    textAlign: 'center', // Optional: Center the text
  },
  link: {
    textDecorationLine: 'none',
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    alignItems: 'center',
    width: 250,
    
  },
  separator: {
    width: 10,
     // Adjust the width for desired space between cards
  },
  subtextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  imgStyle: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
    paddingHorizontal: 10,
  },
  ratingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  reviewText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ResultList;
