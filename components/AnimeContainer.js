function AnimeContainer({ anime }) {
  return (
    <div className="w-1/2 p-2">
      <div className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer select-none">
        <div className="w-full p-1 px-4 text-lg border-gray-500 border-t border-l border-r flex justify-between">
          <div>{anime.name}</div>
          <div className="font-bold">{Number.parseFloat((Math.random() * 3) + 6).toPrecision(3)}</div>
        </div>
        <div className="flex w-full text-center border border-gray-500">
          <img draggable="false" src={anime.image} className="w-1/3 h-72 object-cover" />
          <div className="h-72 px-3 py-2 text-left text-sm overflow-hidden whitespace-pre-line relative">
            <p>{
            `Cupcake ipsum dolor sit. Amet jelly beans lollipop gingerbread. Fruitcake topping carrot cake tiramisu chupa chups dragée. Ice cream cheesecake I love.\n
            Marzipan sugar plum bonbon marzipan jujubes jujubes biscuit pudding donut. Apple pie powder lemon drops powder. Apple pie cupcake soufflé.\n
            Jujubes sugar plum carrot cake icing sweet muffin. Sesame snaps jelly beans donut I love soufflé marshmallow powder carrot cake. Marshmallow gummies chocolate toffee gummi bears.
            Dragée dragée cake cheesecake cake. Brownie sugar plum candy jelly. Cookie bonbon pie candy fruitcake cake chocolate bar. Candy canes liquorice powder.
            Pastry cake sweet roll sugar plum. Pie sesame snaps I love lollipop jelly muffin cotton candy ice cream I love. I love chocolate cake cake wafer cookie marshmallow. Carrot cake ice cream caramels wafer pastry gummies sweet roll.`
            }</p>
            <div className="flex justify-center items-center h-24 absolute bottom-0 left-0 w-full z-10 bg-gradient-to-b from-transparent to-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeContainer;