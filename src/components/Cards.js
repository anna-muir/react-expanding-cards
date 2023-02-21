import CardContainer from "./CardContainer"
import { useState } from 'react'
const Cards = () => {


    // // Set intial state of cardClass
    // // active = null
    // // objects = array of items
    // const [cardClass, setCardClass] = useState({
    //     active: null,
    //     objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    // });

    // // sets active =  to the id that is clicked on
    // const toggle = (index) => {
    //     setCardClass({ ...cardClass, active: cardClass.objects[index] })
    // }

    // const toggleStyles = (index) => {
    //     if (cardClass.objects[index] === cardClass.active) {
    //         return "card active"
    //     } else {
    //         return "card"
    //     }
    // }

    // Set intial state of cardClass
    // active = null
    // objects = array of items



    const [cardClass, setCardClass] = useState({
        active: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],

    });

    // sets active =  to the id that is clicked on
    const toggle = (index) => {
        setCardClass({ ...cardClass, active: cardClass.objects[index] })
    }


    const toggleStyles = (index) => {


        if (cardClass.objects[index] === cardClass.active) {
            return "active"
        }

        else {

            return ""
        }
    }

    const toggleStylesZero = (index) => {
        if (cardClass.objects[1 || 2 || 3 || 4] === cardClass.active) {
            return "card"
        }

        else {
            return "card active"
        }
    }


    return (
        <CardContainer>

            {/* Maps through cardClass.objects and takes in index
            Sets key to index,  setclass name to toggle styles and sets onclick to toggle
            when element is clicked, index is pass through */}
            {cardClass.objects.map((elements, index) => (
                <div key={index} className={index === 0 ? toggleStylesZero(index) : `card ${toggleStyles(index)}`} onClick={() => { toggle(index) }}>
                </div>
            ))}
        </CardContainer >
    )
}

export default Cards
