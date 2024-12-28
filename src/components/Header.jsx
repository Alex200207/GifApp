import React from "react";
import {  Heart } from "lucide-react";
import Filter from "../components/Filter";
import { AddCategory } from "./AddCategory";

const Header = ({ onNewCategory ,onLimitChange, limit }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <AddCategory onNewCategory={onNewCategory} />
        <div className="search">
          <Filter onLimitChange={onLimitChange} limit={limit}  />
        </div>
        <NavItem
          icon={<Heart color="#ef4444" fill="#ef4444" />}
          label="Favoritos"
          active={true}
        />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <button className={`nav-item ${active ? "active" : ""}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Header;
