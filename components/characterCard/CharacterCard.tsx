import React from 'react';
import Image from "next/image";
import s from './characterCard.module.scss'
import {CharactersType} from "@/assets/hooks/useCharacters";
import {AccordionList} from "@/components/accordion/Accordion";
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
	  <div>
		<div>Gender: {character.gender}</div>
		<div>Species: {character.species}</div>
		<div>Status:{character.status}</div>
		<div>Gender:{character.gender}</div>
		<AccordionList title={'Episode'} list={character.episode}/>
		<div>Location:{character.location.name}</div>
		<div>Origin:{character.origin.name}</div>
	  </div>
	</div>
  );
};

export default CharacterCard;