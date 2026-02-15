function Navbar() {
	function Welcome(props) {
		return <h1>Welcome, {props.name}</h1>;
	}
	return (
		<nav>
			<Welcome name="Team" />
		</nav>
	);
}

export default Navbar;
