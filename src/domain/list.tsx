import type { Question } from "../shared/types";
import { ListItem } from "./list-item";

interface ListProps {
  items: Question[];
  // onSelect: (item: Question) => void;
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
