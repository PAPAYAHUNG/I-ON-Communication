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

  return {
    setListItems,
    dndState,
  };
};

export default useDnDService;
