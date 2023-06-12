import React, { useState } from "react";

enum RecurrenceType {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [recurrence, setRecurrence] = useState<RecurrenceType | null>(null);
  const [hasRecurrence, setHasRecurrence] = useState(false);
  const [interval, setInterval] = useState(1);

  const handleRecurrenceClick = (type: RecurrenceType) => {
    setRecurrence(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 opacity-50" onClick={handleClose}></div>
      <div className="absolute bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="flex justify-end">
          <button
            className="bg-transparent text-gray-600 hover:text-gray-900"
            onClick={handleClose}
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2 text-left"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium mb-2 text-left"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 font-medium mb-2 text-left"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex my-4">
            <label className="inline-flex items-center">
              <span className="text-gray-700 font-medium text-left">Recurrence</span>
              <input type="checkbox" className="w-4 h-4 mx-2"
                checked={hasRecurrence}
                onChange={() => setHasRecurrence(!hasRecurrence)}
              />
            </label>
          </div>
          <div
            className={`p2 rounded ${
              hasRecurrence ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
          >
            <div className="flex space-x-4">
              {Object.values(RecurrenceType).map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`px-4 py-2 rounded ${
                    recurrence === type
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleRecurrenceClick(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label
                htmlFor="interval"
                className="block text-gray-700 font-medium mb-2 text-left"
              >
                Interval
              </label>
              <input
                type="number"
                id="interval"
                value={interval}
                onChange={(e) => setInterval(Number(e.target.value))}
                className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white mx-2 px-4 py-2 rounded hover:bg-blue-600 text-right"
            >
              Save
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white mx-2 px-4 py-2 rounded hover:bg-red-600 justify-end"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
