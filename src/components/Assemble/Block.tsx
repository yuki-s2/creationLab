import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

interface BlockProps {
    id: string | number;
    title: string;
}

const Block: React.FC<BlockProps> = ({id, title}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="parts"
        >
            {title}
        </div>
    );
};

export default Block;