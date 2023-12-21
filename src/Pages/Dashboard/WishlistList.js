import React from "react";

import { useFirestore } from "../../hooks/useFirestore";

import "./Dashboard.css";

export default function WishlistList({ wishlist }) {
  const { deleteDocument } = useFirestore("wishlist");

  return (
    <ul className="transactions">
      {wishlist.map((wish) => (
        <li key={wish.id}>
          <p className="name">{wish.name}</p>
          <p className="company">{wish.company}</p>
          <p className="link">Link: {wish.link}</p>
          <button onClick={() => deleteDocument(wish.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
