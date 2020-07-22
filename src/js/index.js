import 'normalize.css'
import '~css/fonts.css'
import '~css/main.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React, {useEffect} from 'react'
import {render} from 'react-dom'

import {Canvas} from 'react-three-fiber'
import Camera from '~js/components/Camera'
import Plane from '~js/components/Plane'

/**
 * app
 */
const App = () => {
  useEffect(() => {
    // gui.init()
  }, [])

  return (
    <>
      <Canvas camera={{position: [0, 1, 3]}}>
        <Camera />
        <Plane />
      </Canvas>
    </>
  )
}

/**
 * render app
 */
render(
  <App />,
  document.getElementById('app'),
)
