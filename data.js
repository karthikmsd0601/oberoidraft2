// Content captured read-only from https://orlmail.sharepoint.com/sites/intranetuat (UAT) on 3 Nov 2026.
// Text is reproduced exactly as it appears on the live site (including original spellings).
const SP = 'https://orlmail.sharepoint.com';
const ASSETS = SP + '/sites/appcatalog/ClientSideAssets/4c70e2c6-d394-4dfb-85d3-716b51066d91/';
// Home shortcut-card photos (Unsplash licence: free to use, no attribution required).
const PHOTO = (id) => 'https://images.unsplash.com/photo-' + id + '?w=800&q=80&auto=format&fit=crop';
// Stock portraits (Unsplash) standing in for staff photos on the Birthdays cards — not the employees' real photos.
const FACE = (id) => 'https://images.unsplash.com/photo-' + id + '?w=240&h=240&q=80&auto=format&fit=crop&crop=faces';

window.APP_DATA = {
  // Display name is a sample name (on the live site this test account is called "Sharepoint Dev").
  user: { name: 'Arjun Mehta', email: 'sharepointdev@oberoirealty.com', title: 'Assistant Senior Manager - Learning & Development' },
  // Local copy of the SharePoint logo (ASSETS + 'OberoiLogo_982d7a6888062cc402685078e84a5bdd.png'), so it shows without sign-in.
  logo: 'images/logo.png',

  nav: [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'corporate', label: 'Corporate', icon: 'business' },
    { id: 'hr-admin', label: 'HR & Admin', icon: 'personSearch' },
    { id: 'i-connect', label: 'I-Connect', icon: 'group' },
    { id: 'training-events', label: 'Training & Events', icon: 'event' },
  ],

  // Production Home (screenshots, 4 Nov 2026): scroll bar items, each jumping to its dashboard section.
  quickBar: [
    { label: 'Celebrations', icon: 'cake', target: 'celebrations' },
    { label: 'Food Menu', icon: 'restaurant', target: 'todays-menu' },
    { label: 'Videos', icon: 'link', target: 'video-gallery' },
    { label: 'Applications', icon: 'apps', target: '' },
  ],
  chatCount: 2,
  // Top-bar messages pop-up (production screenshot, 4 Nov 2026).
  messages: [
    { title: 'Power Garba 2026 Pictures' },
    { title: 'Diwali 2026 Video | Watch Now' },
  ],

  // ---------- Production Home dashboard content (from the user's screenshots, 4 Nov 2026) ----------
  home: {
    sections: [
      { id: 'celebrations', label: 'Celebrations' },
      { id: 'todays-menu', label: "Today's Menu" },
      { id: 'video-gallery', label: 'Video Gallery' },
      { id: 'learning-events', label: 'Learning Events' },
      { id: 'erp-winners', label: 'ERP Winners' },
      { id: 'job-postings', label: 'Job Postings' },
      { id: 'holiday-calendar', label: 'Holiday Calendar' },
    ],
    // Shortcut cards: each card is the exact card from the supplied design (11 Nov 2026), cropped losslessly —
    // photo, panel gradient, icon, label and arrow button. w × h = the card's size in the design (keeps proportions);
    // tone = colour of the soft glow under the card. The label is also present as hidden text for screen readers.
    // Dark mode: cardDark = the same card in dark (same photo and layout; from the wave down a see-through dark glass
    // gradient — clear at the wave, deepening to dark — with gold icons, warm-white labels, dark button, gold chevron).
    tiles: [
      // Celebrations / Everyday Hero recoloured to the Today's Menu peach, Videos to the Applications grey-green.
      { label: 'Celebrations', card: 'images/tiles/card-celebrations.png', cardDark: 'images/tiles/dark/card-celebrations.png', w: 369, h: 321, tone: 'peach', target: 'celebrations' },
      { label: "Today's Menu", card: 'images/tiles/card-todays-menu.png', cardDark: 'images/tiles/dark/card-todays-menu.png', w: 346, h: 320, tone: 'peach', target: 'todays-menu' },
      { label: 'Videos', card: 'images/tiles/card-videos.png', cardDark: 'images/tiles/dark/card-videos.png', w: 346, h: 320, tone: 'sage', target: 'video-gallery' },
      { label: 'Applications', card: 'images/tiles/card-applications.png', cardDark: 'images/tiles/dark/card-applications.png', w: 340, h: 320, tone: 'sage', target: '' },
      { label: 'Everyday Hero', card: 'images/tiles/card-everyday-hero.png', cardDark: 'images/tiles/dark/card-everyday-hero.png', w: 349, h: 320, tone: 'peach', target: 'everyday-hero' },
    ],
    birthdays: {
      title: 'Birthdays',
      sub: "Best wishes to our birthday stars! Here's to a fantastic day and year ahead",
      bg: PHOTO('1627545195487-d088963ecdfb'), // Home greeting panel background (Unsplash stock photo: gold-topped cake)
      // First name is cut off in the production screenshot ("Manleenkaur ...").
      people: [
        { name: 'Manleenkaur', role: 'Assistant Manager - Customer Service', photo: FACE('1628726987013-db899232027c') },
        { name: 'Yogesh Pawar', role: 'Senior Executive - Fixed Assets', photo: FACE('1649433658557-54cf58577c68') },
      ],
      // SAMPLE entries (not from production), added on request to fill the "View all" pop-up only.
      more: [
        { name: 'Priya Deshmukh', role: 'Executive - Human Resources', photo: FACE('1573497019707-1c04de26e58c') },
        { name: 'Rahul Mehta', role: 'Manager - Sales', photo: FACE('1600878459138-e1123b37cb30') },
        { name: 'Sneha Kulkarni', role: 'Senior Executive - Accounts', photo: FACE('1655249493799-9cee4fe983bb') },
        { name: 'Amit Joshi', role: 'Assistant Manager - Projects', photo: FACE('1568585105565-e372998a195d') },
        { name: 'Neha Iyer', role: 'Executive - Marketing', photo: FACE('1577878317861-2a54eb46ed42') },
      ],
    },
    // Sixth category is cut off in the screenshot ("Le… De…"); assumed Learning & Development.
    // photo: Unsplash stock image used as each category's thumbnail (not from the live site).
    videos: [
      { label: 'Corporate', icon: 'business', photo: PHOTO('1704423846283-f92ff6badea3') },
      { label: 'Projects', icon: 'work', photo: PHOTO('1758526116315-361575027838') },
      { label: 'Our People', icon: 'group', photo: PHOTO('1577962917302-cd874c4e31d2') },
      { label: 'Events', icon: 'event', photo: PHOTO('1730134322176-862f1cf9bc9f') },
      { label: 'Teamwork Videos', icon: 'verified', photo: PHOTO('1600880292089-90a7e086ee0c') },
      { label: 'Learning & Development', icon: 'article', photo: PHOTO('1542744173-8e7e53415bb0') },
    ],
    // Recognition carousel — the four production Home banners (screenshots, 4 Nov 2026): ERP winners,
    // two Everyday Hero pairs and an Everyday Hero spotlight. Text reproduced as on the live site.
    recognition: {
      erp: {
        title: 'Employee Recognition Program (ERP) Winners',
        period: 'For Q2 FY 2026-2027',
        cta: 'View Past Winners',
        winners: ['Roma Mistry', 'Santanu Sinha', 'Urvashi Goradia'],
      },
      heroTitle: ['EVERYDAY', 'HERO'],
      heroPairs: [
        [
          { name: 'Nikhil Parmar', dept: 'Construction', value: 'QUALITY', tagline: 'SET HIGHER STANDARDS', nominatedBy: 'Rakesh Srivastava' },
          { name: 'Gautam Kumar', dept: 'Construction', value: 'TEAMWORK', tagline: 'MAKING THE DREAM WORK', nominatedBy: 'Kishor Bandal' },
        ],
        [
          { name: 'Ranjit Patil', dept: 'Construction', value: 'QUALITY', tagline: 'SET HIGHER STANDARDS', nominatedBy: 'Kiran Bheke' },
          { name: 'Prince Kumar', dept: 'Construction', value: 'TEAMWORK', tagline: 'MAKING THE DREAM WORK', nominatedBy: 'Kanhaiya Varma' },
        ],
      ],
      spotlight: {
        name: 'Binod Kumar',
        dept: 'Construction',
        quote: 'Binod Kumar is a true team player who leads by appreciating others, recognizing contributions, encouraging open communication, and sharing knowledge freely. His guidance and unwavering support have helped Tower C improve its quality standards and secure top scores in the last two audits.',
        manager: 'Onkar Kamble',
        nominatedBy: 'Ravindra Salvi',
      },
      // Stock portraits (Unsplash) standing in for the staff photos — not the employees' real photos.
      photos: {
        'Roma Mistry': FACE('1762341124796-530c0085f7d8'),
        'Santanu Sinha': FACE('1757744705465-ea08b0ddc38a'),
        'Urvashi Goradia': FACE('1609371497456-3a55a205d5eb'),
        'Nikhil Parmar': FACE('1672748341520-6a839e6c05bb'),
        'Gautam Kumar': FACE('1659353587367-61eb5b8c6ef7'),
        'Ranjit Patil': FACE('1587715718640-987708ba38e1'),
        'Prince Kumar': FACE('1697305592218-d5d0c1bab2e3'),
        'Binod Kumar': FACE('1779281128550-8cc634361a17'),
      },
    },
    jobs: [
      { title: 'Assistant General Manager', code: '3884', dept: 'Quality Control', loc: 'Three Sixty North' },
      { title: 'Manager', code: '3873', dept: 'Procurement', loc: 'MEP' },
      { title: 'Manager', code: '3889', dept: 'Mall', loc: 'Leasing' },
    ],
  },

  // ---------- Corporate page: Media, Policies, Video Gallery (live-site screenshots, 10 Nov 2026) ----------
  corporate: {
    sections: [
      { id: 'media', label: 'Media' },
      { id: 'policies', label: 'Policies' },
      { id: 'videos', label: 'Video Gallery' },
    ],
    // logo: the publication's masthead, cut out (transparent background) from screenshots supplied on 11 Nov 2026;
    //       logoH = display height in px (wide wordmarks are limited by width instead).
    // photo: Unsplash stock image matching each story (not from the article itself).
    media: [
      { source: 'Business Standard', logo: 'images/press/business-standard.png', logoH: 26, date: '2026-05-06', title: "Oberoi Realty tops bid for Railway land in Mumbai's Bandra for ₹5,400 cr", photo: PHOTO('1480714378408-67cf0d13bc1b') },
      { source: 'Adgully', logo: 'images/press/adgully.png', logoH: 34, date: '2026-05-06', title: 'Oberoi Realty redefines modern prosperity with Akshaya Tritiya Digital Film', photo: PHOTO('1502672260266-1c1ef2d93688') },
      { source: 'The Economic Times', logo: 'images/press/economic-times.png', logoH: 22, date: '2026-05-06', title: "Oberoi Realty JV, Aman Group ink pact for luxury development in Mumbai's Worli", photo: PHOTO('1613490493576-7fde63acd811') },
      { source: 'mid-day', logo: 'images/press/mid-day.png', logoH: 28, date: '2026-02-26', title: 'Apple opens second Mumbai store at Sky City Mall in Borivali', photo: PHOTO('1519567241046-7f570eee3ce6') },
    ],
    policyCategories: ['Employee Benefits', 'Employee Recognition', 'HRD', 'IT', 'Leave', 'Separation', 'Social Media'],
    // Names are truncated on the live site; endings after the cut-off and each document's category are assumed.
    policies: [
      { name: 'ORL Business Continuity Policy', cat: 'IT' },
      { name: 'Electronic Policy – Communication', cat: 'Social Media' },
      { name: 'ORL_Workdays and Working Hours', cat: 'HRD' },
      { name: 'Employment Regulations', cat: 'HRD' },
      { name: 'Separation Policy', cat: 'Separation' },
      { name: 'ORL Data Leakage Prevention Policy', cat: 'IT' },
      { name: 'ORL Segregation of Duties Policy', cat: 'IT' },
      { name: 'ORL_Birthday Gift Policy', cat: 'Employee Benefits' },
      { name: 'Annexure - DEI Council', cat: 'HRD' },
      { name: 'ORL Vulnerability Assessment Policy', cat: 'IT' },
      { name: 'ORL Mobile Devices Policy', cat: 'IT' },
      { name: 'ORL_Leave - Timeoff Policy', cat: 'Leave' },
      { name: 'ORL_Learning & Development Policy', cat: 'Employee Recognition' },
      { name: 'ORL_Marriage Gift Policy', cat: 'Employee Benefits' },
      { name: 'ORL Data Governance Policy', cat: 'IT' },
      { name: 'ORL Threat Intelligence Policy', cat: 'IT' },
    ],
    // Same categories as the Home Video Gallery. The six films are filed under Projects (assumed; the active tab is cut off).
    videoCats: ['Projects', 'Corporate', 'Our People', 'Events', 'Teamwork Videos', 'Learning & Development'],
    // photo: Unsplash stock image standing in for each film's poster frame (not from the live site).
    videos: [
      {
        title: 'Three Sixty North - Revealer Film', cat: 'Projects', duration: '1:30', photo: PHOTO('1486406146926-c627a92ad1ab'),
        desc: 'Three Sixty North by Oberoi Realty unveils a world of exclusive luxury in Gurugram. Thoughtfully envisioned with impeccable craftsmanship, it is designed to enrich everyday living through exceptional experiences. Discover a realm where quiet luxury finds its finest expression. Spacious 3 BHK & Studio and 4 BHK & Studio residences, along with duplexes and penthouses, crafted for elevated living.',
      },
      { title: 'Three Sixty West - Brand Film', cat: 'Projects', photo: PHOTO('1477959858617-67f85cf4f1df') },
      { title: 'Sky City Project Film 2025', cat: 'Projects', photo: PHOTO('1460317442991-0ec209397118') },
      { title: 'Homes of ORL – Gudi Padwa 2025', cat: 'Projects', photo: PHOTO('1600210492486-724fe5c67fb0') },
      { title: 'Eternia and Enigma Brand film', cat: 'Projects', photo: PHOTO('1545324418-cc1a3fa10c00') },
      { title: 'Forestville Brand Film', cat: 'Projects', photo: PHOTO('1449824913935-59a10b8d2000') },
    ],
  },

  // Images re-matched to their labels (on the live site they are shifted by one slot, e.g. balloons under "Take a Quiz").
  // All images are the intranet's own assets; Take a Quiz uses the Integrity logo, as the quiz is the Integrity quiz.
  tiles: [
    { label: 'Take a Quiz', icon: 'quiz', img: ASSETS + 'IntegrityLogo_4124b0049efbad8f6eff7ae416222c70.jpg', fit: 'contain', tone: 'dark' },
    { label: 'Celebrations', icon: 'cake', img: ASSETS + 'Home_Birthday_0fe27146e5bc2e4b3924bb6aa2c6e5d4.png' },
    { label: "Today's Menu", icon: 'restaurant', img: ASSETS + 'Home_Food_7b9ab4fb3524d2e55cbc3afcf7db4722.png' },
    { label: 'Videos', icon: 'video', img: ASSETS + 'Home_Videos_74720b78db43fc8b0359ec1cdcd2bb37.jpg', play: ASSETS + 'playButton_91892c09ef5839bb06de2690891c191e.png' },
    { label: 'Applications', icon: 'apps', img: ASSETS + 'Important_Links_b8ae1938721f7b3f891c64d0b6072304.png', fit: 'contain', tone: 'light' },
  ],

  integrity: {
    title: 'Celebrating Integrity Day',
    subtitle: 'Test your Integrity Score',
    cta: 'Take the Quiz',
    logo: ASSETS + 'IntegrityLogo_4124b0049efbad8f6eff7ae416222c70.jpg',
  },

  festive: {
    // Local copy of the SharePoint attachment (…/HomePage  Events/Attachments/10/…[BackgroundImage]…jpg),
    // so the banner and the Chairman's photo show without a SharePoint sign-in (e.g. on Vercel).
    img: 'images/banner-festive.jpg',
    alt: "Festive Greetings From The Chairman's Desk",
    lines: ['Festive Greetings', "From The Chairman's Desk"], // the banner's own wording, now set as live text
    cta: 'View More',
    // Chairman's photo region inside the original artwork (fractions of the image), used to show the same photo.
    photo: { x0: 0.826, x1: 0.934, y0: 0.15, y1: 0.71, aspect: 3605 / 800 },
  },

  // Further "HomePage  Events" list items (VisibleInHome = true), read from the live site on 3 Nov 2026.
  // Unlike the festive banner, these are composed: background image + event image + title + button.
  banners: [
    {
      title: "International Women's Day 2026: A message from the Chairman's desk",
      cta: 'Read Now!',
      bg: SP + '/sites/intranetuat/Lists/HomePage%20%20Events/Attachments/5/Reserved_ImageAttachment_[15]_[BackgroundImage][32]_[f0e06228bb0c4bb4a4174e40ac7c4778][1]_[7].png',
      // Stock photo (Unsplash) in place of the SharePoint event image, which needs a sign-in to load.
      img: PHOTO('1716703742424-16bbc0d1fad3'),
      fit: 'cover',
      tone: 'dark',
    },
    {
      title: 'Oberoi Mall and Sky City Mall win top honours at the National Awards for Excellence in shopping malls',
      cta: 'View More',
      bg: SP + '/sites/intranetuat/Lists/HomePage%20%20Events/Attachments/9/Reserved_ImageAttachment_[15]_[BackgroundImage][32]_[55955b9580784fd7bc5a4941e65148b6][1]_[7].png',
      // Stock photo (Unsplash) in place of the SharePoint event image, which needs a sign-in to load.
      img: PHOTO('1614521084980-811d04f6c6cb'),
      fit: 'cover',
      tone: 'light',
    },
  ],

  menu: {
    tabs: ['Breakfast', 'Lunch', 'Snacks'],
    active: 'Lunch',
    // Lunch is production's menu (screenshot, 4 Nov 2026); Breakfast and Snacks are sample dishes added on request.
    items: {
      Breakfast: [
        { name: 'Poha', type: 'Veg', meal: 'Breakfast', qty: '150', unit: 'Gms' },
        { name: 'Idli Sambar', type: 'Veg', meal: 'Breakfast', qty: '2', unit: 'Pcs' },
        { name: 'Masala Tea', type: 'Veg', meal: 'Breakfast', qty: '120', unit: 'Ml' },
      ],
      Lunch: [
        { name: 'Chopped onion / Lime', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Khada pav bhaji', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Pav (2pc)', type: 'Veg', meal: 'Lunch', qty: '4', unit: 'PCS' },
        { name: 'Jeera masala chass', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Veg boondi raita', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Gulab jamun', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Paneer burjee', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Gujrati khichdi', type: 'Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
        { name: 'Chicken keema mutter', type: 'Non-Veg', meal: 'Lunch', qty: '100', unit: 'GMS' },
      ],
      Snacks: [
        { name: 'Samosa', type: 'Veg', meal: 'Snacks', qty: '2', unit: 'Pcs' },
        { name: 'Vada Pav', type: 'Veg', meal: 'Snacks', qty: '1', unit: 'Pc' },
        { name: 'Filter Coffee', type: 'Veg', meal: 'Snacks', qty: '120', unit: 'Ml' },
      ],
    },
  },

  erpPeriod: 'Q2 FY 2024-2025',
  // photo: Unsplash stock portraits standing in for the winners' photos (not their real photos).
  erp: [
    { name: 'Disha Sangani', role: 'General Manager - Customer Service', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1772544797306-42ffcda5c63b') },
    { name: 'Ganesh Gholap', role: 'Manager - Procurement (RMC)', text: 'Awarded for securing a strategic partnership with Ultratech, achieving significant cost savings and ensuring a reliable concrete supply, reflecting excellent negotiation skills and project foresight.', photo: FACE('1708144824610-f078a8cc926f') },
    { name: 'Mahesh Pawar', role: 'Assistant General Manager - Mall Engineering', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1531339413195-cc6c17163974') },
    { name: 'Nilesh Sharma', role: 'Deputy Senior Manager - MEP (Electrical)', text: 'Nilesh led as-built reviews, vendor reconciliations, and billing checks, enabling substantial recoveries through credit notes and variation claims, strengthening cost efficiency.', photo: FACE('1729157659231-a9090b02987a') },
    { name: 'Palak Mehta', role: 'Senior Executive - Corp. Communication', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1514836894203-facaaeba1140') },
    { name: 'Sanjana Moon', role: 'Deputy General Manager - Architecture', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1533128361669-69c065857a13') },
    { name: 'Sanjay Kumar', role: 'Deputy General Manager - Property Management Services', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1609231443127-7e1e4c672ece') },
    { name: 'Sanjay Parmar', role: 'Assistant Manager - Finance', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1622550106849-af70f6984764') },
    { name: 'Shridhar Ludbe', role: 'Manager - Horticulture', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.', photo: FACE('1547757555-8b9048aa4369') },
  ],

  jobs: [
    { title: 'Manager', code: '2969', dept: 'Marketing Events', loc: 'Sky City Mall' },
    { title: 'Deputy Manager', code: '2663', dept: 'Fire, Life & Safety', loc: 'Sky City Mall' },
    { title: 'Assistant General Manager', code: '3350', dept: 'MEP Design', loc: 'Plumbing & FF' },
    { title: 'Senior Manager', code: '3599', dept: 'Architechture', loc: 'Head Office' },
    { title: 'Manager', code: '3522', dept: 'Quality', loc: 'Bandra Oceanic' },
    { title: 'Executive', code: '3583', dept: 'Customer Experience', loc: 'Sky City Mall' },
  ],

  holidays: [
    { date: '2026-11-08', title: 'Diwali Amavasya (Laxmi Puja)' },
    { date: '2026-11-09', title: '(Gurugram only) Vishwakarma Day / Goverdhan Puja' },
    { date: '2026-11-24', title: '(Gurugram only) Guru Nanak Dev Jayanti' },
    { date: '2026-12-25', title: 'Christmas' },
    { date: '2026-12-31', title: 'Blocked Leave – Last Day of the Year' },
  ],

  // Complete holiday lists shown by the live site's "Holiday Calendar → View all" pop-up (read-only, 3 Nov 2026).
  holidayYears: {
    2026: {
      'Public Holidays': [
        '01 Jan|New Year', '26 Jan|Republic Day', '03 Mar|(Mumbai only) Holi Second Day', '04 Mar|(Gurugram only) Holi',
        '01 May|(Mumbai only) Maharashtra Din', '01 May|(Gurugram only) Blocked Leave', '15 Aug|Independence Day',
        '14 Sep|(Mumbai only) Ganesh Chaturthi', '15 Sep|(Mumbai only) Blocked Leave – Ganesh Visarjan (Second Day)',
        '02 Oct|Mahatma Gandhi Jayanti', '20 Oct|Dussehra', '08 Nov|Diwali Amavasya (Laxmi Puja)',
        '09 Nov|(Gurugram only) Vishwakarma Day / Goverdhan Puja', '24 Nov|(Gurugram only) Guru Nanak Dev Jayanti',
        '25 Dec|Christmas', '31 Dec|Blocked Leave – Last Day of the Year',
      ],
      'Optional Holidays - Gurugram Holidays': [
        '12 Feb|Guru Brahmanand Jayanti / Maharishi Dayanand Saraswati', '03 Apr|Good Friday', '25 May|Maharishi Kashyapa Jayanti',
        '18 Jun|Guru Arjan Dev Martyrdom Day', '26 Jun|Muharram', '26 Aug|Milad-un-Nabi / Id-E-Milad (Birth of Prophet Mohammad)',
        '29 Oct|Karva Chauth', '15 Nov|Chhath Puja', "14 Dec|Guru Teg Bahadur's Martyrdom Day", "26 Dec|Shaheed Udham Singh's Jayanti",
      ],
      'Optional Holidays - Mumbai Holidays': [
        '15 Feb|Mahashivratri', '19 Feb|Chhatrapati Shivaji Maharaj Jayanti', '19 Mar|Gudhi Padwa', '21 Mar|Ramzan - Id (Id-Ul-Fitra)',
        '26 Mar|Ram Navami', '31 Mar|Mahavir Janmakalyanak', '03 Apr|Good Friday', '14 Apr|Dr. Babasaheb Ambedkar Jayanti',
        '28 May|Bakri ID (Id-Uz-Zuha)', '26 Jun|Moharram', '26 Aug|Id-E-Milad', '10 Nov|Diwali (Bali Pratipada)',
        '11 Nov|Bhaubeej', '24 Nov|Guru Nanak Jayanti',
      ],
    },
  },

  // Training & Events page: sidebar sections and Photo Gallery albums (from the live-site screenshots; photos cut from them —
  // the viewer only has the photos visible there: 4 of Power Garba's 9, and each other album's cover). The 5th live album
  // ("Table T…", 13 photos) was cut off in the screenshot, so it is not included yet.
  training: {
    sections: [
      { id: 'learning-events', label: 'Learning Events' },
      { id: 'fun-at-work', label: 'Fun @ Work' },
      { id: 'photo-gallery', label: 'Photo Gallery' },
    ],
    galleryCategory: 'Events',
    albums: [
      { title: 'Power Garba 2026', year: 2026, count: 9, photos: ['images/gallery/garba-1.jpg', 'images/gallery/garba-2.jpg', 'images/gallery/garba-3.jpg', 'images/gallery/garba-4.jpg'] },
      { title: 'Ganesh Chaturthi 2026', year: 2026, count: 12, photos: ['images/gallery/ganesh.jpg'] },
      { title: "ORL's Got Talent 2026", year: 2026, count: 15, photos: ['images/gallery/talent.jpg'] },
      { title: 'Independence Day 2026', year: 2026, count: 7, photos: ['images/gallery/independence.jpg'] },
    ],
  },

  // Learning & Development sessions (live "View all" pop-up, 2026). Only Feb (from the 11th) and April were visible in the
  // screenshots; four titles were cut off there and are completed here (Hazzard Identification & Risk Assessment, Heat Stress &
  // Prevention, Hot Work Safety - Welding, Gas Cutting, Safe Procedure for Shuttering & Deshuttering, Work at Height & Importance
  // of Safety) — check against the live list.
  learningEvents: [
      { date: '2026-02-11', title: "Induction Program", place: "Head Office" },
      { date: '2026-02-11', title: "Work Permit Procedure", place: "Sky Heights 120" },
      { date: '2026-02-13', title: "Safe Operation in RSP", place: "Sky City" },
      { date: '2026-02-16', title: "Induction Program", place: "Head Office" },
      { date: '2026-02-18', title: "Induction Program", place: "Head Office" },
      { date: '2026-02-18', title: "Grinder Safety", place: "Sky Heights 120" },
      { date: '2026-02-19', title: "Facade Work Safety", place: "OGC III" },
      { date: '2026-02-23', title: "MEP Work Safety", place: "OGC III" },
      { date: '2026-02-23', title: "MEP Work Safety", place: "Forestville" },
      { date: '2026-02-23', title: "Induction Program", place: "Head Office" },
      { date: '2026-02-25', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-01', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-06', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-08', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-09', title: "Hazzard Identification & Risk Assessment", place: "Three Sixty West" },
      { date: '2026-04-09', title: "Heat Stress & Prevention", place: "Malabar Hill" },
      { date: '2026-04-09', title: "Hot Work Safety - Welding, Gas Cutting", place: "OGC - III" },
      { date: '2026-04-10', title: "Scaffolding Safety", place: "Sky Height's 120" },
      { date: '2026-04-13', title: "Fire Safety Measures", place: "OGC - III" },
      { date: '2026-04-13', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-15', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-20', title: "Safe Procedure for Shuttering & Deshuttering", place: "Forestville, Kolshet" },
      { date: '2026-04-20', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-22', title: "Work at Height & Importance of Safety", place: "Sky Height's 120" },
      { date: '2026-04-22', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-23', title: "Hot Work Safety", place: "Three Sixty West" },
      { date: '2026-04-23', title: "Gas Cylinder Safety", place: "OGC - III" },
      { date: '2026-04-27', title: "Induction Program", place: "Head Office" },
      { date: '2026-04-29', title: "Induction Program", place: "Head Office" },
      // SAMPLE sessions for today (11 Nov 2026) and the coming weeks (not from the live site; modelled on its recurring sessions)
      // so the Learning Events card's Today / Upcoming columns have content — replace with the real schedule.
      { date: '2026-11-11', time: '10:00 AM', title: "Induction Program", place: "Head Office", sample: true },
      { date: '2026-11-11', time: '3:00 PM', title: "Fire Safety Measures", place: "OGC - III", sample: true },
      { date: '2026-11-13', time: '11:00 AM', title: "Work at Height & Importance of Safety", place: "Sky Height's 120", sample: true },
      { date: '2026-11-16', time: '10:00 AM', title: "Induction Program", place: "Head Office", sample: true },
      { date: '2026-11-18', time: '2:30 PM', title: "Scaffolding Safety", place: "Three Sixty West", sample: true },
      { date: '2026-11-20', time: '11:00 AM', title: "Hot Work Safety", place: "Forestville", sample: true },
      { date: '2026-11-25', time: '10:00 AM', title: "Induction Program", place: "Head Office", sample: true },
      { date: '2026-12-02', time: '3:00 PM', title: "Gas Cylinder Safety", place: "OGC - III", sample: true },
  ],

  // Fun @ Work: earlier 2026 events from the live "View all" pop-up (the 24/25 June titles were faint and the 14 August title was
  // cut off — "Carrom Tournament" and "…ORL's Got Talent" are best readings; check against the live list), then the existing list.
  funEvents: [
    { date: '2026-01-08', title: "Chess" },
    { date: '2026-01-23', title: "Republic Day" },
    { date: '2026-02-20', title: "Mandala Painting" },
    { date: '2026-03-03', title: "Fun fiesta - Holi event (2026)" },
    { date: '2026-06-12', title: "Tambola Game / Board Games" },
    { date: '2026-06-19', title: "International Yoga Day" },
    { date: '2026-06-24', title: "Carrom Tournament" },
    { date: '2026-06-25', title: "Carrom Tournament" },
    { date: '2026-07-16', title: "Table Tennis" },
    { date: '2026-07-17', title: "Table Tennis" },
    { date: '2026-08-14', title: "Independence Day Celebration - ORL's Got Talent" },
    { date: '2026-09-11', title: "Ganpati Festival" },
    { date: '2026-10-16', title: "Navratri Celebration" },
    { date: '2026-11-05', title: 'Diwali Celebration' },
    { date: '2026-12-05', title: 'Cricket - Turf Option' },
    { date: '2026-12-24', title: 'Christmas Celebration' },
    { date: '2027-01-09', title: 'Badminton & Pickle Ball' },
    { date: '2027-01-16', title: 'Pickle Ball' },
    { date: '2027-01-25', title: 'Republic Day' },
    { date: '2027-02-12', title: 'Fun Friday' },
    { date: '2027-03-19', title: 'Fun Fiesta - Holi Event' },
  ],

  profile: {
    cover: ASSETS + 'CoverImage_6de2e8017cbc49587e07cacf32f72831.jpg',
    // Stand-in for the SharePoint cover (needs a sign-in): Unsplash stock photo of a luxury residence.
    coverPhoto: PHOTO('1613490493576-7fde63acd811'),
    phone: 'N/A',
    manager: 'N/A',
    about: 'Here is something about me...',
  },

  // ---------- HR & Admin page (live-site screenshots, 11 Nov 2026) ----------
  hr: {
    sections: [
      { id: 'know-your-team', label: 'Know Your Team' },
      { id: 'wish-your-colleagues', label: 'Wish Your Colleagues' },
      { id: 'applications', label: 'Applications' },
      { id: 'erp-winners', label: 'ERP Winners' },
      { id: 'jobPostings', label: 'Job Postings' }, // same anchor the Home "View More" link uses
      { id: 'make-a-request', label: 'Make A Request' },
      { id: 'send-suggestions', label: 'Send Suggestions' },
    ],
    // Wish Your Colleagues tabs — 6 people each: the section shows the first 4 (one full row), "View all" shows all 6.
    // Only Sanjay Solanki and Vijay Khadye are from the live site (Sanjay's title is cut off there: "Deputy Manager - Site ...");
    // every other entry is a SAMPLE (not from production) added to fill the tabs. Work Anniversaries reuse people from
    // the HRD & Employee Services list. years = completed years. photo: Unsplash stock portraits (not real staff photos).
    colleagues: {
      Birthdays: [
        { name: 'Sanjay Solanki', role: 'Deputy Manager - Site', dept: 'Construction', photo: FACE('1507003211169-0a1dd7228f2d') },
        { name: 'Vijay Khadye', role: 'Deputy Manager - Stores', dept: 'Construction', photo: FACE('1719154718540-8ef3d94e7712') },
        { name: 'Priya Deshmukh', role: 'Executive - Human Resources', dept: 'HRD', photo: FACE('1573497019707-1c04de26e58c') },
        { name: 'Rahul Mehta', role: 'Manager - Sales', dept: 'Sales', photo: FACE('1600878459138-e1123b37cb30') },
        { name: 'Sneha Kulkarni', role: 'Senior Executive - Accounts', dept: 'Finance', photo: FACE('1655249493799-9cee4fe983bb') },
        { name: 'Kavya Nair', role: 'Assistant Manager - Customer Service', dept: 'CRM', photo: FACE('1646979201225-00e36437d09e') },
      ],
      'New Joiners': [
        { name: 'Amit Joshi', role: 'Assistant Manager - Projects', dept: 'Projects', photo: FACE('1568585105565-e372998a195d') },
        { name: 'Neha Iyer', role: 'Executive - Marketing', dept: 'Marketing', photo: FACE('1577878317861-2a54eb46ed42') },
        { name: 'Rohan Desai', role: 'Executive - Leasing', dept: 'Mall', photo: FACE('1625241152315-4a698f74ceb7') },
        { name: 'Ananya Rao', role: 'Architect', dept: 'Architecture', photo: FACE('1680506742421-7420d343bf68') },
        { name: 'Kunal Shah', role: 'Engineer - MEP', dept: 'Construction', photo: FACE('1572651203008-39a6c9307453') },
        { name: 'Meera Pillai', role: 'Executive - Legal', dept: 'Legal', photo: FACE('1646979200272-b76a262249b8') },
      ],
      'Work Anniversaries': [
        { name: 'Sandeep Dhuri', role: 'Manager - HR Operations', dept: 'HRD', years: 10, photo: FACE('1774437790865-76bfb73d7166') },
        { name: 'Aarti Satghare', role: 'Assistant General Manager - HRD', dept: 'HRD', years: 8, photo: FACE('1689600944138-da3b150d9cb8') },
        { name: 'Naresh Kadam', role: 'Manager - Employee Services', dept: 'HRD', years: 5, photo: FACE('1670110531916-41045e83cb0a') },
        { name: 'Sejal Sheth', role: 'Senior Manager - HRD', dept: 'HRD', years: 3, photo: FACE('1594540637720-9b14714212f4') },
        { name: 'Rucha Saple', role: 'Deputy Manager - HRD', dept: 'HRD', years: 2, photo: FACE('1772726837346-b1d22515c0f0') },
        { name: 'Shubham Gawas', role: 'Assistant Senior Executive - Employee Services', dept: 'HRD', years: 1, photo: FACE('1782323709687-43675cbddd46') },
      ],
    },
    // Application tiles: logos cut from the live-site screenshot (transparent PNGs).
    apps: [
      { name: 'Vendor Globe', logo: 'images/apps/vendor-globe.png' },
      { name: 'Green Dash', logo: 'images/apps/green-dash.png' },
      { name: 'Microsoft 365', logo: 'images/apps/microsoft-365.png' },
      { name: 'NimbleS2P', logo: 'images/apps/nimbles2p.png' },
      { name: 'Laserfiche', logo: 'images/apps/laserfiche.png' },
      { name: 'Zoho Expense', logo: 'images/apps/zoho-expense.png' },
      { name: 'Onex Recon', logo: 'images/apps/onex-recon.png' },
      { name: 'SuccessFactors', logo: 'images/apps/successfactors.png' },
    ],
    // Request types from the live "Select a request" drop-down ("Cafetaria" on the live site, spelled correctly here).
    requestTypes: [
      { id: 'fun-at-work', label: 'Fun @ Work', icon: 'celebration' },
      { id: 'cafeteria', label: 'Cafeteria', icon: 'restaurant' },
      { id: 'trainings', label: 'Trainings', icon: 'school' },
      { id: 'admin', label: 'Admin', icon: 'business' },
      { id: 'others', label: 'Others', icon: 'more' },
    ],    // ERP Winners by quarter; only Q2 FY 2026-2027 is visible in the screenshots (other quarters show an empty state).
    erp: {
      'Q2 FY 2026-2027': [
        { name: 'Roma Mistry', role: 'Senior Manager - Sales', text: 'Roma played a pivotal role in the TSN launch by driving the implementation of new sales process and training teams across Mumbai and Gurugram. Her support and ownership contributed to the effectiveness of the sales teams.' },
        { name: 'Santanu Sinha', role: 'Manager - Civil', text: 'Santanu demonstrated exceptional ownership by driving key construction activities, proactively resolving execution challenges, and ensuring project progress remained on track. His technical expertise and cross-team collaboration contributed significantly to project delivery.' },
        { name: 'Urvashi Goradia', role: 'Manager - Sales', text: "Urvashi delivered an outstanding sales performance, exceeding her targets while achieving the team's highest conversion rate. Her support in SFDC implementation and team training reflect her consistent performance and ownership." },
      ],
      'Q1 FY 2026-2027': [],
      'Q4 FY 2025-2026': [],
      'Q3 FY 2025-2026': [],
    },
  },

  // photo: Unsplash stock photo shown in place of the main icon on each Our Values card (quality = luxury living room with marble and wood finishes,
  // teamwork = stacked hands, integrity = handshake; People First keeps its icon, innovation = glowing bulb).
  // Our Values: tiles cut from the live-site screenshot (the SharePoint images need a sign-in); icon = the white icon lifted
  // out of each tile (used as a mask on the glass cards), tone = the tile colour, darkened for use on light glass;
  // glow = the two-colour gradient behind each glass card (the greys of People First / Integrity are warmed up).
  // tagline: Quality and Teamwork use the live Everyday Hero taglines; Innovation uses the live "Pioneering the Extraordinary";
  // People First and Integrity are SAMPLE lines to replace with the official wording.
  // statement: the hover bubble text. Innovation is the live text; the other four are SAMPLE lines (not seen on the live site yet).
  values: [
    { img: 'images/values/quality.png', alt: 'Quality', photo: PHOTO('1757924461488-ef9ad0670978'), tagline: 'Set higher standards', statement: 'We set higher standards in everything we build', icon: 'images/values/icon-quality.png', tone: '#878a55', glow: ['#a9a86e', '#d8d39c'] },
    { img: 'images/values/teamwork.png', alt: 'Teamwork', photo: PHOTO('1630068846062-3ffe78aa5049'), tagline: 'Making the dream work', statement: 'Together, we make the dream work', icon: 'images/values/icon-teamwork.png', tone: '#9a6b2f', glow: ['#b07a36', '#e2b273'] },
    { img: 'images/values/people-first.png', alt: 'People First', tagline: 'Our people come first', statement: 'We put our people at the heart of every decision', icon: 'images/values/icon-people-first.png', tone: '#8a7f6e', glow: ['#b6a690', '#dcbc92'] },
    { img: 'images/values/integrity.png', alt: 'Integrity', photo: PHOTO('1521791136064-7986c2920216'), tagline: 'Do the right thing, always', statement: 'We do what is right, even when no one is watching', icon: 'images/values/icon-integrity.png', tone: '#1f1f1f', glow: ['#6b5a49', '#c19a6b'] },
    { img: 'images/values/innovation.png', alt: 'Innovation', photo: PHOTO('1552862750-746b8f6f7f25'), tagline: 'Pioneering the extraordinary', statement: 'We transform imagination into reality', icon: 'images/values/icon-innovation.png', tone: '#ef5a24', glow: ['#f06a32', '#ffb27d'] },
  ],

  // I-Connect: text and photos from the live-site screenshots (photos cut from the screenshots). The live list shows
  // "View 3 more stories"; those three were not in the screenshots, so they are not here yet.
  iconnect: {
    sections: [
      { id: 'our-values', label: 'Our Values' },
      { id: 'people-stories', label: 'People Stories' },
      { id: 'newsletter', label: 'Newsletter' },
    ],
    stories: [
      { title: 'A Three-Day Escape to Hyderabad Trains, Biryani & Timeless Streets', tag: 'Travel', img: 'images/stories/hyderabad.jpg',
        // Read-more page (from the live pop-up screenshot): date, photo gallery (cut from the screenshot, so the 2nd and 3rd are
        // thumbnail-sized) and the full text. The other stories only have their card excerpt so far.
        date: 'January 28, 2026',
        gallery: ['images/stories/hyderabad-1.jpg', 'images/stories/hyderabad-2.jpg', 'images/stories/hyderabad-3.jpg'],
        body: [
          'Sometimes, all you need is a short break to reset your mind. For me, that break came in the form of a spontaneous three-day solo trip to Hyderabad.',
          'I took three days off from work and boarded an early-morning train from Mumbai. The journey covered more than 800 kilometres, and traveling alone made it even more special. With no rush and no fixed conversations, I had time to simply watch the world pass by and enjoy my own company as the train rolled forward.',
          'By the time I arrived, Hyderabad welcomed me with its unique blend of history and modern life. After checking into my hotel and freshening up, I booked a cab and stepped out to explore the city.',
          'My first stop was the iconic Charminar. Standing beneath its towering arches, surrounded by busy streets and local shops, I felt deeply present in the moment. From there, I headed to Niloufer Café for their famous chai. Sitting there alone with a cup of hot chai, watching the city move around me, felt strangely comforting. Later, dinner at Pista House introduced me to Hyderabad’s legendary biryani—aromatic, rich, and unforgettable.',
          'The next morning, I rented a bike and explored the city at my own pace. Riding solo through Hyderabad gave me a rare sense of freedom. I visited the State Museum, paused by the calm waters of Hussain Sagar Lake, climbed through the historic Golconda Fort, and wandered through the royal corridors of Chowmahalla Palace.',
          'Before I knew it, the trip was coming to an end. I boarded the morning train back to Mumbai, carrying more than just photos. The journey reminded me why solo trips are the best... they teach you to enjoy your own company, move at your own rhythm, and return home feeling lighter.',
          'The trip was short, but it was exactly what I needed—a much-needed break from work, and a quiet reminder that sometimes, traveling alone is the most fulfilling journey of all.',
        ],
        text: 'Sometimes, all you need is a short break to reset your mind. For me, that break came in the form of a spontaneous three-day solo trip to Hyderabad. I took three days off from work and boarded an early-morning train from Mumbai. The journey covered more than 800 kilometres, and traveling alone made it even more special. With no rush and no fixed conversations, I had time to simply watch the world pass by and enjoy my own company as the' },
      { title: 'Finding Peace in the Chaos A 4,000 km Journey of Faith, Friendship, and Determination', tag: 'Travel', img: 'images/stories/ujjain.jpg',
        text: 'What started as a casual idea soon turned into a once-in-a-lifetime journey. Covering nearly 4,000 km by road, our route stretched from Mumbai to Ujjain and Indore, onward to' },
      { title: 'A Spiritual and Sensory Journey in Amritsar', tag: 'Travel', img: 'images/stories/amritsar.jpg',
        text: "The city offers a feast for the senses, from the Golden Temple's divine serenity to the patriotism at the Wagah Border. Get ready for a journey through history, devotion," },
      { title: 'My First Solo Trip to Delhi - A Journey of Discovery', tag: 'Travel', img: 'images/stories/delhi.jpg', portrait: true,
        text: "My first solo trip to Delhi was a rollercoaster of excitement, nerves, and discovery. From the moment I landed, the city's vibrant energy embraced me. A magnetic mix of history," },
      { title: 'Seoul has my Soul - My 11 Day South Korea Adventure', tag: 'Travel', img: 'images/stories/south-korea.jpg',
        text: 'In April 2025, I visited South Korea with a group of 14 and spent 11 unforgettable days exploring the culture, cuisine, and vibrant cities of Seoul, Busan, and Jeju Island. We' },
      { title: 'A Short Journey, A Long-Lasting Peace', tag: 'Travel', img: 'images/stories/short-journey.jpg',
        text: "I've always believed that travel doesn't have to be long to be meaningful. Being a working professional with limited time off, I usually opt for short, purposeful trips that help me" },
      { title: "An Unexpected Adventure through Bhutan's Mountains and Wonders", tag: 'Travel', img: 'images/stories/bhutan.jpg',
        text: 'Some of the best adventures begin with the unexpected. My wife and I had planned to visit our friends in the North East Frontier Area (NEFA) in May, but after two days, sudden' },
    ],
    newsletters: [
      { title: 'Leading with Reciprocity - Our Women Leaders reflect on Give to Gain', img: 'images/newsletter/give-to-gain.jpg',
        text: "For International Women's Day 2026, the theme Give to Gain brings attention to the role that shared experiences play in shaping meaningful growth. These exchanges often leave a lasting impact, creating opportunities for individuals to move forward with greater clarity and confidence. Within our organisation, many women have built their paths through both personal determination and the support of others who believed" },
      { title: 'Highlights from Oberoi Mall - Green Initiatives, Exciting Experiences and Ensuring a Secure', img: 'images/newsletter/mall-green.jpg',
        text: 'Oberoi Mall constantly strives to integrate sustainability, creativity, and safety into the heart of its operations. From promoting green initiatives to offering exciting experiences' },
      { title: "Flying Lessons - Charting New Paths in Women's Leadership", img: 'images/newsletter/flying-lessons.jpg',
        text: "“Leaders are not born, they are made.” While this famous quote may not have a clear origin, but it's definitely what the world's most charismatic leaders believe. At Oberoi Realty," },
      { title: 'A Walk through the Design Studio reveals what truly sets Oberoi Realty apart', img: 'images/newsletter/design-studio.jpg',
        text: 'Oberoi Realty stands out in the luxury real estate market by Pioneering the Extraordinary. With a thought-led design philosophy, we are driven to create unique spaces and' },
      { title: 'Embracing People First', img: 'images/newsletter/people-first.jpg',
        text: 'Discover how the People First initiative and workshops have transformed the perspectives and practices of our leaders and employees across the organization. Here, they share' },
      { title: 'Highlights from Oberoi Mall', img: 'images/newsletter/mall-highlights.jpg',
        text: 'Oberoi Mall continues to be a hub of vibrant activities and new beginnings. From the grand launch of Good Flippin Burgers, graced by TV and social media stars, to the elegant' },
    ],
  },

  hrApps: [
    { img: SP + '/sites/intranetuat/Lists/HR%20Admin%20%20Important%20Links/Attachments/1/Reserved_ImageAttachment_[5]_[Image][32]_[85f3b287d73641f0b6f801d33cc73cf1][1]_[1].png' },
  ],

  // HRD & Employee Services: [name, role, photo]. Photos are Unsplash stock portraits standing in for staff photos
  // (not the employees' real photos); Arjun Mehta (the signed-in user) keeps the default avatar like the profile card.
  team: [
    ['Aarti Satghare', 'Assistant General Manager - HRD', FACE('1689600944138-da3b150d9cb8')],
    ['Aditi Bhosle', 'Assistant Senior Executive - Front Office & Employee Services', FACE('1739785248579-cd43cdaac06b')],
    ['Alisha Fernandes', 'Assistant General Manager - HRD', FACE('1758518729459-235dcaadc611')],
    ['Amita Nijhawan', 'Senior General Manager - HRD', FACE('1547212371-eb5e6a4b590c')],
    ['Amruta Khemkar', 'Deputy Senior Executive - Front Office', FACE('1768221677463-191fc4e15690')],
    ['Amruta Meher', 'Manager - HRD', FACE('1726156619056-5de67024df67')],
    ['Jaspreet Chatha', 'Deputy Manager - Learning & Organizational Development', FACE('1609436132311-e4b0c9370469')],
    ['Lizann Dias', 'Assistant Senior Executive - Front Office', FACE('1631606929991-200006582c09')],
    ['Namrata Desai', 'Senior General Manager - HRD', FACE('1679138118375-47f78db3761d')],
    ['Naresh Kadam', 'Manager - Employee Services', FACE('1670110531916-41045e83cb0a')],
    ['Neha Bhatnagar', 'Executive- Front Office and Administration', FACE('1725033489648-a819750348eb')],
    ['Rakesh Chandel', 'General Manager', FACE('1729157661483-ed21901ed892')],
    ['Rucha Saple', 'Deputy Manager - HRD', FACE('1772726837346-b1d22515c0f0')],
    ['Samruddhi Wakharkar', 'Deputy Manager - Learning & Organizational Development', FACE('1706943262459-3ef6ce03305c')],
    ['Sandeep Dhuri', 'Manager - HR Operations', FACE('1774437790865-76bfb73d7166')],
    ['Sandeep Panchal', 'Deputy General Manager - Employee Services', FACE('1564490215983-296e5f56b623')],
    ['Sejal Sheth', 'Senior Manager - HRD', FACE('1594540637720-9b14714212f4')],
    ['Arjun Mehta', 'Assistant Senior Manager - Learning & Development'],
    ['Shraddha Wadekar', 'Deputy Manager - HRD', FACE('1646979201169-e83d743bfa8d')],
    ['Shubham Gawas', 'Assistant Senior Executive - Employee Services', FACE('1782323709687-43675cbddd46')],
    ['Sonal Deshpande', 'Assistant Senior Manager - HRD', FACE('1642757205086-567b72efaa80')],
    ['Soumyadeep Sinha', 'Apprentice', FACE('1712425718855-5169714b3632')],
    ['Sylvia Pinto', 'Deputy Senior Executive', FACE('1544264796-acfb69e05b37')],
    ['Unmesh Mayekar', 'Head - HRD & Employee Services', FACE('1778692258270-bc0e80e975c0')],
    ['Varun Vanker', 'Deputy Manager - HR Operations', FACE('1609770653328-a4d1dd377970')],
  ],
};
