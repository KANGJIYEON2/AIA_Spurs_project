"use client";

import { createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import  { CssBaseline } from "@mui/material";
import React from "react";
import { text } from "stream/consumers";

const ThemeOptions: ThemeOptions = {
    palette: {
        primary:{
            main: "#001b3f", 
            contrastText: "#FFFFFF",
        },
        background: {
            default:"white",
        },
        secondary: {
            main: "#001b3f", 
            contrastText: "#FFFFFF",
            

        },
     
    }
};

const theme = createTheme(ThemeOptions);

export default function ThemeRegistry({children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextAppDirEmotionCacheProvider options={{key : "mui"}}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )

}