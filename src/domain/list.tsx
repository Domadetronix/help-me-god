import type { Question } from "../shared/types";
import { ListItem } from "./list-item";

interface ListProps {
  items: Question[];
  onSelect: (item: Question) => void;
}

export const ItemList = ({ items, onSelect }: ListProps) => {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <ListItem item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};
