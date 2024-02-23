import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FavoritosType = {
  favs: string[]
}

const initialState: FavoritosType = {
  favs: []
}

const FavoritosSlice = createSlice({
  name: 'Favoritos',
  initialState,
  reducers: {
    adicionaFavorito: (state, action: PayloadAction<string>) => {
      if (
        state.favs.findIndex(
          (each) => each.toLowerCase() === action.payload.toLowerCase()
        ) === -1
      ) {
        state.favs = [...state.favs, action.payload]
      }
    },
    removeFavorito: (state, action: PayloadAction<string>) => {
      state.favs = state.favs.filter(
        (each) => each.toLowerCase() !== action.payload.toLowerCase()
      )
    }
  }
})

export default FavoritosSlice.reducer
export const { adicionaFavorito, removeFavorito } = FavoritosSlice.actions
