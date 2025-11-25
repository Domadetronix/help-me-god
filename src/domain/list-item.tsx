import type { QuestionWithId } from "../shared/types";

interface ListItem {
  item: QuestionWithId;
}

export const ListItem = ({ item }: ListItem) => {
  return (
    <div className="list-item">
      <h3 className="text-lg font-semibold">
        {item.id} {item.question}
      </h3>
      <ul>
        {item.answers.map((ans) => (
          <li>{ans}</li>
        ))}
      </ul>
    </div>
  );
};
