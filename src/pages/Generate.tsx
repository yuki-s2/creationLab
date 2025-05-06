import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const generate = () => {
  const title = "パーツを生成";
  return (
    <Layout title={title}>
      <Link className="btn" to="/Assemble">組み立てる</Link>
    </Layout>
  );
};

export default generate;
