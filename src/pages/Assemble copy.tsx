import { Link } from "react-router-dom";
import { DndContext } from "@dnd-kit/core";
import "../style/assemble.css";
import Layout from "../layout/Layout";

const assemble = () => {
  const title = "パーツを組み立てる";
  return (
    <Layout title={title}>
      <>
        <Link to="/">
          <div className="btn">パーツを作る</div>
        </Link>
        <div className="contentsWrap">
          <div className="assemble_container box">
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            <div className="parts">組み立てるパーツ</div>
            ここで組み立てる
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

export default assemble;
