import { configureStore } from '@reduxjs/toolkit'
import filtroSlice from './reducers/Filtro'

const store = configureStore({
  reducer: {
    buscarFiltro: filtroSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
