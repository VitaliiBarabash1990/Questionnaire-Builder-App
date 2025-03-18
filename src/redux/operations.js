import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

export const createUserThunk = createAsyncThunk(
	'users/createUserThunk',
	async (user, thunkAPI) => {
		try {
			const status = await axios.get('https://yesno.wtf/api')
			const avatar = await axios.get(
				`https://api.dicebear.com/6.x/adventurer/svg?seed=${user.name}${user.age}`
			)

			return {
				...user,
				id: nanoid(),
				status: status.data.answer,
				avatar: avatar.data,
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	},
	{
		condition: (_, { getState }) => {
			const isLoading = getState().loading
			if (isLoading) return false
		},
	}
)

export const updateUserThunk = createAsyncThunk(
	'users/updateUserThunk',
	async (user, thunkAPI) => {
		try {
			const avatar = await axios.get(
				`https://api.dicebear.com/6.x/adventurer/svg?seed=${user.name}${user.age}`
			)

			return { ...user, avatar: avatar.data }
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	},
	{
		condition: (_, { getState }) => {
			const isLoading = getState().loading
			if (isLoading) return false
		},
	}
)
