import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

// styles
import "./Dashboard.css";

// components
import TransactionForm from "./TransactionForm";
import WishlistList from "./WishlistList";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "wishlist",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div>
      <header className="headerOuterContainer">
        <div className="headerTextContainer">
          <h3>Dashboard</h3>
          {user && (
            <p>
              Welcome to Your Dashboard, {user.displayName}!🌟 Dive into your
              personalized space with joy. <br />
              Any questions? We're here to help. Enjoy!
            </p>
          )}
        </div>
      </header>
      <div className="DashMaincontainer">
        <div className="DashContent">
          {error && <p>{error}</p>}
          {documents && <WishlistList wishlist={documents} />}
        </div>
        <div className="DashSidebar">
          <TransactionForm uid={user.uid} />
        </div>
      </div>
    </div>
  );
}
