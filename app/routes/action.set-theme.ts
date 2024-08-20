import { themeSessionResolver } from "@/server/session.server";
import { createThemeAction } from "remix-themes";

export const action = createThemeAction(themeSessionResolver);
