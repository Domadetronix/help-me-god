import type { Question } from "../shared/types";
import { ResultItem } from "./search-result-item";

export const SearchResults = ({ results }: { results: Question[] }) => {
  if (!results.length) return <p className="opacity-60">Ничего не найдено</p>;

  return (
    <div className="grid gap-4 mt-4">
      {results.map((r) => (
        <ResultItem key={r.question} result={r} />
      ))}
    </div>
  );
};
