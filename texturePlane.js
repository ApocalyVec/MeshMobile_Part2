function texturePlane()
{
    let tPlane ={pointsArray: [],
                      colorsArray: [],
                      texCoordsArray: []
                    };
    textureQuad( 3, 0, 4, 7, tPlane);

    return tPlane
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