import { SearchBar } from '@rneui/themed';
import { StyleSheet } from 'react-native';

type SearchBarComponentProps = {
  search: string;
  updateSearch: (search: string) => void;
  onTermEditing: () => void;
};

const SearchBars: React.FunctionComponent<SearchBarComponentProps> = ({ search, updateSearch, onTermEditing }) => {
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      onEndEditing={() => onTermEditing()}
      value={search}
      lightTheme={true}
      round={true}
      containerStyle={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 20,
    margin: 5,
  },
});

export default SearchBars;
