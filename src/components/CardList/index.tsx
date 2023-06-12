import Card, { CustomCardProps } from "../CustomCard";

type CardListProps = {
  cards: CustomCardProps[];
  setToDoneReminder: (id: CustomCardProps["id"]) => void;
};

export const CardList = ({ cards, setToDoneReminder }: CardListProps) => {
  return (
    <div className="h-[80vh] p-8 flex items-start justify-center overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-start space-y-4">
        {cards?.map((item) => (
          <Card
            key={item.id}
            id={String(item.id)}
            title={item.title}
            date={item.date}
            setToDoneReminder={setToDoneReminder}
          />
        ))}
      </div>
    </div>
  );
};
