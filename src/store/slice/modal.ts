import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// type
interface modalState {
  value: boolean;
}

// value
const initialState: modalState = {
  value: false,
};

// reducer
export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// export
export const modalActions = modalReducer.actions;
export const selectModal = (state: RootState) => state.modal.value;
export default modalReducer.reducer;
