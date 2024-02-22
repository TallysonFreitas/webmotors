import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroStateType = {
  termo: string
}

const initialState: FiltroStateType = {
  termo: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions
export default filtroSlice.reducer
