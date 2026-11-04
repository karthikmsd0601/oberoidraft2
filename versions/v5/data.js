// Content captured read-only from https://orlmail.sharepoint.com/sites/intranetuat (UAT) on 3 Nov 2026.
// Text is reproduced exactly as it appears on the live site (including original spellings).
const SP = 'https://orlmail.sharepoint.com';
const ASSETS = SP + '/sites/appcatalog/ClientSideAssets/4c70e2c6-d394-4dfb-85d3-716b51066d91/';

window.APP_DATA = {
  user: { name: 'Sharepoint Dev', email: 'sharepointdev@oberoirealty.com', title: 'Assistant Senior Manager - Learning & Development' },
  logo: ASSETS + 'OberoiLogo_982d7a6888062cc402685078e84a5bdd.png',

  nav: [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'corporate', label: 'Corporate', icon: 'business' },
    { id: 'hr-admin', label: 'HR & Admin', icon: 'personSearch' },
    { id: 'i-connect', label: 'I-Connect', icon: 'group' },
    { id: 'training-events', label: 'Training & Events', icon: 'event' },
  ],

  quickBar: [
    { label: 'Take The Quiz', icon: 'quiz' },
    { label: 'Celebrations', icon: 'cake' },
    { label: 'Food Menu', icon: 'restaurant' },
    { label: 'Videos', icon: 'link' },
    { label: 'Applications', icon: 'apps' },
  ],

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
    img: SP + '/sites/intranetuat/Lists/HomePage%20%20Events/Attachments/10/Reserved_ImageAttachment_[15]_[BackgroundImage][32]_[7f0414500f35485a9de7f207663aa9a1][2]_[79].jpg',
    alt: "Festive Greetings From The Chairman's Desk",
    cta: 'View More',
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
    // Jaljeera is from the live site; every other dish is sample content added on request (replace with the real menu later).
    items: {
      Breakfast: [
        { name: 'Poha', type: 'Veg', meal: 'Breakfast', qty: '150', unit: 'Gms' },
        { name: 'Idli Sambar', type: 'Veg', meal: 'Breakfast', qty: '2', unit: 'Pcs' },
        { name: 'Masala Tea', type: 'Veg', meal: 'Breakfast', qty: '120', unit: 'Ml' },
      ],
      Lunch: [
        { name: 'Jaljeera', type: 'Veg', meal: 'Lunch', qty: '60', unit: 'Gms' },
        { name: 'Dal Tadka', type: 'Veg', meal: 'Lunch', qty: '150', unit: 'Gms' },
        { name: 'Jeera Rice', type: 'Veg', meal: 'Lunch', qty: '200', unit: 'Gms' },
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
    ['Sharepoint Dev', 'Assistant Senior Manager - Learning & Development'],
    ['Shraddha Wadekar', 'Deputy Manager - HRD'],
    ['Shubham Gawas', 'Assistant Senior Executive - Employee Services'],
    ['Sonal Deshpande', 'Assistant Senior Manager - HRD'],
    ['Soumyadeep Sinha', 'Apprentice'],
    ['Sylvia Pinto', 'Deputy Senior Executive'],
    ['Unmesh Mayekar', 'Head - HRD & Employee Services'],
    ['Varun Vanker', 'Deputy Manager - HR Operations'],
  ],
};
