import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { supabase } from '@/lib/supabase';
import { Provider, User } from '@supabase/supabase-js';
import { signIn } from './signIn';
import { getUser } from './getUser';

export { authReducer, type AuthState }

interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log('action payload', action.payload)
      })
      // .addCase(signIn, (state, action: PayloadAction<AuthState>) => {
      //   state.value = action.payload.value
      // })
      // .addCase(signOut, (state, action: PayloadAction<AuthState>) => {
      //   state.value = action.payload.value
      // })
  },
})

// Action creators are generated for each case reducer function
const authReducer = userSlice.reducer
