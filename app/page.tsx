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
  // const [isActive, setIsActive] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  const isActive = (item: string) => {
    return selectedItem === item;
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
              className={`pt-2.5 pb-2.5 pl-7.5 relative ${
                isActive("facility")
                  ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                  : ""
              }`}
              onClick={() => handleClick("facility")}
            >
              施設形態を選択
            </h3>
            <h3 className="pt-2.5 pb-2.5 pl-7.5 relative">勤務地を選択</h3>
            <ul className="pt-2.5 pb-2.5 pl-7.5">
              <li
                className={`pt-2.5 pb-2.5 pl-7.5 relative ${
                  isActive("tokyo")
                    ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                    : ""
                }`}
                onClick={() => handleClick("tokyo")}
              >
                東京都
              </li>
              <li
                className={`pt-2.5 pb-2.5 pl-7.5 relative ${
                  isActive("kanagawa")
                    ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                    : ""
                }`}
                onClick={() => handleClick("kanagawa")}
              >
                神奈川県
              </li>
              <li
                className={`pt-2.5 pb-2.5 pl-7.5 relative ${
                  isActive("chiba")
                    ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                    : ""
                }`}
                onClick={() => handleClick("chiba")}
              >
                千葉県
              </li>
              <li
                className={`pt-2.5 pb-2.5 pl-7.5 relative ${
                  isActive("saitama")
                    ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                    : ""
                }`}
                onClick={() => handleClick("saitama")}
              >
                埼玉県
              </li>
            </ul>
            <h3
              className={`pt-2.5 pb-2.5 pl-7.5 relative ${
                isActive("workstyle")
                  ? "text-custom-red font-bold after:content-[''] after:block after:border-r-4 after:border-custom-red after:absolute after:right-0 after:top-0 after:bottom-0"
                  : ""
              }`}
              onClick={() => handleClick("workstyle")}
            >
              働き方を選択
            </h3>
          </div>
          <div className="p-3 w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quod cumque commodi quis, sapiente mollitia. Earum dolor veritatis
            iste dicta? Mollitia vel ullam adipisci officia fuga dolores eveniet
            quae placeat.
          </div>
        </div>
        <button
          onClick={closeModal}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          検索する
        </button>
      </Modal>
    </main>
  );
}
