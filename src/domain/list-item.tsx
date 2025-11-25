import type { Question } from "../shared/types";

interface ListItem {
  item: Question;
  id: number;
}

export const ListItem = ({ item, id }: ListItem) => {
  return (
    <div className="list-item">
      <h3 className="text-lg font-semibold">
        {id} {item.question}
      </h3>
      <ul>
        {item.answers.map((ans) => (
          <li>{ans}</li>
        ))}
      </ul>
    </div>
  );
};
