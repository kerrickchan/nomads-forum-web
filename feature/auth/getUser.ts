import { supabase } from '@/lib/supabase'
import { createAsyncThunk } from '@reduxjs/toolkit'

export { getUser }

const getUser = createAsyncThunk(
  'users/getUser',
  async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      return user
    } catch (err) {
      return null
    }
  },
)
