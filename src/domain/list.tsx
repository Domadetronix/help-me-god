import type { QuestionWithId } from "../shared/types";
import { ListItem } from "./list-item";

interface ListProps {
  items: QuestionWithId[];
}

export const ItemList = ({ items }: ListProps) => {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </div>
  );
};
