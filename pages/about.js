import Layout from "../layout.js";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <Link href="/">
        <a>To Home</a>
      </Link>
    </Layout>
  );
}
