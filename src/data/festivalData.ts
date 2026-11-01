export interface Coordinator {
  name: string;
  phone: string;
  role?: string;
}

export interface OrganizingCoordinator {
  id: string;
  name: string;
  role: string;
  responsibility: string;
  phone: string;
}

export interface PricingTier {
  type: string;
  playerCount: string;
  price: number;
}

export interface GameEvent {
  id: string;
  name: string;
  departmentId: 'arts' | 'commerce' | 'science';
  departmentName: string;
  type: 'Solo' | 'Group' | 'Duo' | 'Team' | 'Solo / Group' | 'Solo / Duo' | 'Solo / Duo / Group' | string;
  playerCount: string;
  price: number;
  pricingTiers?: PricingTier[];
  description: string;
  rules: string[];
  heads: Coordinator[]; // Supports 1 or 2 heads!
  head: Coordinator;    // Primary head for backwards compatibility
  googleFormUrl: string;
}

export interface Department {
  id: 'arts' | 'commerce' | 'science';
  name: string;
  shortName: string;
  code: string;
  description: string;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'arts',
    name: 'Arts Department',
    shortName: 'Arts',
    code: 'Arts',
    description: 'Cinematic trivia, filmmaking challenges, and expressive multilingual poetry.',
    accentColor: '#E11D48', // rose-600
    badgeBg: 'bg-rose-50',
    badgeBorder: 'border-rose-200',
    badgeText: 'text-rose-700',
  },
  {
    id: 'commerce',
    name: 'Commerce Department',
    shortName: 'Commerce',
    code: 'Commerce',
    description: 'Speed cup stacking, business aptitude quizzes, and boardroom roadies.',
    accentColor: '#D97706', // amber-600
    badgeBg: 'bg-amber-50',
    badgeBorder: 'border-amber-200',
    badgeText: 'text-amber-700',
  },
  {
    id: 'science',
    name: 'Science Department',
    shortName: 'Science',
    code: 'Science',
    description: 'Digital gaming, campus-wide hunts, brainiac battles, and physical science puzzles.',
    accentColor: '#059669', // emerald-600
    badgeBg: 'bg-emerald-50',
    badgeBorder: 'border-emerald-200',
    badgeText: 'text-emerald-700',
  },
];

export const INITIAL_GAMES: GameEvent[] = [
  // --- ARTS DEPARTMENT (3 Games) ---
  {
    id: 'film-buff-battle',
    name: 'Film Buff Battle',
    departmentId: 'arts',
    departmentName: 'Arts',
    type: 'Solo / Group',
    playerCount: 'Solo (1) or Group (2 Players)',
    price: 100,
    pricingTiers: [
      { type: 'Solo', playerCount: '1 Player', price: 100 },
      { type: 'Group (2 Players)', playerCount: '2 Players', price: 200 },
    ],
    description:
      'Participants will be challenged to guess the film based on clues provided, complete the lyrics of popular songs, pick a chit and enact the scene, or perform a famous hook step from movies. This event is a mix of movie trivia and acting challenges, perfect for cinema enthusiasts.',
    rules: [
      'Round 1: Guess the movie from minimalist clues, emojis, or dialogue audio clips.',
      'Round 2: Complete the lyrics of popular Bollywood/Hollywood songs.',
      'Round 3: Pick a chit from the bowl and enact the scene or hook step in 60 seconds.',
      'No mobile phones or internet searches permitted during trivia rounds.',
      'Judges score based on accuracy, acting expression, and spontaneity.',
    ],
    heads: [
      {
        name: 'Aryan Deshmukh',
        phone: '+91 98204 55198',
      },
      {
        name: 'Riddhi Patil',
        phone: '+91 98190 44231',
      },
    ],
    head: {
      name: 'Aryan Deshmukh',
      phone: '+91 98204 55198',
    },
    googleFormUrl: 'https://forms.gle/insolitoArtsFilmBuff2026',
  },
  {
    id: 'reelcraft-challenge',
    name: 'ReelCraft Challenge',
    departmentId: 'arts',
    departmentName: 'Arts',
    type: 'Solo / Duo / Group',
    playerCount: 'Solo (1), Duo (2), or Group (3–4 Players)',
    price: 50,
    pricingTiers: [
      { type: 'Solo', playerCount: '1 Participant (Solo)', price: 50 },
      { type: 'Duo', playerCount: '2 Participants (Duo)', price: 100 },
      { type: 'Group', playerCount: '3–4 Participants (Group)', price: 150 },
    ],
    description:
      'Contestants will be provided with three audio clips to create a short reel. Participants are encouraged to use any type of content, whether it is acting, dancing, or storytelling, to showcase their creativity and make an engaging reel on campus grounds.',
    rules: [
      'Participation Criteria: 1 Participant (Solo) ₹50 | 2 Participants (Duo) ₹100 | 3–4 Participants (Group) ₹150.',
      'Audio clips provided by organizers at the event briefing.',
      'Reels must be recorded strictly within designated campus premises.',
      'Duration must be between 30 and 60 seconds.',
      'Submit MP4 file within the allotted 3 hour window.',
      'Judged on concept, editing quality, pacing, and visual storytelling.',
    ],
    heads: [
      {
        name: 'Shreya Jadhav',
        phone: '+91 97690 11245',
      },
    ],
    head: {
      name: 'Shreya Jadhav',
      phone: '+91 97690 11245',
    },
    googleFormUrl: 'https://forms.gle/insolitoArtsReelCraft2026',
  },
  {
    id: 'echoes-of-emotions',
    name: 'Echoes of Emotions',
    departmentId: 'arts',
    departmentName: 'Arts',
    type: 'Solo',
    playerCount: '1 Player',
    price: 40,
    description:
      'This poetry event requires participants to write poems that convey more than one or two emotions. Submissions will be accepted in English, Marathi, and Hindi. The focus is on depth of feeling and the ability to evoke complex emotional responses through words.',
    rules: [
      'Poems can be written in English, Marathi, or Hindi.',
      'On-the-spot composition time of 45 minutes.',
      'Selected finalists will recite their poem on stage (3 minutes recitation limit).',
      'The poem must convey dual or contrasting emotions.',
      'Must be 100% original work with zero plagiarism.',
    ],
    heads: [
      {
        name: 'Manasi Kadam',
        phone: '+91 98193 44567',
      },
    ],
    head: {
      name: 'Manasi Kadam',
      phone: '+91 98193 44567',
    },
    googleFormUrl: 'https://forms.gle/insolitoArtsPoetry2026',
  },

  // --- COMMERCE DEPARTMENT (3 Games) ---
  {
    id: 'cups-mania',
    name: 'Cups Mania',
    departmentId: 'commerce',
    departmentName: 'Commerce',
    type: 'Group',
    playerCount: '2 Players',
    price: 80,
    description:
      'High-speed coordinated cup pyramid stacking, cascading deconstruction, and tactical bucket flips requiring sync, balance, and nerves of steel under intense crowd cheers.',
    rules: [
      'Teams of 2 players.',
      'Tournament plastic cups provided by organizers.',
      'Complete pyramid stacking and deconstruction within allotted heats.',
      'If any cup falls, the team must reset that level before continuing.',
      'Fastest stop-clock timing wins.',
    ],
    heads: [
      {
        name: 'Sahil Mehta',
        phone: '+91 98205 66710',
      },
      {
        name: 'Akash Salvi',
        phone: '+91 98332 55190',
      },
    ],
    head: {
      name: 'Sahil Mehta',
      phone: '+91 98205 66710',
    },
    googleFormUrl: 'https://forms.gle/insolitoCommCupsMania2026',
  },
  {
    id: 'business-bee',
    name: 'Business Bee',
    departmentId: 'commerce',
    departmentName: 'Commerce',
    type: 'Solo',
    playerCount: '1 Player',
    price: 50,
    description:
      'The premier business and economics showdown! Unravel global brand logos, decode financial terminology, analyze balance sheet anomalies, and identify business magnates.',
    rules: [
      'Round 1: 20 rapid-fire written questions on economics, finance, and taglines.',
      'Round 2: Logo identification and business personality audio-visual buzzer round.',
      'Round 3: Rapid elevator case analysis.',
      'Points awarded for correct answers, negative marking in buzzer round.',
    ],
    heads: [
      {
        name: 'Riya Shah',
        phone: '+91 98331 22904',
      },
    ],
    head: {
      name: 'Riya Shah',
      phone: '+91 98331 22904',
    },
    googleFormUrl: 'https://forms.gle/insolitoCommBusinessBee2026',
  },
  {
    id: 'corporate-roadies',
    name: 'Corporate Roadies',
    departmentId: 'commerce',
    departmentName: 'Commerce',
    type: 'Solo',
    playerCount: '1 Player',
    price: 60,
    description:
      'Are you tough enough for the boardroom jungle? Face grilling stress interviews, real-world PR crisis simulations, rapid rebuttal debates, and negotiation showdowns.',
    rules: [
      'Round 1: Group discussion on current economic controversy.',
      'Round 2: Stress interview and rapid-fire situational cross-examination.',
      'Round 3: Crisis management press conference simulation.',
      'Scored on confidence, articulation, critical thinking, and poise.',
    ],
    heads: [
      {
        name: 'Harshwardhan Patil',
        phone: '+91 98700 33215',
      },
      {
        name: 'Siddhi More',
        phone: '+91 98211 88920',
      },
    ],
    head: {
      name: 'Harshwardhan Patil',
      phone: '+91 98700 33215',
    },
    googleFormUrl: 'https://forms.gle/insolitoCommRoadies2026',
  },

  // --- SCIENCE DEPARTMENT (6 Games) ---
  {
    id: 'hill-climbing',
    name: 'Hill Climbing',
    departmentId: 'science',
    departmentName: 'Science',
    type: 'Solo',
    playerCount: '1 Player',
    price: 50,
    description:
      'Teams of students compete on diverse maps aiming to cover the longest distance, complete courses the fastest, and perform the best stunts. The player with the highest cumulative points from all challenges emerges as the winner.',
    rules: [
      'Game Format: Classic mode maps decided by the organizers.',
      'Scoring: Points awarded based on distance covered and stunt score.',
      'Match Duration: Each match lasts for a maximum of 15 minutes.',
      'Fair Play: No third-party hacks, modded APKs, or cheats allowed.',
      'Players must use their own personal mobile device and network connection.',
      'Matches will not be paused for individual disconnections.',
    ],
    heads: [
      {
        name: 'Yash Patil',
        phone: '+91 98201 44521',
      },
      {
        name: 'Tanmay Mhatre',
        phone: '+91 98199 77201',
      },
    ],
    head: {
      name: 'Yash Patil',
      phone: '+91 98201 44521',
    },
    googleFormUrl: 'https://forms.gle/insolitoSciHillClimb2026',
  },
  {
    id: 'wcc2',
    name: 'WCC2 (World Cricket Championship)',
    departmentId: 'science',
    departmentName: 'Science',
    type: 'Solo',
    playerCount: '1 Player',
    price: 50,
    description:
      'Step onto the digital pitch and test your cricket instincts in World Cricket Championship 2. Face nail-biting overs, master field placement, and power-hit your way to championship glory.',
    rules: [
      'Match Format: 2 to 5 overs knockout match per round.',
      'Default touch controls on personal mobile device.',
      'No external controller or emulator permitted.',
      'Intentional disconnection or glitch abuse results in immediate forfeit.',
      'In case of a tie, a 1-over Super Over will be played.',
    ],
    heads: [
      {
        name: 'Kunal Sharma',
        phone: '+91 98192 33412',
      },
    ],
    head: {
      name: 'Kunal Sharma',
      phone: '+91 98192 33412',
    },
    googleFormUrl: 'https://forms.gle/insolitoSciWCC22026',
  },
  {
    id: 'science-safari',
    name: 'Science Safari',
    departmentId: 'science',
    departmentName: 'Science',
    type: 'Group',
    playerCount: '3-5 Players',
    price: 150,
    description:
      'A campus-wide event where participants solve clues and puzzles to find hidden items or locations, encouraging teamwork, quick thinking, and problem-solving across the sprawling PHCASC campus.',
    rules: [
      'Team Composition: Teams of 3-5 students.',
      'Solve riddles and clues to reach campus checkpoints in sequence.',
      'Time limit: 2 hours to complete the hunt.',
      'Use of personal mobile device for map navigation allowed.',
      'No interference with other teams or tampering with hidden clues.',
      'All team members must cross the finish line together.',
    ],
    heads: [
      {
        name: 'Aniket More',
        phone: '+91 97682 99120',
      },
      {
        name: 'Pooja Sawant',
        phone: '+91 98670 11342',
      },
      {
        name: 'Tejas Patil',
        phone: '+91 98191 55678',
      },
    ],
    head: {
      name: 'Aniket More',
      phone: '+91 97682 99120',
    },
    googleFormUrl: 'https://forms.gle/insolitoSciSafari2026',
  },
  {
    id: 'brainiac-battle',
    name: 'Brainiac Battle',
    departmentId: 'science',
    departmentName: 'Science',
    type: 'Solo / Group',
    playerCount: 'Solo (1) or Group (2 Players)',
    price: 100,
    pricingTiers: [
      { type: 'Solo', playerCount: '1 Player', price: 100 },
      { type: 'Group (2 Players)', playerCount: '2 Players', price: 200 },
    ],
    description:
      'A knowledge-based competition where participants answer questions across various subjects in a timed quiz format, testing recall, analytical aptitude, and fast reflexes under buzzer pressure.',
    rules: [
      'Team Composition: 1 or 2 participants.',
      'Questions cover science, technology, logic puzzles, and current affairs.',
      'Round 1: Written multiple-choice preliminary round.',
      'Round 2: Rapid-fire on-stage buzzer round.',
      'Decisions of the quiz master will be final.',
    ],
    heads: [
      {
        name: 'Sneha Iyer',
        phone: '+91 98334 77123',
      },
      {
        name: 'Siddhesh Naik',
        phone: '+91 98200 44109',
      },
    ],
    head: {
      name: 'Sneha Iyer',
      phone: '+91 98334 77123',
    },
    googleFormUrl: 'https://forms.gle/insolitoSciBrainiac2026',
  },
  {
    id: 'balloon-stacking',
    name: 'Balloon Stacking',
    departmentId: 'science',
    departmentName: 'Science',
    type: 'Solo',
    playerCount: '1 Player',
    price: 40,
    description:
      'A thrilling test of static electricity, aerodynamic balance, and steady hands. Stack and balance lightweight balloons using specific physical techniques within the designated arena without letting them pop or touch ground.',
    rules: [
      'Solo event, all materials provided on the spot.',
      'Build the tallest self-supporting balloon structure in 3 minutes.',
      'No external adhesives, tapes, pins, or glue allowed.',
      'Only static electricity and balance techniques permitted.',
      'Structure must remain freestanding for 5 seconds to be measured.',
    ],
    heads: [
      {
        name: 'Pooja Salve',
        phone: '+91 98190 22314',
      },
    ],
    head: {
      name: 'Pooja Salve',
      phone: '+91 98190 22314',
    },
    googleFormUrl: 'https://forms.gle/insolitoSciBalloon2026',
  },
  {
    id: 'separation-anxiety',
    name: 'Separation Anxiety',
    departmentId: 'science',
    departmentName: 'Science',
    type: 'Solo',
    playerCount: '1 Player',
    price: 40,
    description:
      'Test your cognitive sorting speed and fine motor reflexes! Separate mixed microscopic, granular, or color-coded physical items into distinct target containers under high-pressure timer conditions.',
    rules: [
      'Apparatus and randomized mixed items provided by event desk.',
      'Time Limit: 90 seconds per participant.',
      'Only one hand allowed (non-dominant hand behind back).',
      'Wrong item in target tray deducts 5 penalty points.',
      'Fastest and most accurate sorter wins.',
    ],
    heads: [
      {
        name: 'Pranav Joshi',
        phone: '+91 97022 34156',
      },
    ],
    head: {
      name: 'Pranav Joshi',
      phone: '+91 97022 34156',
    },
    googleFormUrl: 'https://forms.gle/insolitoSciSeparation2026',
  },
];

export const GENERAL_RULES = [
  {
    title: 'Valid College ID & Receipt Compulsory',
    desc: 'All participants must produce a valid college identity card alongside their official registration confirmation receipt at the registration desk upon arrival.',
  },
  {
    title: 'Punctuality & Reporting',
    desc: 'Participants must report to the respective venue at least 15 minutes before the scheduled time slot. Late arrivals beyond 10 minutes will forfeit their slot.',
  },
  {
    title: 'Campus & Infrastructure Respect',
    desc: 'Strict zero-tolerance policy towards damaging college property, laboratory equipment, or fest setups. Violators will face immediate penalty.',
  },
  {
    title: 'Fair Play & Device Guidelines',
    desc: 'No use of third-party mods, hacks, or unethical assistance. For mobile gaming events, participants must use their personal devices and mobile data.',
  },
  {
    title: 'Referee & Judge Decisions Final',
    desc: 'The decision of appointed faculty judges, external referees, and student event heads will be absolute, binding, and uncontestable.',
  },
  {
    title: 'Code of Conduct',
    desc: 'Maintain decorum, cordial sportsmanship, and inter-collegiate camaraderie. Any misconduct or aggression leads to immediate disqualification.',
  },
];

export const FESTIVAL_INFO = {
  name: 'INSOLITO 2026',
  college: 'Pillai HOC College of Arts, Science and Commerce (PHCASC)',
  collegeWebsite: 'https://phcasc.ac.in',
  address: 'Pillai HOC Educational Campus, Rasayani, Tal. Khalapur, Dist. Raigad, Maharashtra - 410207',
  dates: 'December 2026',
  registrationStatus: 'Registrations Open',
  email: 'insolito.phcasc@mes.ac.in',
  brochurePdfPath: '/brochure.pdf',
};

export const ORGANIZING_COMMITTEE_COORDINATORS: OrganizingCoordinator[] = [
  {
    id: 'oc-1',
    name: 'Aayush Rawat',
    role: 'Student Coordinator',
    responsibility: 'Overall Fest & Organising Committee Head',
    phone: '+91 98200 12345',
  },
  {
    id: 'oc-2',
    name: 'Aditya Patil',
    role: 'Student Coordinator',
    responsibility: 'Events & Department Coordination',
    phone: '+91 98194 56780',
  },
  {
    id: 'oc-3',
    name: 'Sakshi Deshmukh',
    role: 'Student Coordinator',
    responsibility: 'Registrations & Helpdesk Support',
    phone: '+91 98331 45672',
  },
  {
    id: 'oc-4',
    name: 'Rohan Gaikwad',
    role: 'Student Coordinator',
    responsibility: 'Logistics & Campus Venues',
    phone: '+91 98702 34561',
  },
];

// Utility to parse CSV text into GameEvent array (supports 1 or 2 heads)
export function parseGamesFromCsvText(csvText: string): GameEvent[] {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return INITIAL_GAMES;

  const result: GameEvent[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV line handling quotes
    const values: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length >= 10) {
      let id = '';
      let department = '';
      let name = '';
      let type = '';
      let playerCount = '';
      let priceStr = '';
      let description = '';
      let rulesStr = '';
      let head1Name = '';
      let head1Phone = '';
      let head2Name = '';
      let head2Phone = '';
      let head3Name = '';
      let head3Phone = '';
      let formUrl = '';

      if (values.length >= 15) {
        // Explicit 3-head columns format:
        [id, department, name, type, playerCount, priceStr, description, rulesStr, head1Name, head1Phone, head2Name, head2Phone, head3Name, head3Phone, formUrl] = values;
      } else if (values.length >= 13) {
        // Explicit 2-head columns format:
        [id, department, name, type, playerCount, priceStr, description, rulesStr, head1Name, head1Phone, head2Name, head2Phone, formUrl] = values;
      } else {
        // Standard 10 or 11 column format:
        [id, department, name, type, playerCount, priceStr, description, rulesStr, head1Name, head1Phone, formUrl] = values;
      }

      const deptLower = (department || 'science').toLowerCase();
      const departmentId: 'arts' | 'commerce' | 'science' =
        deptLower.includes('art') ? 'arts' : deptLower.includes('comm') ? 'commerce' : 'science';

      const rules = rulesStr
        ? rulesStr.split(';').map((r) => r.trim()).filter(Boolean)
        : [];

      // Assemble heads array (1, 2, or 3 heads)
      const heads: Coordinator[] = [];

      // Check if head1Name contains multiple heads separated by semicolon or slash
      if (head1Name.includes(';') || head1Name.includes('/')) {
        const names = head1Name.split(/[;/]/).map((n) => n.trim()).filter(Boolean);
        const phones = (head1Phone || '').split(/[;/]/).map((p) => p.trim());
        names.forEach((n, idx) => {
          heads.push({
            name: n,
            phone: phones[idx] || phones[0] || '',
          });
        });
      } else if (head1Name) {
        heads.push({
          name: head1Name,
          phone: head1Phone || '',
        });
      }

      // If explicit head2Name was provided in separate columns
      if (head2Name && head2Name.trim() !== '') {
        heads.push({
          name: head2Name.trim(),
          phone: head2Phone || '',
        });
      }

      // If explicit head3Name was provided in separate columns
      if (head3Name && head3Name.trim() !== '') {
        heads.push({
          name: head3Name.trim(),
          phone: head3Phone || '',
        });
      }

      // Default fallback if empty
      if (heads.length === 0) {
        heads.push({
          name: 'Event Coordinator',
          phone: '',
        });
      }

      // Handle multi-tier pricing (e.g. "50/100/150", "100/200", etc.)
      let price = 50;
      let pricingTiers: PricingTier[] | undefined = undefined;

      const priceClean = (priceStr || '').trim();
      const typeClean = (type || '').toLowerCase();

      if (priceClean.includes('/') || priceClean.includes(';') || priceClean.toLowerCase().includes('group') || priceClean.toLowerCase().includes('solo') || priceClean.toLowerCase().includes('duo')) {
        const digits = priceClean.match(/\d+/g);
        if (digits && digits.length >= 3) {
          // 3-tier pricing (e.g. 50/100/150)
          const p1 = Number(digits[0]);
          const p2 = Number(digits[1]);
          const p3 = Number(digits[2]);
          price = p1;
          pricingTiers = [
            { type: 'Solo', playerCount: '1 Participant (Solo)', price: p1 },
            { type: 'Duo', playerCount: '2 Participants (Duo)', price: p2 },
            { type: 'Group', playerCount: '3–4 Participants (Group)', price: p3 },
          ];
        } else if (digits && digits.length === 2) {
          // 2-tier pricing (e.g. 100/200)
          const p1 = Number(digits[0]);
          const p2 = Number(digits[1]);
          price = p1;
          pricingTiers = [
            { type: 'Solo', playerCount: '1 Player', price: p1 },
            { type: 'Group (2 Players)', playerCount: '2 Players', price: p2 },
          ];
        } else if (digits && digits.length === 1) {
          price = Number(digits[0]);
        }
      } else {
        price = Number(priceClean) || 50;
      }

      // Check if game or type specifies 3 criteria (Solo, Duo, Group)
      if ((id === 'reelcraft-challenge' || (typeClean.includes('duo') && typeClean.includes('group') && typeClean.includes('solo'))) && !pricingTiers) {
        pricingTiers = [
          { type: 'Solo', playerCount: '1 Participant (Solo)', price: 50 },
          { type: 'Duo', playerCount: '2 Participants (Duo)', price: 100 },
          { type: 'Group', playerCount: '3–4 Participants (Group)', price: 150 },
        ];
      } else if ((typeClean.includes('solo') && (typeClean.includes('group') || typeClean.includes('duo') || playerCount.includes('2'))) && !pricingTiers && price === 100) {
        pricingTiers = [
          { type: 'Solo', playerCount: '1 Player', price: 100 },
          { type: 'Group (2 Players)', playerCount: '2 Players', price: 200 },
        ];
      }

      result.push({
        id: id || `game-${i}`,
        name: name || 'Unnamed Game',
        departmentId,
        departmentName: departmentId.charAt(0).toUpperCase() + departmentId.slice(1),
        type: (type as any) || 'Solo',
        playerCount: playerCount || '1 Player',
        price,
        pricingTiers,
        description: description || '',
        rules: rules.length > 0 ? rules : ['Standard rules apply.'],
        heads,
        head: heads[0],
        googleFormUrl: formUrl || '#',
      });
    }
  }

  return result.length > 0 ? result : INITIAL_GAMES;
}

// Utility to parse CSV text into OrganizingCoordinator array
export function parseOrganizingCoordinatorsFromCsvText(csvText: string): OrganizingCoordinator[] {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return ORGANIZING_COMMITTEE_COORDINATORS;

  const result: OrganizingCoordinator[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length >= 3) {
      const id = values[0] || `oc-${i}`;
      const name = values[1] || 'Student Coordinator';
      const role = values[2] || 'Student Coordinator';
      const responsibility = values[3] || 'Organising Committee';
      const phone = values.length >= 5 ? values[4] : values[3] || '';

      result.push({
        id,
        name,
        role,
        responsibility,
        phone,
      });
    }
  }

  return result.length > 0 ? result : ORGANIZING_COMMITTEE_COORDINATORS;
}
