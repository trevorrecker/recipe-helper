import { DarkModeTwoTone, LightModeTwoTone } from "@mui/icons-material";
import { Button, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

const ThemeModeToggle: React.FC = () => {
  const [onClient, setOnClient] = useState<boolean>(false);
  const { mode, setMode } = useColorScheme();

  useEffect(() => setOnClient(true), []);

  const handleThemeClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const ThemeIcon = mode === "light" ? LightModeTwoTone : DarkModeTwoTone;

  return (
    onClient && (
      <Button variant="outlined" color="inherit" onClick={handleThemeClick}>
        <ThemeIcon sx={{ marginRight: 1, marginLeft: -0.5 }} />
        {`${mode?.charAt(0).toUpperCase()}${mode?.slice(1)}`} Theme
      </Button>
    )
  );
};

export default ThemeModeToggle;
