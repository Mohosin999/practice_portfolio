// "use client";

// import { useEffect, useRef } from "react";

// export default function RoboticBackground() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let particles = [];

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 0.5;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.speedY = (Math.random() - 0.5) * 0.5;
//         this.opacity = Math.random() * 0.5 + 0.1;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
//           this.reset();
//           if (this.x < 0) this.x = canvas.width;
//           if (this.x > canvas.width) this.x = 0;
//           if (this.y < 0) this.y = canvas.height;
//           if (this.y > canvas.height) this.y = 0;
//         }
//       }

//       draw(isDark) {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = isDark
//           ? `rgba(100, 200, 255, ${this.opacity})`
//           : `rgba(100, 200, 255, ${this.opacity})`;
//         ctx.fill();
//       }
//     }

//     const initParticles = () => {
//       particles = [];
//       const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//       }
//     };

//     const drawConnections = (isDark) => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 120) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             const lineOpacity = (1 - distance / 120) * 0.15;
//             ctx.strokeStyle = isDark
//               ? `rgba(100, 200, 255, ${lineOpacity})`
//               : `rgba(100, 200, 255, ${lineOpacity})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const drawGrid = (isDark) => {
//       const gridSize = 60;
//       const offset = (performance.now() / 50) % gridSize;

//       ctx.strokeStyle = isDark
//         ? "rgba(100, 200, 255, 0.03)"
//         : "rgba(100, 200, 255, 0.05)";
//       ctx.lineWidth = 0.5;

//       for (let x = -offset; x < canvas.width; x += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvas.height);
//         ctx.stroke();
//       }

//       for (let y = -offset; y < canvas.height; y += gridSize) {
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(canvas.width, y);
//         ctx.stroke();
//       }
//     };

//     const isDark = document.documentElement.classList.contains("dark");

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const currentIsDark = document.documentElement.classList.contains("dark");

//       drawGrid(currentIsDark);

//       particles.forEach((p) => {
//         p.update();
//         p.draw(currentIsDark);
//       });

//       drawConnections(currentIsDark);

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     initParticles();
//     animate();

//     const observer = new MutationObserver(() => {
//       initParticles();
//     });

//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
//     />
//   );
// }

"use client";

import { useEffect, useRef } from "react";

export default function RoboticBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.reset();
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(100, 200, 255, ${this.opacity})`
          : `rgba(50, 150, 255, ${this.opacity * 0.3})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 15000),
        80,
      );
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = (isDark) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineOpacity = (1 - distance / 120) * 0.15;
            ctx.strokeStyle = isDark
              ? `rgba(100, 200, 255, ${lineOpacity})`
              : `rgba(50, 150, 255, ${lineOpacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawGrid = (isDark) => {
      const gridSize = 60;
      const offset = (performance.now() / 50) % gridSize;

      ctx.strokeStyle = isDark
        ? "rgba(100, 200, 255, 0.03)"
        : "rgba(50, 150, 255, 0.02)";
      ctx.lineWidth = 0.5;

      for (let x = -offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const isDark = document.documentElement.classList.contains("dark");

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentIsDark = document.documentElement.classList.contains("dark");

      drawGrid(currentIsDark);

      particles.forEach((p) => {
        p.update();
        p.draw(currentIsDark);
      });

      drawConnections(currentIsDark);

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const observer = new MutationObserver(() => {
      initParticles();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
