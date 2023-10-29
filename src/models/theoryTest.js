import { model } from "mongoose";

import { testSchema } from "./techTest";

const TheoryTest = model("theory-question", testSchema);

export default TheoryTest;
