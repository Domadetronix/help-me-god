import type { Question } from "../shared/types";

interface ListItem {
  item: Question;
  // onSelect: (item: Question) => void;
}

export const ListItem = ({ item }: ListItem) => {
  return (
    <div className="list-item">
      <h3 className="text-lg font-semibold">{item.question}</h3>
      <ul>
        {item.answers.map((ans) => (
          <li>{ans}</li>
        ))}
      </ul>
    </div>
  );
};
