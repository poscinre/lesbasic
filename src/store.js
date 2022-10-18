import { configureStore, createSlice } from '@reduxjs/toolkit';

let clothes = createSlice({
  name: "clothes",
  initialState: [
    {id : 10, name : 'White and Black', count : 2},
    {id : 11, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, action) {
      let nums = state.findIndex( a => a.id === action.payload);
      state[nums].count++;
    },
    addItem(state, action){
      state.push(action.payload)
    },
    minusCount(state, action) {
      let nums = state.findIndex( a => a.id === action.payload);
      if (state[nums].count > 1)  state[nums].count--;
    },
    deleteCount(state, action) {
      const i = state.findIndex((a) => a.id === action.payload);
      state.splice(i, 1);
    }
  },
});

export let {addItem, addCount, minusCount, deleteCount} = clothes.actions;

export default configureStore({
  reducer: {
    clothes : clothes.reducer
   }
}) 