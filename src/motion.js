/**
 * All site motion, framework-agnostic: instantiate once on mount, call
 * componentWillUnmount() on teardown. Queries the DOM by data-ax-* hooks.
 */
export default class SiteMotion {
  constructor(props = {}) {
    this.props = props;
  }

  componentDidMount() {
    this.root = document.querySelector('[data-ax-root]');
    if (!this.root) return;
    this.applyAccent();
    this.setupReveal();
    this.setupScroll();
    this.setupGlow();
    this.setupVideo();
    this.setupCardImages();
    this.setupFaq();
    this.setupBot();
    this.setupCoverflow();
    this.setupFilmBurn();
    this.calmCheck();
  }

  setupFilmBurn() {
    const a = this.root.querySelector('[data-ax-burn="1"]');
    const b = this.root.querySelector('[data-ax-burn="2"]');
    const c = this.root.querySelector('[data-ax-burn="3"]');
    if (!a || !b || !c) return;
    const t0 = performance.now();
    const tick = (now) => {
      const f = (now - t0) / 16.67;
      const cycle = ((now - t0) / 6000) % 1;
      const peak = Math.sin(cycle * Math.PI);
      const calm = (this.props.motion || 'full') === 'calm';
      const k = peak * (calm ? 0.3 : 0.85);
      a.style.background = 'radial-gradient(circle at ' + (50 + Math.sin(f * 0.05) * 30) + '% ' + (50 + Math.cos(f * 0.04) * 20) + '%, rgba(249,115,22,' + (k * 0.5).toFixed(3) + '), transparent 60%)';
      b.style.background = 'radial-gradient(circle at ' + (50 + Math.sin(f * 0.07 + 2) * 25) + '% ' + (50 + Math.cos(f * 0.06 + 1) * 30) + '%, rgba(251,191,36,' + (k * 0.35).toFixed(3) + '), transparent 50%)';
      c.style.background = 'radial-gradient(circle at ' + (50 + Math.sin(f * 0.03 + 4) * 20) + '% ' + (50 + Math.cos(f * 0.08 + 3) * 15) + '%, rgba(255,255,255,' + (k * 0.2).toFixed(3) + '), transparent 40%)';
      this.burnRaf = requestAnimationFrame(tick);
    };
    this.burnRaf = requestAnimationFrame(tick);
  }

  setupCoverflow() {
    const stage = this.root.querySelector('[data-ax-cf]');
    if (!stage) return;
    const cards = Array.from(stage.querySelectorAll('[data-ax-cf-card]'));
    const N = cards.length;
    if (!N) return;
    const SPACING = 190, DEPTH = 190, MAX_TILT = 52, SPEED = 0.18;
    let t = 0, last = performance.now(), hover = false;
    stage.addEventListener('mouseenter', () => { hover = true; });
    stage.addEventListener('mouseleave', () => { hover = false; });
    const scaleStage = () => {
      const s = Math.min(1, stage.clientWidth / 360);
      cards.forEach(c => { c.dataset.axFit = s; });
      return s;
    };
    let fit = scaleStage();
    this.onCfResize = () => { fit = scaleStage(); };
    window.addEventListener('resize', this.onCfResize);
    const step = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const calm = (this.props.motion || 'full') === 'calm';
      const rate = calm ? SPEED * 0.4 : (hover ? SPEED * 0.35 : SPEED);
      t = (t + dt * rate) % N;
      const sr = stage.getBoundingClientRect();
      const scrollTerm = calm ? 0 : ((sr.top + sr.height / 2 - window.innerHeight / 2) / window.innerHeight) * -1.15;
      const tt = ((t + scrollTerm) % N + N) % N;
      cards.forEach((card, i) => {
        let rel = ((i - tt) % N + N) % N;
        if (rel > N / 2) rel -= N;
        const a = Math.abs(rel);
        const x = rel * SPACING * fit;
        const z = -a * DEPTH;
        const rot = -Math.max(-1, Math.min(1, rel)) * MAX_TILT;
        const scale = (1 - Math.min(0.34, a * 0.1)) * fit;
        card.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,' + z.toFixed(1) + 'px) rotateY(' + rot.toFixed(1) + 'deg) scale(' + scale.toFixed(3) + ')';
        card.style.opacity = Math.max(0, 1 - a * 0.34).toFixed(3);
        card.style.zIndex = String(100 - Math.round(a * 10));
      });
      this.cfRaf = requestAnimationFrame(step);
    };
    this.cfRaf = requestAnimationFrame(step);
  }

  setupBot() {
    const bot = this.root.querySelector('[data-ax-bot]');
    if (!bot) return;
    if (this.props.showMascot === false) { bot.style.display = 'none'; return; }
    const bubble = bot.querySelector('[data-ax-bot-bubble]');
    const show = (on) => {
      if (!bubble) return;
      bubble.style.opacity = on ? '1' : '0';
      bubble.style.transform = on ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)';
    };
    this.botTimers = [
      setTimeout(() => show(true), 2200),
      setTimeout(() => show(false), 9000)
    ];
    bot.addEventListener('mouseenter', () => show(true));
    bot.addEventListener('mouseleave', () => show(false));
    const close = bot.querySelector('[data-ax-bot-close]');
    if (close) {
      close.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        (this.botTimers || []).forEach(clearTimeout);
        bot.style.transition = 'opacity 250ms ease, transform 250ms ease';
        bot.style.opacity = '0';
        bot.style.transform = 'translateY(12px) scale(0.9)';
        setTimeout(() => { bot.style.display = 'none'; }, 260);
      });
    }
  }

  setupFaq() {
    const items = Array.from(this.root.querySelectorAll('[data-ax-faq]'));
    items.forEach(item => {
      const btn = item.querySelector('[data-ax-faq-q]');
      const panel = item.querySelector('[data-ax-faq-a]');
      const icon = item.querySelector('[data-ax-faq-icon]');
      if (!btn || !panel) return;
      btn.addEventListener('click', () => {
        const open = panel.style.height !== '0px' && panel.style.height !== '';
        items.forEach(other => {
          const p = other.querySelector('[data-ax-faq-a]');
          const i = other.querySelector('[data-ax-faq-icon]');
          if (p) p.style.height = '0px';
          if (i) { i.style.transform = 'rotate(0deg)'; i.textContent = '+'; }
        });
        if (!open) {
          panel.style.height = panel.scrollHeight + 'px';
          if (icon) { icon.style.transform = 'rotate(45deg)'; }
        }
      });
    });
  }

  setupCardImages() {
    this.root.querySelectorAll('[data-ax-card]').forEach(card => {
      const img = card.querySelector('[data-ax-cardimg]');
      if (!img) return;
      card.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
      });
      card.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1.02)';
      });
    });
  }

  setupVideo() {
    const v = this.root.querySelector('[data-ax-hero-video]');
    if (!v) return;
    v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true;
    v.setAttribute('playsinline', '');
    const go = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    go();
    v.addEventListener('loadeddata', go, { once: true });
  }

  componentDidUpdate() { this.applyAccent(); this.calmCheck(); }

  componentWillUnmount() {
    if (this.io) this.io.disconnect();
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('resize', this.onCfResize);
    if (this.cfRaf) cancelAnimationFrame(this.cfRaf);
    (this.botTimers || []).forEach(clearTimeout);
    window.removeEventListener('load', this.onVis);
    document.removeEventListener('visibilitychange', this.onVis);
    clearTimeout(this.fallback);
    clearTimeout(this.fallback2);
  }

  accent() { return this.props.accentColor || 'oklch(0.74 0.13 195)'; }

  applyAccent() {
    const c = this.accent();
    if (!this.root) return;
    this.root.querySelectorAll('[data-ax-accent-fg]').forEach(el => { el.style.color = c; });
    this.root.querySelectorAll('[data-ax-accent-bg]').forEach(el => { el.style.background = c; });
    this.root.querySelectorAll('[data-ax-accent-border]').forEach(el => { el.style.borderColor = c; });
    this.root.querySelectorAll('[data-ax-accent-panel]').forEach(el => { el.style.background = c; });
    const bar = document.querySelector('[data-ax-progress]');
    if (bar) bar.style.background = 'linear-gradient(90deg, ' + c + ', oklch(0.78 0.13 65))';
  }

  calmCheck() {
    const calm = (this.props.motion || 'full') === 'calm';
    if (!this.root) return;
    this.root.querySelectorAll('[data-ax-blob]').forEach(el => {
      el.style.animationPlayState = calm ? 'paused' : 'running';
    });
    const glow = this.root.querySelector('[data-ax-glow]');
    if (glow) glow.style.opacity = calm ? '0' : '1';
  }

  show(el) {
    const d = parseInt(el.getAttribute('data-d') || '0', 10);
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, d);
    if (el.hasAttribute('data-count')) this.countUp(el);
  }

  setupReveal() {
    const items = Array.from(this.root.querySelectorAll('[data-r], [data-count]'));
    this.io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.dataset.axShown = '1'; this.show(e.target); this.io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => this.io.observe(el));
    this.revealItems = items;
    this.sweepReveal();
    requestAnimationFrame(() => this.sweepReveal());
    this.fallback = setTimeout(() => this.sweepReveal(), 400);
    this.fallback2 = setTimeout(() => items.forEach(el => this.show(el)), 2500);
    this.onVis = () => this.sweepReveal();
    window.addEventListener('load', this.onVis);
    document.addEventListener('visibilitychange', this.onVis);
  }

  sweepReveal() {
    const items = this.revealItems || [];
    const h = window.innerHeight || 800;
    items.forEach(el => {
      if (el.dataset.axShown) return;
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.95) {
        el.dataset.axShown = '1';
        this.show(el);
        if (this.io) this.io.unobserve(el);
      }
    });
  }

  countUp(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  setupScroll() {
    const bar = document.querySelector('[data-ax-progress]');
    const nav = document.querySelector('[data-ax-nav]');
    const steps = Array.from(this.root.querySelectorAll('[data-ax-step]'));
    const parallax = Array.from(this.root.querySelectorAll('[data-ax-parallax]'));
    const layers = Array.from(this.root.querySelectorAll('[data-ax-par]'));
    const heroInner = this.root.querySelector('[data-ax-heroinner]');
    const heroVideo = this.root.querySelector('[data-ax-hero-video]');
    const hero = document.getElementById('top');
    const dots = Array.from(this.root.querySelectorAll('[data-ax-dot]'));
    let queued = false;
    const frame = () => {
      queued = false;
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      if (bar) bar.style.transform = 'scaleX(' + p + ')';
      if (nav) {
        const on = window.scrollY > 60;
        nav.style.background = on ? 'rgba(10,12,16,0.82)' : 'transparent';
        nav.style.backdropFilter = on ? 'blur(14px)' : 'none';
        nav.style.borderBottom = on ? '1px solid rgba(246,245,242,0.12)' : '1px solid transparent';
        nav.style.paddingTop = on ? '12px' : '18px';
        nav.style.paddingBottom = on ? '12px' : '18px';
      }
      this.sweepReveal();
      const calmNow = (this.props.motion || 'full') === 'calm';
      if (hero && heroInner && !calmNow) {
        const h = window.innerHeight;
        const sy = Math.max(0, Math.min(h, window.scrollY));
        const k = sy / h;
        heroInner.style.transform = 'translate3d(0,' + (k * -70).toFixed(1) + 'px,0)';
        if (heroVideo) heroVideo.style.transform = 'scale(' + (1 + k * 0.12).toFixed(3) + ')';
      }
      if (!calmNow) layers.forEach(el => {
        const rate = parseFloat(el.getAttribute('data-ax-par')) || 0.05;
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > window.innerHeight + 100) return;
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -rate;
        el.style.willChange = 'transform';
        el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
      });
      parallax.forEach(img => {
        const holder = img.parentElement;
        const r = holder.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const prog = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = 'translate3d(0,' + (-prog * 9).toFixed(2) + '%,0)';
      });
      if (steps.length) {
        const mid = window.innerHeight * 0.45;
        let best = 0, bestD = Infinity;
        steps.forEach((s, i) => {
          const r = s.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - mid);
          if (d < bestD) { bestD = d; best = i; }
        });
        const c = this.accent();
        steps.forEach((s, i) => {
          const active = i === best;
          s.style.borderColor = active ? c : 'rgba(10,12,16,0.14)';
          s.style.background = active ? '#FFFFFF' : 'transparent';
        });
        dots.forEach((d, i) => { d.style.background = i === best ? c : 'rgba(10,12,16,0.18)'; });
      }
    };
    this.onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    frame();
  }

  setupGlow() {
    const glow = this.root.querySelector('[data-ax-glow]');
    if (!glow) return;
    this.onMove = (e) => {
      if ((this.props.motion || 'full') === 'calm') return;
      const hero = document.getElementById('top');
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      glow.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
    };
    window.addEventListener('pointermove', this.onMove, { passive: true });
  }
}
