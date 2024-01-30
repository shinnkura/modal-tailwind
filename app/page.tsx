"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import { OtherHouses, LocationOn, FactCheck } from "@mui/icons-material";
import CheckedItemsDisplay from "./components/CheckedItemsDisplay";
import Sidebar from "./components/Sidebar";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(96, 110, 133, 0.7)",
  },
  content: {
    backgroundColor: "#FFFFFF",
    color: "#494C4C",
    borderRadius: "10px",
    maxWidth: "1000px",
    height: "590px",
    margin: "auto",
    padding: "0px",
  },
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>("facility");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function getTitle() {
    const locationItems = ["tokyo", "chiba", "saitama", "kanagawa"];
    if (selectedItem === null) {
      return (
        <div className="flex items-center">
          <OtherHouses />
          <p className="pl-2">施設形態</p>
        </div>
      ); // selectedItemがnullの場合のデフォルトタイトル
    }
    if (selectedItem === "facility") {
      return (
        <div className="flex items-center">
          <OtherHouses />
          <p className="pl-2">施設形態</p>
        </div>
      );
    } else if (locationItems.includes(selectedItem)) {
      return (
        <div className="flex items-center">
          <LocationOn />
          <p className="pl-2">勤務地</p>
        </div>
      );
    } else if (selectedItem === "workstyle") {
      return (
        <div className="flex items-center">
          <FactCheck />
          <p className="pl-2">働き方</p>
        </div>
      );
    } else {
      return (
        <div className="flex items-center">
          <OtherHouses />
          <p className="pl-2">施設形態</p>
        </div>
      ); // その他の場合のデフォルトタイトル
    }
  }

  function handleClick(item: string) {
    if (item !== selectedItem) {
      setSelectedItem(item);
    }
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  }

  function handleItemRemove(itemToRemove: string) {
    setCheckedItems(checkedItems.filter((item) => item !== itemToRemove));
  }

  function handleClearAll() {
    setCheckedItems([]);
  }

  function isActive(item: string) {
    const regions = ["tokyo", "kanagawa", "chiba", "saitama"];
    return item === "location" && selectedItem !== null && regions.includes(selectedItem)
      ? true
      : selectedItem === item;
  }

  const options: { [key: string]: string[] } = {
    facility: [
      "認可保育園",
      "認証・認定保育園",
      "認可外保育園",
      "幼稚園",
      "認定こども園",
      "企業内保育園",
      "小規模認可保育園",
      "企業主導型保育園",
      "院内保育",
      "病児保育",
      "学童保育",
      "児童発達支援",
      "放課後等デイサービス",
    ],
    tokyo: ["千代田区", "中央区", "港区"],
    kanagawa: ["横浜市鶴見区", "横浜市神奈川区", "横浜市西区"],
    chiba: ["千葉市中央区", "千葉市花見川区", "千葉市稲毛区"],
    saitama: ["さいたま市西区", "さいたま市北区", "さいたま市大宮区"],
    workstyle: ["フルタイム", "パートタイム", "リモートワーク"],
  };

  function renderContent() {
    return (
      <div className="grid grid-cols-2 gap-4 p-[45px]">
        {selectedItem &&
          options[selectedItem] &&
          options[selectedItem].map((option, index) => (
            <label key={index} className="w-[200px]">
              <input
                type="checkbox"
                value={option}
                checked={checkedItems.includes(option)}
                onChange={handleCheckboxChange}
                className="accent-custom-red mr-[10px]"
              />
              {option}
            </label>
          ))}
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Open Modal
      </button>

      <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
        <div className="flex items-center justify-between px-7 py-3 text-custom-blue font-bold">
          <h2>{getTitle()}</h2>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="flex">
          <Sidebar isActive={isActive} onClick={handleClick} />
          <div className="p-3 w-2/3">{renderContent()}</div>
        </div>

        <div className="flex items-center justify-between border-t-2 pt-4">
          <CheckedItemsDisplay
            checkedItems={checkedItems}
            onItemRemove={handleItemRemove}
            onClearAll={handleClearAll}
          />
          <button
            onClick={closeModal}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-[15px] px-4 rounded self-center w-[150px] mr-[20px]"
          >
            検索する
          </button>
        </div>
      </Modal>
    </main>
  );
}
