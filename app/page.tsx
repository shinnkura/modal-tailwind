"use client";

import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Open Modal
      </button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={customStyles}>
        <div>Login/Signup</div>
        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </main>
  );
}
