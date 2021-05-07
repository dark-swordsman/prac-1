function AnimeContainer({ anime }) {
  return (
    <div className="w-1/2 p-2">
      <div className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer select-none">
        <div className="w-full p-1 px-4 text-lg border-gray-500 border-t border-l border-r">{anime.name}</div>
        <div className="w-full text-center border border-gray-500">
          <img draggable="false" src={anime.image} className="w-1/3 h-72 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default AnimeContainer;