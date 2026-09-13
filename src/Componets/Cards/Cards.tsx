import { use } from "react"
import type { CardType } from "../../CardType"
import Card from "../Card/Card"

export interface CardsProps {
    cardpromise: Promise <CardType[]>
}

export default function Cards({ cardpromise }: CardsProps) {

    const card= use(cardpromise)
    console.log(card)
    
    return (
        <>
        <div className="flex">
        <div className="grid grid-cols-3 gap-4">
            {
               card.map(card=> <Card card={card} ></Card>)
           
            }

        </div>
        <div className="w-[400px]">
            <h2> Your Stack </h2>
        </div>
        </div>
        
        
        </>
    )
}