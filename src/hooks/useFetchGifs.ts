import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category: any) => {

    const [state, setState] = useState({
        data: [] as any,
        loading: true
    });

    useEffect(() => {
        getGifs(category).then((gifs: any) => {
            setState({
                data: gifs,
                loading: false
            })
        });
    }, [category])

    return state;
}
