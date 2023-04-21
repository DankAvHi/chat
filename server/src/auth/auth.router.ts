import { register } from "./controllers/register.controller";
import { router } from "../tRPC";

export const authRouter = router({
  register,
});
