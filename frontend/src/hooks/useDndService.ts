import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import * as dndAction from '../redux/slice/dndSlice';
import { useAppDispatch, useAppSelector } from './useStateHook';

const useDnDService = () => {
  const dispatch = useAppDispatch();

  //  Selectors
  const dndState = useAppSelector((state) => state.dnd, shallowEqual);

  // Dispatch Function
  const setListItems = useCallback((item:any) => {
    dispatch(dndAction.actions.setListItems(item));
  }, [dispatch]);

  const setActiveKey = useCallback((item:any) => {
    dispatch(dndAction.actions.setActiveKey(item));
  }, [dispatch]);

  const setClickedItem = useCallback((item:any) => {
    dispatch(dndAction.actions.setClickedItem(item));
  }, [dispatch]);

  const deleteItem = useCallback((item:any) => {
    dispatch(dndAction.actions.deleteItem(item));
  }, [dispatch]);

  return {
    setListItems,
    dndState,
    setActiveKey,
    deleteItem,
    setClickedItem

  };
};

export default useDnDService;
