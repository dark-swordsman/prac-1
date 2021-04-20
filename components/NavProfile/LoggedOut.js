function LoggedOut() {
  return (
    <div className="flex space-x-2">
      <div className="w-24 h-9">
        <button className="w-full h-full rounded-lg focus:outline-none bg-blue-700 hover:bg-blue-800 hover:text-gray-300">Sign Up</button>
      </div>
      <div className="w-24 h-9">
        <button className="w-full h-full rounded-lg border-2 focus:outline-none text-gray-300 border-gray-300 hover:text-gray-400 hover:border-gray-400">Log In</button>
      </div>
    </div>
  );
}

export default LoggedOut;