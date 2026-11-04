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

  tiles: [
    { label: 'Take a Quiz', img: ASSETS + 'Home_Birthday_0fe27146e5bc2e4b3924bb6aa2c6e5d4.png' },
    { label: 'Celebrations', img: ASSETS + 'Home_Food_7b9ab4fb3524d2e55cbc3afcf7db4722.png' },
    { label: "Today's Menu", img: ASSETS + 'Events_0079a11f89eb3853e30f49c4c9822562.jpg' },
    { label: 'Videos', img: ASSETS + 'Home_Videos_74720b78db43fc8b0359ec1cdcd2bb37.jpg', play: ASSETS + 'playButton_91892c09ef5839bb06de2690891c191e.png' },
    { label: 'Applications', img: ASSETS + 'Important_Links_b8ae1938721f7b3f891c64d0b6072304.png' },
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

  menu: {
    tabs: ['Breakfast', 'Lunch', 'Snacks'],
    active: 'Lunch',
    items: { Lunch: [{ name: 'Jaljeera', type: 'Veg', meal: 'Lunch', qty: '60', unit: 'Gms' }] },
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
