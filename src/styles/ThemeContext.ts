import React from "react";

type Theme = "light" | "dark";
export const Theme = React.createContext<Theme>("dark");