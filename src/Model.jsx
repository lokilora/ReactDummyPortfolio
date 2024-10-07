import React from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';



function Model() {
    const { nodes, materials } = useGLTF('/models/myModel.gltf');

    const baseColorTexture = new TextureLoader().load('/models/textures/Tex_Ride_FengHuang_01a_D_A.tga.png');
    const emissiveTexture = new TextureLoader().load('/models/textures/Tex_Ride_FengHuang_01a_E.tga.png');


    materials['MatI_Ride_FengHuang_01a'].map = baseColorTexture;
    materials['MatI_Ride_FengHuang_01a'].emissiveMap = emissiveTexture;
    // Log nodes and materials to inspect their structure
    console.log("Nodes:", nodes);
    console.log("Materials:", materials);

    // Ensure nodes and materials are loaded
    if (!nodes || !materials) {
        console.error("Model data is not loaded properly");
        return null;
    }

    const nodeName = "AMesh_Ride_FengHuang_01"; // Ensure this is correct
    const materialName = "MatI_Ride_FengHuang_01a"; // Ensure this is correct

    // Check if the node and material exist
    if (!nodes[nodeName]) {
        console.error(`Node not found: ${nodeName}`);
        return null;
    }

    if (!materials['MatI_Ride_FengHuang_01a'] || !materials['MatI_Ride_FengHuang_01b']) {
        console.error('Material not found!');
        return null;
    }
    
    if (!materials[materialName]) {
        console.error(`Material not found: ${materialName}`);
        return null;
    }

    console.log("Geometry:", nodes[nodeName].geometry); // Log geometry

    return (
        <mesh geometry={nodes['AMesh_Ride_FengHuang_01'].geometry} material={materials['MatI_Ride_FengHuang_01a']} />

    );
}

export default Model;
