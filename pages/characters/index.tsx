import {useCharacters} from "@/assets/hooks/useCharacters";
import CharacterCard from "@/components/characterCard/CharacterCard";
import HeadMeta from "@/components/headMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";
import Link from "next/link";


function Characters() {

  const characters = useCharacters()

  if(!characters){
    return <div>...loading</div>
  }
  return (
    <>
     <HeadMeta title={'Characters page'}/>
          {characters && characters.map((character)=>(
            <Link key={character.id} href={`characters/${character.id}`}>
              <CharacterCard character={character}/>
            </Link>
          ))}
    </>
  );
}

Characters.getLayout = getLayout
export default Characters