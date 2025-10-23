import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stake: 50,
  boxId: 3,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setStake: (state, action) => {
      state.stake = action.payload;
    },
    setBoxId: (state, action) => {
      state.boxId = action.payload;
    },
  },
});

export const { setStake, setBoxId } = stateSlice.actions;

export default stateSlice.reducer;
