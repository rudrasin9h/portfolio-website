// Replace the clearly marked placeholder content below with your real information.
export const profile = {
  name: 'Rudra',
  tagline: 'Building things. Breaking things. Understanding why.',
  intro: 'Engineering student exploring software, systems, and creative technical solutions.',
  email: 'rudra.sin9h@gmail.com',
  github: 'https://github.com/rudrasin9h',
};

export const skills = [
  { title: 'Programming', color: 'red', icon: 'code', items: ['Python', 'C', 'C++'], note: 'Languages I use to turn ideas into working programs.' },
  { title: 'Development tools', color: 'blue', icon: 'terminal', items: ['Git', 'GitHub', 'Linux'], note: 'Tools for building, testing, and understanding software.' },
  { title: 'Currently exploring', color: 'yellow', icon: 'flask', items: ['Machine learning', 'Computer vision', 'Systems programming'], note: 'Areas I am learning through experiments and small projects.' },
];

export const projects = [
  {
    number: '001', title: 'AirChirp', date: 'AUGUST 2026', status: 'ACOUSTIC FILE TRANSFER',
    problem: 'Transfer files between browsers without a network using near-ultrasonic sound waves in the 17.5–19.5 kHz range.',
    solution: 'Built an in-browser acoustic modem that sends data through laptop speakers and receives it through a microphone. Multi-carrier modulation streams data across four parallel frequency lanes, with live frequency visualization.',
    stack: ['HTML5', 'JavaScript', 'Web Audio API', 'pako.js'],
    decision: 'Encrypt payloads with client-side AES-256-GCM and compress data with pako.js before transmission. Use the Web Audio API and Canvas to visualize a real-time Fast Fourier Transform (FFT).',
    result: 'Browser-based file transfer with encrypted, compressed payloads and a live view of the received frequencies.',
    image: '/project-shots/airchirpui.png',
    github: 'https://github.com/rudrasin9h/acoustic-data-transmission-devjams26', demo: '', mark: 'ACOUSTIC MODEM',
  },
  {
    number: '002', title: 'TabCluster', date: 'SEPTEMBER 2026', status: 'PEER-TO-PEER COMPUTE',
    problem: 'Combine phones and laptops into a browser-based distributed compute cluster without a central server.',
    solution: 'Peers join over WebRTC using a QR code or room code. Web Workers handle tile computation, while a pull-based task queue reassigns work when a worker disconnects.',
    stack: ['JavaScript', 'WebRTC', 'PeerJS', 'Web Workers', 'HTML5 Canvas', 'Git'],
    decision: 'Keep computation off the main thread with Web Workers, return results as Uint8ClampedArray buffers, and use timeout-based re-queuing to recover unfinished chunks.',
    result: 'A live dashboard tracks active workers, completion rate, and estimated TFLOPS while rendered tiles appear on an HTML5 Canvas.',
    image: '/project-shots/tabclusterui.png',
    github: 'https://github.com/rudrasin9h/tabcluster', demo: 'https://tabcluster-c2c-2026-tig5.onrender.com/', mark: 'DISTRIBUTED COMPUTE',
  },
];

export const experiments = [
  { title: 'Freshness sensing concept', objective: 'Explore how environmental signals can help estimate food freshness.', tech: ['Sensors', 'Data analysis'], progress: 'EARLY RESEARCH', next: 'Define a repeatable data-collection method.', repo: '' },
  { title: 'Learning log', objective: 'Turn new concepts into small, testable programs instead of only reading about them.', tech: ['Python', 'C/C++'], progress: 'ONGOING', next: 'Publish a small demo and document what changed.', repo: '' },
];
