import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface SettingsState {
  sidebarState: boolean;
}

// Define the initial state using that type
const initialState: SettingsState = {
  sidebarState: false,
};

export const SettingsSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleStateSidedbar(state) {
      state.sidebarState = !state.sidebarState;
    },
  },
});

export const { toggleStateSidedbar } = SettingsSlice.actions;

export default SettingsSlice.reducer;
