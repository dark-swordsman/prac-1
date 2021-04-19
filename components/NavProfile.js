function NavProfile() {
  return (
    <div class="flex items-center h-full px-4 justify-between cursor-pointer select-none hover:bg-gray-800">
      <div class="pr-12">Username</div>
      <img
        src="https://www.placecage.com/50/50"
        alt="profile picture"
        class="rounded-full h-10"
      />
    </div>
  );
}

export default NavProfile;