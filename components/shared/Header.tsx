import React from "react";

const Header = ({ title, Subtitle }: { title: string; Subtitle?: string }) => {
  return (
    <>
      <h2 className=" font-bold text-dark-600 text-2xl">{title}</h2>
      {Subtitle && <p className="p-5">{Subtitle}</p>}
    </>
  );
};

export default Header;
