import { createSlice } from "@reduxjs/toolkit";

interface stateProps {
  isSidebarOpen: boolean;
}

const initialState: stateProps = {
  isSidebarOpen: false,
};

const toggleSidebarSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export default toggleSidebarSlice.reducer;
export const { openSidebar, closeSidebar } = toggleSidebarSlice.actions;
