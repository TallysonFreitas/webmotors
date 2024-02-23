import { configureStore } from '@reduxjs/toolkit'
import filtroSlice from './reducers/Filtro'
import favoritoSlice from './reducers/Favorito'
const store = configureStore({
  reducer: {
    buscarFiltro: filtroSlice,
    favoritos: favoritoSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
