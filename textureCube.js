let minT = 0.0;
let maxT = 1.0;

//Texture coordinates at the corners of a quadrilateral
let texCoord = [
    vec2(minT, minT),
    vec2(minT, maxT),
    vec2(maxT, maxT),
    vec2(maxT, minT)
];

let vertices = [
    vec4( -0.5, -0.5,  0.5, 1.0 ),
    vec4( -0.5,  0.5,  0.5, 1.0 ),
    vec4( 0.5,  0.5,  0.5, 1.0 ),
    vec4( 0.5, -0.5,  0.5, 1.0 ),
    vec4( -0.5, -0.5, -0.5, 1.0 ),
    vec4( -0.5,  0.5, -0.5, 1.0 ),
    vec4( 0.5,  0.5, -0.5, 1.0 ),
    vec4( 0.5, -0.5, -0.5, 1.0 )
];

let vertexColors = [
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
    vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
    vec4( 0.0, 1.0, 1.0, 1.0 ),  // white
    vec4( 0.0, 1.0, 1.0, 1.0 )   // cyan
];

function textureCube()
{
    let tCube ={pointsArray: [],
                      colorsArray: [],
                      texCoordsArray: []
                    };
    textureQuad( 1, 0, 3, 2, tCube);
    textureQuad( 2, 3, 7, 6, tCube);
    textureQuad( 3, 0, 4, 7, tCube);
    textureQuad( 6, 5, 1, 2, tCube);
    textureQuad( 4, 5, 6, 7, tCube);
    textureQuad( 5, 4, 0, 1, tCube);

    return tCube
}

function textureQuad(a, b, c, d, mesh) {
    mesh.pointsArray.push(vertices[a]);
    mesh.colorsArray.push(vertexColors[a]);
    mesh.texCoordsArray.push(texCoord[0]);

    mesh.pointsArray.push(vertices[b]);
    mesh.colorsArray.push(vertexColors[a]);
    mesh.texCoordsArray.push(texCoord[1]);

    mesh.pointsArray.push(vertices[c]);
    mesh.colorsArray.push(vertexColors[a]);
    mesh.texCoordsArray.push(texCoord[2]);

    mesh.pointsArray.push(vertices[a]);
    mesh.colorsArray.push(vertexColors[a]);
    mesh.texCoordsArray.push(texCoord[0]);

    mesh.pointsArray.push(vertices[c]);
    mesh.colorsArray.push(vertexColors[a]);
    mesh.texCoordsArray.push(texCoord[2]);

    mesh.pointsArray.push(vertices[d]);
    mesh.colorsArray.push(vertexColors[a]);
    mesh.texCoordsArray.push(texCoord[3]);
}