import React from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}: any) => {


    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInUp">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map((img: any) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;
