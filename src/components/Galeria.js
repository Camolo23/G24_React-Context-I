import "../assets/css/galeria.css";
import MyContext from "../my-context";

import Heart from "./Heart";
import { useContext } from "react";

export default function Home() {
  const { info, setInfo } = useContext(MyContext);

  const handleClick = ( id ) => {
    const updatePhotos = info.map( photo => {
      if ( photo.id === id ) {
        return { ...photo, liked: !photo.liked };
      };
      return photo;
    });
    setInfo(updatePhotos);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {info.map(photo => (
        <div
          className="foto"
          key={photo.id}
          style={{ backgroundImage: `url(${photo.src.large})` }}
          onClick={ () => handleClick(photo.id) } 
          >
          <Heart filled={ photo.liked } />
          <p>{photo.alt}</p>
        </div>
      ))}
    </div>
  );
}
