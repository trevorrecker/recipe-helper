"use client";

import recipeThemes from "@/app/themes";

import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  NoSsr
} from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const ClientWrapper: React.FC<Props> = ({ children }) => {
  return (
    <NoSsr>
      <CssVarsProvider defaultMode="system" theme={recipeThemes}>
        <CssBaseline enableColorScheme />
        {children}
      </CssVarsProvider>
    </NoSsr>
  );
};

export default ClientWrapper;
