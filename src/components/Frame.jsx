import React from 'react'

const Frame = ({match}) => {
    let Pos = match.params.pos;
    let POS = Pos.split(',')
  return (
    <iframe width="600" height="500" id="gmap_canvas" src={"https://maps.google.com/maps?q=" + POS[0] + "," + POS[1] +"&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
  )
}

export default Frame