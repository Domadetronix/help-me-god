import type { Question } from "../shared/types";

export const ResultItem = ({ result }: { result: Question }) => {
  return (
    <div className="p-4 rounded-2xl shadow bg-white">
      <h3 className="text-xl font-bold mb-1">{result.question}</h3>
      <ul>
        {result.answers.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
