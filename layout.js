import { useEffect, useState } from "react";
export default function Layout({ children }) {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().toString());
  }, []);
  return (
    <>
      {children}
      <h2>Date: {date}</h2>
    </>
  );
}
