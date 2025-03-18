import { createSelector } from '@reduxjs/toolkit'

export const selectUsers = state => state.userTable.users
export const selectLoading = state => state.userTable.loading
export const selectFilter = state => state.filter.filter
export const selectFilteredData = createSelector(
	[selectUsers, selectFilter],
	(users, filter) => {
		
		switch (filter) {
			case 'age': {
				return [...users].sort((a, b) => a.age - b.age)
			}
			case 'name': {
				return [...users].sort((a, b) => a.name.localeCompare(b.name))
			}
			default:
				return users
		}
	}
)
