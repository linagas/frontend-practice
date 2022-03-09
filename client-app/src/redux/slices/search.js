import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = ''

export const searchSlice = createSlice({
  name: 'search',
  initialState: { value: initialStateValue},
  reducers: {
    changeSearch: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {changeSearch } = searchSlice.actions

export default searchSlice.reducer