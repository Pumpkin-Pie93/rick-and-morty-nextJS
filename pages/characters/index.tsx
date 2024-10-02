import {useCharacters} from "@/assets/hooks/useCharacters";
import CharacterCard from "@/components/characterCard/CharacterCard";
import HeadMeta from "@/components/headMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";


function Characters() {

  const characters = useCharacters()

  if(!characters){
    return <div>...loading</div>
  }
  return (
    <>
     <HeadMeta title={'Characters page'}/>
          {characters && characters.map((character)=>(
            <CharacterCard key={character.id} character={character}/>
          ))}
    </>
  );
}

Characters.getLayout = getLayout
export default Characters