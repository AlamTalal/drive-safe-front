import { createSlice } from "@reduxjs/toolkit"

const setAppMode = (attr) => {
	const mode = ((attr === 'dark' || attr === 'light')? attr : 'light');
	localStorage.setItem("theme", mode);
	document.documentElement.setAttribute("data-theme", mode);
};

//const switchModeWithoutState = () => {setAppMode(((document.documentElement.getAttribute("data-theme") === 'dark')? 'light' : 'dark'));};
const initMode = (localStorage.getItem('theme') === 'dark') || ((!(localStorage.getItem('theme'))) && (window.matchMedia) && (window.matchMedia("(prefers-color-scheme: dark)").matches))? 'dark' : 'light';
setAppMode(initMode);

const locals = [{
  id: 0,
  code: 'en',
  name: 'English'
}, {
  id: 1,
  code: 'sv',
  name: 'Swedish'
}, {
  id: 2,
  code: 'ar',
  name: 'Arabic'
}]

const initialState = {
  value: {
    theme: initMode,
    locals: locals,
    selected: 0
  },
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  
  reducers: {
    switchTheme: (state) => {
      
      const mode = ((state.value.theme === 'dark')? 'light' : 'dark');
      localStorage.setItem("theme", mode);
      document.documentElement.setAttribute("data-theme", mode);
      state.value.theme = mode;
    },

    switchLocal: (state, action) => {
      if(locals.find((v) => v.id === action.payload)) 
        state.value.selected = action.payload
    },
  },
})

export const { switchTheme, switchLocal } = settingsSlice.actions
export const selectTheme  = (state) => state.settings.value.theme;
export const selectLocals = (state) => state.settings.value.locals;
export const selectLocal  = (state) => state.settings.value.selected;

export default settingsSlice.reducer
