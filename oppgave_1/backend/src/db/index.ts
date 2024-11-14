

import { setup } from "./setup";
import db from "./db";

(async () => {
    console.log("seeding")
  await setup(db);
}
)();