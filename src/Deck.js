import React, {useEffect, useState} from "react";
import axios from "axios";
import DrawCard from "./DrawCard";

const Deck = () => {
    const [deck, setDeck] = useState({})
    useEffect(() => {
        async function func() {
            try {
                const res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
                setDeck(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        func()
    }, [])
    

    return (
        <div>
            <DrawCard deck={deck} />
        </div>
    )
}

export default Deck