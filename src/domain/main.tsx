import { useState } from "react";
import { question } from "../shared/data";
import { SearchBar } from "./search-field";
import { SearchResults } from "./search-result";
import { ItemList } from "./list";
import type { Question } from "../shared/types";

export const SearchModule = () => {
  const [query, setQuery] = useState("");

  const data = question.data;
  const results = data.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.question.toLowerCase().includes(q) ||
      item.answers.join(" ").toLowerCase().includes(q)
    );
  });

  const handleSelect = (item: Question) => {
    setQuery(item.question);
  };

  const isSearching = query.trim().length;

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Поиск по базе</h2>

      <SearchBar query={query} setQuery={setQuery} />

      {!isSearching ? (
        <div className="mt-4">
          <ItemList
            items={data.map((d) => ({
              question: d.question,
              answers: d.answers,
            }))}
            onSelect={handleSelect}
          />
        </div>
      ) : (
        <div className="mt-4">
          <SearchResults
            results={results.map((r) => ({
              question: r.question,
              answers: r.answers,
            }))}
          />
        </div>
      )}
    </div>
  );
};
