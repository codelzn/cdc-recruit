import * as THREE from 'three'
import imagesLoaded from 'imagesloaded'

const makeBuffer = (count = 100, fn: any, dimension = 3) => {
  const buffer = Float32Array.from({ length: count * dimension }, (v, k) => {
    return fn(k)
  })
  return buffer
}

export const getPositionCentroids = (
  geometry: THREE.BufferGeometry,
  attrName = 'position',
  centroidName = 'aCenter',
) => {
  const position = geometry.attributes[attrName]
  const posCount = position.count
  const posBuffer = position.array

  const centroidBuffer = makeBuffer(posCount, (val: number) => val)

  for (let i = 0; i < posCount; i += 3) {
    // three vertices of triangle
    let x = posBuffer[i * 3]
    let y = posBuffer[i * 3 + 1]
    let z = posBuffer[i * 3 + 2]

    let x1 = posBuffer[i * 3 + 3]
    let y1 = posBuffer[i * 3 + 4]
    let z1 = posBuffer[i * 3 + 5]

    let x2 = posBuffer[i * 3 + 6]
    let y2 = posBuffer[i * 3 + 7]
    let z2 = posBuffer[i * 3 + 8]

    const centroid = new THREE.Vector3()
      .add(new THREE.Vector3(x, y, z))
      .add(new THREE.Vector3(x1, y1, z1))
      .add(new THREE.Vector3(x2, y2, z2))
      .divideScalar(3)

    centroidBuffer.set([centroid.x, centroid.y, centroid.z], i * 3)
    centroidBuffer.set([centroid.x, centroid.y, centroid.z], (i + 1) * 3)
    centroidBuffer.set([centroid.x, centroid.y, centroid.z], (i + 2) * 3)
  }

  geometry.setAttribute(centroidName, new THREE.BufferAttribute(centroidBuffer, 3))

  return centroidBuffer
}

export const getScreenFov = (z: number) => {
  return THREE.MathUtils.radToDeg(2 * Math.atan(window.innerHeight / 2 / z))
}

export const preloadImages = (sel = 'div') => {
  return new Promise((resolve) => {
    imagesLoaded(sel, { background: true }, resolve)
  })
}

export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
