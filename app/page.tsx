"use client";

import { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
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
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const handleClick = (item: string) => {
    if (item !== selectedItem) {
      setSelectedItem(item);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const handleItemRemove = (itemToRemove: string) => {
    setCheckedItems(checkedItems.filter((item) => item !== itemToRemove));
  };

  const handleClearAll = () => {
    setCheckedItems([]);
  };

  const isActive = (item: string) => {
    const regions = ["tokyo", "kanagawa", "chiba", "saitama"];
    if (
      item === "location" &&
      selectedItem !== null &&
      regions.includes(selectedItem)
    ) {
      return true;
    }
    return selectedItem === item;
  };

  const options: { [key: string]: string[] } = {
    facility: ["施設A", "施設B", "施設C"],
    tokyo: ["東京都A", "東京都B", "東京都C"],
    kanagawa: ["神奈川県A", "神奈川県B", "神奈川県C"],
    chiba: ["千葉県A", "千葉県B", "千葉県C"],
    saitama: ["埼玉県A", "埼玉県B", "埼玉県C"],
    workstyle: ["フルタイム", "パートタイム", "リモートワーク"],
  };

  const renderContent = () => {
    return (
      <div>
        {selectedItem &&
          options[selectedItem] &&
          options[selectedItem].map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={option}
                checked={checkedItems.includes(option)}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          ))}
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Open Modal
      </button>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div className="flex items-center justify-between px-7 py-3 text-custom-blue font-bold">
          <h2>施設形態</h2>
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
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full self-center"
          >
            検索する
          </button>
        </div>
      </Modal>
    </main>
  );
}
