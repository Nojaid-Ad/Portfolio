/**
 * Hero liquid / water canvas effect.
 *
 * Renders soft, semi-transparent gradient blobs that drift slowly
 * and respond gently to mouse position — creating a subtle
 * "liquid movement" feel without overwhelming the content.
 *
 * Respects `prefers-reduced-motion`.
 */

export class LiquidCanvas {
  constructor(canvas) {
    if (!canvas) return;

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.blobs = [];
    this.mouse = { x: -9999, y: -9999 };
    this.raf = null;
    this.running = false;

    this.reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    this._onResize = this._resize.bind(this);
    this._onMouse = this._trackMouse.bind(this);
    this._onVisibility = this._handleVisibility.bind(this);

    this._resize();
    this._createBlobs();

    window.addEventListener('resize', this._onResize);
    document.addEventListener('visibilitychange', this._onVisibility);

    /* Let the hero section area handle mouse tracking */
    const heroSection = canvas.closest('.hero-section') || canvas.parentElement;
    heroSection.addEventListener('mousemove', this._onMouse);
    heroSection.addEventListener('mouseleave', () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
    });

    if (!this.reducedMotion) {
      this._start();
    } else {
      /* Draw a single static frame so the canvas isn't blank */
      this._draw();
    }
  }

  /* ─── Private ─── */

  _resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  _createBlobs() {
    const w = this.canvas.width || 1200;
    const h = this.canvas.height || 800;

    const palette = [
      'rgba(51, 156, 255, 0.07)',
      'rgba(102, 204, 255, 0.055)',
      'rgba(0, 51, 102, 0.045)',
      'rgba(51, 156, 255, 0.035)',
      'rgba(99, 179, 237, 0.04)',
    ];

    this.blobs = palette.map((color, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      baseRadius: 120 + Math.random() * 180,
      radius: 120 + Math.random() * 180,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      phase: (Math.PI * 2 * i) / palette.length,
      color,
    }));
  }

  _trackMouse(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  _draw() {
    const { ctx, canvas, blobs, mouse } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const blob of blobs) {
      /* Slow phase drift */
      blob.phase += 0.004;

      /* Base motion */
      blob.x += blob.vx + Math.sin(blob.phase) * 0.25;
      blob.y += blob.vy + Math.cos(blob.phase * 0.8) * 0.25;

      /* Subtle breathing */
      blob.radius =
        blob.baseRadius + Math.sin(blob.phase * 1.2) * 18;

      /* Gentle mouse attraction */
      if (mouse.x > 0) {
        const dx = mouse.x - blob.x;
        const dy = mouse.y - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          const force = 0.0015 * (1 - dist / 400);
          blob.x += dx * force;
          blob.y += dy * force;
        }
      }

      /* Wrap around */
      const r = blob.radius;
      if (blob.x < -r) blob.x = canvas.width + r;
      if (blob.x > canvas.width + r) blob.x = -r;
      if (blob.y < -r) blob.y = canvas.height + r;
      if (blob.y > canvas.height + r) blob.y = -r;

      /* Draw radial gradient blob */
      const grad = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius,
      );
      grad.addColorStop(0, blob.color);
      grad.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  _loop() {
    if (!this.running) return;
    this._draw();
    this.raf = requestAnimationFrame(() => this._loop());
  }

  _start() {
    if (this.running) return;
    this.running = true;
    this._loop();
  }

  _stop() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
  }

  _handleVisibility() {
    if (document.hidden) {
      this._stop();
    } else if (!this.reducedMotion) {
      this._start();
    }
  }

  /** Call when the component is destroyed. */
  destroy() {
    this._stop();
    window.removeEventListener('resize', this._onResize);
    document.removeEventListener('visibilitychange', this._onVisibility);
  }
}
