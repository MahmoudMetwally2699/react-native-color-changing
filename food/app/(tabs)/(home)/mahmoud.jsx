import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import useResult from '@/hooks/useResultDetails'; // Adjust the import path as necessary

const MahmoudScreen = () => {
  const { id } = useLocalSearchParams();
  const [result, apiResult] = useResult();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);
        await apiResult(id);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#f4511e" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.phone}>{result.display_phone}</Text>
      <Text style={styles.rating}>Rating: {result.rating}</Text>
      <Text style={styles.reviewCount}>Reviews: {result.review_count}</Text>
      <FlatList
        data={result.categories}
        keyExtractor={(item) => item.alias}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  phone: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  rating: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  reviewCount: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  category: {
    backgroundColor: '#f4511e',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default MahmoudScreen;
