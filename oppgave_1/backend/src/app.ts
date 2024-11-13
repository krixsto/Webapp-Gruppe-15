import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get(() => {});

app.options(() => {});

app.post(() => {});

app.delete(() => {});

app.onError((err, c) => {
  console.error(err);

  return c.json(
    {
      error: {
        message: err.message,
      },
    },
    { status: 500 }
  );
});

export default app;
