import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Image
        src="https://pbs.twimg.com/media/E00DyJhXoAYlBYL?format=jpg&name=4096x4096"
        width={2000}
        height={2000}
      />
    </>
  );
}
