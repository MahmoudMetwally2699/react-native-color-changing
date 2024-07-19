import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import ResultList from '../../../components/resultList';
import useResult from '@/hooks/useResult';

const Home = () => {
  const [results, loading, search, apiResult, updateSearch] = useResult();
  useEffect(() => {
    apiResult();
  }, []);

  const filterResult = (price) => {
    return results.filter(result => result.price === price);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <ScrollView>
        <ResultList title="Cost Effective" results={filterResult('$$')} />
        <ResultList title="Bit Pricer" results={filterResult('$$$')} />
        <ResultList title="Big Spender" results={filterResult('$$$$')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
