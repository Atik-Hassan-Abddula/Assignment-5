import { use, useState } from "react"
import type { CardType } from "../../CardType"
import Card from "../Card/Card"
import { toast } from "react-toastify"
import { MdDelete } from "react-icons/md"





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
    const handelDelete = (id:string):void=>{
        const reamingCount= Count.filter((count)=> count.id !==id)

        setCount(reamingCount)
        toast.success('Card remove')
    }

    const handelRemoveall = ():void=>{
        setCount([])
        toast.success("All Cards remove")
    }
 
   
    return (
        <>
        <div className="flex">
        <div className="grid grid-cols-3 gap-4">
            {
               card.map(card=> <Card card={card} key={card.id} handelcounter ={handelcounter } ></Card>
           
              )}

        </div>
        <div className="w-200">

            <h2> Your Stack  </h2>
             
         
         {
            Count.length===0? "No technologies selected yet":` ${Count.length} technologies selected`
         }
           
            <div className="w-12.5 gap-2  ">
              {
               
               Count.map((Count)  => ( 
                <div key={Count.id}  className="flex items-center ">
                   
                    <img src={Count.icon} alt={Count.name} />
                    <h3>{Count.name}</h3>
                
               
                <button className="cursor-pointer " onClick={()=> handelDelete(Count.id) }>
                    <MdDelete />

                </button>
                
                
            </div>
            
               ))}
        </div>
        {Count.length>0&&(
   
    <button onClick={handelRemoveall} className="w-full mt-5 bg-black text-white py-2 rounded-lg hover:bg-gray-500">
    Remove All
    
    </button>


   )}
               
        </div>  
 

  



            </div>
            
        </>
            )
        }