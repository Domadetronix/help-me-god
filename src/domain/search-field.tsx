interface SearchBarProps {
  query: string;
  setQuery: (str: string) => void;
}

export const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Поиск..."
      className="w-full p-3 rounded-2xl border shadow"
    />
  );
};
