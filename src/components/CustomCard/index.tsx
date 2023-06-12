export type CustomCardProps = {
  id: string;
  title: string;
  date: number;
  frequency?: string;
  setToDoneReminder: (id: CustomCardProps["id"]) => void;
};

const CustomCard = ({ id, title, date, setToDoneReminder }: CustomCardProps) => {
  const handleOnDone = () => {
    setToDoneReminder(id);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl min-w-full">
      <div className="md:flex min-w-full">
        <div className="p-4 min-w-full">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-left">
            {title} ⏰
          </div>
          <div className="uppercase tracking-wide text-sm text-black font-semibold text-left text-slate-500">
            {new Date(date).toLocaleDateString()}
          </div>
          <button
            onClick={handleOnDone}
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded min-w-full"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
