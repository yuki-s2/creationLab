import React from "react";
import Block from "./Block";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { BlockData } from "../../types/blockData";

interface DraggableItemsProps {
  blocks: BlockData[];
}

const DraggableItems: React.FC<DraggableItemsProps> = ({ blocks }) => {
  return (
    <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
      {blocks.map((block) => (
        <Block key={block.id} id={block.id} title={block.title} />
      ))}
    </SortableContext>
  );
};

export default DraggableItems;
