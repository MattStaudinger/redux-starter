import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import error from "./middleware/error";

export default function () {
  return configureStore({
    reducer,
    middleware: [logger("test"), func, error],
  });
}
