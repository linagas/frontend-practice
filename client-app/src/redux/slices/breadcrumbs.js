import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = []

export const breadcrumbs = createSlice({
  name: 'breadcrumbs',
  initialState: { value: initialStateValue},
  reducers: {
    setBreadcrumbs: (state, actions) => {
      state.value = actions.payload
    }
  },
})

export const { setBreadcrumbs } = breadcrumbs.actions

export default breadcrumbs.reducer