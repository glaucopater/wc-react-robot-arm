import { useState } from "react";
import Modal from "../ReminderModal";

const AddReminderButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-blue-500 max-w-md mx-auto bg-white rounded-full shadow-md overflow-hidden md:max-w-2xl mt-auto w-16 h-16">
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-16 h-16"
      >
        +
      </button>
      {modalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default AddReminderButton;
