import React from 'react';
import Image from "next/image";
import {CharactersType} from "@/assets/hooks/useCharacters";
import s from './characterCard.module.scss'
type CharacterType = {
  character: CharactersType
}

const CharacterCard = (props:CharacterType) => {
  const {character} = props

  return (
	<div className={s.card}>
	  <div>{character.name}</div>
	  <Image src={character.image}
			 alt={`Picture of ${character.name}`}
			 width={300}
			 height={300}
	  />
	</div>
  );
};

export default CharacterCard;