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
  const [isActive, setIsActive] = useState(false);

  // モーダルを開くための関数
  function openModal() {
    setModalOpen(true);
  }

  // モーダルを閉じるための関数
  function closeModal() {
    setModalOpen(false);
  }

  // モーダルの中身を切り替えるための関数
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Open Modal
      </button>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={customStyles}>
        <div className="flex items-center justify-between px-7 py-3 text-custom-blue font-bold">
          <h2>施設形態</h2>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="flex">
          <div className="w-1/3 border-r-2">
            <h3
              className={`pt-2.5 pb-2.5 pl-7.5  ${
                isActive ? "text-custom-red font-bold after:border-l-2 afeter:border-custom-red" : ""
              } 	`}
              onClick={handleClick}
            >
              施設形態を選択
            </h3>
            <ul className="pt-2.5 pb-2.5 pl-7.5">
              <li className="pt-2.5 pb-2.5 pl-7.5">東京都</li>
              <li className="pt-2.5 pb-2.5 pl-7.5">神奈川県</li>
              <li className="pt-2.5 pb-2.5 pl-7.5">千葉県</li>
              <li className="pt-2.5 pb-2.5 pl-7.5">埼玉県</li>
            </ul>
            <h3 className="pt-2.5 pb-2.5 pl-7.5">働き方を選択</h3>
          </div>
          <div className="p-3 w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod cumque commodi quis, sapiente
            mollitia. Earum dolor veritatis iste dicta? Mollitia vel ullam adipisci officia fuga dolores eveniet quae
            placeat.
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
