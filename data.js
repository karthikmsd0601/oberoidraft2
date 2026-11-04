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
    tiles: [
      { label: 'Celebrations', icon: 'cake', img: PHOTO('1464349153735-7db50ed83c84'), target: 'celebrations' },
      { label: "Today's Menu", icon: 'restaurant', img: PHOTO('1742281257687-092746ad6021'), target: 'todays-menu' },
      { label: 'Videos', icon: 'video', img: PHOTO('1594394489098-74ac04c0fc2e'), play: ASSETS + 'playButton_91892c09ef5839bb06de2690891c191e.png', target: 'video-gallery' },
      { label: 'Applications', icon: 'apps', img: PHOTO('1499750310107-5fef28a66643'), target: '' },
      { label: 'Everyday Hero', icon: 'verified', img: PHOTO('1578269174936-2709b6aeb913'), target: 'everyday-hero' },
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
      img: SP + '/sites/intranetuat/Lists/HomePage%20%20Events/Attachments/5/Reserved_ImageAttachment_[10]_[EventImage][32]_[412845e7dc65466a9da57d453aac7a8e][2]_[22].png',
      tone: 'dark',
    },
    {
      title: 'Oberoi Mall and Sky City Mall win top honours at the National Awards for Excellence in shopping malls',
      cta: 'View More',
      bg: SP + '/sites/intranetuat/Lists/HomePage%20%20Events/Attachments/9/Reserved_ImageAttachment_[15]_[BackgroundImage][32]_[55955b9580784fd7bc5a4941e65148b6][1]_[7].png',
      img: SP + '/sites/intranetuat/Lists/HomePage%20%20Events/Attachments/9/Reserved_ImageAttachment_[10]_[EventImage][32]_[2c26992ecf5640c4bc0b9a648502f2b1][1]_[5].png',
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
  erp: [
    { name: 'Disha Sangani', role: 'General Manager - Customer Service', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
    { name: 'Ganesh Gholap', role: 'Manager - Procurement (RMC)', text: 'Awarded for securing a strategic partnership with Ultratech, achieving significant cost savings and ensuring a reliable concrete supply, reflecting excellent negotiation skills and project foresight.' },
    { name: 'Mahesh Pawar', role: 'Assistant General Manager - Mall Engineering', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
    { name: 'Nilesh Sharma', role: 'Deputy Senior Manager - MEP (Electrical)', text: 'Nilesh led as-built reviews, vendor reconciliations, and billing checks, enabling substantial recoveries through credit notes and variation claims, strengthening cost efficiency.' },
    { name: 'Palak Mehta', role: 'Senior Executive - Corp. Communication', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
    { name: 'Sanjana Moon', role: 'Deputy General Manager - Architecture', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
    { name: 'Sanjay Kumar', role: 'Deputy General Manager - Property Management Services', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
    { name: 'Sanjay Parmar', role: 'Assistant Manager - Finance', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
    { name: 'Shridhar Ludbe', role: 'Manager - Horticulture', text: 'Recognized for his exceptional dedication, dynamic leadership, and meticulous execution of landscape projects, consistently achieving quality results ahead of schedule, even under challenging circumstances.' },
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

  funEvents: [
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
    phone: 'N/A',
    manager: 'N/A',
    about: 'Here is something about me...',
  },

  values: [
    { img: SP + '/sites/intranetuat/Lists/I%20Connect%20%20Our%20Values/Attachments/1/Reserved_ImageAttachment_[6]_[Banner][32]_[e616e9d1d49d48dda48f83b4bde0a90a][1]_[1].jpg', alt: 'QUALITY' },
  ],

  hrApps: [
    { img: SP + '/sites/intranetuat/Lists/HR%20Admin%20%20Important%20Links/Attachments/1/Reserved_ImageAttachment_[5]_[Image][32]_[85f3b287d73641f0b6f801d33cc73cf1][1]_[1].png' },
  ],

  team: [
    ['Aarti Satghare', 'Assistant General Manager - HRD'],
    ['Aditi Bhosle', 'Assistant Senior Executive - Front Office & Employee Services'],
    ['Alisha Fernandes', 'Assistant General Manager - HRD'],
    ['Amita Nijhawan', 'Senior General Manager - HRD'],
    ['Amruta Khemkar', 'Deputy Senior Executive - Front Office'],
    ['Amruta Meher', 'Manager - HRD'],
    ['Jaspreet Chatha', 'Deputy Manager - Learning & Organizational Development'],
    ['Lizann Dias', 'Assistant Senior Executive - Front Office'],
    ['Namrata Desai', 'Senior General Manager - HRD'],
    ['Naresh Kadam', 'Manager - Employee Services'],
    ['Neha Bhatnagar', 'Executive- Front Office and Administration'],
    ['Rakesh Chandel', 'General Manager'],
    ['Rucha Saple', 'Deputy Manager - HRD'],
    ['Samruddhi Wakharkar', 'Deputy Manager - Learning & Organizational Development'],
    ['Sandeep Dhuri', 'Manager - HR Operations'],
    ['Sandeep Panchal', 'Deputy General Manager - Employee Services'],
    ['Sejal Sheth', 'Senior Manager - HRD'],
    ['Arjun Mehta', 'Assistant Senior Manager - Learning & Development'],
    ['Shraddha Wadekar', 'Deputy Manager - HRD'],
    ['Shubham Gawas', 'Assistant Senior Executive - Employee Services'],
    ['Sonal Deshpande', 'Assistant Senior Manager - HRD'],
    ['Soumyadeep Sinha', 'Apprentice'],
    ['Sylvia Pinto', 'Deputy Senior Executive'],
    ['Unmesh Mayekar', 'Head - HRD & Employee Services'],
    ['Varun Vanker', 'Deputy Manager - HR Operations'],
  ],
};
