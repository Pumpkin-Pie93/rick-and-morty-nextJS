import {useCharacters} from "@/assets/hooks/useCharacters";
import CharacterCard from "@/components/characterCard/CharacterCard";
import HeadMeta from "@/components/headMeta/HeadMeta";
import Navbar from "@/components/navbar/Navbar";


export default function Characters() {

  const characters = useCharacters()

  if(!characters){
    return <div>...loading</div>
  }
  return (
    <>
     <HeadMeta title={'Characters page'}/>
        <main style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Navbar/>
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

