import React, {useEffect, useState} from "react";
import axios from "axios";

async function ShuffleDeck(deckId) {
        try {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
            console.log("shuffled deck")
        } catch (error) {
            console.log(error)
        }
    }


export default ShuffleDeck