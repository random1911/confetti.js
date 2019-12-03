import { IOptions, defaultOptions } from "./defaults";

interface IParticle {
  color: string;
  x: number;
  y: number;
  diameter: number;
  tilt: number;
  tiltAngleIncrement: number;
  tiltAngle: number;
}

const createConfetti = (
  canvas: HTMLCanvasElement,
  options?: Partial<IOptions>
) => {
  const combinedOptions = { ...defaultOptions, options };
  if (!canvas || !canvas.getContext("2d")) {
    throw new Error("Unable to create confetti: wrong canvas parameter");
  }
  let streamingConfetti = false;
  let animationTimer: null | number = null;
  const particles: IParticle[] = [];
  let waveAngle = 0;
  const notABrowser = typeof window === "undefined";
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Unable to create confetti: cant get canvas context");
  }
  let canvasWidth = 0;
  let canvasHeight = 0;

  // TODO: what about create new particle object here, not reset?
  const resetParticle = (
    particle: IParticle,
    width: number,
    height: number
  ): IParticle => {
    const { colors } = combinedOptions;
    particle.color = colors[(Math.random() * colors.length) | 0];
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = 0;
    return particle;
  };

  // TODO: set canvas sizes on resize

  const getCanvasSizes = () => {
    if (!canvas) return;
    const { width, height } = canvas;
    canvasWidth = width;
    canvasHeight = height;
  };

  const updateParticles = () => {
    const { particleSpeed, maxParticleCount } = combinedOptions;
    waveAngle += 0.01;

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      if (!streamingConfetti && particle.y < -15)
        particle.y = canvasHeight + 100;
      else {
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.x += Math.sin(waveAngle);
        particle.y +=
          (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.2;
        particle.tilt = Math.sin(particle.tiltAngle) * 15;
      }
      if (
        particle.x > canvasWidth + 20 ||
        particle.x < -20 ||
        particle.y > canvasHeight
      ) {
        if (streamingConfetti && particles.length <= maxParticleCount) {
          resetParticle(particle, canvasWidth, canvasHeight);
        } else {
          particles.splice(i, 1);
          i -= 1;
        }
      }
    }
  };

  const drawParticles = () => {
    particles.map(particle => {
      context.beginPath();
      context.lineWidth = particle.diameter;
      context.strokeStyle = particle.color;
      const x = particle.x + particle.tilt;
      context.moveTo(x + particle.diameter / 2, particle.y);
      context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
      context.stroke();
    });
  };

  const start = () => {
    const { maxParticleCount } = combinedOptions;
    if (notABrowser || !canvas) return;
    getCanvasSizes();
    while (particles.length < maxParticleCount) {
      // TODO: {} as IParticle
      particles.push(resetParticle({} as IParticle, canvasWidth, canvasHeight));
    }
    streamingConfetti = true;
    const runAnimation = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      if (particles.length === 0) animationTimer = null;
      else {
        updateParticles();
        drawParticles();
        animationTimer = requestAnimationFrame(runAnimation);
      }
    };
    if (animationTimer === null) {
      runAnimation();
    }
  };

  const stop = () => {
    streamingConfetti = false;
  };

  const removeConfetti = () => {
    stop();
    particles.length = 0;
  };

  const togglePlay = () => {
    streamingConfetti ? start() : stop();
  };
  return {
    start,
    stop,
    removeConfetti,
    togglePlay,
    get isPlaying() {
      return streamingConfetti;
    }
  };
};

export default createConfetti;
