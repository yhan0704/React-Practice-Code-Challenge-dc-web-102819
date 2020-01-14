import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiOnplate.map(sushi => <Sushi key={sushi.id} 
        sushi={sushi} 
        onClickPlate={props.onClickPlate} />)}

        <MoreButton sushiOnplate={props.sushiOnplate} 
        addMoreHandle={props.addMoreHandle}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer