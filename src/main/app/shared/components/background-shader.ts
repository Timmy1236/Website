/**
 * Carga el código fuente de un shader desde un archivo externo.
 */
async function _loadShader(path: string): Promise<string> {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`No se pudo cargar el shader: ${path}`);
  return response.text();
}

/**
 * Crea y compila un shader en el contexto WebGL.
 */
function _createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("No se pudo crear el shader.");

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader error:\n${log}`);
  }

  return shader;
}

/**
 * Enlaza los shaders de vértices y fragmentos en un programa WebGL.
 */
function _createProgram(gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
  const program = gl.createProgram();
  if (!program) throw new Error("No se pudo crear el programa WebGL.");

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program error:\n${log}`);
  }

  return program;
}

function _hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  return [parseInt(value.slice(0, 2), 16) / 255, parseInt(value.slice(2, 4), 16) / 255, parseInt(value.slice(4, 6), 16) / 255];
}

function _darkenRgb(rgb: [number, number, number], factor = 0.8): [number, number, number] {
  const clamp = (val: number) => Math.max(0, Math.min(1, val));

  return [
    clamp(rgb[0] * factor),
    clamp(rgb[1] * factor),
    clamp(rgb[2] * factor)
  ];
}

/**
 * Lee los colores del tema actual desde las variables CSS y los procesa.
 */
function _getThemeColors(): { background: [number, number, number], foreground: [number, number, number] } {
  const styles = getComputedStyle(document.documentElement);
  const background = styles.getPropertyValue("--color-background").trim();
  const foreground = styles.getPropertyValue("--color-foreground").trim();

  return { background: _darkenRgb(_hexToRgb(background), 0.7), foreground: _darkenRgb(_hexToRgb(foreground), 0.7) };
}

/**
 * Configura e inicia el bucle de renderizado del fondo animado en WebGL2.
 */
export async function initializeWebGLBackground(): Promise<void> {
  const canvasElement = document.querySelector<HTMLCanvasElement>("#background-canvas");
  if (!canvasElement) throw new Error("No se encontró #background-canvas.");

  const glContext = canvasElement.getContext("webgl2");
  if (!glContext) throw new Error("Este navegador no soporta WebGL 2.");

  const canvas: HTMLCanvasElement = canvasElement;
  const gl: WebGL2RenderingContext = glContext as WebGL2RenderingContext;

  const [vertexSource, fragmentSource] = await Promise.all([
    _loadShader("./assets/shaders/background.vert"),
    _loadShader("./assets/shaders/background.frag")
  ]);

  const vertexShader = _createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = _createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = _createProgram(gl, vertexShader, fragmentShader);

  const position = gl.getAttribLocation(program, "a_position");
  const resolution = gl.getUniformLocation(program, "u_resolution");
  const time = gl.getUniformLocation(program, "u_time");
  const colorA = gl.getUniformLocation(program, "u_color_a");
  const colorB = gl.getUniformLocation(program, "u_color_b");

  if (position === -1) throw new Error("No se encontró a_position en el shader.");
  if (!resolution) throw new Error("No se encontró u_resolution en el shader.");
  if (!time) throw new Error("No se encontró u_time en el shader.");
  if (!colorA) throw new Error("No se encontró u_color_a en el shader.");
  if (!colorB) throw new Error("No se encontró u_color_b en el shader.");

  const buffer = gl.createBuffer();
  if (!buffer) throw new Error("No se pudo crear el buffer.");

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1
    ]),
    gl.STATIC_DRAW
  );

  gl.useProgram(program);

  const colors = _getThemeColors();
  gl.uniform3f(colorA, ...colors.background);
  gl.uniform3f(colorB, ...colors.foreground);

  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(window.innerWidth * dpr);
    const height = Math.floor(window.innerHeight * dpr);

    if (canvas.width === width && canvas.height === height) return;

    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
  }

  function render(timestamp: number): void {
    resize();

    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform1f(time, timestamp * 0.001);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
