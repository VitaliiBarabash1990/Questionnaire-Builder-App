import { createSlice } from '@reduxjs/toolkit'
import { createUserThunk, updateUserThunk } from './operations'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		loading: false,
		error: null,
	},
	reducers: {
		removeUser(state, { payload }) {
			const userIndex = state.users.findIndex(user => user.id === payload)
			state.users.splice(userIndex, 1)
		},
		editUser(state, { payload }) {
			const changedUser = state.users.findIndex(user => user.id === payload.id)

			state.users.splice(changedUser, 1, payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(createUserThunk.fulfilled, (state, { payload }) => {
				state.users.push(payload)
				state.loading = false
				state.error = null
			})
			.addCase(updateUserThunk.fulfilled, (state, { payload }) => {
				const changedUser = state.users.findIndex(
					user => user.id === payload.id
				)
				state.users.splice(changedUser, 1, payload)
				state.loading = false
				state.error = null
			})
			.addMatcher(
				action => action.type.endsWith('/pending'),
				state => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, { payload }) => {
					state.loading = false
					state.error = payload
				}
			)
	},
})

export const userReducer = userSlice.reducer
export const { removeUser } = userSlice.actions
