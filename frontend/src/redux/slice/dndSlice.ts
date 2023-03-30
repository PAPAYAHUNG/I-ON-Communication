import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { XYCoord } from 'react-dnd';
import { API_URL } from '../../constants/api';

const sliceName = 'banner';

export interface DndProps {
  isLoading: boolean;
  data: any;
  error: any;
  listItems: any;
  counting: number;
}

interface ListItemProps {
  element: string;
  coordinate: XYCoord | null;
  id: number;
}

const INITIAL_STATE: DndProps = {
  isLoading: true,
  data: {},
  error: null,
  counting: 0,
  listItems: [],
};

export const DndSlice = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {
    setListItems: (state, { payload }) => {
      state.counting += 1;
      state.listItems = [...state.listItems, payload];
    },
  },
});

export const { actions } = DndSlice;

export default DndSlice.reducer;
