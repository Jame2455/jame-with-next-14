import React from "react";

export default function List({ isData, goToId }) {
  console.log(isData);
  return (
    <div>
      hi im data list:
      {isData?.map(({ user_id, name, email, tel }) => (
        <div key={user_id} className="border-b">
          <p className=" bg-red-500 w-[150px] rounded text-center cursor-pointer" onClick={() => goToId(user_id)}>user_id: {user_id}</p>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <p>tel: {tel}</p>
        </div>
      ))}
    </div>
  );
}
