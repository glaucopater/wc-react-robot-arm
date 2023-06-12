// src/mocks/handlers.js
import { rest } from "msw";
import { CustomCardProps } from "../components/CustomCard";

export const mockData: CustomCardProps[] = [
  {
    id: "1",
    title: "Buy Milk",
    date: new Date().getTime(),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setToDoneReminder: () => { }
  },
];

export const handlers = [
  rest.post("/reminders", (_req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/reminders", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
