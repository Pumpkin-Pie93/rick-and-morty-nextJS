import {useEffect, useReducer, useState} from "react";
import axios from "axios";
import {Nullable} from "@/assets/types";
import {useRouter} from "next/router";
import {CharactersType} from "@/assets/hooks/useCharacters";

export const useCharacter = ():Nullable<CharactersType> => {
  const router = useRouter()
  const [character, setCharacter] = useState<Nullable<CharactersType>>(null)

  useEffect(() => {
	axios.get(`https:/rickandmortyapi.com/api/character/${router.query.id}`)
	  .then(res => setCharacter(res.data))
  }, []);

  return character
};
