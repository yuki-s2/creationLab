import { Link } from "react-router-dom";
import "../style/assemble.css";
import Layout from "../layout/Layout";
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import DraggableItems from "../components/Assemble/DraggableItems";
import { arrayMove } from "@dnd-kit/sortable";
import { BlockData } from "../types/blockData";
import React from "react";

const Assemble: React.FC = () => {
  // アロー関数形式で定義
  const [blocks, setBlocks] = useState<BlockData[]>([
    { id: 1, title: "組み立てるパーツ01" },
    { id: 2, title: "組み立てるパーツ02" },
    { id: 3, title: "組み立てるパーツ03" },
  ]);

  // const addBlock = (newBlockTitle: string) => {
  //   setBlocks((prevBlocks) => [
  //     ...prevBlocks,
  //     { id: prevBlocks.length + 1, title: newBlockTitle },
  //   ]);
  // };

  const getBlockPos = (id: string | number) =>
    blocks.findIndex((block) => block.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over && active.id === over.id) return;

    setBlocks((prevBlocks) => {
      if (active?.id === undefined || over?.id === undefined) {
        return prevBlocks;
      }

      const originalPos = getBlockPos(active.id);
      const newPos = getBlockPos(over.id);

      return arrayMove(prevBlocks, originalPos, newPos);
    });
  }; // 関数定義の閉じ括弧
  const title = "パーツを組み立てる";
  return (
    <Layout title={title}>
      <>
        <Link to="/">
          <div className="btn">パーツを作る</div>
        </Link>
        <div className="contentsWrap">
          <div className="assemble_container box">
            <DndContext
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
            >
              <DraggableItems blocks={blocks} />
            </DndContext>
          </div>
          <div className="assemble_parts box">
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Assemble;
