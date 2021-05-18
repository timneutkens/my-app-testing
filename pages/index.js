import Layout from "../layout.js";
import Link from "next/link";
export default function Home() {
  return (
    <Layout>
      <h1>Hello World</h1>
      <Link href="/about">
        <a>To About</a>
      </Link>
    </Layout>
  );
}
