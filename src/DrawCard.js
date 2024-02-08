import React, {useState} from "react";
import axios from "axios";
import ShuffleDeck from "./ShuffleDeck";

let imgUrl = "https://deckofcardsapi.com/static/img/back.png"
const DrawCard = ({deck}) => {
    const [cardImageUrl, setCardImageUrl] = useState(imgUrl)
    const [isActive, setActive] = useState(false)
    const [drawnCards, setDrawCards] = useState([])

    async function shuffleDeckHandler(deckId){
        setDrawCards([])
        setActive(true)
        await ShuffleDeck(deckId)
        setCardImageUrl(imgUrl)
        setActive(false)
        
    }

    async function card() {
        try {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
            setCardImageUrl(res.data.cards[0].image)
            setDrawCards([res.data.cards[0].image, ...drawnCards])
            console.log(drawnCards)
            if(res.data.remaining < 1){
                alert("Error: no cards remaining!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button onClick={() => card()} > Draw Card</button>
            <button disabled={isActive} onClick={() =>shuffleDeckHandler(deck.deck_id)}>Shuffle Deck</button>
            {drawnCards.map((card) => <img src={card}></img>)}
        </div>
    )
}

export default DrawCard