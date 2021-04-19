import NavProfile from './NavProfile/NavProfile';

function Header() {
	return (
		<div class="h-12 flex justify-between items-center">
			<img src="/placeholder-neighbor.png" />
			<NavProfile />
		</div>
	);
}

export default Header;