import React from 'react';
import { URL_YOUTUBE } from '../const';

/**
 * Represents a trailer 
 * @param {string} trailer - the address of trailer for YouTube api
 */
export default function Trailer({trailer}) {
  return <iframe style={{margin:'5px'}} title={URL_YOUTUBE + trailer} src={URL_YOUTUBE + trailer} allowFullScreen />;
}

Trailer.propTypes = {
  trailer: React.PropTypes.string.isRequired,
};
