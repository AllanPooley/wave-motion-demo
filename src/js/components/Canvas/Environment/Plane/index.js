import React, {useRef, useMemo} from 'react'
import {DoubleSide} from 'three'
import {useFrame} from 'react-three-fiber'
import {ShaderMaterial} from 'three'

// import {useAssets, useTexture} from '~js/hooks'

import vertex from '~shaders/plane.vert'
import fragment from '~shaders/plane.frag'

export default () => {
  const mesh = useRef()
  // const mannequinImg = useAssets('images/mannequin.jpg')
  // const mannequinTexture = useTexture(mannequinImg)

  const uniforms = useMemo(() => {
    return {
      uTime: {value: 0},
      // uTexture: {value: mannequinTexture},
    }
  }, [])

  const material = useMemo(() => {
    const mat = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      wireframe: true,
      side: DoubleSide,
    })

    return mat
  }, [])

  useFrame(()=> {
    material.uniforms.uTime.value += 0.01
  })

  return (
    <>
      <mesh
        ref={mesh}
      >
        <planeBufferGeometry
          attach="geometry"
          args={[0.4, 0.6, 16, 16]}
        />
        {/* <shaderMaterial
          args={[{
            uniforms: uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
          }]}
          wireframe
          side={DoubleSide}
          attach="material"
        /> */}
        <primitive
          object={material}
          attach="material"
        />
      </mesh>
    </>
  )
}
