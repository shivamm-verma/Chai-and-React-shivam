import { createContext, useContext } from "react";

export const ThemeContext = createContext({
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {},
});

// exporting context provider in this
export const ThemeProvider = ThemeContext.Provider;

// exporting custom hook(no need to import everythings)
export default function useTheme() {
        return useContext(ThemeContext);
}

// const ThemeContext = createContext();
// export default ThemeContext;
