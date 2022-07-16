import { ThemeProvider } from "@mui/material";
import React,{ useState, useEffect,  } from "react";
import {darkTheme, lightTheme} from "./theme";
import { useTheme } from "next-themes";

const PageProvider = ({children}) => {
    const {resolvedTheme} = useTheme();
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    useEffect(() => {
      resolvedTheme === "dark"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
    }, [resolvedTheme])
    
    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

export default PageProvider;