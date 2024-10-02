import {CharactersType, useCharacters} from "@/assets/hooks/useCharacters";
import CharacterCard from "@/components/characterCard/CharacterCard";
import HeadMeta from "@/components/headMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";
import {useCharacter} from "@/assets/hooks/useCharacter";

// type Character = {
//   character: CharactersType
// }

function Character() {

  const character = useCharacter()

  if(!character){
	return <div>...loading</div>
  }
  return (
	<>
	  <HeadMeta title={'Character page'}/>
	  {character && <CharacterCard key={character.id} character={character}/>}
	</>
  );
}

Character.getLayout = getLayout
export default Character