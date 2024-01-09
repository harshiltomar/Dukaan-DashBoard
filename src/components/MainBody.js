import React from "react";
import Header from "./Header";
import TransactionCard from "./TransactionCard";

const MainBody = () => {
  return (
    <div className="bg-zinc-100 h-full">
      <Header />
      <TransactionCard />
    </div>
  );
};

export default MainBody;
