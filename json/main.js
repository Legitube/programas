fetch('http://127.0.0.1:5500/pibes.json')
.then((Response) => Response.json())
.then((pibes) => {
    const nombresDePibes = pibes.map
    ((pibes) => pibes.nombre)
});