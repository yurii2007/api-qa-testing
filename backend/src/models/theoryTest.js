import { model } from "mongoose";

import { testSchema } from "./techTest.js";

const TheoryTest = model("theory-question", testSchema);

export default TheoryTest;
