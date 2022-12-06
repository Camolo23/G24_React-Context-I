import { useContext } from "react";
import MyContext from "../my-context";

export default function Favoritos() {

  const { info } = useContext(MyContext)


  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          info
            .filter(photo => photo.liked)
            .map(photo => (
              <div
                className="foto"
                key={photo.id}
                style={{ backgroundImage: `url(${photo.src.large})` }}
              >
              </div>
            ))
        }
      </div>
    </div>
  );
}
