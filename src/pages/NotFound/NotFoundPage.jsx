import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<div>
			<h1>Sorry...Page is not found!</h1>
			<h2>
				You may back to <Link to='/'>Home</Link>
			</h2>
		</div>
	)
}
