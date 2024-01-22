"use client";

import { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

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
          <div className="w-1/3 border-r-2">
            <h3
              className={`pt-2.5 pb-2.5 pl-7.5 relative hover:cursor-pointer hover:bg-[#f3f3f3] ${
                isActive("facility")
                  ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                  : "hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
              }`}
              onClick={() => handleClick("facility")}
            >
              施設形態を選択
            </h3>
            <h3
              className={`pt-2.5 pb-2.5 pl-7.5 relative hover:cursor-pointer hover:bg-[#f3f3f3] ${
                isActive("location")
                  ? "text-custom-red "
                  : "hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
              }`}
            >
              勤務地を選択
            </h3>
            <ul className="pt-2.5 pb-2.5 pl-7.5">
              {["tokyo", "kanagawa", "chiba", "saitama"].map((region) => (
                <li
                  key={region}
                  className={`pt-2.5 pb-2.5 pl-7.5 relative hover:cursor-pointer hover:bg-[#f3f3f3] ${
                    isActive(region)
                      ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                      : "hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
                  }`}
                  onClick={() => handleClick(region)}
                >
                  {region === "tokyo"
                    ? "東京都"
                    : region === "kanagawa"
                    ? "神奈川県"
                    : region === "chiba"
                    ? "千葉県"
                    : "埼玉県"}
                </li>
              ))}
            </ul>
            <h3
              className={`pt-2.5 pb-2.5 pl-7.5 relative hover:cursor-pointer hover:bg-[#f3f3f3] ${
                isActive("workstyle")
                  ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                  : "hover:after:content-[''] hover:after:block hover:after:border-r-4 hover:after:border-custom-red hover:after:absolute hover:after:right-0 hover:after:top-0 hover:after:bottom-0"
              }`}
              onClick={() => handleClick("workstyle")}
            >
              働き方を選択
            </h3>
          </div>
          <div className="p-3 w-2/3">{renderContent()}</div>
        </div>
        <div className="flex items-center justify-between border-t-2 pt-4">
          <div className="border-dashed border-2 rounded p-4 flex-grow h-24 mr-4 flex flex-wrap">
            {checkedItems.map((item, index) => (
              <div key={index} className="flex items-center border p-1 m-1">
                {item}
                <button onClick={() => handleItemRemove(item)} className="ml-2">
                  X
                </button>
              </div>
            ))}
            <button onClick={handleClearAll} className="ml-auto">
              すべてクリア
            </button>
          </div>
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
