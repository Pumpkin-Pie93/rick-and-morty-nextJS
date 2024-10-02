import {useState} from "react";

import s from './accordion.module.scss'

type AccordionListType = {
  list: string[]
  title:string
}

export const AccordionList = (props:AccordionListType) => {
  const [showList,setShowList]  = useState(false)
  const {title,list} = props
  return (
	<div onClick={()=>setShowList(!showList)} className={s.listTrigger}>
	  {title}: {!showList ? '...(show list 🔻)' : '🔺'}
	  {showList && <ul>{list.map((l, index) => <li key={index}>{l}</li>)}
	  </ul>}
	</div>
  );
};
