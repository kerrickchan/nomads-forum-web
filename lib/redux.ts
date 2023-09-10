import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '@/feature/auth/authSlice'

export { store, type RootState, type AppDispatch }

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch
