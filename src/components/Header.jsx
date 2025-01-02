import React, { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import Filter from "../components/Filter";
import { AddCategory } from "./AddCategory";
import "../components/style/Header.css";
import FavoriteGifs from "./FavoriteGifs";

const Header = ({
  onNewCategory,
  onLimitChange,
  limit,
  favorites,
  onToggleFavorite,
}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [asideWidth, setAsideWidth] = useState(600);
  const [isResizing, setIsResizing] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      setAsideWidth(Math.max(600, newWidth));
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setIsNavbarVisible(false); // Ocultar navbar
      } else {
        setIsNavbarVisible(true); // Mostrar navbar
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`navbar-container ${isNavbarVisible ? "visible" : "hidden"}`}
      >
        <div className="container_main-title">
          <h1 className="main-title">GIFapp</h1>
        </div>

        <AddCategory onNewCategory={onNewCategory} />
        <div className="search">
          <Filter onLimitChange={onLimitChange} limit={limit} />
        </div>
        <NavItem
          icon={<Heart color="#ef4444" fill="#ef4444" />}
          label={<span className="nav-label">Favoritos</span>}
          active={true}
          onClick={toggleAside}
          count={favorites.length}
        />
      </nav>

      <aside
        className={`favorites-aside ${isAsideOpen ? "open" : ""}`}
        style={{ width: `${asideWidth}px` }}
      >
        <div className="aside-header">
          <h2>Mis Favoritos</h2>
          <button className="close-button" onClick={toggleAside}>
            <X size={24} />
          </button>
        </div>
        <div className="aside-content">
          {favorites.length === 0 && (
            <p className="aside-content__p">No tienes favoritos</p>
          )}
          <FavoriteGifs
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
          />
        </div>
        <div className="resizer" onMouseDown={handleMouseDown}></div>
      </aside>

      {isAsideOpen && <div className="overlay" onClick={toggleAside}></div>}
    </>
  );
};

const NavItem = ({ icon, label, active, onClick, count }) => {
  return (
    <button className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
      <div className="icon-container">
        {icon}
        {count > 0 && <span className="badge">{count}</span>}
      </div>
      <span>{label}</span>
    </button>
  );
};

export default Header;
