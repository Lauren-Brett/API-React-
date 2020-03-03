import React, { Fragment } from 'react';

function SongDetail({songSelected}){

    if(!songSelected) return null;

    return(
        <Fragment> 
            <p>{songSelected["im:name"]["label"]}</p>
            <p>{songSelected["im:artist"]["label"]}</p>
            <p>{songSelected["category"]["attributes"]["label"]}</p>

        </Fragment>
    )
}

export default SongDetail;