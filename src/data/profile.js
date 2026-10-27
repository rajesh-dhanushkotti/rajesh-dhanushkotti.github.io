// ============================================================
//  ALL PORTFOLIO CONTENT LIVES IN THIS FILE.
//  To update the site, edit the text below and save.
//  You never need to touch the components to add a paper,
//  a news item, a conference or a gallery photo.
// ============================================================

export const profile = {
  name: "Dr. Rajesh Dhanushkotti",
  shortTitle: "Postdoctoral Fellow, Concordia University",
  position: "Postdoctoral Fellow",
  affiliation:
    "Department of Chemical and Materials Engineering, Concordia University, Montréal, Canada",
  photo: "photo.jpg", // file in the /public folder
  emails: {
    university: "rajesh.dhanushkotti@concordia.ca",
    personal: "rajeshdchem@gmail.com",
  },
  address: [
    "Department of Chemical and Materials Engineering",
    "Concordia University",
    "Montréal, Québec, Canada",
  ],
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=zkk9KcMAAAAJ&hl=en" },
    { label: "ORCID", url: "https://orcid.org/0000-0003-0087-8924" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Rajesh-Dhanushkotti" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rajesh-dhanushkotti-b84663132/" },
  ],
  about: [
    "I am an electrochemist and materials chemist with more than a decade of research experience spanning energy conversion, energy storage and resource recovery. I am currently a Postdoctoral Fellow in Prof. Karim Zaghib’s group at Concordia University, Montréal, Canada, where I design covalent organic framework (COF)-based solid-state electrolytes for next-generation lithium-metal batteries.",
    "Before joining Concordia, I developed COF electrodes for selective electrochemical lithium recovery from brine at Khalifa University, Abu Dhabi, UAE. Earlier, I worked on MOF-based electrocatalysts for fuel cells at CSIR–CECRI, Chennai, and on layered double hydroxide composites for high-performance supercapacitors. My research began during my Ph.D. in Chemistry at Anna University, where I developed palladium-based nanostructured electrocatalysts for alcohol oxidation in fuel cells.",
  ],
};

// Update these when your Google Scholar numbers change.
export const metrics = { citations: 229, hIndex: 7, i10Index: 7 };

export const stats = [
  { value: "12", label: "Peer-reviewed publications" },
  { value: String(metrics.citations), label: "Citations (Google Scholar)" },
  { value: String(metrics.i10Index), label: "i10-index" },
  { value: String(metrics.hIndex), label: "h-index" },
  { value: "1", label: "Book Chapter" },
  { value: "1", label: "Patents" },
  { value: "3", label: "Countries worked: India, UAE, Canada" },
];

// Newest first. Text may include simple HTML like <b> and <i>.
export const news = [
  { date: "Oct 2026", text: "Paper on chalcogen-bond-driven electrochemical bromide sequestration in COFs published in <i>Angewandte Chemie International Edition</i>." },
  { date: "Sep 2026", text: "Review on Rechargeable Lithium-Hydrogen Batteries published in <i>Journal of Power Sources </i>." },
  { date: "Aug 2026", text: "Review on COF Electrolytes published in <i>Small</i>." },
  { date: "Jun 2026", text: "International Meeting on Lithium Batteries,(IMLB 2026) at Montreal, Canada." },
  { date: "May 2026", text: "Electrify Society Summit 2026 – Powered by Volt-Age, Concordia University, Montréal, Canada,Best Poster Award (Top 3)." },
  { date: "2026", text: "Joined Concordia University as a Postdoctoral Fellow with Prof. Karim Zaghib." },
  { date: "2025", text: "Paper selected as the cover feature of Advanced Science, Vol. 12, Issue 27." },
];

export const education = [
  {
    when: "2015 to 2019",
    title: "Ph.D., Chemistry",
    org: "Anna University, Chennai, Tamil Nadu",
    thesis:
      "Synthesis, characterization, and fabrication of palladium/metal oxide-based nanocomposites for electrochemical oxidation reactions.",
    current: true,
  },
  { when: "2012 – 2014", title: "M.Sc., Applied Chemistry", org: "Anna University, Chennai, Tamil Nadu", thesis: "Hydrodeoxygenation of guaiacol over Ni-MoP/(KIT-6+Al₂O₃) catalyst for biofuel application." },
  { when: "2008 – 2011", title: "B.Sc., Chemistry", org: "Thiruvalluvar University, Vellore, Tamil Nadu" },
];

export const experience = [
  {
    when: "2026 – present",
    title: "Postdoctoral Fellow",
    org: "Concordia University, Montréal, Canada",
    project:
      "Design and development of covalent organic framework-based solid-state electrolytes for next-generation lithium batteries.",
    supervisor: "Prof. Karim Zaghib, Department of Chemical and Materials Engineering",
    current: true,
  },
  {
    when: "2023 – 2025",
    title: "Postdoctoral Fellow",
    org: "Khalifa University, Abu Dhabi, UAE",
    project: "Covalent organic frameworks (COFs) for efficient and selective electrochemical lithium recovery from brine.",
    supervisor: "Dr. Dinesh Shetty, Department of Chemistry",
  },
  {
    when: "2022 – 2023",
    title: "Senior Project Associate",
    org: "CSIR-Central Electrochemical Research Institute (CECRI), Chennai, India",
    project: "Demonstration and validation of an indigenously developed electrocatalyst for fuel cells.",
    supervisor: "Dr. Vishal Mahesh Dhavale",
  },
  ];
// Skills, shown on the Experience page as labelled rows.
// To add a skill, type it inside the quotes of the right group.
// To add a new group, copy one { label: ..., items: [...] } line.
export const skills = [
  { label: "Synthesis", items: ["COF & MOF synthesis", "Hydrothermal & solvothermal synthesis", "Nanomaterial synthesis"] },
  { label: "Cell fabrication", items: ["Solid-state electrolytes", "Electrode slurry coating", "Coin & pouch cells", "Supercapacitor electrodes & devices", "Capacitive deionization (CDI) cells"] },
  { label: "Electrochemistry", items: ["Cyclic voltammetry (CV)", "Galvanostatic charge–discharge (GCD)", "Impedance spectroscopy (EIS)", "RDE / RRDE", "Ionic conductivity", "Li⁺ transference number"] },
  { label: "Characterisation", items: ["XRD", "SEM/EDX", "FTIR", "Raman", "UV-Vis", "BET surface area", "TGA"] },
  { label: "Software", items: ["EC-Lab", "NEWARE BTS"] },
];

// group: "research" (red), "recog" (amber), "about" (teal)
export const researchThemes = [
  { group: "research", period: "", title: "Solid-state lithium batteries", text: "COF-based and composite solid electrolytes that give lithium ions ordered pathways in lithium-metal cells." },
  { group: "recog", period: "", title: "Electrochemical lithium recovery", text: "Nitrogen-rich COF electrodes for selective lithium capture from brine via capacitive deionization." },
  { group: "about", period: "", title: "Electrocatalysis & supercapacitors", text: "Pd/metal-oxide catalysts for alcohol oxidation, MOF catalysts for fuel cells, and LDH supercapacitor electrodes." },
];

export const researchTopics = [
  "Solid-state lithium batteries", "Covalent organic frameworks (COFs)", "Solid polymer & composite electrolytes",
  "Cathode & anode materials design", "Electrochemical lithium recovery", "Electrocatalysis (ORR)",
  "Capacitive deionization", "Supercapacitors",
];

// Your name variants, used to bold you in author lists.
export const myNames = ["Rajesh Dhanushkotti", "Dhanushkotti R.", "Rajesh D.", "Rajesh D", "D. Rajesh"];

// To add a paper: copy one block, paste it at the top, edit.
// first: true  -> appears under "First author" filter
// wip: true    -> appears under "Under revision & in preparation"
// equal: ["Name A", "Name B"] -> marks those authors with † and adds
//               "† These authors contributed equally." (names must match the author list exactly)
// abstract: "abstracts/file.png" -> shows a graphical abstract beside the paper
//               (put the image file in the /public/abstracts/ folder)
//               For more than one image: abstract: ["abstracts/a.png", "abstracts/b.png"]
// tags: [label, style]  style can be "hot", "wip" or left out
export const publications = [
  { year: 2026, first: false, title: "Chalcogen-bond-driven electrochemical bromide sequestration in benzothiazole-functionalized covalent organic frameworks", authors: "Najat Maher Aldaqqa, Rajesh Dhanushkotti, Sara Vaca-Chacon, Sushil Kumar, Thibault Terencio, Kyriaki Polychronopoulou, Gisha Elizabeth Luckachan, Dinesh Shetty", venue: "<i>Angewandte Chemie International Edition</i>, e9495644", doi: "10.1002/anie.9495644", equal: ["Najat Maher Aldaqqa", "Rajesh Dhanushkotti"], abstract: "abstracts/anie-2026-bromide.png", tags: [["Q1"]] },
  { year: 2026, first: true, title: "Rechargeable lithium-hydrogen batteries: fundamentals, design principles, and industrial translation", authors: "Rajesh Dhanushkotti, Ningaraju Gejjiganahalli Ningappa, Karthik Vishweswariah, M. R. Anil Kumar, Jitendrasingh Rajpurohit, Thiago M. G. Selva, Jeremy I. G. Dawkins, Karim Zaghib", venue: "<i>Journal of Power Sources</i>, 696, 241493", doi: "10.1016/j.jpowsour.2026.241493", abstract: "abstracts/jps-2026-li-h-battery.jpg", tags: [["Review"], ["Q1"]] },
  { year: 2026, first: true, title: "Covalent organic framework electrolytes for solid-state lithium batteries: designing ion highways for next-generation energy storage", authors: "Rajesh Dhanushkotti, Ningaraju G. N., Karthik C. S., Karthik V., Anil Kumar M. R., Jitendrasingh Rajpurohit, Jeremy I. G. Dawkins, Karim Zaghib", venue: "<i>Small</i>, e75286", doi: "10.1002/smll.75286", abstract: "abstracts/small-2026-cof-electrolytes.jpg", tags: [["Q1"]] },
  { year: 2026, first: true, title: "Palladium nanoparticles decorated on carbon nanofibers as an efficient electrocatalyst for alcohol oxidation in alkaline media", authors: "D. Rajesh, C. Mahendiran, C. Roselin, A. G. Sivakumar", venue: "<i>Novel Energy</i>", doi: "10.66403/nfpi.ne.2026.0002", tags: [] },
  { year: 2025, first: true, title: "Inherited nitrogen distribution control in covalent organic frameworks for efficient electrochemical lithium recovery via capacitive deionization", authors: "Dhanushkotti R., Abdul K. M., Kayaramkodath C. R., Hema M. K., Najat M. A., Shetty D.", venue: "<i>Advanced Science</i>, 2417140", doi: "10.1002/advs.202417140", abstract: ["abstracts/advs-2025-li-recovery.jpg", "abstracts/advs-2025-cdi-setup.png"], tags: [["Cover feature", "hot"], ["Q1"]] },
  { year: 2022, first: true, title: "2D layered nickel-cobalt double hydroxide nanosheets@1D silver nanowire-graphitic carbon nitrides for high-performance supercapacitors", authors: "Rajesh D., Francis M. K., Bhargav P. B., Nafis A., Balaji C.", venue: "<i>Journal of Alloys and Compounds</i>, 898, 162803", doi: "10.1016/j.jallcom.2021.162803", abstract: "abstracts/jallcom-2022-ldh-supercapacitor.jpg", tags: [["Q1"]] },
  { year: 2021, first: false, title: "Catalytic conversion of glucose to 5-hydroxymethylfurfural over sulfated Ti-Al₂O₃ catalysts", authors: "Ramesh A., Rajesh D., Shanthi K., Bhargav P. B., Nguyen-Le M. T.", venue: "<i>Biomass and Bioenergy</i>, 154, 106261", doi: "10.1016/j.biombioe.2021.106261", abstract: "abstracts/biombioe-2021-glucose-hmf.jpg", tags: [["Q1"]] },
  { year: 2020, first: true, title: "The promotional effect of Ag in Pd-Ag/carbon nanotube-graphene electrocatalysts for alcohol and formic acid oxidation reactions", authors: "Rajesh D., Mahendiran C., Suresh C.", venue: "<i>ChemElectroChem</i>, 7(12), 2629–2636", doi: "10.1002/celc.202000642", abstract: "abstracts/celc-2020-pd-ag.jpg", tags: [] },
  { year: 2019, first: true, title: "Hydrothermal synthesis of three-dimensional reduced graphene oxide-multiwalled carbon nanotube hybrids anchored with palladium-cerium oxide nanoparticles for alcohol oxidation reaction", authors: "Rajesh D., Mahendiran C., Suresh C., Pandurangan A., Maiyalagan T.", venue: "<i>International Journal of Hydrogen Energy</i>, 44(10), 4962–4973", doi: "10.1016/j.ijhydene.2019.01.025", abstract: "abstracts/ijhe-2019-pd-ceo2.jpg", tags: [["Q1"]] },
  { year: 2018, first: true, title: "Pd-NiO decorated multiwalled carbon nanotubes supported on reduced graphene oxide as an efficient electrocatalyst for ethanol oxidation in alkaline medium", authors: "Rajesh D., Neel P. I., Pandurangan A., Mahendiran C.", venue: "<i>Applied Surface Science</i>, 442, 787–796", doi: "10.1016/j.apsusc.2018.02.174", abstract: "abstracts/apsusc-2018-pd-nio.jpg", tags: [["Q1"]] },
  { year: 2017, first: false, title: "Pd nanoparticles-supported carbon nanotube-encapsulated NiO/MgO composite as an enhanced electrocatalyst for ethanol electrooxidation in alkaline medium", authors: "Mahendiran C., Rajesh D., Maiyalagan T., Prasanna K.", venue: "<i>ChemistrySelect</i>, 2(35), 11438–11444", doi: "10.1002/slct.201702357", abstract: "abstracts/slct-2017-pd-nio-mgo.jpg", tags: [] },
  ];

export const coverFeature = {
  label: "Cover feature, Advanced Science 2025",
  title: "Inherited nitrogen distribution control in covalent organic frameworks for efficient electrochemical lithium recovery via capacitive deionization",
  doi: "10.1002/advs.202417140",
  note: "First-author paper, Vol. 12, Issue 27.",
  image: "abstracts/advs-2025-cover.png", // journal cover picture (leave out to hide)
};

export const patentsAndChapters = [
  {
    group: "research",
    kicker: "U.S. Patent filed in January 2026",
    title: "Scalable 2D/3D covalent organic frameworks for enhanced and selective lithium recovery from brine: combined physisorption and electrosorption approach",
    meta: "Shetty D., Aldaqqa N. M., Bashri M., <strong>Dhanushkotti R.</strong> Khalifa University. Status: under examination.",
  },
  {
    group: "about",
    kicker: "Book chapter, Wiley, 2024",
    title: "Lithium titanate-based nanomaterials for lithium-ion battery applications: a critical review",
    url: "https://doi.org/10.1002/9783527838851.ch13",
    meta: "In <i>Nanostructured Materials for Energy Storage</i>, Vol. 2, pp. 465–495. Balaji Bhargav P., Francis M. K., Rajesh K., Vinayagamoorthi R., <strong>Rajesh D.</strong>, Ahmed N., Balaji C.",
  },
];

export const highlights = [
  { kicker: "2026", group: "recog", category: "Award", year: "2026", title: "Best Poster Award (Top 3), Electrify Society Summit 2026", text: "Recognized for our poster on COF electrolytes for solid-state lithium batteries, Palais des congrès de Montréal." },
  { kicker: "2026", title: "Co-inventor, U.S. patent application", text: "Scalable COFs for selective lithium recovery from brine, now under examination." },
  { kicker: "2025", title: "Cover feature, <i>Advanced Science</i> (Wiley)", text: "First-author paper on nitrogen distribution in COFs for lithium recovery selected as the cover article of Vol. 12, Issue 27." },
    { kicker: "Ongoing", title: "Invited peer reviewer, 5 manuscripts", text: "Scientific Reports (2), Discover Nano, Journal of Materials Science: Materials in Electronics, Discover Chemistry." },
];

export const conferences = [
  { when: "June 2026", title: "Rechargeable lithium-hydrogen batteries", where: "Poster, International Meeting on Lithium Batteries (IMLB 2026), Montréal", current: true },
  { when: "May 2026", title: "Covalent organic framework electrolytes for solid-state lithium batteries", where: "Poster, Electrify Society Summit 2026, Concordia University, Montréal", current: true },
  { when: "November 2023", title: "Science communicator, COP28 Sustainability Innovation Showcase", where: "Khalifa University, Abu Dhabi, UAE. Explained to academic, industry and public visitors how COFs and MOFs support sustainable energy." },
  { when: "December 2022", title: "Studies on metal-embedded porous carbon structures for PEMFC", where: "9th DAE-BRNS Interdisciplinary Symposium on Materials Chemistry (ISMC-2022), BARC, Mumbai" },
  { when: "February 2017", title: "Enhanced electrocatalytic activity of Pd-CeO₂ nanoparticles on reduced graphene oxide and carbon nanotube hybrid for ethanol electro-oxidation", where: "CEAMCR, BARC, Mumbai" },
  { when: "February 2016", title: "Hydrodeoxygenation of guaiacol over KIT-6 supported NiMoP nanocatalyst for bio-fuel application", where: "International Conference on Nanoscience and Technology, IISER Pune" },
  { when: "December 2015", title: "Hydrodeoxygenation of guaiacol over KIT-6 supported MoP nanocatalyst", where: "International Conference on Nanoscience, Nanotechnology and Advanced Materials, GITAM University, Visakhapatnam" },
];

// To add a photo: put the image file in /public/gallery/ and set
// image: "gallery/your-file.jpg". Leave image empty for a placeholder.
export const gallery = [
  { image: "photo.jpg", caption: "Dr. Rajesh Dhanushkotti", sub: "Montréal, 2026", group: "about" },
  { image: "gallery/IMLB_2026.jpg", caption: "At IMLB 2026, the 23rd International Meeting on Lithium Batteries", sub: "Montréal, June 2026", group: "research" },
  { image: "gallery/IMLB_Poster_2026.jpg", caption: "Presenting my poster on rechargeable lithium-hydrogen batteries", sub: "IMLB 2026, Montréal, June 2026", group: "research" },
  { image: "gallery/electrify-society-summit.jpg", caption: "Electrify Society Summit", sub: "Concordia University, June 2026", group: "research" },
  { image: "gallery/advanced-science-cover.png", caption: "Advanced Science cover", sub: "Vol. 12, Issue 27, 2025", group: "recog" },
  { image: "gallery/cop-28-sustainability.jpg", caption: "COP28 Sustainability Innovation Showcase", sub: "Khalifa University, November 2023", group: "recog" },
];

export const media = [
  { group: "recog", category: "Journal cover", year: "2025", title: "Advanced Science, Vol. 12, Issue 27", text: "Our work on controlling nitrogen distribution in COFs for lithium recovery featured on the cover.", url: "https://doi.org/10.1002/advs.202417140", linkLabel: "Read the paper" },
  { group: "about", category: "Outreach", year: "2023", title: "COP28 Sustainability Innovation Showcase, Abu Dhabi", text: "Science communicator for Khalifa University's contribution to the UN Climate Change Conference." },
  { group: "research", category: "Conference", year: "2026", title: "IMLB 2026, Montréal", text: "Poster on Rechargeable lithium-hydrogen batteries." },
  { group: "contact", category: "Conference", year: "2026", title: "Electrify Society Summit 2026, Concordia", text: "Poster on COF electrolytes for solid-state lithium batteries." },
];
