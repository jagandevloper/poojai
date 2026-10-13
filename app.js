/**
 * ==============================================================================
 * ☠️ DARK OCCULT POOJAI 3D — SACRIFICIAL SKULL RITUAL (APP.JS) ☠️
 * Pure 3D dark satanic / occult pooja scenery on the ancient midnight ghats.
 * Featuring the sacrificial photographs of KARTHICK S & KAMALESH B mounted on
 * human skulls with burning candles, ritual pins, and mock interview curses,
 * surrounded by hooded Aghori cultists, glowing pentagram yantra, and infernal fire.
 * ==============================================================================
 */

// Application State
const state = {
  audioUnlocked: false,
  soundEnabled: true,
  audioCtx: null,
  droneGain: null,
  isUserInteracting: false,
  idleTimer: 0,
  devotees: {
    1: {
      name: "Karthick S",
      title: "TECH ROUND REJECTION JINX",
      texture: null
    },
    2: {
      name: "Kamalesh B",
      title: "HR GHOSTING & 3 LPA BOND CURSE",
      texture: null
    }
  }
};

/* ==============================================================================
 * 1. OCCULT WEB AUDIO API ENGINE (Devil's Tritone Drone & Sinister Soundscape)
 * ============================================================================== */
function initAudio() {
  if (state.audioCtx) {
    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    return;
  }
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  state.audioCtx = new AudioContext();
  startOccultDrone();
}

function startOccultDrone() {
  if (!state.audioCtx) return;
  const ctx = state.audioCtx;

  // Devil's Tritone (Diabolus in Musica): C2 (65.41 Hz) + F#2 (92.50 Hz)
  const rootFreq = 65.41;
  const tritoneFreq = 92.50;
  const subFreq = 32.70;

  state.droneGain = ctx.createGain();
  state.droneGain.gain.setValueAtTime(0.08, ctx.currentTime);
  state.droneGain.connect(ctx.destination);

  const occultTones = [
    { freq: rootFreq, type: 'sawtooth', gain: 0.5, pan: -0.3 },
    { freq: tritoneFreq, type: 'sawtooth', gain: 0.45, pan: 0.3 },
    { freq: subFreq, type: 'sine', gain: 0.7, pan: 0.0 },
    { freq: rootFreq * 2, type: 'triangle', gain: 0.3, pan: -0.1 },
    { freq: tritoneFreq * 2, type: 'triangle', gain: 0.25, pan: 0.1 }
  ];

  occultTones.forEach(tone => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = tone.type;
    osc.frequency.setValueAtTime(tone.freq, ctx.currentTime);
    g.gain.setValueAtTime(tone.gain, ctx.currentTime);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, ctx.currentTime);

    // Subtle pitch modulation (sinister slow crawl)
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.08, ctx.currentTime);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(1.2, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();

    osc.connect(g);
    g.connect(filter);
    filter.connect(state.droneGain);
    osc.start();
  });
}

function playOccultDeathGong() {
  if (!state.soundEnabled || !state.audioCtx) return;
  const ctx = state.audioCtx;
  const now = ctx.currentTime;
  const baseFreq = 108; // Deep ominous death bell

  const harmonics = [
    { ratio: 0.5, gain: 0.8, decay: 4.5 },
    { ratio: 1.0, gain: 1.0, decay: 4.0 },
    { ratio: 1.414, gain: 0.7, decay: 3.2 }, // Tritone overtone
    { ratio: 2.76, gain: 0.5, decay: 2.2 },
    { ratio: 4.19, gain: 0.35, decay: 1.5 }
  ];

  harmonics.forEach(h => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq * h.ratio, now);

    g.gain.setValueAtTime(0.001, now);
    g.gain.exponentialRampToValueAtTime(h.gain * 0.45, now + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + h.decay + 0.1);
  });
}

function playHellfireRoar() {
  if (!state.soundEnabled || !state.audioCtx) return;
  const ctx = state.audioCtx;
  const now = ctx.currentTime;
  const bufferSize = ctx.sampleRate * 1.8;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(300, now);
  filter.frequency.linearRampToValueAtTime(1100, now + 0.4);
  filter.frequency.exponentialRampToValueAtTime(180, now + 1.7);

  const g = ctx.createGain();
  g.gain.setValueAtTime(0.01, now);
  g.gain.linearRampToValueAtTime(0.7, now + 0.15);
  g.gain.exponentialRampToValueAtTime(0.001, now + 1.7);

  noise.connect(filter);
  filter.connect(g);
  g.connect(ctx.destination);
  noise.start(now);
  noise.stop(now + 1.8);
}

function playSkullCurseChant() {
  if (!state.soundEnabled || !state.audioCtx) return;
  const ctx = state.audioCtx;
  const now = ctx.currentTime;

  // Throat chant resonance + bone click
  [0, 0.14, 0.28].forEach((delay, idx) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(idx % 2 === 0 ? 110 : 82, now + delay);
    osc.frequency.exponentialRampToValueAtTime(45, now + delay + 0.12);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, now + delay);
    filter.Q.setValueAtTime(5, now + delay);

    g.gain.setValueAtTime(0.4, now + delay);
    g.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.12);

    osc.connect(filter);
    filter.connect(g);
    g.connect(ctx.destination);
    osc.start(now + delay);
    osc.stop(now + delay + 0.15);
  });
}

function toggleAudioMute() {
  if (!state.audioUnlocked) {
    initAudio();
    state.audioUnlocked = true;
  }
  state.soundEnabled = !state.soundEnabled;
  if (state.droneGain && state.audioCtx) {
    state.droneGain.gain.setValueAtTime(
      state.soundEnabled ? 0.08 : 0.00001,
      state.audioCtx.currentTime
    );
  }
}

/* ==============================================================================
 * 2. THREE.JS 3D SCENE SETUP (Dark Occult Atmosphere)
 * ============================================================================== */
const container = document.getElementById('three-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x060205);
scene.fog = new THREE.FogExp2(0x0a0206, 0.024);

const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 140);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false,
  powerPreference: "high-performance"
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
container.appendChild(renderer.domElement);

// OrbitControls (Smooth 360° Viewing)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.maxPolarAngle = Math.PI / 2 - 0.02;
controls.minDistance = 2.4;
controls.maxDistance = 35;

// Initial camera position directly framing the sacrificial altar & skulls
camera.position.set(0, 1.95, 4.2);
controls.target.set(0, 1.25, 0.9);

controls.addEventListener('start', () => { state.isUserInteracting = true; });
controls.addEventListener('end', () => { state.isUserInteracting = false; state.idleTimer = 0; });

/* ==============================================================================
 * 3. TEXTURE & SHADER GENERATORS
 * ============================================================================== */
// Weathered Dark Obsidian Stone Texture
function createObsidianStoneTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const cx = c.getContext('2d');
  cx.fillStyle = '#0f0a12';
  cx.fillRect(0, 0, 512, 512);

  // Deep carved slab cracks
  cx.strokeStyle = '#050306';
  cx.lineWidth = 5;
  for (let i = 0; i <= 512; i += 64) {
    cx.beginPath(); cx.moveTo(0, i); cx.lineTo(512, i); cx.stroke();
    cx.beginPath(); cx.moveTo(i, 0); cx.lineTo(i, 512); cx.stroke();
  }
  // Crimson blood stains & ash flecks
  for (let n = 0; n < 1800; n++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    cx.fillStyle = Math.random() > 0.6 ? 'rgba(138, 7, 7, 0.35)' : 'rgba(2, 1, 4, 0.5)';
    cx.fillRect(x, y, 2 + Math.random() * 4, 2 + Math.random() * 4);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  return tex;
}

const stoneTexture = createObsidianStoneTexture();
const stoneMat = new THREE.MeshStandardMaterial({
  map: stoneTexture,
  roughness: 0.9,
  metalness: 0.15
});

const darkAltarMat = new THREE.MeshStandardMaterial({
  color: 0x140d16,
  roughness: 0.85,
  metalness: 0.2
});

const boneMat = new THREE.MeshStandardMaterial({
  color: 0xd2cdc2,
  roughness: 0.82
});

const darkGoldMat = new THREE.MeshStandardMaterial({
  color: 0x9e782f,
  metalness: 0.9,
  roughness: 0.25
});

// Glowing Occult Inverted Pentagram / Yantra Floor Texture
function createPentagramYantraTexture() {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 1024;
  const cx = c.getContext('2d');

  cx.clearRect(0, 0, 1024, 1024);

  // Center & Radius
  const cx0 = 512;
  const cy0 = 512;
  const rOuter = 460;
  const rInner = 410;

  // Concentric Blood Red Magic Circles
  cx.strokeStyle = '#d50000';
  cx.lineWidth = 10;
  cx.beginPath(); cx.arc(cx0, cy0, rOuter, 0, Math.PI * 2); cx.stroke();

  cx.lineWidth = 6;
  cx.beginPath(); cx.arc(cx0, cy0, rInner, 0, Math.PI * 2); cx.stroke();

  cx.lineWidth = 4;
  cx.beginPath(); cx.arc(cx0, cy0, 310, 0, Math.PI * 2); cx.stroke();

  // Inverted Five-Pointed Star (Pentagram)
  const starPoints = [];
  for (let i = 0; i < 5; i++) {
    // Point 0 points downwards (Inverted Pentagram)
    const angle = (Math.PI / 2) + (i * (Math.PI * 2) / 5);
    starPoints.push({
      x: cx0 + Math.cos(angle) * rInner,
      y: cy0 + Math.sin(angle) * rInner
    });
  }

  cx.strokeStyle = '#ff1744';
  cx.lineWidth = 9;
  cx.shadowColor = '#ff0000';
  cx.shadowBlur = 25;
  cx.beginPath();
  cx.moveTo(starPoints[0].x, starPoints[0].y);
  cx.lineTo(starPoints[2].x, starPoints[2].y);
  cx.lineTo(starPoints[4].x, starPoints[4].y);
  cx.lineTo(starPoints[1].x, starPoints[1].y);
  cx.lineTo(starPoints[3].x, starPoints[3].y);
  cx.closePath();
  cx.stroke();

  // Occult Runes & Dark Sanskrit Mantras between rings
  cx.shadowBlur = 10;
  cx.fillStyle = '#ff5252';
  cx.font = 'bold 32px "Cinzel", "Georgia", serif';
  cx.textAlign = 'center';
  cx.textBaseline = 'middle';

  const runes = ["☠️", "ॐ", "KRAM", "KRIM", "HRUM", "PHAT", "SVAHA", "☠️", "NEMESIS", "JINX", "VOID"];
  for (let r = 0; r < runes.length; r++) {
    const angle = (r / runes.length) * (Math.PI * 2);
    const rx = cx0 + Math.cos(angle) * 435;
    const ry = cy0 + Math.sin(angle) * 435;
    cx.save();
    cx.translate(rx, ry);
    cx.rotate(angle + Math.PI / 2);
    cx.fillText(runes[r], 0, 0);
    cx.restore();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

// Procedural Sacrificial Photo Generator (Karthick S & Kamalesh B in Dark Ritual Style)
function createSacrificialPhotoTexture(target) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const cx = c.getContext('2d');

  // Dark blood-red and vignette parchment background
  const bg = cx.createRadialGradient(256, 256, 30, 256, 256, 250);
  bg.addColorStop(0, '#360911');
  bg.addColorStop(0.6, '#180407');
  bg.addColorStop(1, '#050102');
  cx.fillStyle = bg;
  cx.fillRect(0, 0, 512, 512);

  const isKarthick = target === 1;

  // Neck
  cx.fillStyle = '#b37750';
  cx.fillRect(216, 320, 80, 90);

  // Face Oval
  cx.fillStyle = '#cca078';
  cx.beginPath();
  cx.ellipse(256, 260, 110, 130, 0, 0, Math.PI * 2);
  cx.fill();

  // Hair
  cx.fillStyle = '#110c0e';
  cx.beginPath();
  if (isKarthick) {
    cx.moveTo(140, 230);
    cx.bezierCurveTo(140, 115, 372, 115, 372, 230);
    cx.bezierCurveTo(340, 155, 180, 155, 140, 230);
  } else {
    cx.moveTo(136, 240);
    cx.bezierCurveTo(120, 100, 392, 100, 376, 240);
    cx.bezierCurveTo(350, 145, 165, 145, 136, 240);
  }
  cx.fill();

  // Brows
  cx.fillStyle = '#140c0c';
  cx.fillRect(195, 220, 48, 10);
  cx.fillRect(269, 220, 48, 10);

  // Eyes
  cx.fillStyle = '#ffffff';
  cx.beginPath(); cx.ellipse(219, 242, 18, 10, 0, 0, Math.PI * 2); cx.fill();
  cx.beginPath(); cx.ellipse(293, 242, 18, 10, 0, 0, Math.PI * 2); cx.fill();

  // Pupils (Dark sinister glow)
  cx.fillStyle = '#b71c1c';
  cx.beginPath(); cx.arc(219, 242, 9, 0, Math.PI * 2); cx.fill();
  cx.beginPath(); cx.arc(293, 242, 9, 0, Math.PI * 2); cx.fill();

  // Catchlight
  cx.fillStyle = '#ffffff';
  cx.beginPath(); cx.arc(222, 239, 3, 0, Math.PI * 2); cx.fill();
  cx.beginPath(); cx.arc(296, 239, 3, 0, Math.PI * 2); cx.fill();

  // Glasses for Kamalesh B
  if (!isKarthick) {
    cx.strokeStyle = '#111111';
    cx.lineWidth = 6;
    cx.strokeRect(192, 226, 54, 34);
    cx.strokeRect(266, 226, 54, 34);
    cx.beginPath(); cx.moveTo(246, 238); cx.lineTo(266, 238); cx.stroke();
  }

  // Nose
  cx.strokeStyle = '#9e623a';
  cx.lineWidth = 4;
  cx.beginPath();
  cx.moveTo(256, 238);
  cx.lineTo(252, 280);
  cx.lineTo(262, 282);
  cx.stroke();

  // Smile
  cx.strokeStyle = '#7f1d1d';
  cx.lineWidth = 5;
  cx.beginPath();
  cx.arc(256, 298, 22, 0.1, Math.PI - 0.1);
  cx.stroke();

  // Beard / Stubble
  cx.fillStyle = isKarthick ? 'rgba(25, 15, 12, 0.45)' : 'rgba(15, 10, 8, 0.85)';
  cx.beginPath();
  cx.arc(256, 320, 52, 0, Math.PI);
  cx.fill();

  // ☠️ Blood-Red Ritual Tilak & Curse Runes Across Face ☠️
  cx.fillStyle = '#d50000';
  cx.fillRect(248, 180, 16, 36);
  cx.beginPath(); cx.arc(256, 202, 7, 0, Math.PI * 2); cx.fill();

  // Blood Drips down from forehead
  cx.strokeStyle = '#800000';
  cx.lineWidth = 4;
  cx.beginPath();
  cx.moveTo(256, 216);
  cx.lineTo(256, 245);
  cx.moveTo(250, 214);
  cx.lineTo(248, 232);
  cx.stroke();

  // Burned / Singed Paper Border Effect
  cx.strokeStyle = '#4a1505';
  cx.lineWidth = 14;
  cx.strokeRect(7, 7, 498, 498);

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

// Gothic Inscribed Nameplate Canvas Texture
function createGothicNameplateTexture(name, subtitle) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 160;
  const cx = c.getContext('2d');

  // Dark obsidian and tarnished iron gradient
  const grad = cx.createLinearGradient(0, 0, 512, 160);
  grad.addColorStop(0, '#100609');
  grad.addColorStop(0.3, '#2a0b12');
  grad.addColorStop(0.7, '#2a0b12');
  grad.addColorStop(1, '#100609');
  cx.fillStyle = grad;
  cx.fillRect(0, 0, 512, 160);

  // Blood-red gothic double border
  cx.strokeStyle = '#b71c1c';
  cx.lineWidth = 6;
  cx.strokeRect(8, 8, 496, 144);
  cx.strokeStyle = '#ff1744';
  cx.lineWidth = 2;
  cx.strokeRect(16, 16, 480, 128);

  // Skull studs in corners
  cx.fillStyle = '#d50000';
  [[16, 16], [496, 16], [16, 144], [496, 144]].forEach(([px, py]) => {
    cx.beginPath(); cx.arc(px, py, 6, 0, Math.PI * 2); cx.fill();
  });

  // Name Text with blood glow
  cx.fillStyle = '#ffcdd2';
  cx.shadowColor = '#ff0000';
  cx.shadowBlur = 16;
  cx.font = 'bold 36px "Cinzel", "Georgia", "Times New Roman", serif';
  cx.textAlign = 'center';
  cx.textBaseline = 'middle';
  cx.fillText(`☠️ ${name.toUpperCase()} ☠️`, 256, 56);

  // Subtitle / Totka Curse
  cx.fillStyle = '#ff8a80';
  cx.shadowBlur = 8;
  cx.font = 'bold 18px "Cinzel", "Georgia", sans-serif';
  cx.fillText(`⚔️ ${subtitle} ⚔️`, 256, 108);

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

/* ==============================================================================
 * 4. 3D OCCULT ENVIRONMENT (Blood Moon, Ghat, River of Blood, Pillars)
 * ============================================================================== */
// Main Ghat Stone Platform
const ghatPlatform = new THREE.Mesh(new THREE.BoxGeometry(28, 1.2, 26), stoneMat);
ghatPlatform.position.set(0, -0.6, 0);
ghatPlatform.receiveShadow = true;
scene.add(ghatPlatform);

// Steps leading down to river
for (let s = 1; s <= 5; s++) {
  const step = new THREE.Mesh(new THREE.BoxGeometry(28, 0.3, 1.2), stoneMat);
  step.position.set(0, -0.6 - (s * 0.3), 13 + (s * 1.2));
  step.receiveShadow = true;
  scene.add(step);
}

// Glowing Inverted Pentagram Yantra on the Ghat Floor
const yantraGeom = new THREE.PlaneGeometry(9.2, 9.2);
const yantraMat = new THREE.MeshBasicMaterial({
  map: createPentagramYantraTexture(),
  transparent: true,
  opacity: 0.85,
  depthWrite: false
});
const yantraMesh = new THREE.Mesh(yantraGeom, yantraMat);
yantraMesh.rotation.x = -Math.PI / 2;
yantraMesh.position.set(0, 0.02, 0);
scene.add(yantraMesh);

// Flowing Dark Crimson River Ganga
const riverGeom = new THREE.PlaneGeometry(80, 55, 36, 36);
const riverMat = new THREE.MeshStandardMaterial({
  color: 0x18040a,
  roughness: 0.15,
  metalness: 0.88,
  transparent: true,
  opacity: 0.95
});
const river = new THREE.Mesh(riverGeom, riverMat);
river.rotation.x = -Math.PI / 2;
river.position.set(0, -2.25, 32);
scene.add(river);

// Floating Skull Diyas on the River Ganga
const DIYA_COUNT = 18;
const diyas = [];
const diyaSkullMat = new THREE.MeshStandardMaterial({ color: 0xc8c3b8, roughness: 0.85 });
const diyaFlameMat = new THREE.MeshBasicMaterial({ color: 0xff3d00 });

for (let d = 0; d < DIYA_COUNT; d++) {
  const diyaGroup = new THREE.Group();

  // Floating skull bowl
  const skullBowl = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), diyaSkullMat);
  skullBowl.rotation.x = Math.PI;
  diyaGroup.add(skullBowl);

  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.22, 8), diyaFlameMat);
  flame.position.y = 0.14;
  diyaGroup.add(flame);

  const light = new THREE.PointLight(0xd50000, 0.45, 4.0);
  light.position.y = 0.18;
  diyaGroup.add(light);

  const startX = (Math.random() - 0.5) * 55;
  const startZ = 18 + Math.random() * 26;
  diyaGroup.position.set(startX, -2.15, startZ);

  scene.add(diyaGroup);
  diyas.push({ group: diyaGroup, speed: 0.016 + Math.random() * 0.022, startX, startZ });
}

// Carved Stone Pillars with Inverted Flaming Torches
const pillarPositions = [
  [-10, 0, -8], [10, 0, -8],
  [-12, 0, 0], [12, 0, 0],
  [-11, 0, 8], [11, 0, 8]
];
const torchLights = [];

pillarPositions.forEach(pos => {
  const pillar = new THREE.Group();

  const base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 1.5), darkAltarMat);
  base.position.y = 0.3;
  pillar.add(base);

  const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, 6.2, 12), darkAltarMat);
  col.position.y = 3.4;
  pillar.add(col);

  const cap = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.4), darkAltarMat);
  cap.position.y = 6.6;
  pillar.add(cap);

  // Skull relief on pillar
  const pillarSkull = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), boneMat);
  pillarSkull.position.set(0, 3.8, 0.58);
  pillar.add(pillarSkull);

  const torch = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.16, 0.65, 8), darkGoldMat);
  torch.position.set(0, 4.6, 0.7);
  pillar.add(torch);

  // Eerie blood-red torch flame
  const tLight = new THREE.PointLight(0xd50000, 0.95, 14);
  tLight.position.set(0, 5.0, 0.7);
  pillar.add(tLight);
  torchLights.push(tLight);

  pillar.position.set(pos[0], pos[1], pos[2]);
  scene.add(pillar);
});

// Blood Moon in Midnight Sky
const bloodMoon = new THREE.Mesh(
  new THREE.SphereGeometry(1.8, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xd50000 })
);
bloodMoon.position.set(18, 28, -26);
scene.add(bloodMoon);

// Lunar Blood Halo
const moonHalo = new THREE.Mesh(
  new THREE.RingGeometry(1.9, 3.2, 32),
  new THREE.MeshBasicMaterial({ color: 0xff1744, side: THREE.DoubleSide, transparent: true, opacity: 0.35 })
);
moonHalo.position.set(18, 28, -25.9);
scene.add(moonHalo);

// Crimson Night Stars
const STAR_COUNT = 700;
const starGeom = new THREE.BufferGeometry();
const starPositions = new Float32Array(STAR_COUNT * 3);

for (let s = 0; s < STAR_COUNT; s++) {
  starPositions[s * 3 + 0] = (Math.random() - 0.5) * 160;
  starPositions[s * 3 + 1] = 12 + Math.random() * 55;
  starPositions[s * 3 + 2] = -50 - Math.random() * 50;
}
starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMat = new THREE.PointsMaterial({ color: 0xff5252, size: 0.35, transparent: true, opacity: 0.85 });
const stars = new THREE.Points(starGeom, starMat);
scene.add(stars);

// Hanging Iron Death Bell with Chains
const bellGroup = new THREE.Group();
bellGroup.position.set(3.8, 5.0, 1.6);

const chainMat = new THREE.MeshStandardMaterial({ color: 0x424242, metalness: 0.9 });
const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.4, 6), chainMat);
chain.position.y = 1.2;
bellGroup.add(chain);

const bellBody = new THREE.Mesh(
  new THREE.CylinderGeometry(0.16, 0.74, 1.05, 16),
  new THREE.MeshStandardMaterial({ color: 0x212121, metalness: 0.9, roughness: 0.3 })
);
bellBody.castShadow = true;
bellGroup.add(bellBody);

const clapper = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), chainMat);
clapper.position.y = -0.52;
bellGroup.add(clapper);

scene.add(bellGroup);

let bellSwingAngle = 0;
let bellSwinging = false;
let bellSwingVelocity = 0;

function ring3DDeathBell() {
  bellSwinging = true;
  bellSwingVelocity = 0.32;
  playOccultDeathGong();
}

/* ==============================================================================
 * 5. INFERNAL DHUNI FIRE (Pentagonal Hellfire Pit)
 * ============================================================================== */
const dhuniGroup = new THREE.Group();
dhuniGroup.position.set(0, 0, -1.3);

// Pentagonal Hellfire Kunda Rim
const kundaRim = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.4, 0.5, 5), darkAltarMat);
kundaRim.position.y = 0.25;
kundaRim.receiveShadow = true;
dhuniGroup.add(kundaRim);

const coalMat = new THREE.MeshStandardMaterial({ color: 0x1f0607, roughness: 0.95 });
const coalBed = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.2, 5), coalMat);
coalBed.position.y = 0.35;
dhuniGroup.add(coalBed);

// Charred Vedic Logs
const charredWoodMat = new THREE.MeshStandardMaterial({ color: 0x1a0f12, roughness: 0.9 });
for (let w = 0; w < 5; w++) {
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.3, 8), charredWoodMat);
  log.rotation.z = Math.PI / 2;
  log.rotation.y = (w * Math.PI) / 5;
  log.position.set(0, 0.48 + (w * 0.08), 0);
  log.castShadow = true;
  dhuniGroup.add(log);
}

// Infernal Fire Point Light (Blood-Orange & Crimson)
const dhuniLight = new THREE.PointLight(0xff2200, 4.2, 22);
dhuniLight.position.set(0, 1.4, 0);
dhuniLight.castShadow = true;
dhuniGroup.add(dhuniLight);

scene.add(dhuniGroup);

// Hellfire Flame Particles
const FIRE_COUNT = 220;
const fireGeom = new THREE.BufferGeometry();
const firePositions = new Float32Array(FIRE_COUNT * 3);

for (let i = 0; i < FIRE_COUNT; i++) {
  firePositions[i * 3 + 0] = (Math.random() - 0.5) * 2.0;
  firePositions[i * 3 + 1] = 0.5 + Math.random() * 2.8;
  firePositions[i * 3 + 2] = -1.3 + (Math.random() - 0.5) * 2.0;
}
fireGeom.setAttribute('position', new THREE.BufferAttribute(firePositions, 3));

const fireMat = new THREE.PointsMaterial({
  color: 0xff3d00,
  size: 0.55,
  transparent: true,
  opacity: 0.92,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
const fireParticles = new THREE.Points(fireGeom, fireMat);
scene.add(fireParticles);

function triggerHellfireAhuti() {
  playHellfireRoar();
  const pos = fireGeom.attributes.position.array;
  for (let i = 0; i < FIRE_COUNT; i++) {
    pos[i * 3 + 1] = 0.6 + Math.random() * 4.6;
  }
  fireGeom.attributes.position.needsUpdate = true;
  dhuniLight.intensity = 10.5;
  setTimeout(() => { dhuniLight.intensity = 4.2; }, 1600);
}

/* ==============================================================================
 * 6. SACRIFICIAL ALTAR WITH THE TWO SKULLS HOLDING THE PHOTOS (POOJA CENTERPIECE)
 * ============================================================================== */
const sacrificialAltarGroup = new THREE.Group();
sacrificialAltarGroup.position.set(0, 0, 0.9);

// Massive Obsidian Sacrificial Altar Slab
const altarSlab = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.45, 2.0), darkAltarMat);
altarSlab.position.y = 0.22;
altarSlab.receiveShadow = true;
sacrificialAltarGroup.add(altarSlab);

// Function to build a realistic 3D human skull
function createRealistic3DSkull() {
  const skull = new THREE.Group();

  // Cranium
  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), boneMat);
  cranium.position.y = 0.22;
  cranium.scale.set(1.0, 1.08, 1.15);
  skull.add(cranium);

  // Maxilla / Upper Jaw
  const maxilla = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.22, 0.32), boneMat);
  maxilla.position.set(0, 0.02, 0.25);
  skull.add(maxilla);

  // Eye Sockets (Dark with glowing demonic red light)
  const orbitMat = new THREE.MeshBasicMaterial({ color: 0x0a0002 });
  const orbitL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), orbitMat);
  orbitL.position.set(-0.13, 0.16, 0.38);
  skull.add(orbitL);

  const orbitR = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), orbitMat);
  orbitR.position.set(0.13, 0.16, 0.38);
  skull.add(orbitR);

  // Glowing red eye lights
  const eyeLight = new THREE.PointLight(0xff0000, 0.9, 2.5);
  eyeLight.position.set(0, 0.16, 0.45);
  skull.add(eyeLight);

  // Teeth Row
  const teethMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5 });
  for (let t = -3; t <= 3; t++) {
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.06, 0.03), teethMat);
    tooth.position.set(t * 0.045, -0.06, 0.41);
    skull.add(tooth);
  }

  return skull;
}

// Function to construct a friend's Sacrificial Skull with their Photo in the Pooja
const skullGroups = {};
const photoMeshes = {};

function createDevoteeSacrificialSkull(target, posX) {
  const devoteeInfo = state.devotees[target];
  const group = new THREE.Group();
  group.position.set(posX, 0.45, 0);

  // 1. The Sculpted Human Skull
  const skull = createRealistic3DSkull();
  group.add(skull);

  // 2. The Sacrificial Photograph Frame Mounted on the Skull
  const frameGroup = new THREE.Group();
  frameGroup.position.set(0, 0.85, 0);

  // Ornate Dark Gold & Bone Relic Frame
  const frameBorder = new THREE.Mesh(
    new THREE.BoxGeometry(1.28, 1.28, 0.08),
    darkGoldMat
  );
  frameGroup.add(frameBorder);

  // Photo Mesh (1:1 Planar Disc / Square with high-definition texture)
  const photoGeom = new THREE.PlaneGeometry(1.15, 1.15);
  const photoTex = createSacrificialPhotoTexture(target);
  devoteeInfo.texture = photoTex;

  const photoMat = new THREE.MeshStandardMaterial({
    map: photoTex,
    roughness: 0.35,
    metalness: 0.05
  });
  const photoMesh = new THREE.Mesh(photoGeom, photoMat);
  photoMesh.position.z = 0.05;
  frameGroup.add(photoMesh);
  photoMeshes[target] = photoMesh;

  // Gothic Engraved Plaque directly above/on the frame
  const plaqueTex = createGothicNameplateTexture(devoteeInfo.name, devoteeInfo.title);
  const plaqueGeom = new THREE.BoxGeometry(1.4, 0.42, 0.06);
  const plaqueMat = new THREE.MeshStandardMaterial({
    map: plaqueTex,
    metalness: 0.8,
    roughness: 0.25
  });
  const plaque = new THREE.Mesh(plaqueGeom, plaqueMat);
  plaque.position.set(0, 0.82, 0.04);
  plaque.rotation.x = -0.15;
  frameGroup.add(plaque);

  // 3. Black & Blood-Red Tallow Candles burning on the skull
  const candleMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.7 });
  const wickMat = new THREE.MeshBasicMaterial({ color: 0xff5252 });

  [-0.24, 0.24].forEach(cx => {
    const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.42, 8), candleMat);
    candle.position.set(cx, 0.45, -0.15);
    skull.add(candle);

    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 6), wickMat);
    flame.position.set(cx, 0.72, -0.15);
    skull.add(flame);
  });

  // 4. Ritual Mock Interview Offer/Resume Sacrifice Scroll
  const scrollMat = new THREE.MeshStandardMaterial({ color: 0xe6d7b8, roughness: 0.9 });
  const scroll = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.65, 8), scrollMat);
  scroll.rotation.z = Math.PI / 3;
  scroll.position.set(0.42, -0.25, 0.25);
  group.add(scroll);

  // Pierced iron nail through the scroll
  const nailMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.95 });
  const nail = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.35, 6), nailMat);
  nail.position.set(0.42, -0.15, 0.25);
  group.add(nail);

  // Lemon & 5 chillies curse beside the skull
  const lemonMat = new THREE.MeshStandardMaterial({ color: 0xfbc02d, roughness: 0.6 });
  const chilliMat = new THREE.MeshStandardMaterial({ color: 0x1b5e20, roughness: 0.6 });
  const lemon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), lemonMat);
  lemon.position.set(-0.45, -0.3, 0.2);
  group.add(lemon);

  for (let ch = 0; ch < 3; ch++) {
    const chilli = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.14, 6), chilliMat);
    chilli.rotation.z = (ch - 1) * 0.4;
    chilli.position.set(-0.45 + (ch - 1) * 0.05, -0.4, 0.2);
    group.add(chilli);
  }

  group.add(frameGroup);
  sacrificialAltarGroup.add(group);
  skullGroups[target] = group;
}

// Devotee 1: Karthick S Sacrificial Skull in Pooja (Left)
createDevoteeSacrificialSkull(1, -1.25);

// Devotee 2: Kamalesh B Sacrificial Skull in Pooja (Right)
createDevoteeSacrificialSkull(2, 1.25);

// Centerpiece of Altar: Ancient Horned Baphomet / Demon Skull
const hornedSkullGroup = new THREE.Group();
hornedSkullGroup.position.set(0, 0.45, 0.15);

const centerSkull = createRealistic3DSkull();
centerSkull.scale.set(1.2, 1.2, 1.2);
hornedSkullGroup.add(centerSkull);

// Curved Horns on Demon Skull
function createHorn(isLeft) {
  const hornGroup = new THREE.Group();
  for (let seg = 0; seg < 6; seg++) {
    const r = 0.08 * (1 - seg * 0.14);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r, 0.2, 8), boneMat);
    cone.position.set(
      (isLeft ? -1 : 1) * (0.15 + seg * 0.08),
      0.4 + seg * 0.1,
      -seg * 0.05
    );
    cone.rotation.z = (isLeft ? 1 : -1) * (0.6 + seg * 0.25);
    hornGroup.add(cone);
  }
  return hornGroup;
}
hornedSkullGroup.add(createHorn(true));
hornedSkullGroup.add(createHorn(false));

// Eerie Cyan/Violet Sulfur Flame Burning in the Demon Skull's Maw
const SULFUR_COUNT = 35;
const sulfurGeom = new THREE.BufferGeometry();
const sulfurPositions = new Float32Array(SULFUR_COUNT * 3);
for (let sc = 0; sc < SULFUR_COUNT; sc++) {
  sulfurPositions[sc * 3 + 0] = (Math.random() - 0.5) * 0.3;
  sulfurPositions[sc * 3 + 1] = 0.4 + Math.random() * 0.5;
  sulfurPositions[sc * 3 + 2] = 0.25 + (Math.random() - 0.5) * 0.3;
}
sulfurGeom.setAttribute('position', new THREE.BufferAttribute(sulfurPositions, 3));
const sulfurMat = new THREE.PointsMaterial({
  color: 0x00e5ff,
  size: 0.28,
  transparent: true,
  opacity: 0.95,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
const sulfurParticles = new THREE.Points(sulfurGeom, sulfurMat);
hornedSkullGroup.add(sulfurParticles);

const sulfurLight = new THREE.PointLight(0x00e5ff, 1.8, 5.0);
sulfurLight.position.set(0, 0.65, 0.25);
hornedSkullGroup.add(sulfurLight);

// Crossed Ritual Femur Bones in front of Demon Skull
function createCrossedBones() {
  const bones = new THREE.Group();
  [-0.35, 0.35].forEach((rx, idx) => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.95, 8), boneMat);
    b.rotation.z = idx === 0 ? Math.PI / 4 : -Math.PI / 4;
    b.rotation.x = Math.PI / 2;
    b.position.set(0, 0.12, 0.45);
    bones.add(b);
  });
  return bones;
}
hornedSkullGroup.add(createCrossedBones());

sacrificialAltarGroup.add(hornedSkullGroup);
scene.add(sacrificialAltarGroup);

/* ==============================================================================
 * 7. HOODED AGHORI OCCULTISTS (Encircled in Ritual Chanting)
 * ============================================================================== */
const cultistGroup = new THREE.Group();
const cultRobeMat = new THREE.MeshStandardMaterial({ color: 0x12080a, roughness: 0.95 });
const cultSashMat = new THREE.MeshStandardMaterial({ color: 0x8a0707, roughness: 0.8 });
const ironTridentMat = new THREE.MeshStandardMaterial({ color: 0x212121, metalness: 0.95, roughness: 0.2 });

const CULTIST_COUNT = 8;
const radius = 5.6;
const cultistList = [];

for (let a = 0; a < CULTIST_COUNT; a++) {
  const angle = Math.PI * 0.72 + (a / (CULTIST_COUNT - 1)) * (Math.PI * 1.56);
  const ax = Math.cos(angle) * radius;
  const az = Math.sin(angle) * radius - 1.2;

  const cultist = new THREE.Group();
  cultist.position.set(ax, 0, az);
  cultist.lookAt(0, 0.6, -0.4);

  // Black Robe Torso
  const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.85, 1.4, 10), cultRobeMat);
  robe.position.y = 0.7;
  cultist.add(robe);

  // Blood-red sash
  const sash = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.65, 0.25, 10), cultSashMat);
  sash.position.y = 0.75;
  cultist.add(sash);

  // Hooded Cowl
  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.7, 8), cultRobeMat);
  hood.position.y = 1.6;
  cultist.add(hood);

  // Demonic Glowing Red Eyes peering from the dark hood
  const eyeLightL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
  eyeLightL.position.set(-0.08, 1.45, 0.22);
  cultist.add(eyeLightL);

  const eyeLightR = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
  eyeLightR.position.set(0.08, 1.45, 0.22);
  cultist.add(eyeLightR);

  // Iron Trident topped with miniature human skull
  const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 3.4, 8), ironTridentMat);
  staff.position.set(0.68, 1.7, 0.2);
  cultist.add(staff);

  const miniSkull = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), boneMat);
  miniSkull.position.set(0.68, 3.3, 0.2);
  cultist.add(miniSkull);

  const tridentHead = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.45, 6), ironTridentMat);
  tridentHead.position.set(0.68, 3.65, 0.2);
  cultist.add(tridentHead);

  cultistGroup.add(cultist);
  cultistList.push(cultist);
}

scene.add(cultistGroup);

// Ambient & Blood Moon Lighting
const ambientLight = new THREE.AmbientLight(0x180509, 1.4);
scene.add(ambientLight);

const moonLight = new THREE.DirectionalLight(0xd50000, 1.3);
moonLight.position.set(16, 26, -20);
moonLight.castShadow = true;
scene.add(moonLight);

/* ==============================================================================
 * 8. INTERACTIVE RAYCASTING & SACRIFICIAL PHOTO REPLACEMENT
 * ============================================================================== */
function updateSacrificial3DPhoto(target, url) {
  const texLoader = new THREE.TextureLoader();
  texLoader.crossOrigin = 'anonymous';
  texLoader.load(
    url,
    (newTex) => {
      newTex.anisotropy = 4;
      state.devotees[target].texture = newTex;
      if (photoMeshes[target]) {
        photoMeshes[target].material.map = newTex;
        photoMeshes[target].material.needsUpdate = true;
      }
    },
    undefined,
    (err) => {
      console.warn("Image load fallback:", err);
    }
  );
}

// Drag & Drop photo directly onto Karthick's skull (left) or Kamalesh's skull (right)
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const target = e.clientX < window.innerWidth / 2 ? 1 : 2;
      const dataUrl = evt.target.result;
      updateSacrificial3DPhoto(target, dataUrl);
      playOccultDeathGong();
    };
    reader.readAsDataURL(file);
  }
});

// Raycasting click detection on 3D sacrificial objects
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.domElement.addEventListener('click', (e) => {
  if (!state.audioUnlocked) {
    initAudio();
    state.audioUnlocked = true;
  }

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  // Check Death Bell click
  const bellHits = raycaster.intersectObjects(bellGroup.children, true);
  if (bellHits.length > 0) {
    ring3DDeathBell();
    return;
  }

  // Check Infernal Fire click
  const fireHits = raycaster.intersectObjects(dhuniGroup.children, true);
  if (fireHits.length > 0) {
    triggerHellfireAhuti();
    return;
  }

  // Check Horned Demon Skull click
  const demonHits = raycaster.intersectObjects(hornedSkullGroup.children, true);
  if (demonHits.length > 0) {
    playSkullCurseChant();
    sulfurLight.intensity = 4.2;
    setTimeout(() => { sulfurLight.intensity = 1.8; }, 1400);
    return;
  }

  // Check Karthick's Sacrificial Skull click
  if (skullGroups[1]) {
    const hits1 = raycaster.intersectObjects(skullGroups[1].children, true);
    if (hits1.length > 0) {
      focusCameraOnTarget(-1.25, 1.35, 0.9, -1.25, 1.45, 2.7);
      playOccultDeathGong();
      return;
    }
  }

  // Check Kamalesh's Sacrificial Skull click
  if (skullGroups[2]) {
    const hits2 = raycaster.intersectObjects(skullGroups[2].children, true);
    if (hits2.length > 0) {
      focusCameraOnTarget(1.25, 1.35, 0.9, 1.25, 1.45, 2.7);
      playOccultDeathGong();
      return;
    }
  }
});

// Smooth Camera Lerp
let targetCamPos = null;
let targetLookAt = null;

function focusCameraOnTarget(tx, ty, tz, cx, cy, cz) {
  targetLookAt = new THREE.Vector3(tx, ty, tz);
  targetCamPos = new THREE.Vector3(cx, cy, cz);
}

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
  if (!state.audioUnlocked) {
    initAudio();
    state.audioUnlocked = true;
  }

  if (e.key === 'b' || e.key === 'B') ring3DDeathBell();
  if (e.key === 'a' || e.key === 'A') triggerHellfireAhuti();
  if (e.key === ' ' || e.key === 'm' || e.key === 'M') toggleAudioMute();
  if (e.key === 'f' || e.key === 'F') {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }
  if (e.key === '1') focusCameraOnTarget(-1.25, 1.35, 0.9, -1.25, 1.45, 2.7);
  if (e.key === '2') focusCameraOnTarget(1.25, 1.35, 0.9, 1.25, 1.45, 2.7);
  if (e.key === '0') focusCameraOnTarget(0, 1.25, 0.9, 0, 1.95, 4.2);
});

// Window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ==============================================================================
 * 9. ANIMATION & RENDER LOOP
 * ============================================================================== */
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();

  // Smooth Camera Interpolation
  if (targetCamPos && targetLookAt) {
    camera.position.lerp(targetCamPos, 0.06);
    controls.target.lerp(targetLookAt, 0.06);
    if (camera.position.distanceTo(targetCamPos) < 0.04) {
      targetCamPos = null;
      targetLookAt = null;
    }
  }

  // Idle Eerie Cinematic Camera Drift
  if (!state.isUserInteracting && !targetCamPos) {
    state.idleTimer += 0.008;
    camera.position.x += Math.sin(elapsedTime * 0.22) * 0.003;
    camera.position.y += Math.cos(elapsedTime * 0.18) * 0.0015;
  }

  controls.update();

  // 1. Hellfire Flame Particles Animation & Roaring Flicker
  const fPos = fireGeom.attributes.position.array;
  for (let i = 0; i < FIRE_COUNT; i++) {
    fPos[i * 3 + 1] += 0.042;
    fPos[i * 3 + 0] += Math.sin(elapsedTime * 6 + i) * 0.009;
    if (fPos[i * 3 + 1] > 3.2) {
      fPos[i * 3 + 1] = 0.5;
      fPos[i * 3 + 0] = (Math.random() - 0.5) * 1.8;
    }
  }
  fireGeom.attributes.position.needsUpdate = true;
  dhuniLight.intensity = 4.0 + Math.sin(elapsedTime * 14) * 0.65 + (Math.random() - 0.5) * 0.4;

  // 2. Torch Lights Warm Blood Flicker
  torchLights.forEach((tl, idx) => {
    tl.intensity = 0.95 + Math.sin(elapsedTime * 10 + idx * 1.5) * 0.22;
  });

  // 3. Glowing Pentagram Yantra Floor Pulsation
  if (yantraMesh) {
    yantraMat.opacity = 0.72 + Math.sin(elapsedTime * 2.8) * 0.22;
  }

  // 4. Sulfur Blue Flame Dancing on the Demon Skull
  const sPos = sulfurGeom.attributes.position.array;
  for (let sc = 0; sc < SULFUR_COUNT; sc++) {
    sPos[sc * 3 + 1] += 0.02;
    sPos[sc * 3 + 0] += Math.sin(elapsedTime * 8 + sc) * 0.005;
    if (sPos[sc * 3 + 1] > 0.95) {
      sPos[sc * 3 + 1] = 0.4;
      sPos[sc * 3 + 0] = (Math.random() - 0.5) * 0.3;
    }
  }
  sulfurGeom.attributes.position.needsUpdate = true;
  sulfurLight.intensity = 1.7 + Math.sin(elapsedTime * 11) * 0.3;

  // 5. Crimson River Wave Ripples
  const rPos = riverGeom.attributes.position;
  for (let j = 0; j < rPos.count; j++) {
    const u = rPos.getX(j);
    const v = rPos.getY(j);
    rPos.setZ(j, Math.sin(u * 0.22 + elapsedTime * 1.6) * 0.14 + Math.cos(v * 0.16 + elapsedTime * 1.3) * 0.09);
  }
  rPos.needsUpdate = true;

  // 6. Floating Skull Diyas Drifting Down the River
  diyas.forEach(diya => {
    diya.group.position.x += diya.speed;
    diya.group.position.y = -2.15 + Math.sin(elapsedTime * 2 + diya.group.position.x) * 0.05;
    if (diya.group.position.x > 30) {
      diya.group.position.x = -30;
    }
  });

  // 7. Hooded Cultists Swaying & Dark Chanting
  cultistList.forEach((cultist, cIdx) => {
    cultist.position.y = Math.sin(elapsedTime * 1.6 + cIdx) * 0.02;
    cultist.rotation.z = Math.sin(elapsedTime * 1.2 + cIdx) * 0.015;
  });

  // 8. Death Bell Pendulum Physics
  if (bellSwinging) {
    bellSwingAngle += bellSwingVelocity;
    bellSwingVelocity -= bellSwingAngle * 0.055;
    bellSwingVelocity *= 0.945;
    bellGroup.rotation.z = bellSwingAngle;
    if (Math.abs(bellSwingAngle) < 0.004 && Math.abs(bellSwingVelocity) < 0.004) {
      bellSwinging = false;
      bellGroup.rotation.z = 0;
    }
  }

  renderer.render(scene, camera);
}

animate();
