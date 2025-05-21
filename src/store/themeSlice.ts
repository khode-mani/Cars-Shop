import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     darkMode: localStorage.getItem("theme") 
//         ? localStorage.getItem("theme") === "dark"
//         : true,
// };
const initialState = {
  darkMode: typeof window !== "undefined" && localStorage.getItem("theme")
    ? localStorage.getItem("theme") === "dark"
    : true, // مقدار پیش‌فرض دارک مود
};


export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeReduce: (state) => {
      state.darkMode = !state.darkMode;
      document.documentElement.classList.toggle("dark", state.darkMode);
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");    },
  },
});

export const { toggleThemeReduce } = themeSlice.actions;
// export default themeSlice.reducer;
