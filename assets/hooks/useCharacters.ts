import {useEffect, useState} from "react";
import axios from "axios";
import {Nullable} from "@/assets/types";

export const useCharacters = ():Nullable<CharactersType[]> => {
  const [characters, setCharacters] = useState<Nullable<CharactersType[]>>(null)

  useEffect(() => {
	axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
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