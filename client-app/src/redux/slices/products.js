import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = []

export const products = createSlice({
  name: 'products',
  initialState: { value: initialStateValue},
  reducers: {
    setProducts: (state, actions) => {
      state.value = actions.payload
    }
  },
})

export const { setProducts } = products.actions

export default products.reducer