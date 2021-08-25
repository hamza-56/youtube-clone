import { SearchIcon, Logo } from 'icons';
import { Link } from 'react-router-dom';

const Header = ({ handleSearch }) => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<Link className="navbar-brand" to="/">
				<Logo />
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<SearchIcon />
			</button>
			<div
				className="collapse navbar-collapse justify-content-center"
				id="navbarSupportedContent"
			>
				<form onSubmit={handleSearch} className="d-flex w-50">
					<input
						className="form-control rounded-0"
						type="search"
						placeholder="Search"
						name="searchtext"
						aria-label="Search"
					/>
					<button className="btn btn-light rounded-0" type="submit">
						<SearchIcon />
					</button>
				</form>
			</div>
		</div>
	</nav>
);

export default Header;
