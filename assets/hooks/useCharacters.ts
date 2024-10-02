import {useEffect, useState} from "react";
import axios from "axios";
import {Nullable} from "@/assets/types";

export const useCharacters = ():Nullable<CharactersType[]> => {
  const [characters, setCharacters] = useState<Nullable<CharactersType[]>>(null)

  useEffect(() => {
	axios.get('https:/rickandmortyapi.com/api/character')
	  .then(res => setCharacters(res.data.results))
  }, []);

  return characters
};


//types
export type CharactersType = {
  id:number
  name: string
  image:string
}