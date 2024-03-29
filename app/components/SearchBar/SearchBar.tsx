import { View } from "@aws-amplify/ui-react";
import React from "react";

interface searchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<searchBarProps> = ({ onSearch }) => {
  return (
    <View className="h-11 w-64 ml-5 mt-5 mb-0">
      <input
        type="text"
        placeholder="Type to search..."
        name="search_field"
        className="flex h-11 w-64 bg-white rounded-lg border border-gray-400 px-2 outline-none hover:border-orange-400 hover:shadow-orange"
        onChange={(e) => onSearch(e.target.value)}
      />
    </View>
  );
};

export default SearchBar;
