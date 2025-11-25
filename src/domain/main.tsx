import { useState } from "react";
import { question } from "../shared/data";
import { SearchBar } from "./search-field";
import { ItemList } from "./list";

export const SearchModule = () => {
  const [query, setQuery] = useState("");

  const data = question.data.map((item, index) => ({ ...item, id: index + 1 }));
  const results = data.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.question.toLowerCase().includes(q) ||
      item.answers.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ textAlign: "left", minHeight: "100vh" }}>
      <div className="search-block">
        <h2 style={{ color: "blue" }}>Поиск по базе</h2>
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      <div className="mt-4">
        <ItemList items={results} />
      </div>
    </div>
  );
};
