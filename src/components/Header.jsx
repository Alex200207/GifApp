import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import Filter from "../components/Filter";
import { AddCategory } from "./AddCategory";
import "../components/style/Header.css";
import FavoriteGifs from "./FavoriteGifs";

const Header = ({ onNewCategory, onLimitChange, limit ,favorites, onToggleFavorite}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <AddCategory onNewCategory={onNewCategory} />
          <div className="search">
            <Filter onLimitChange={onLimitChange} limit={limit} />
          </div>
          <NavItem
            icon={<Heart color="#ef4444" fill="#ef4444" />}
            label="Favoritos"
            active={true}
            onClick={toggleAside}
          />
        </div>
      </nav>

      <aside className={`favorites-aside ${isAsideOpen ? 'open' : ''}`}>
        <div className="aside-header">
          <h2>Mis Favoritos</h2>
          <button className="close-button" onClick={toggleAside}>
            <X size={24} />
          </button>
        </div>
        <div className="aside-content">
          {favorites.length === 0 && <p className="aside-content__p">No tienes favoritos</p>}
          <FavoriteGifs onToggleFavorite={onToggleFavorite} favorites={favorites}/>

        </div>
      </aside>

      {isAsideOpen && <div className="overlay" onClick={toggleAside}></div>}
    </>
  );
};

const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <button 
      className={`nav-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Header;