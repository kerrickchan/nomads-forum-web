import { supabase } from '@/lib/supabase'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Provider } from '@supabase/supabase-js'

export { signIn }

const signIn = createAsyncThunk(
  'users/signInWithOAuth',
  async (provider: Provider) => {
    return supabase.auth.signInWithOAuth({
      provider,
    })
  },
)
