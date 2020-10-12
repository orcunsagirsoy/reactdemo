import React from 'react'
import Trailer from './Trailer'
import { Col } from 'react-bootstrap'

export default function TrailerList({data}) {
    let trailers = data.map(function(trailer) {
      return(
          <Trailer trailer={trailer.key}/>
      );
    });

    const style = {
      marginTop: '5px',
      marginLeft: '1em'
    };

    const titleStyle = {
      marginTop: '1em',
      
      paddingLeft: '20px',
      textAlign: 'left'
    };

    if (trailers.length !== 0){
      return(
        <div>
          <h3 style={titleStyle}>Trailers</h3>
          <div style={style}>{trailers}</div>
        </div>
      );
    } else
      return null;
}
