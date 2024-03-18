"use client";
import { useState, useEffect } from "react";
import List from "@/components/list";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function Home() {
  const [user, setUser] = useState();
  const [isId, setId] = useState(0);
  const [wow, setWow] = useState(0)
  useEffect(() => {
    getDataWow();
  }, []);
  const getDataWow = () => {
    setUser([
      {
        user_id: 1,
        name: "james wow",
        email: 'jamewow@wow.com',
        tel: '0987654321'
      },
      {
        user_id: 2,
        name: "top wow",
        email: 'topwow@wow.com',
        tel: '0987654321'
      }
    ])
  }
  const getDataById = async (id) => {
    console.log(id);
    setId(id)
  };
  return (
    <>
      <Nav />
      wow: {wow}
      <button onClick={() => setWow(wow + 1)}>ksdosidf</button>
      isId: {isId}
      <List isData={user} goToId={getDataById} />
      <Footer />
    </>
  );
}
