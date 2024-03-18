"use client";
import { useState, useEffect } from "react";
import React from "react";

export default function Footer() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {userList?.map((user) => (
        <div key={user.id} className="border-b">
            <span>{user.id} {user.username}</span>
        </div>
      ))}
    </div>
  );
}
