import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import SearchBars from '@/components/searchBar';
import { Stack, Link } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import useResult from '@/hooks/useResult';

const Search = () => {
  const [results, loading, search, apiResult, updateSearch] = useResult();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Search',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      />
      <SearchBars
        search={search}
        updateSearch={updateSearch}
        onTermEditing={apiResult}
      />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#f4511e" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : results.length === 0 ? (
        <Text style={styles.noResultsText}>No results found</Text>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{ pathname: '/(tabs)/(home)/mahmoud', params: { id: item.id } }}
              style={styles.link}
            >
              <View style={styles.card}>
                <Image style={styles.imgStyle} source={{ uri: item.image_url }} />
                <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{item.name}</Text>
                  <Text style={styles.itemSubtitle}>{item.location.address1}</Text>
                </View>
              </View>
            </Link>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
  noResultsText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
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
    flexDirection: 'row',
    alignItems: 'center',
    width: 390, // Ensure the card takes full width
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  itemSubtitle: {
    color: 'gray',
  },
  link: {
    textDecorationLine: 'none',
    width: '100%', // Ensure the link takes full width
    paddingBottom:20,
  },
});

export default Search;
