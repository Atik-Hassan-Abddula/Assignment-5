import { use, useState } from "react"
import type { CardType } from "../../CardType"
import Card from "../Card/Card"
import { toast } from "react-toastify"

export interface CardsProps {
    cardpromise: Promise <CardType[]>
}

export default function Cards({ cardpromise }: CardsProps) {
  
    const [Count,setCount]=useState <CardType[]>([])

    const card= use(cardpromise)
  
    const handelcounter =(count:CardType):void=>{
        if(Count.includes(count)){
          const reamingCount  =  Count.filter(c=> c!==count)
       
        toast.success('Card remove')
         setCount(reamingCount)
        }else{
           const newCount = [...Count,count]
           toast.success('Card added!')
           setCount(newCount)
        }
       
    }
   
    return (
        <>
        <div className="flex">
        <div className="grid grid-cols-3 gap-4">
            {
               card.map(card=> <Card card={card} handelcounter ={handelcounter } ></Card>)
           
            }

        </div>
        <div className="w-100">

            <h2> Your Stack {Count.length} </h2>
            

            <div className="w-12.5 gap-2">
                {
                    Count.map(Count=> <img src={Count.icon}/>)
                }
            </div>
            {
           
            }
        </div>
        </div>
        
        
        </>
    )
}