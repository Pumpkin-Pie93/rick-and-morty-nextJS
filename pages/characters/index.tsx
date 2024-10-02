import Head from "next/head";
import {useCharacters} from "@/assets/hooks/useCharacters";
import CharacterCard from "@/components/characterCard/CharacterCard";
import HeadMeta from "@/components/headMeta/HeadMeta";


export default function Characters() {

  const characters = useCharacters()

  if(!characters){
    return <div>...loading</div>
  }
  return (
    <>
     <HeadMeta/>
        <main style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          {characters && characters.map((character)=>(
            <CharacterCard key={character.id} character={character}/>
          ))}
        </main>
        <footer>
          footer
        </footer>
    </>
  );
}

