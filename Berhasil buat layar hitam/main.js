function main() {
    var canvas = document.getElementById('myCanvas');
    var gl =canvas.getContext("webgl");

    // ibaratkan di bawah ini adalah .c
    var vertexShaderSource  = `
        void main() {

        }
    `;
    var fragmentShaderSource = `
        void main() {

        }
    `;

    // Ibaratkan di bawah ini adalah .o
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)


    // ibarat  mengetikkan source code ke dalam penampung .c 
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // ibarat mengompilasi .c menjadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // ibarat membuatkan penampung .exe
    var shaderProgram = gl.createProgram();

    // ibarat memasukkan "adonan " .o ke dalam penampung .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // ibarat menggabung-gabungkan "adonan" yang ada dalam penampung .exe
    gl.linkProgram(shaderProgram);

    // ibarat memmulai menggunakan "cat" .exe ke dalam konteks grafika(penggambaran)
    gl.useProgram(shaderProgram); 

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);  
}