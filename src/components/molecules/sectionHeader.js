import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "@utils/media"
import Button from "@atoms/button"
import Subheading from "@atoms/subheading"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { Text } from "../../multilang-data/Text"

export const gloveColor = {
  color1: "#458EED",
  color2: "#ffffff",
}

const SectionHeader = () => {
  /**
   * Threejs
   */
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl")

    // Scene
    const scene = new THREE.Scene()

    /**
     * Sizes
     */
    const reducers = {
      height: 1.3,
      width: 1.3,
    }
    const sizes = {
      width: window.innerWidth / reducers.width,
      height: window.innerHeight / reducers.height,
    }

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.y = 1.7
    camera.position.z = -2.5
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.minPolarAngle = Math.PI / 2
    controls.maxPolarAngle = Math.PI / 2

    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader()

    /**
     * Light
     */
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9)
    dirLight.position.x = -19
    dirLight.position.y = 20
    dirLight.position.z = 16.5
    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.9)
    dirLight2.position.x = 20
    dirLight2.position.y = -8.8
    dirLight2.position.z = -7.8
    const ambientLight = new THREE.AmbientLight("white", 0.4)
    // gui.add(pointLight2.position, "x", -10, 20, 0.1)
    // gui.add(pointLight2.position, "y", -10, 20, 0.1)
    // gui.add(pointLight2.position, "z", -10, 20, 0.1)
    scene.add(ambientLight)
    scene.add(dirLight, dirLight2)

    /**
     * Mouse
     */
    const mouse = new THREE.Vector2()
    window.addEventListener("mousemove", e => {
      mouse.x = (e.clientX / sizes.width) * 2 - 1
      mouse.y = -(e.clientY / sizes.height) * 2 + 1
    })

    /**
     * GLTF model material and texture
     */
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/examples/js/libs/draco/")
    loader.setDRACOLoader(dracoLoader)

    const handTexture = textureLoader.load(
      "3d/textures/FR_Medical_Gloves_BaseColor.png"
    )
    const handNormalTexture = textureLoader.load(
      "3d/textures/FR_Medical_Gloves_Normal.png"
    )

    handNormalTexture.flipY = false
    handTexture.flipY = false
    const handMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(gloveColor.color1),
    })
    loader.load(
      "3d/Glove.gltf",
      gltf => {
        gltf.scene.traverse(child => {
          child.material = handMaterial
          controls.target = new THREE.Vector3(0, 1.7, 0)
        })

        scene.add(gltf.scene)
      },
      undefined,
      err => {
        console.log(err)
      }
    )

    document.getElementById("color1-selector").addEventListener("click", () => {
      handMaterial.color = new THREE.Color(gloveColor.color1)
      dirLight.intensity = 0.9
      dirLight2.intensity = 0.9
      ambientLight.intensity = 0.4
    })

    document.getElementById("color2-selector").addEventListener("click", () => {
      handMaterial.color = new THREE.Color(gloveColor.color2)
      dirLight.intensity = 0.7
      dirLight2.intensity = 0.7
      ambientLight.intensity = 0.3
    })

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth / reducers.width
      sizes.height = window.innerHeight / reducers.height

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return (
    <HeaderContainer contentTop content grid backgroundSecondary>
      <GLoveAnimationContainer>
        <canvas
          className="webgl"
          onPointerDown={e => {
            e.target.style.cursor = "grabbing"
          }}
          onPointerUp={e => {
            e.target.style.cursor = "grab"
          }}
          onPointerOver={e => {
            e.target.style.cursor = "grab"
          }}
          style={{ flex: "0.5", opacity: "1" }}
        />
        <ColorControl>
          <div
            id="controls"
            style={{ flex: 1, display: "flex", flexDirection: "row" }}
          >
            <div
              id="color1-selector"
              style={{
                backgroundColor: gloveColor.color1,
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                marginRight: "20px",
                cursor: "url('illustrations/cusor/pointer.png'), pointer",
                border: "1px solid #FFEDC1",
              }}
            />

            <div
              id="color2-selector"
              style={{
                backgroundColor: gloveColor.color2,
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
            />
          </div>
          <div id="controls-bottom-border" style={{ flex: 1 }} />
        </ColorControl>
      </GLoveAnimationContainer>
      <Content>
        <Subheading color="#ffedc1">Triple A Gloves</Subheading>
        <Motto>
          <Text text="Motto" />
        </Motto>
        <CustomLink to="/business">
          <Button>
            <Text text="Learn More" />
          </Button>
        </CustomLink>
      </Content>
    </HeaderContainer>
  )
}

export default SectionHeader

const HeaderContainer = styled.header`
  align-items: center;
  background-color: rgb(77, 146, 235);
  background-image: url("vectors/decor1.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  height: fit-content;
  padding: 0 var(--spacingContent);

  @media ${media.lg} {
    flex-direction: row-reverse;
    min-height: 800px;
  }
`

const CustomLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  margin-bottom: 1rem;
`

const Motto = styled.h2`
  position: relative;
  z-index: 100;
`
const GLoveAnimationContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-bottom: 1rem;
  place-items: center;
  flex-direction: column;
  background-image: url("illustrations/watery-background3-centered.png");
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;

  @media ${media.lg} {
    padding: 0;
    width: 60%;
    flex-basis: 60%;
  }

  .gatsby-image-wrapper {
    width: 80%;
    margin: 0 auto;
  }
`

const ColorControl = styled.div`
  position: relative;
  height: auto;
  flex: 0.5;
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: white;
  height: fit-content;
  margin-bottom: 2rem;

  @media ${media.lg} {
    width: 40%;
    flex-basis: 40%;
  }

  h1 {
    margin-bottom: 3rem;
  }
`
