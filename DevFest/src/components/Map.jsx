import React from 'react'
import { useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
export default function Chat() {

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      const ifameData=document.getElementById("iframeID")
      document.title = "City Map"
      const lat = pos.coords.latitude|| 1.305385;
      const lon = pos.coords.longitude || 30.923029;
      ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })


});

  return (
    <div id="map">
      <iframe height="500px" width="500px" id="iframeID"></iframe>
    </div>
  )
}
