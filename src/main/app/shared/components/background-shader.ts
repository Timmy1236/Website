// @ts-expect-error Archivo .frag importado
import fragmentSource from "../../../../../public/main/assets/shaders/background.frag";
// @ts-expect-error Archivo .vert importado
import vertexSource from "../../../../../public/main/assets/shaders/background.vert";

export interface WebGLBackground {
  updateThemeColors(): void
  destroy(): void
}

/** Crea el renderer WebGL y devuelve sus operaciones de actualización y destrucción. */
export function initializeWebGLBackground(canvas: HTMLCanvasElement): WebGLBackground {
  const glContext = canvas.getContext("webgl2");
  if (!glContext) throw new Error("Este navegador no soporta WebGL 2.");
  const gl: WebGL2RenderingContext = glContext;

  let vertexShader: WebGLShader | null = null;
  let fragmentShader: WebGLShader | null = null;
  let program: WebGLProgram | null = null;
  let buffer: WebGLBuffer | null = null;
  let frameId = 0;
  let destroyed = false;

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    cancelAnimationFrame(frameId);
    if (buffer) gl.deleteBuffer(buffer);
    if (program) gl.deleteProgram(program);
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  };

  try {
    vertexShader = _createShader(gl, gl.VERTEX_SHADER, vertexSource);
    fragmentShader = _createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    program = _createProgram(gl, vertexShader, fragmentShader);

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

    buffer = gl.createBuffer();
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
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const updateThemeColors = () => {
      const colors = _getThemeColors();
      gl.uniform3f(colorA, ...colors.background);
      gl.uniform3f(colorB, ...colors.foreground);
    };
    updateThemeColors();

    const targetFPS = 30;
    const resolutionRender = 0.7;
    const frameInterval = 1000 / targetFPS;
    let lastTime = 0;

    function render(timestamp: number): void {
      if (destroyed) return;
      frameId = requestAnimationFrame(render);

      const elapsed = timestamp - lastTime;
      if (elapsed < frameInterval) return;

      lastTime = timestamp - (elapsed % frameInterval);
      const width = Math.floor(window.innerWidth * resolutionRender);
      const height = Math.floor(window.innerHeight * resolutionRender);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }

      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, timestamp * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    frameId = requestAnimationFrame(render);
    return { updateThemeColors, destroy };
  }
  catch (error) {
    destroy();
    throw error;
  }
}

/** Lee los colores del tema actual desde las variables CSS y los procesa. */
function _getThemeColors(): { background: [number, number, number], foreground: [number, number, number] } {
  const styles = getComputedStyle(document.documentElement);
  const background = styles.getPropertyValue("--color-background").trim();
  const foreground = styles.getPropertyValue("--color-foreground").trim();

  return { background: _darkenRgb(_hexToRgb(background), 0.7), foreground: _darkenRgb(_hexToRgb(foreground), 0.6) };
}

function _hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  return [parseInt(value.slice(0, 2), 16) / 255, parseInt(value.slice(2, 4), 16) / 255, parseInt(value.slice(4, 6), 16) / 255];
}

function _darkenRgb(rgb: [number, number, number], factor = 0.8): [number, number, number] {
  const clamp = (val: number) => Math.max(0, Math.min(1, val));
  return [clamp(rgb[0] * factor), clamp(rgb[1] * factor), clamp(rgb[2] * factor)];
}

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
