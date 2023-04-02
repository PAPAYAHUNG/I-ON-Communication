import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { XYCoord } from 'react-dnd';
import { API_URL } from '../../constants/api';

const sliceName = 'banner';

interface ListItemProps {
  element: string;
  coordinate: XYCoord | null;
  id: number;
  stylingConfig:any
}
export interface DndProps {
  isLoading: boolean;
  data: any;
  error: any;
  listItems: ListItemProps[];
  counting: number;
  activeTab: string;
  clickedItem: string;
}





const INITIAL_STATE: DndProps = {
  isLoading: true,
  data: {},
  error: null,
  counting: 0,
  listItems: [],
  activeTab: '1',
  clickedItem: '',
};

export const DndSlice = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {
    setListItems: (state, { payload }) => {
      state.counting += 1;
      const updatedPayload = { ...payload, id: state.counting };
      state.listItems = [...state.listItems, updatedPayload];
    },
    setActiveKey: (state, { payload }) => {
      console.log('im run tab here');
      console.log({ payload });

      state.activeTab = payload;
    },
    setClickedItem: (state, { payload }) => {
      state.clickedItem = payload;
    },
    deleteItem: (state, { payload }) => {
      console.log({ payload });

      const index = state.listItems.findIndex(
        (item: any) => item.id === payload,
      );

      if (index !== -1) {
        state.listItems.splice(index, 1);
      }
    },
  },
});

export const { actions } = DndSlice;

export default DndSlice.reducer;
