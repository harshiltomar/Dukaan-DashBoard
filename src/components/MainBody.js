import React from "react";
import Header from "./Header";
import TransactionCard from "./TransactionCard";

const MainBody = () => {
  return (
    <div className="bg-zinc-50 h-screen">
      <Header />
      <TransactionCard />
    </div>
  );
};

export default MainBody;
