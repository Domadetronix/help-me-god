import type { Question } from "../shared/types";

interface ListItem {
  item: Question;
  onSelect: (item: Question) => void;
}

export const ListItem = ({ item, onSelect }: ListItem) => {
  return (
    <div
      className="p-3 border-b rounded-xl shadow cursor-pointer hover:bg-gray-50"
      onClick={() => onSelect(item)}>
      <h3 className="text-lg font-semibold">{item.question}</h3>
      <p className="text-sm opacity-80">{item.answers.join(" + ")}</p>
    </div>
  );
};
