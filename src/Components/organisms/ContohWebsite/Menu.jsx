import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Title from "../../atoms/Text/Title";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { menuList } from "../../../utils/MenuList";

const categories = ["Semua", "Seblak", "Selain Seblak", "Minuman"];

const Menu = ({ addToCart, onCardClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const filteredMenuList =
    selectedCategory === "Semua"
      ? menuList
      : menuList.filter((menu) => menu.category === selectedCategory);

  const searchedMenuList = filteredMenuList.filter((menu) =>
    menu.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
    setShowModal(true);
    onCardClick(menu);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMenu(null);
  };

  return (
    <section className="mt-10 mb-16 px-6">
      {/* TITLE */}
      <Title>Menu</Title>

      <div className="flex flex-col items-center gap-4">
        {/* CATEGORIES FILTER */}
        <h2 className="text-xl font-londrina tracking-wider -mb-2">Kategori</h2>

        <div className="relative w-full">
          <div className="flex justify-center w-full categories-filter">
            <div className="relative flex space-x-4 pl-1 pr-5 overflow-x-auto overflow-y-hidden categories-filter">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-2 px-4 rounded-lg whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-secondary text-primary"
                      : "bg-black/20 text-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Right Shadow */}
          <div className="absolute xsm:hidden right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-100/70 to-transparent pointer-events-none"></div>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-4 w-full md:w-2/3">
          <input
            type="text"
            className="w-full bg-black/20 placeholder:text-slate-200 rounded-lg py-2 px-4 focus:outline-none"
            placeholder="Cari Menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* CARD */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 tablet:grid-cols-5 lg:grid-cols-6 gap-4">
        {searchedMenuList.map((menu) => (
          <Card key={menu.id} onClick={() => handleCardClick(menu)}>
            <Card.Top image={menu.image} title={menu.title} desc={menu.desc} />
            <Card.Bottom price={menu.price} />
          </Card>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && selectedMenu && (
          <Modal
            show={showModal}
            onClose={closeModal}
            menu={selectedMenu}
            addToCart={addToCart}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
