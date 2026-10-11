import {
  topics as sourceTopics,
  articles as sourceArticles,
  glossary as sourceGlossary,
  countries as sourceCountries,
  ideologies as sourceIdeologies,
  events as sourceEvents,
  sources as sourceSources,
  relationships as sourceRelationships,
} from "./data.js";

const englishCopy = {
  topics: {
    foundations: { title: "Political Foundations", description: "Power, the state, sovereignty, authority, and legitimacy." },
    theory: { title: "Political Theory", description: "Intellectual traditions and debates about liberty, equality, and justice." },
    ideologies: { title: "Ideologies", description: "Political traditions and their internal differences." },
    institutions: { title: "Constitutions & Institutions", description: "Legislative, executive, and judicial institutions, plus mechanisms that check power." },
    elections: { title: "Elections & Representation", description: "Electoral systems, parties, voters, and accountability." },
    comparative: { title: "Comparative Politics", description: "How countries design and operate different political systems." },
    international: { title: "International Relations", description: "International order, multilateral organizations, diplomacy, and international law." },
    history: { title: "Political History", description: "Historical turning points, documents, and institutional change." },
    vietnam: { title: "Politics of Vietnam", description: "Vietnam’s constitutional framework, state institutions, and development context." },
    methods: { title: "Research & Evidence", description: "Primary sources, comparative data, and ways to assess political claims." },
  },
  articles: {
    democracy: {
      title: "Democracy", slug: "democracy", readTime: "7 min read",
      summary: "A set of principles and institutions for organizing public power, in which participation, political competition, and accountability are central.",
      content: [
        { heading: "Concept", paragraphs: ["Democracy is not simply the holding of elections. In political research, the term commonly includes rules governing who can participate in collective decision-making, how competition for power takes place, and how officeholders are held accountable to the public."] },
        { heading: "Comparative approach", paragraphs: ["Democratic models differ in institutional design—from parliamentary to presidential arrangements, and from centralized to federal systems. Assessing a system therefore calls for examining political rights, electoral procedures, rule of law, freedom of information, and the capacity of institutions that check power together.", "Comparative indicators can be useful for research, but they do not replace attention to each case’s historical context, constitution, and scholarly debates."] },
      ],
    },
    sovereignty: {
      title: "Sovereignty", slug: "sovereignty", readTime: "6 min read",
      summary: "The supreme capacity of a political community to organize public authority for itself and to relate to external actors.",
      content: [
        { heading: "Two dimensions", paragraphs: ["Sovereignty is commonly discussed in two dimensions: supreme authority within a territory and independence in relations with other states. The concept does not mean that power is unlimited; in many states, constitutions, laws, and international commitments constrain the exercise of power."] },
        { heading: "In practice", paragraphs: ["In practice, sovereignty is connected to borders, international legal status, jurisdiction, and governing capacity. Globalization, international organizations, and agreements also foreground questions about how power can be shared or coordinated without necessarily eliminating the state."] },
      ],
    },
    "political-legitimacy": {
      title: "Political Legitimacy", slug: "political-legitimacy", readTime: "6 min read",
      summary: "The reasons public authority is regarded as justified in being obeyed, supported, or accepted.",
      content: [
        { heading: "Concept", paragraphs: ["Legitimacy is distinct from coercive capacity. A government may enforce decisions, yet legitimacy asks which principles, procedures, or outcomes justify that authority."] },
        { heading: "Ways of explaining it", paragraphs: ["Theories commonly invoke consent, law, tradition, governing effectiveness, human rights, and participation. These standards can conflict, or carry different weight across political traditions, so they should be presented as arguments in debate rather than as a single measure."] },
      ],
    },
    constitutionalism: {
      title: "Constitutionalism", slug: "constitutionalism", readTime: "8 min read",
      summary: "The view that public authority should be established, allocated, and limited by fundamental rules with higher legal force.",
      content: [
        { heading: "Focus", paragraphs: ["Constitutionalism concerns more than the existence of a written constitution. Its focus is how authority is allocated, limited, and checked, and how rights and procedures are secured in practice."] },
        { heading: "Design and comparison", paragraphs: ["Constitutional design may include amendment rules, relationships among state institutions, constitutional review, and protection of fundamental rights. Countries choose different models; comparison is useful when texts are situated in each setting’s constitutional history and operating mechanisms."] },
      ],
    },
    "separation-of-powers": {
      title: "Separation of Powers & Checks on Power", slug: "separation-of-powers", readTime: "7 min read",
      summary: "A principle for organizing public authority to prevent unchecked concentration of power through allocated functions and countervailing mechanisms.",
      content: [
        { heading: "Allocation of functions", paragraphs: ["Separation of powers is commonly associated with three functions: making law, executing law, and adjudicating. In practice, constitutional systems do not replicate a single model; some draw sharper functional distinctions, whereas others emphasize collective responsibility or parliamentary relationships."] },
        { heading: "Checks and balances", paragraphs: ["Checks on power may operate through legislative procedures, vetoes, oversight, courts, audits, the media, and independent institutions. Their effectiveness depends on legal rules, organizational capacity, and political context."] },
      ],
    },
    "proportional-representation": {
      title: "Proportional Representation", slug: "proportional-representation", readTime: "7 min read",
      summary: "A family of electoral systems that allocates seats to make the share of seats closer to the share of votes won by parties or lists.",
      content: [
        { heading: "Variants", paragraphs: ["Proportional representation is a family of systems, not a single formula. Open lists, closed lists, electoral thresholds, and district magnitude can all affect outcomes and the relationship between voters and representatives."] },
        { heading: "Debate", paragraphs: ["Supporters often emphasize proportionality and opportunities to represent different viewpoints. Critics may focus on party fragmentation or coalition formation. Effects should be assessed through the specific design, not a system label alone."] },
      ],
    },
    authoritarianism: {
      title: "Authoritarianism", slug: "authoritarianism", readTime: "8 min read",
      summary: "A term in comparative politics for regimes that substantially restrict political competition or independent participation, with many real-world variations.",
      content: [
        { heading: "Conceptual distinction", paragraphs: ["In comparative research, authoritarianism is commonly distinguished from democracy by the degree of meaningful political competition, opposition rights, and civic space. Actual regimes may nevertheless contain electoral, party, or legal institutions that play different roles."] },
        { heading: "Methodological note", paragraphs: ["Regime classification always has methodological limits. Researchers should make their criteria, time period, and data sources explicit rather than substitute a single label for analysis."] },
      ],
    },
    liberalism: {
      title: "Liberalism", slug: "liberalism", readTime: "8 min read",
      summary: "A family of traditions that emphasizes individual rights, liberty, rule of law, and limits on public power; its strands differ in important ways.",
      content: [
        { heading: "A diverse tradition", paragraphs: ["Liberalism is not a unified position on every economic or social issue. Classical, social, and egalitarian strands may differ over the state’s role, welfare, and how to address inequality."] },
        { heading: "Common ground and differences", paragraphs: ["Common ground often includes the importance of individual rights, equality before the law, and limits on arbitrary power. When comparing ideologies, separate core principles from interpretations specific to a time or country."] },
      ],
    },
    "united-nations": {
      title: "United Nations", slug: "united-nations", readTime: "7 min read",
      summary: "An intergovernmental organization founded in 1945 under the UN Charter to maintain peace, promote cooperation, and develop friendly relations.",
      content: [
        { heading: "Organization and authority", paragraphs: ["The United Nations includes the principal organs named in the Charter, together with a system of programmes, funds, and specialized agencies. Authority and decision-making vary by organ, so the organization should not be treated as a world government."] },
        { heading: "Principles", paragraphs: ["The Charter sets out principles of sovereign equality, peaceful settlement of disputes, and international cooperation. Their interpretation, implementation, and limits remain continuing subjects of law and international relations."] },
      ],
    },
    "vietnam-constitutional-framework": {
      title: "Vietnam’s Constitutional Framework", slug: "vietnam-constitutional-framework", readTime: "8 min read",
      summary: "A neutral introduction to the 2013 Constitution and the roles of state institutions identified in the text.",
      content: [
        { heading: "Scope", paragraphs: ["The 2013 Constitution is the document with the highest legal force in Vietnam’s legal system. It sets out principles concerning the political system, human and citizen rights, the organization of state institutions, national defence, foreign affairs, and constitutional amendment procedures."] },
        { heading: "Reading sources", paragraphs: ["To understand a particular institution, read the relevant provisions, implementing legislation, and current official sources directly. This overview does not replace legal advice or an authoritative interpretation."] },
      ],
    },
  },
  glossary: {
    authority: { term: "Authority", english: "Authority", definition: "Recognized entitlement to make decisions or require compliance within a defined scope." },
    state: { term: "State", english: "State", definition: "A set of institutions holding public authority over a defined territory and population; scholars define the term in different ways." },
    regime: { term: "Political Regime", english: "Political regime", definition: "The rules and patterns through which political power is acquired, exercised, and transferred." },
    "rule-of-law": { term: "Rule of Law", english: "Rule of law", definition: "The principle that public authority and individuals are governed by published laws that are applied consistently and can be independently reviewed." },
    constitution: { term: "Constitution", english: "Constitution", definition: "A document or set of fundamental rules governing public authority, rights and duties, and basic political procedures." },
    "judicial-review": { term: "Judicial Review", english: "Judicial review", definition: "A mechanism for assessing whether laws or exercises of public authority conform to the constitution; its specific form differs across countries." },
    "electoral-threshold": { term: "Electoral Threshold", english: "Electoral threshold", definition: "The minimum vote share a party or list may need to win seats in some electoral systems." },
    representation: { term: "Political Representation", english: "Political representation", definition: "A relationship in which a person or organization acts, speaks, or decides on behalf of a group of people or voters." },
    "civil-society": { term: "Civil Society", english: "Civil society", definition: "The sphere of associations, groups, and collective activity between private life, the market, and the state; its conceptual boundaries vary across research traditions." },
    federalism: { term: "Federalism", english: "Federalism", definition: "A form of state organization in which constitutional authority is divided between a federal level and constituent units." },
    "unitary-state": { term: "Unitary State", english: "Unitary state", definition: "A form of state organization in which constitutional sovereignty is concentrated at the national level, even where substantial administrative decentralization exists." },
    multilateralism: { term: "Multilateralism", english: "Multilateralism", definition: "An approach to international cooperation through rules, forums, and agreements among multiple states." },
  },
  countries: {
    vietnam: {
      name: "Vietnam", slug: "vietnam", region: "Southeast Asia", form: "Socialist republic", system: "Unitary state",
      overview: "The 2013 Constitution sets out principles for the organization of the state, human and citizen rights, and the roles of central institutions.",
      politicalSystem: "Socialist republic; unitary state",
      governmentStructure: "The 2013 Constitution sets out the National Assembly, the President, the Government, the People’s Court system, and other institutions.",
      legislature: "National Assembly", constitution: "2013 Constitution",
      note: "This profile describes the constitutional framework only and does not list current officeholders.",
    },
    "united-states": {
      name: "United States", slug: "united-states", region: "North America", form: "Federal republic", system: "Presidential system",
      overview: "The federal Constitution separates legislative, executive, and judicial functions; states retain authority within a federal arrangement.",
      politicalSystem: "Federal republic with a presidential system",
      governmentStructure: "The federal Constitution separates legislative, executive, and judicial powers; states retain authority within a federal arrangement.",
      legislature: "Congress, comprising the Senate and House of Representatives", constitution: "Constitution of the United States, signed in 1787",
      note: "The profile presents constitutional structure and is not tied to current officeholders.",
    },
    germany: {
      name: "Germany", slug: "germany", region: "Europe", form: "Federal republic", system: "Parliamentary system",
      overview: "The Basic Law establishes a federal state, a federal parliament, and relations between the Federation and the Länder.",
      politicalSystem: "Federal republic with a parliamentary system",
      governmentStructure: "The Basic Law establishes a federal state, a federal parliament, and relations between the Federation and the Länder.",
      legislature: "Bundestag and Bundesrat", constitution: "Basic Law of 1949",
      note: "Institution names are kept in their customary form to support source lookup.",
    },
    japan: {
      name: "Japan", slug: "japan", region: "East Asia", form: "Constitutional monarchy", system: "Parliamentary government",
      overview: "The Constitution identifies the Emperor as the symbol of the State, the National Diet as the highest organ of state power, and the Cabinet as exercising executive power.",
      politicalSystem: "Constitutional monarchy with parliamentary government",
      governmentStructure: "The Constitution identifies the Emperor as the symbol of the State, the National Diet as the highest organ of state power, and the Cabinet as exercising executive power.",
      legislature: "National Diet, comprising the House of Representatives and House of Councillors", constitution: "Constitution of Japan, effective 1947",
      note: "The description is based on the officially published constitutional text.",
    },
    india: {
      name: "India", slug: "india", region: "South Asia", form: "Federal democratic republic", system: "Parliamentary system",
      overview: "The Constitution establishes a federation, allocates some powers between the Union and states, and sets out legislative, executive, and judicial institutions.",
      politicalSystem: "Federal democratic republic with a parliamentary system",
      governmentStructure: "The Constitution establishes a federation, allocates some powers between the Union and states, and sets out legislative, executive, and judicial institutions.",
      legislature: "Parliament, comprising the Lok Sabha and Rajya Sabha", constitution: "Constitution of India, effective 1950",
      note: "This profile does not include information about current officeholders.",
    },
  },
  ideologies: {
    liberalism: {
      name: "Liberalism", slug: "liberalism",
      summary: "A family of ideas that foregrounds individual rights, the rule of law, and limits on power; strands differ in their social and economic policies.",
      dimensions: {
        liberty: "Emphasizes individual rights and freedoms, interpreted differently across its strands.",
        equality: "Often stresses equality before the law; some strands focus on equality of opportunity or social equality.",
        state: "Prioritizes limiting and constraining public power; the appropriate role of the state varies by strand.",
        economy: "Includes views from free markets to regulation intended to widen opportunity.",
        property: "Usually treats property rights as important, though the scope of protection varies.",
        democracy: "Commonly associated with representative government, rule of law, and political rights.",
        internationalism: "Some strands support international cooperation; their degree and rationale differ.",
        history: "Its modern origins are linked to debates about rights, law, and representative government.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    conservatism: {
      name: "Conservatism", slug: "conservatism",
      summary: "A family of ideas that commonly emphasizes tradition, order, institutional continuity, and caution about rapid change; it has many national variants.",
      dimensions: {
        liberty: "Commonly discusses liberty in relation to responsibility, order, and tradition.",
        equality: "Approaches are not uniform; many strands are cautious about rapid equalizing projects.",
        state: "Emphasizes stable institutions; the role of the state varies by strand.",
        economy: "Includes views ranging from markets to protectionist or communitarian policies.",
        property: "Many traditions treat property as an important social institution.",
        democracy: "May support representative institutions while emphasizing gradual reform.",
        internationalism: "Ranges from cautious cooperation to an emphasis on national interest.",
        history: "Values historical continuity and accumulated experience.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    socialism: {
      name: "Socialism", slug: "socialism",
      summary: "A family of ideas that emphasizes social equality and collective influence over economic life; it differs in methods and in the desired scope of the state.",
      dimensions: {
        liberty: "Interprets liberty in relation to material conditions and economic power; strands differ.",
        equality: "Places particular emphasis on reducing inequality and/or advancing social equality.",
        state: "Includes debates from welfare states and public ownership to forms of self-government.",
        economy: "Often asks how economic life can be subject to democratic or social control.",
        property: "Strands differ over private, public, cooperative, or mixed ownership.",
        democracy: "Many strands connect their aims with expanding political and/or economic democracy.",
        internationalism: "Includes traditions of international cooperation and solidarity, with differing interpretations.",
        history: "Diverse currents range from utopian and Marxist socialism to social democracy.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    nationalism: {
      name: "Nationalism", slug: "nationalism",
      summary: "A family of ideas that sees the nation as an important political or moral community; understandings of membership, self-determination, and international relations vary widely.",
      dimensions: {
        liberty: "Views of individual liberty vary with civic, cultural, or ethnic understandings of the nation.",
        equality: "Some forms emphasize civic equality, while others differ considerably.",
        state: "Commonly treats the nation-state or self-determination as important.",
        economy: "Does not prescribe one economic policy.",
        property: "Does not prescribe a single position on property.",
        democracy: "Can combine with democracy, anti-colonial politics, or other political forms.",
        internationalism: "Often prioritizes self-determination and national interest without necessarily excluding international cooperation.",
        history: "Connected to nation formation, empire, colonialism, and national liberation.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    "green-politics": {
      name: "Green Politics", slug: "green-politics",
      summary: "A family of ideas connecting environmental protection with intergenerational justice, sustainability, participatory democracy, and questions about development models.",
      dimensions: {
        liberty: "Often connects liberty with ecological conditions, participation, and intergenerational responsibility.",
        equality: "Commonly addresses environmental justice and the distribution of risks and benefits.",
        state: "Views differ on regulation, decentralization, and the role of communities.",
        economy: "Often critiques unsustainable development models and advances varied alternatives.",
        property: "Includes debates about commons, land-use rights, and environmental responsibility.",
        democracy: "Many strands emphasize participation and transparency in environmental decision-making.",
        internationalism: "Often attends to the cross-border nature of climate crises and to international cooperation.",
        history: "Developed alongside environmental movements and debates about sustainable development.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
  },
  events: {
    "magna-carta": { title: "Magna Carta Sealed", summary: "A medieval English charter frequently cited in the history of limiting power; its significance has changed across periods.", region: "Western Europe", tags: ["constitution", "rule of law", "England"], type: "Document" },
    "peace-of-westphalia": { title: "Peace of Westphalia", summary: "A set of treaties ending conflicts in Europe, often used as a reference point in debates about international order and sovereignty.", region: "Central Europe", tags: ["sovereignty", "international relations", "peace treaty"], type: "Treaty" },
    "us-constitution-signed": { title: "U.S. Constitution Signed", summary: "The federal constitutional text that established the foundations of United States institutions and can be amended through constitutional procedures.", region: "North America", tags: ["constitution", "federalism", "separation of powers"], type: "Constitution" },
    "declaration-rights-man-citizen": { title: "French Declaration of the Rights of Man and of the Citizen", summary: "A document of the French Revolution of 1789 that greatly influenced debates about rights, law, and citizenship.", region: "Western Europe", tags: ["human rights", "citizenship", "French Revolution"], type: "Declaration" },
    "un-charter-signed": { title: "UN Charter Signed", summary: "The Charter established the United Nations and its basic framework of principles.", region: "Global", tags: ["United Nations", "multilateralism", "peace"], type: "International instrument" },
    "udhr-adopted": { title: "Universal Declaration of Human Rights Adopted", summary: "The United Nations General Assembly adopted a document setting out fundamental rights and freedoms.", region: "Global", tags: ["human rights", "United Nations", "declaration"], type: "Declaration" },
    "berlin-wall-fall": { title: "Berlin Wall Opens", summary: "A symbolic milestone in the political changes in Europe at the end of the Cold War.", region: "Europe", tags: ["Cold War", "Germany", "political transition"], type: "Event" },
    "vietnam-constitution-2013": { title: "Vietnam’s 2013 Constitution Adopted", summary: "Vietnam’s current constitutional text was adopted by the National Assembly in 2013.", region: "Southeast Asia", tags: ["Vietnam", "constitution", "institutions"], type: "Constitution" },
  },
  sourceKinds: {
    "Văn kiện quốc tế": "International instrument",
    "Nguồn sơ cấp": "Primary source",
    "Tài liệu học thuật": "Scholarly reference",
    "Sổ tay nghiên cứu": "Research handbook",
    "Dữ liệu nghiên cứu": "Research data",
    "Cơ sở dữ liệu hiến pháp": "Constitutional database",
    "Văn bản pháp lý": "Legal text",
    "Tài liệu lưu trữ": "Archival document",
    "Văn kiện lịch sử": "Historical document",
    "Văn bản hiến pháp": "Constitutional text",
  },
  sources: {
    "vietnam-constitution": { publisher: "Government Portal of Vietnam" },
  },
  relationshipLabels: {
    "giải thích": "explains",
    "chứa": "contains",
    "được bảo đảm bởi": "is supported by",
    "có thể sử dụng": "may use",
    "thường bao gồm": "commonly includes",
    "liên hệ với": "relates to",
    "gắn với": "is associated with",
    "có thể có": "may include",
    "được thiết lập bởi": "is established by",
    "bối cảnh tranh luận": "context for debate about",
    "gợi mở": "raises questions about",
    "khung hiến định": "constitutional framework",
    "ví dụ hiến định": "constitutional example",
    "ví dụ tổ chức nhà nước": "example of state organization",
    "hồ sơ so sánh": "comparative profile",
    "được giới thiệu trong": "is introduced in",
    "thường nhấn mạnh": "commonly emphasizes",
    "thường bàn về": "commonly discusses",
    "liên hệ toàn cầu": "global connection",
    "được so sánh với": "is compared with",
  },
};

const localizeRecords = (records, copy = {}) => records.map((record) => ({ ...record, ...(copy[record.id] || {}) }));

function collectionsForLanguage(language) {
  const collator = new Intl.Collator(language, { sensitivity: "base" });
  const topicTitles = new Map(sourceTopics.map((topic) => [topic.id, topic.title]));

  if (language === "vi") {
    const topics = sourceTopics.map((record) => ({ ...record }));
    return {
      topics,
      articles: sourceArticles
        .map((record) => ({ ...record, domain: topicTitles.get(record.domain) || record.domain }))
        .sort((a, b) => collator.compare(a.title, b.title)),
      glossary: sourceGlossary
        .map((record) => ({ ...record, aliases: [record.english].filter(Boolean) }))
        .sort((a, b) => collator.compare(a.term, b.term)),
      countries: sourceCountries
        .map((record) => ({ ...record }))
        .sort((a, b) => collator.compare(a.region, b.region) || collator.compare(a.name, b.name)),
      ideologies: sourceIdeologies.map((record) => ({ ...record })),
      events: sourceEvents.map((record) => ({ ...record })).sort((a, b) => String(a.date).localeCompare(String(b.date), "vi")),
      sources: sourceSources
        .map((record) => ({ ...record }))
        .sort((a, b) => collator.compare(a.kind, b.kind) || Number(b.year || 0) - Number(a.year || 0) || collator.compare(a.title, b.title)),
      relationships: sourceRelationships.map((record) => ({ ...record })),
      fullTaxonomy: sourceTopics.map((topic) => topic.title),
    };
  }

  const topics = localizeRecords(sourceTopics, englishCopy.topics);
  return {
    topics,
    articles: localizeRecords(sourceArticles, englishCopy.articles)
      .map((record) => ({ ...record, domain: englishCopy.topics[record.domain]?.title || record.domain }))
      .sort((a, b) => collator.compare(a.title, b.title)),
    glossary: sourceGlossary.map((record) => ({
      ...record,
      ...(englishCopy.glossary[record.id] || {}),
      aliases: [record.term, record.english].filter(Boolean),
      english: "",
    })).sort((a, b) => collator.compare(a.term, b.term)),
    countries: localizeRecords(sourceCountries, englishCopy.countries)
      .sort((a, b) => collator.compare(a.region, b.region) || collator.compare(a.name, b.name)),
    ideologies: localizeRecords(sourceIdeologies, englishCopy.ideologies),
    events: localizeRecords(sourceEvents, englishCopy.events).sort((a, b) => String(a.date).localeCompare(String(b.date), "en")),
    sources: sourceSources.map((record) => ({
      ...record,
      ...(englishCopy.sources[record.id] || {}),
      kind: englishCopy.sourceKinds[record.kind] || record.kind,
    })).sort((a, b) => collator.compare(a.kind, b.kind) || Number(b.year || 0) - Number(a.year || 0) || collator.compare(a.title, b.title)),
    relationships: sourceRelationships.map((record) => ({
      ...record,
      label: englishCopy.relationshipLabels[record.label] || record.label,
    })),
    fullTaxonomy: sourceTopics.map((topic) => englishCopy.topics[topic.id]?.title || topic.title),
  };
}

let currentLanguage = "vi";
try {
  const savedLanguage = localStorage.getItem("politicore-language");
  if (["en", "vi"].includes(savedLanguage)) currentLanguage = savedLanguage;
} catch {
  // Language persistence is optional when storage is unavailable.
}

let currentTheme = "light";
try {
  const savedTheme = localStorage.getItem("politicore-theme");
  if (["light", "dark"].includes(savedTheme)) {
    currentTheme = savedTheme;
  } else if (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches) {
    currentTheme = "dark";
  }
} catch {
  // The appearance toggle still works when storage is unavailable.
}

let { topics, articles, glossary, countries, ideologies, events, sources, relationships, fullTaxonomy } = collectionsForLanguage(currentLanguage);
const app = document.querySelector("#app");

const state = {
  searchOpen: false,
  query: "",
  searchType: "all",
  glossaryLetter: "all",
  countryRegion: "all",
  timelineRegion: "all",
  timelineTag: "all",
  compareLeft: ideologies[0]?.slug || "",
  compareRight: ideologies[1]?.slug || ideologies[0]?.slug || "",
};
let languageRenderTimer;
let themeTransitionTimer;
const LANGUAGE_SWITCH_DURATION = 340;

function sourceRecordId(reference, sourceRecords, translations = {}) {
  return sourceRecords.find((record) => (
    record.id === reference
    || record.slug === reference
    || translations[record.id]?.slug === reference
  ))?.id;
}

function currentRecordByReference(reference, currentRecords, sourceRecords, translations = {}) {
  const id = sourceRecordId(reference, sourceRecords, translations);
  return currentRecords.find((record) => record.id === id || record.slug === reference);
}

function updateDocumentLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "vi"
    ? "PolitiCore — Tri thức chính trị, có kết nối"
    : "PolitiCore — Political Knowledge, Connected";
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = currentLanguage === "vi"
      ? "PolitiCore — Bách khoa tri thức chính trị kết nối khái niệm, thể chế, lịch sử và nguồn tư liệu."
      : "PolitiCore — a connected political knowledge library for concepts, institutions, history, and source material.";
  }
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = currentLanguage === "vi" ? "Bỏ qua điều hướng" : "Skip to content";
}

function updateDocumentTheme() {
  const root = document.documentElement;
  root.dataset.theme = currentTheme;
  root.style.colorScheme = currentTheme;
}

function themeToggleLabel() {
  if (currentLanguage === "vi") {
    return currentTheme === "dark" ? "Chuyển sang nền sáng" : "Chuyển sang nền tối";
  }
  return currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function changeTheme(theme) {
  if (!["light", "dark"].includes(theme) || theme === currentTheme) return;

  currentTheme = theme;
  document.documentElement.classList.add("theme-transition");
  updateDocumentTheme();

  try {
    localStorage.setItem("politicore-theme", currentTheme);
  } catch {
    // The theme is still applied for the current session.
  }

  window.clearTimeout(themeTransitionTimer);
  themeTransitionTimer = window.setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, prefersReducedMotion() ? 0 : 460);
}

function toggleTheme() {
  changeTheme(currentTheme === "dark" ? "light" : "dark");
}

function changeLanguage(language) {
  if (!["en", "vi"].includes(language) || language === currentLanguage) return;

  const selectedLeftId = sourceRecordId(state.compareLeft, sourceIdeologies, englishCopy.ideologies);
  const selectedRightId = sourceRecordId(state.compareRight, sourceIdeologies, englishCopy.ideologies);
  ({ topics, articles, glossary, countries, ideologies, events, sources, relationships, fullTaxonomy } = collectionsForLanguage(language));
  currentLanguage = language;
  state.compareLeft = ideologies.find((item) => item.id === selectedLeftId)?.slug || ideologies[0]?.slug || "";
  state.compareRight = ideologies.find((item) => item.id === selectedRightId)?.slug || ideologies[1]?.slug || ideologies[0]?.slug || "";
  state.glossaryLetter = "all";
  updateDocumentLanguage();

  try {
    localStorage.setItem("politicore-language", currentLanguage);
  } catch {
    // The toggle still works when storage is unavailable.
  }
}

updateDocumentTheme();
updateDocumentLanguage();

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const uiText = {
  "THƯ VIỆN THAM CHIẾU · BẢN DEMO CÓ NGUỒN": "REFERENCE LIBRARY · SOURCED DEMO",
  "Phi đảng phái · Ưu tiên bằng chứng &amp; ngữ cảnh": "Non-partisan · Evidence and context first",
  "PolitiCore — trang chủ": "PolitiCore — home",
  "Điều hướng chính": "Primary navigation",
  "Điều hướng di động": "Mobile navigation",
  "Điều hướng chân trang": "Footer navigation",
  "Chọn ngôn ngữ": "Choose language",
  "Tiếng Anh": "English",
  "Tiếng Việt": "Vietnamese",
  "Mở tìm kiếm": "Open search",
  "Mở menu": "Open menu",
  "Tìm kiếm": "Search",
  "Khám phá": "Explore",
  "Bách khoa": "Encyclopedia",
  "Thuật ngữ": "Glossary",
  "Quốc gia": "Countries",
  "So sánh": "Compare",
  "Dòng thời gian": "Timeline",
  "Nguồn tư liệu": "Sources",
  "Về PolitiCore": "About PolitiCore",
  "Hồ sơ quốc gia": "Country profiles",
  "Thư viện nguồn": "Source library",
  "Nguyên tắc biên tập": "Editorial principles",
  "Một cấu trúc tham chiếu để kết nối khái niệm, thể chế, lịch sử và bằng chứng — không phải một dòng tin tức hay lời kêu gọi chính trị.": "A reference framework connecting concepts, institutions, history, and evidence—not a news feed or a political call to action.",
  "Dữ liệu minh hoạ có liên kết nguồn gốc · Không thay thế nghiên cứu chuyên môn": "Illustrative data linked to original sources · Not a substitute for specialist research",
  "Đã biên tập": "Reviewed",
  "Cập nhật": "Updated",
  "Bản đồ các khái niệm chính trị liên kết": "Map of connected political concepts",
  "Quyền lực nằm ở trung tâm và kết nối với nhà nước, pháp quyền, đại diện, chủ quyền, hiến pháp và tham gia chính trị.": "Power sits at the centre, connected to the state, legitimacy, representation, sovereignty, and constitutionalism.",
  "Tính chính danh": "Legitimacy",
  "Đại diện": "Representation",
  "Chủ quyền": "Sovereignty",
  "Hiến pháp": "Constitution",
  "Nhà nước": "State",
  "Quyền lực": "Power",
  "Bách khoa tri thức chính trị": "Political knowledge encyclopedia",
  "Hiểu chính trị<br />qua những <em>mối liên hệ.</em>": "Understand politics<br />through <em>relationships.</em>",
  "Khám phá khái niệm, thể chế, lịch sử và các nguồn tư liệu — từ một câu hỏi rộng đến một chi tiết cần kiểm chứng.": "Explore concepts, institutions, history, and source materials—from a broad question to a detail worth checking.",
  "Bạn muốn hiểu điều gì về chính trị?": "What would you like to understand about politics?",
  "Tìm trong PolitiCore": "Search PolitiCore",
  "Tìm hiểu": "Explore",
  "Gợi ý tìm kiếm": "Suggested searches",
  "Bắt đầu với": "Start with",
  "Dân chủ": "Democracy",
  "Phân quyền": "Separation of Powers",
  "Chủ nghĩa tự do": "Liberalism",
  "Phạm vi thư viện": "Library scope",
  "miền tri thức<br />có thể mở rộng": "expandable knowledge<br />domains",
  "mục tham chiếu<br />được liên kết": "linked reference<br />entries",
  "nguồn chính &amp;<br />học thuật": "primary &amp;<br />academic sources",
  "Bản đồ tri thức trực quan": "Visual knowledge map",
  "Bản đồ tri thức · Mẫu liên kết": "Knowledge map · connection sample",
  "chọn một nút để mở mục liên quan": "select a node to open a related entry",
  "Chính trị được hiểu rõ hơn khi các ý tưởng, thiết chế và bối cảnh lịch sử được đặt trong cùng một khung tham chiếu.": "Politics becomes clearer when ideas, institutions, and historical context are placed in one reference frame.",
  "Khám phá theo miền": "Explore by domain",
  "Một câu hỏi có thể mở ra cả một hệ thống.": "One question can open up an entire system.",
  "Bắt đầu từ điểm bạn cần — rồi lần theo các kết nối sang lý thuyết, lịch sử, quốc gia, tư liệu và tranh luận học thuật.": "Start where you need to, then follow connections to theory, history, countries, sources, and scholarly debate.",
  "Khám phá mục": "Explore entries",
  "Xem toàn bộ taxonomy": "View the full taxonomy",
  "Một khái niệm chính trị cần được đọc trong bối cảnh thể chế, lịch sử và các tranh luận về thực hành.": "A political concept best read through institutional, historical, and practical debate.",
  "Đọc mục tham chiếu": "Read the reference entry",
  "Tri thức có kết nối": "Connected knowledge",
  "Đừng chỉ đọc một khái niệm. Hãy nhìn cấu trúc quanh nó.": "Do not read one concept in isolation. See the structure around it.",
  "Mỗi mối quan hệ trong bản demo đều xuất phát từ dữ liệu cùng với các mục tham chiếu liên quan.": "Every relationship in this demo is grounded in data and related reference entries.",
  "Các khái niệm liên quan tới dân chủ": "Concepts related to democracy",
  "Chính danh": "Legitimacy",
  "Lịch sử có ngữ cảnh": "History in context",
  "Dòng thời gian không chỉ là danh sách ngày tháng.": "A timeline is more than a list of dates.",
  "Điểm vào để xem sự kiện, văn bản và thiết chế đã được kết nối như thế nào trong từng bối cảnh.": "An entry point for seeing how events, texts, and institutions connect in context.",
  "Mở dòng thời gian": "Open timeline",
  "Hồ sơ quốc gia": "Country profiles",
  "Đọc hệ thống chính trị trong bối cảnh riêng của mỗi nơi.": "Read each political system in its own context.",
  "Duyệt thư mục quốc gia": "Browse country directory",
  "So sánh có tiêu chí": "Criteria-based comparison",
  "Các hệ tư tưởng không phải những nhãn cố định.": "Ideologies are not fixed labels.",
  "Đặt các truyền thống tư tưởng cạnh nhau theo từng chiều phân tích, đồng thời giữ lại tính đa dạng và những giới hạn của so sánh.": "Place intellectual traditions side by side across analytical dimensions while preserving their diversity and the limits of comparison.",
  "Mở công cụ so sánh": "Open comparison tool",
  "Mở bảng so sánh hệ tư tưởng": "Open ideology comparison table",
  "Chiều xem xét": "Dimension",
  "Truyền thống A": "Tradition A",
  "Truyền thống B": "Tradition B",
  "Vai trò của nhà nước": "Role of the state",
  "diễn giải theo dòng": "interpreted in context",
  "Tổ chức kinh tế": "Economic organization",
  "không giản lược": "not reduced to a spectrum",
  "Các trường phái nội bộ": "Internal schools",
  "có ghi chú": "with notes",
  "Nguồn &amp; văn bản": "Sources &amp; texts",
  "Tranh luận tốt bắt đầu bằng nguồn có thể truy lại.": "Good arguments begin with traceable sources.",
  "Phân biệt tài liệu gốc với diễn giải học thuật, hiển thị rõ xuất xứ và lối dẫn về văn bản.": "Distinguish primary materials from scholarly interpretation, and show provenance with a path back to the text.",
  "Vào thư viện nguồn": "Open source library",
  "Hồ sơ tham chiếu": "Reference profile",
  "Nguồn tham chiếu": "Reference source",
  "Thư viện tham chiếu": "Reference library",
  "Bách khoa chính trị": "Political encyclopedia",
  "Một cấu trúc phân cấp để bắt đầu từ miền kiến thức, đi vào chủ đề, rồi mở các mục tham chiếu có nguồn.": "A hierarchical structure that starts with a knowledge domain, moves into a topic, then opens sourced reference entries.",
  "mục trong bộ dữ liệu demo": "entries in the demo dataset",
  "Lọc theo miền": "Filter by domain",
  "Tất cả": "All",
  "Taxonomy bách khoa": "Encyclopedia taxonomy",
  "10 miền tri thức": "10 knowledge domains",
  "Chưa có mục phù hợp": "No matching entries",
  "Hãy thử một miền khác hoặc quay lại danh mục đầy đủ.": "Try another domain or return to the full directory.",
  "Tham chiếu": "Reference",
  "Đọc →": "Read →",
  "Mục tham chiếu": "Reference entry",
  "Sao chép liên kết": "Copy link",
  "Trích dẫn mục này": "Cite this entry",
  "Định nghĩa ngắn": "Short definition",
  "Mở rộng từ đây": "Explore from here",
  "Khám phá thêm mục trong bách khoa": "Explore more entries in the encyclopedia",
  "Nguồn &amp; ghi chú": "Sources &amp; notes",
  "Mục demo này chưa được gắn nguồn chi tiết. Hãy xem thư viện nguồn để kiểm tra dữ liệu có sẵn.": "This demo entry has no detailed sources attached yet. Open the source library to review available material.",
  "Trong mục này": "On this page",
  "Thông tin biên tập": "Editorial information",
  "Trạng thái": "Status",
  "Chế độ dữ liệu": "Data mode",
  "Tham chiếu demo": "Demo reference",
  "Góc nhìn tham chiếu": "Reference perspective",
  "Phạm vi và cách dùng": "Scope and use",
  "Mục tham chiếu này được thiết kế để định hướng khái niệm, dẫn đến các nguồn có thể kiểm tra và mở ra những liên hệ phù hợp.": "This reference entry is designed to orient the concept, lead to checkable sources, and open relevant connections.",
  "Bối cảnh và tranh luận": "Context and debate",
  "Trong khoa học chính trị, cùng một thuật ngữ có thể được dùng theo nhiều truyền thống nghiên cứu. Vì vậy, định nghĩa nên được đọc cùng phạm vi, tiêu chí và bối cảnh lịch sử của nó.": "In political science, the same term can be used across several research traditions. Read a definition alongside its scope, criteria, and historical context.",
  "Các mối liên hệ": "Connections",
  "Khái niệm này liên quan đến những mục khác trong thư viện, giúp người đọc so sánh cơ chế, thiết chế và cách diễn giải thay vì coi nó như một nhãn độc lập.": "This concept links to other entries in the library, helping readers compare mechanisms, institutions, and interpretations rather than treating it as a standalone label.",
  "Sơ đồ minh hoạ: các nhánh quyền lực": "Illustration: branches of government",
  "Lăng kính đọc mục tham chiếu": "Reference-entry reading lens",
  "Lập pháp": "Legislative",
  "làm luật &amp; giám sát": "makes laws &amp; oversees",
  "Hành pháp": "Executive",
  "thi hành &amp; quản trị": "implements &amp; governs",
  "Tư pháp": "Judicial",
  "xét xử &amp; giải thích luật": "adjudicates &amp; interprets law",
  "Khái niệm": "Concept",
  "định nghĩa &amp; phạm vi": "definition &amp; scope",
  "Bối cảnh": "Context",
  "lịch sử &amp; thể chế": "history &amp; institutions",
  "văn bản &amp; nghiên cứu": "texts &amp; research",
  "Minh hoạ cấu trúc đọc trong bản demo; không thay thế mô tả pháp lý hoặc dữ liệu thực chứng chi tiết.": "A reading-structure illustration for this demo; it does not replace detailed legal description or empirical evidence.",
  "Thuật ngữ chính trị": "Political terms",
  "Từ điển khái niệm": "Concept glossary",
  "Định nghĩa ngắn để định hướng, cùng thuật ngữ tiếng Anh và đường dẫn sang các mục tham chiếu sâu hơn.": "Short definitions for orientation, with related terms and links to deeper reference entries.",
  "Tìm thuật ngữ...": "Search terms…",
  "Tìm thuật ngữ": "Search terms",
  "Tìm": "Search",
  "thuật ngữ trong bản demo": "terms in the demo",
  "Duyệt theo chữ cái": "Browse by letter",
  "Không tìm thấy thuật ngữ": "No terms found",
  "Thử thay đổi từ khoá hoặc duyệt theo chữ cái.": "Try a different keyword or browse by letter.",
  "Hồ sơ so sánh": "Comparative profiles",
  "Quốc gia &amp; hệ thống": "Countries &amp; systems",
  "Các hồ sơ được tổ chức theo bối cảnh, cấu trúc chính thức và đường dẫn về nguồn — không dùng nhãn phân loại như những kết luận tuyệt đối.": "Profiles organized by context, formal structure, and paths to sources—without treating classifications as absolute conclusions.",
  "hồ sơ trong dữ liệu demo": "profiles in demo data",
  "Lọc theo khu vực": "Filter by region",
  "Tất cả khu vực": "All regions",
  "Xem hồ sơ": "View profile",
  "Nguồn có dẫn": "Sourced material",
  "Không có hồ sơ ở khu vực này": "No profiles in this region",
  "Hãy quay lại xem tất cả hồ sơ demo.": "Return to view all demo profiles.",
  "Hồ sơ quốc gia": "Country profile",
  "Hồ sơ tham chiếu theo bối cảnh hiến pháp, thể chế và nguồn tư liệu.": "A reference profile organized around constitutional context, institutions, and source materials.",
  "HỒ SƠ DEMO": "DEMO PROFILE",
  "Mô tả hình thức hiến pháp được ghi ở mức tham chiếu.": "A constitutional form described for reference purposes.",
  "Đọc hồ sơ này như thế nào": "How to read this profile",
  "Mục này tổ chức một điểm vào về cấu trúc chính thức, bối cảnh lịch sử và nguồn tài liệu có thể kiểm tra.": "This entry provides a starting point for formal structures, historical context, and checkable source material.",
  "Giới hạn dữ liệu": "Data limits",
  "Hồ sơ demo không nêu chức danh đương nhiệm, số liệu hoặc phân loại gây tranh cãi nếu chưa có quá trình xác minh theo thời điểm. Hãy mở nguồn gốc để kiểm tra ngữ cảnh và phiên bản mới nhất.": "This demo profile does not state current officeholders, figures, or disputed classifications without time-specific verification. Open the original sources to check context and the latest version.",
  "Khung tham chiếu": "Reference frame",
  "Trong PolitiCore, mô tả về một quốc gia tách biệt giữa cấu trúc pháp lý chính thức, thực hành chính trị và các diễn giải học thuật. Một nhãn hệ thống không tự giải thích đầy đủ cách quyền lực vận hành trong từng thời kỳ.": "In PolitiCore, a country description distinguishes formal legal structure, political practice, and scholarly interpretation. A system label alone cannot fully explain how power operates in any period.",
  "Các lối vào hồ sơ": "Profile entry points",
  "Văn bản nền tảng": "Foundational texts",
  "hiến pháp &amp; tài liệu gốc": "constitutions &amp; primary documents",
  "Thiết chế": "Institutions",
  "cơ quan &amp; thẩm quyền": "bodies &amp; powers",
  "Lịch sử": "History",
  "thay đổi &amp; bối cảnh": "change &amp; context",
  "Khung tổ chức thông tin; không phải đánh giá hay xếp hạng quốc gia.": "An information-organizing frame, not a country assessment or ranking.",
  "Nguồn gắn với hồ sơ": "Sources attached to this profile",
  "Chưa có nguồn được gắn trực tiếp trong bản demo.": "No sources are directly attached in this demo.",
  "Đọc tiếp": "Continue reading",
  "Khám phá mục liên quan": "Explore related entries",
  "Tóm tắt hồ sơ": "Profile summary",
  "Khu vực": "Region",
  "Hình thức": "Form",
  "Khung hệ thống": "System framework",
  "Cần xem nguồn": "See sources",
  "Tình trạng xác minh": "Verification status",
  "Chế độ": "Mode",
  "Demo có nguồn": "Sourced demo",
  "Đương nhiệm": "Current officeholders",
  "Không hiển thị": "Not shown",
  "Tự do &amp; bình đẳng": "Liberty &amp; equality",
  "Tài sản &amp; phân phối": "Property &amp; distribution",
  "Dân chủ &amp; thẩm quyền": "Democracy &amp; authority",
  "Quốc gia &amp; quốc tế": "Nation &amp; internationalism",
  "Phát triển &amp; đa dạng nội bộ": "Development &amp; internal diversity",
  "Công cụ tham chiếu": "Reference tool",
  "So sánh hệ tư tưởng": "Compare ideologies",
  "Đặt hai truyền thống cạnh nhau theo các chiều phân tích rõ ràng. Mỗi ô là một mô tả khái quát có giới hạn, không phải thước đo hoặc phổ chính trị tuyệt đối.": "Place two traditions side by side across clear analytical dimensions. Each cell is a bounded general description, not a measure or an absolute political spectrum.",
  "Truyền thống thứ nhất": "First tradition",
  "Truyền thống thứ hai": "Second tradition",
  "Cập nhật bảng": "Update table",
  "Phương pháp: so sánh dựa trên mô tả của các mục demo và phải được đọc cùng nguồn, thời kỳ cùng sự đa dạng nội bộ của từng truyền thống.": "Method: this comparison draws on the demo entries and should be read with sources, historical periods, and the internal diversity of each tradition.",
  "Chiều phân tích": "Analytical dimension",
  "Tóm tắt": "Summary",
  "Cần xem mục chi tiết.": "See the detailed entry.",
  "Đọc từng truyền thống trong bối cảnh riêng": "Read each tradition in its own context",
  "Mục thứ nhất": "First entry",
  "Mục thứ hai": "Second entry",
  "Hệ tư tưởng": "Ideologies",
  "MỤC THAM CHIẾU · ĐA DẠNG NỘI BỘ": "REFERENCE ENTRY · INTERNAL DIVERSITY",
  "Một hệ tư tưởng là một truyền thống có lịch sử, văn bản, biến thể và những tranh luận nội bộ — không chỉ là một vị trí trên trục đơn giản.": "An ideology is a tradition with history, texts, variants, and internal debate—not merely a position on a simple axis.",
  "Những chiều tham chiếu": "Reference dimensions",
  "Ghi chú về cách đọc": "Reading note",
  "So sánh trong PolitiCore dùng các tiêu chí minh bạch để định hướng, nhưng không thay thế việc đọc nguồn gốc hay các nghiên cứu về trường phái, địa điểm và thời kỳ cụ thể.": "PolitiCore uses transparent criteria to orient comparison, but they do not replace reading primary sources or research on particular schools, places, and periods.",
  "Nguồn liên quan": "Related sources",
  "Chưa có nguồn được gắn trong demo.": "No sources are attached in this demo.",
  "Đi tới công cụ": "Go to tool",
  "So sánh hai hệ tư tưởng": "Compare two ideologies",
  "Lịch sử &amp; bối cảnh": "History &amp; context",
  "Lọc các sự kiện mẫu theo khu vực và chủ đề. Từng điểm trên dòng thời gian dẫn về bối cảnh, nguồn hoặc mục liên quan thay vì chỉ gợi ý quan hệ nhân quả từ thứ tự thời gian.": "Filter sample events by region and topic. Each point leads to context, sources, or related entries rather than implying causation from chronological order alone.",
  "Mọi khu vực": "All regions",
  "Mọi chủ đề": "All topics",
  "Kết quả": "Results",
  "sự kiện": "events",
  "Bối cảnh toàn cầu": "Global context",
  "Không có sự kiện phù hợp": "No matching events",
  "Thử bỏ bớt bộ lọc để xem thêm mốc thời gian.": "Remove a filter to see more milestones.",
  "Xuất xứ &amp; bằng chứng": "Provenance &amp; evidence",
  "Nơi phân biệt tài liệu gốc với nguồn thứ cấp, đồng thời dẫn trở lại trang xuất bản hoặc kho lưu trữ công khai.": "A place to distinguish primary material from secondary sources, with links back to publisher pages or public archives.",
  "nguồn trong bộ dữ liệu demo": "sources in the demo dataset",
  "Đọc nguyên tắc biên tập": "Read editorial principles",
  "Mở nguồn gốc để xem toàn văn và thông tin xuất bản.": "Open the original source to view full text and publication information.",
  "Kho lưu trữ": "Archive",
  "↗ Mở nguồn": "↗ Open source",
  "Bài tham chiếu": "Reference entry",
  "Sự kiện": "Event",
  "Nguồn": "Source",
  "Mục": "Entry",
  "Khám phá tri thức": "Explore knowledge",
  "Tìm theo tiêu đề, khái niệm, mô tả, khu vực hoặc nhãn trong bộ dữ liệu demo.": "Search titles, concepts, descriptions, regions, or tags in the demo dataset.",
  "Ví dụ: dân chủ, chủ quyền, Việt Nam...": "For example: democracy, sovereignty, Vietnam…",
  "Từ khoá tìm kiếm": "Search keywords",
  "kết quả cho": "results for",
  "Nhập từ khoá để bắt đầu": "Enter keywords to begin",
  "Bài viết": "Reference entries",
  "Chưa có kết quả phù hợp": "No matching results",
  "Thử một từ khoá ngắn hơn hoặc chuyển sang tìm tất cả loại mục.": "Try a shorter keyword or search all entry types.",
  "Bắt đầu với một câu hỏi": "Start with a question",
  "Ví dụ: “chủ quyền”, “hệ thống nghị viện” hoặc “tính chính danh”.": "For example: “sovereignty”, “parliamentary system”, or “legitimacy”.",
  "Có thể truy nguồn": "Traceable",
  "Những khẳng định quan trọng cần dẫn về văn bản gốc hoặc tài liệu học thuật có thể kiểm tra, thay vì chỉ xuất hiện như một kết luận vô danh.": "Important claims should lead to primary texts or checkable scholarly sources, rather than appearing as anonymous conclusions.",
  "Có bối cảnh": "Contextual",
  "Khái niệm, thể chế và sự kiện được trình bày cùng thời kỳ, phạm vi và giới hạn — đặc biệt khi việc phân loại còn có tranh luận.": "Concepts, institutions, and events are presented with their period, scope, and limits—especially where classification is debated.",
  "Không đảng phái": "Non-partisan",
  "PolitiCore không được thiết kế như nơi cổ động. Sự cân bằng nằm ở cách trình bày bằng chứng và các bất đồng học thuật một cách trung thực.": "PolitiCore is not designed for advocacy. Balance comes from presenting evidence and scholarly disagreement honestly.",
  "Có thể mở rộng": "Extensible",
  "Bản demo dùng dữ liệu địa phương có cấu trúc để mô phỏng cách một hệ thống nội dung, nguồn và quan hệ có thể lớn dần mà không phải thiết kế lại.": "This demo uses structured local data to show how a content, source, and relationship system can grow without being redesigned.",
  "Về sản phẩm": "About the product",
  "Tri thức là sản phẩm.": "Knowledge is a product.",
  "PolitiCore là một mẫu giao diện cho bách khoa chính trị có cấu trúc, lấy việc tra cứu, so sánh và lần theo nguồn làm trải nghiệm cốt lõi.": "PolitiCore is an interface prototype for a structured political encyclopedia, centred on lookup, comparison, and following sources.",
  "Đây là bản demo chạy cục bộ. Những mục có sẵn được gắn nhãn dữ liệu demo, không giả định tích hợp cơ sở dữ liệu trực tuyến hoặc tình trạng chính trị theo thời gian thực.": "This is a local demo. Available entries are labelled as demo data; it does not assume a live online database or real-time political status.",
  "Tiếp tục khám phá": "Keep exploring",
  "Không tìm thấy": "Not found",
  "Mục này chưa có trong bản demo.": "This entry is not in the demo yet.",
  "Hãy quay lại thư viện để tiếp tục từ một khái niệm, quốc gia hoặc nguồn tư liệu khác.": "Return to the library and continue from another concept, country, or source.",
  "Về trang khám phá": "Back to Explore",
  "Đóng tìm kiếm": "Close search",
  "Tìm khái niệm, quốc gia, nguồn...": "Search concepts, countries, sources…",
  "Chưa có kết quả khớp. Thử một từ khoá ngắn hơn hoặc mở trang tìm kiếm để xem toàn bộ.": "No matching results. Try a shorter keyword or open the search page to see everything.",
  "Gợi ý: Dân chủ · Chủ quyền · Hiến pháp · Việt Nam · Đại diện": "Try: Democracy · Sovereignty · Constitution · Vietnam · Representation",
  "Đã sao chép liên kết mục tham chiếu.": "Reference-entry link copied.",
  "Không thể sao chép tự động. Bạn có thể sao chép URL trên thanh địa chỉ.": "Could not copy automatically. Copy the URL from the address bar instead.",
  "Trích dẫn gợi ý: PolitiCore, mục tham chiếu demo, truy cập 10.10.2026.": "Suggested citation: PolitiCore, demo reference entry, accessed 10 Oct 2026.",
};

const uiTextEntries = Object.entries(uiText).sort(([a], [b]) => b.length - a.length);

function translateUiText(value = "") {
  if (currentLanguage === "vi") return String(value);
  return uiTextEntries.reduce((result, [vietnamese, english]) => result.replaceAll(vietnamese, english), String(value));
}

function routeFor(record) {
  if (!record) return "home";
  if (record.type === "article") return `article/${record.slug}`;
  if (record.type === "country") return `country/${record.slug}`;
  if (record.type === "ideology") return `ideology/${record.slug}`;
  if (record.type === "glossary") return `glossary?term=${encodeURIComponent(record.term)}`;
  if (record.type === "event") return "timeline";
  if (record.type === "source") return "sources";
  return "home";
}

function navigate(path) {
  location.hash = `#${path}`;
}

function getRoute() {
  const hash = location.hash.replace(/^#\/?/, "") || "home";
  const [path, queryString = ""] = hash.split("?");
  return {
    path: path || "home",
    params: new URLSearchParams(queryString),
  };
}

function icon(name, size = 18) {
  const attrs = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
  const icons = {
    search: `<svg ${attrs}><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4.4 4.4"></path></svg>`,
    sun: `<svg ${attrs}><circle cx="12" cy="12" r="3.7"></circle><path d="M12 2.6v2.1M12 19.3v2.1M21.4 12h-2.1M4.7 12H2.6M18.65 5.35l-1.48 1.48M6.83 17.17l-1.48 1.48M18.65 18.65l-1.48-1.48M6.83 6.83 5.35 5.35"></path></svg>`,
    moon: `<svg ${attrs}><path d="M20.6 14.6A8.6 8.6 0 0 1 9.4 3.4a8.6 8.6 0 1 0 11.2 11.2Z"></path></svg>`,
    menu: `<svg ${attrs}><path d="M4 7h16M4 12h16M4 17h16"></path></svg>`,
    close: `<svg ${attrs}><path d="m6 6 12 12M18 6 6 18"></path></svg>`,
    arrow: `<svg ${attrs}><path d="M5 12h13"></path><path d="m13 6 6 6-6 6"></path></svg>`,
    book: `<svg ${attrs}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"></path><path d="M4 5.5v14"></path></svg>`,
    network: `<svg ${attrs}><circle cx="6" cy="6" r="2.3"></circle><circle cx="18" cy="7" r="2.3"></circle><circle cx="12" cy="18" r="2.3"></circle><path d="m7.9 7.3 7.9-.7M7.3 7.9l3.5 8M16.9 8.8l-3.4 7"></path></svg>`,
    external: `<svg ${attrs}><path d="M14 4h6v6"></path><path d="M20 4 10 14"></path><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"></path></svg>`,
    copy: `<svg ${attrs}><rect x="8" y="8" width="12" height="12" rx="1"></rect><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"></path></svg>`,
  };
  return icons[name] || "";
}

function statusLine(record) {
  const update = record?.updated || record?.lastReviewed || "10.10.2026";
  return `<div class="card-meta"><span class="pill">Đã biên tập</span><span>Cập nhật ${escapeHtml(update)}</span></div>`;
}

function topicName(topic) {
  return topic?.name || topic?.title || "";
}

function topicKey(topic) {
  return topic?.id || topic?.slug || topicName(topic);
}

function articleByReference(reference) {
  return currentRecordByReference(reference, articles, sourceArticles, englishCopy.articles);
}

function articlePath(reference, fallback = articles[0]?.slug || "") {
  return articleByReference(reference)?.slug || fallback;
}

function header(activeRoute) {
  const nav = [
    ["home", "Khám phá"],
    ["encyclopedia", "Bách khoa"],
    ["glossary", "Thuật ngữ"],
    ["countries", "Quốc gia"],
    ["compare", "So sánh"],
    ["timeline", "Dòng thời gian"],
    ["sources", "Nguồn tư liệu"],
  ];
  const normalized = activeRoute.startsWith("article") ? "encyclopedia" : activeRoute.startsWith("country") ? "countries" : activeRoute.startsWith("ideology") ? "compare" : activeRoute;

  return `
    <div class="utility-bar">
      <div class="utility-mark"><span class="status-dot"></span> THƯ VIỆN THAM CHIẾU · BẢN DEMO CÓ NGUỒN</div>
      <div class="utility-note">Phi đảng phái · Ưu tiên bằng chứng &amp; ngữ cảnh</div>
    </div>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#home" aria-label="PolitiCore — trang chủ">
          <span class="brand-mark" aria-hidden="true"></span><span>PolitiCore</span>
        </a>
        <nav class="main-nav" aria-label="Điều hướng chính">
          ${nav.map(([route, label]) => `<a href="#${route}" class="${normalized === route ? "active" : ""}" ${normalized === route ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <div class="language-switch is-${currentLanguage}" role="group" aria-label="Chọn ngôn ngữ">
            <button class="${currentLanguage === "en" ? "active" : ""}" type="button" data-language="en" aria-label="Tiếng Anh" aria-pressed="${currentLanguage === "en"}">EN</button>
            <button class="${currentLanguage === "vi" ? "active" : ""}" type="button" data-language="vi" aria-label="Tiếng Việt" aria-pressed="${currentLanguage === "vi"}">VI</button>
          </div>
          <button class="theme-toggle ${currentTheme === "dark" ? "is-dark" : ""}" type="button" data-action="toggle-theme" aria-pressed="${currentTheme === "dark"}" aria-label="${themeToggleLabel()}" title="${themeToggleLabel()}">
            <span class="theme-toggle-thumb" aria-hidden="true">
              <span class="theme-toggle-glyph theme-toggle-sun">${icon("sun", 14)}</span>
              <span class="theme-toggle-glyph theme-toggle-moon">${icon("moon", 14)}</span>
            </span>
          </button>
          <button class="search-trigger" type="button" data-action="open-search" aria-label="Mở tìm kiếm">
            ${icon("search", 16)}<span>Tìm kiếm</span><span class="key-hint">⌘K</span>
          </button>
          <button class="icon-button menu-button" type="button" data-action="toggle-menu" aria-label="Mở menu">
            ${icon("menu", 19)}
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Điều hướng di động" hidden>
      ${nav.map(([route, label]) => `<a href="#${route}" ${normalized === route ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      <a href="#about">Về PolitiCore</a>
    </nav>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <a class="footer-brand" href="#home"><span class="brand-mark" aria-hidden="true"></span><span>PolitiCore</span></a>
          <p class="footer-copy">Một cấu trúc tham chiếu để kết nối khái niệm, thể chế, lịch sử và bằng chứng — không phải một dòng tin tức hay lời kêu gọi chính trị.</p>
        </div>
        <nav class="footer-nav" aria-label="Điều hướng chân trang">
          <a href="#encyclopedia">Bách khoa</a>
          <a href="#glossary">Thuật ngữ</a>
          <a href="#countries">Hồ sơ quốc gia</a>
          <a href="#compare">So sánh</a>
          <a href="#timeline">Dòng thời gian</a>
          <a href="#sources">Thư viện nguồn</a>
          <a href="#about">Nguyên tắc biên tập</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>POLITICORE · LOCAL REFERENCE DEMO</span>
        <span>Dữ liệu minh hoạ có liên kết nguồn gốc · Không thay thế nghiên cứu chuyên môn</span>
      </div>
    </footer>
  `;
}

function atlasSvg() {
  return `
    <svg class="atlas-canvas" viewBox="0 0 520 480" role="img" aria-labelledby="atlas-title atlas-desc">
      <title id="atlas-title">Bản đồ các khái niệm chính trị liên kết</title>
      <desc id="atlas-desc">Quyền lực nằm ở trung tâm và kết nối với nhà nước, pháp quyền, đại diện, chủ quyền, hiến pháp và tham gia chính trị.</desc>
      <g>
        <line class="atlas-line" x1="254" y1="226" x2="109" y2="137"></line>
        <line class="atlas-line" x1="254" y1="226" x2="399" y2="119"></line>
        <line class="atlas-line" x1="254" y1="226" x2="405" y2="342"></line>
        <line class="atlas-line" x1="254" y1="226" x2="122" y2="363"></line>
        <line class="atlas-line" x1="254" y1="226" x2="246" y2="75"></line>
        <line class="atlas-line faint" x1="109" y1="137" x2="246" y2="75"></line>
        <line class="atlas-line faint" x1="399" y1="119" x2="405" y2="342"></line>
        <line class="atlas-line faint" x1="122" y1="363" x2="405" y2="342"></line>
        <line class="atlas-line faint" x1="109" y1="137" x2="122" y2="363"></line>
        <line class="atlas-line faint" x1="246" y1="75" x2="399" y2="119"></line>
      </g>
      <a href="#article/dan-chu" class="atlas-node main">
        <circle cx="254" cy="226" r="12"></circle>
        <text class="node-label" x="254" y="254" text-anchor="middle">Quyền lực</text>
      </a>
      <a href="#article/chu-quyen" class="atlas-node">
        <circle cx="109" cy="137" r="6"></circle>
        <text class="node-label" x="109" y="119" text-anchor="middle">Nhà nước</text>
      </a>
      <a href="#article/tinh-chinh-danh-chinh-tri" class="atlas-node">
        <circle cx="399" cy="119" r="6"></circle>
        <text class="node-label" x="399" y="100" text-anchor="middle">Tính chính danh</text>
      </a>
      <a href="#article/dai-dien-theo-ty-le" class="atlas-node">
        <circle cx="405" cy="342" r="6"></circle>
        <text class="node-label" x="405" y="367" text-anchor="middle">Đại diện</text>
      </a>
      <a href="#article/chu-quyen" class="atlas-node">
        <circle cx="122" cy="363" r="6"></circle>
        <text class="node-label" x="122" y="389" text-anchor="middle">Chủ quyền</text>
      </a>
      <a href="#article/chu-nghia-hien-phap" class="atlas-node">
        <circle cx="246" cy="75" r="6"></circle>
        <text class="node-label" x="246" y="55" text-anchor="middle">Hiến pháp</text>
      </a>
    </svg>
  `;
}

function renderHome() {
  const feature = articles.find((item) => item.id === "democracy") || articles[0];
  const homeTopics = topics.slice(0, 6);
  const homeEvents = events.slice(0, 4);
  const homeCountries = countries.slice(0, 4);
  const homeSources = sources.slice(0, 4);

  return `
    <section class="hero">
      <div class="page-width hero-grid">
        <div>
          <p class="eyebrow">Bách khoa tri thức chính trị</p>
          <h1>Hiểu chính trị<br />qua những <em>mối liên hệ.</em></h1>
          <p class="hero-intro">Khám phá khái niệm, thể chế, lịch sử và các nguồn tư liệu — từ một câu hỏi rộng đến một chi tiết cần kiểm chứng.</p>
          <form class="main-search" data-search-form>
            <span class="search-icon" aria-hidden="true">${icon("search", 20)}</span>
            <input name="query" autocomplete="off" placeholder="Bạn muốn hiểu điều gì về chính trị?" aria-label="Tìm trong PolitiCore" />
            <button type="submit">Tìm hiểu</button>
          </form>
          <div class="suggested-searches" aria-label="Gợi ý tìm kiếm">
            <span class="suggested-label">Bắt đầu với</span>
            ${["Dân chủ", "Chủ quyền", "Phân quyền", "Chủ nghĩa tự do", "Tính chính danh"].map((term) => `<button class="search-chip" type="button" data-search-term="${term}">${term}</button>`).join("")}
          </div>
          <div class="hero-proof" aria-label="Phạm vi thư viện">
            <div class="proof-item"><span class="proof-value">${topics.length}</span><span class="proof-label">miền tri thức<br />có thể mở rộng</span></div>
            <div class="proof-item"><span class="proof-value">${articles.length}</span><span class="proof-label">mục tham chiếu<br />được liên kết</span></div>
            <div class="proof-item"><span class="proof-value">${sources.length}</span><span class="proof-label">nguồn chính &amp;<br />học thuật</span></div>
          </div>
        </div>
        <section class="atlas-panel" aria-label="Bản đồ tri thức trực quan">
          <span class="atlas-label">Bản đồ tri thức · Mẫu liên kết</span>
          ${atlasSvg()}
          <div class="atlas-legend"><span class="legend-dot"></span><span>chọn một nút để mở mục liên quan</span></div>
          <p class="atlas-caption">Chính trị được hiểu rõ hơn khi các ý tưởng, thiết chế và bối cảnh lịch sử được đặt trong cùng một khung tham chiếu.</p>
        </section>
      </div>
    </section>

    <section class="page-section border-top">
      <div class="page-width topic-editorial-grid">
        <div>
          <p class="section-kicker">Khám phá theo miền</p>
          <h2 class="section-heading">Một câu hỏi có thể mở ra cả một hệ thống.</h2>
          <p class="section-description">Bắt đầu từ điểm bạn cần — rồi lần theo các kết nối sang lý thuyết, lịch sử, quốc gia, tư liệu và tranh luận học thuật.</p>
          <div class="topic-list" style="margin-top:30px">
            ${homeTopics.map((topic, index) => `
              <button class="topic-row" type="button" data-route="encyclopedia?domain=${encodeURIComponent(topicKey(topic))}">
                <span class="topic-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="topic-name">${escapeHtml(topicName(topic))}</span>
                <span class="topic-count">${topic.count || "Khám phá mục"}</span>
                <span class="topic-arrow">→</span>
              </button>
            `).join("")}
          </div>
          <a class="text-link" style="margin-top:23px" href="#encyclopedia">Xem toàn bộ taxonomy</a>
        </div>
        <article class="feature-paper">
          ${statusLine(feature)}
          <h3>${escapeHtml(feature?.title || "Dân chủ")}</h3>
          <p>${escapeHtml(feature?.summary || "Một khái niệm chính trị cần được đọc trong bối cảnh thể chế, lịch sử và các tranh luận về thực hành.")}</p>
          <a class="article-link" href="#article/${feature?.slug || "democracy"}">Đọc mục tham chiếu</a>
        </article>
      </div>
    </section>

    <section class="connection-strip">
      <div class="connection-strip-inner">
        <div>
          <p class="section-kicker">Tri thức có kết nối</p>
          <h2 class="section-heading">Đừng chỉ đọc một khái niệm. Hãy nhìn cấu trúc quanh nó.</h2>
          <p class="section-description">Mỗi mối quan hệ trong bản demo đều xuất phát từ dữ liệu cùng với các mục tham chiếu liên quan.</p>
        </div>
        <div class="connection-map" aria-label="Các khái niệm liên quan tới dân chủ">
          <svg viewBox="0 0 560 175" role="img" aria-hidden="true">
            <g fill="none" stroke="rgba(230,209,168,.5)" stroke-width="1">
              <path d="M280 85 L120 35 M280 85 L440 34 M280 85 L452 138 M280 85 L98 137"></path>
              <path d="M120 35 L98 137 M440 34 L452 138"></path>
            </g>
            <circle cx="280" cy="85" r="7" fill="#b98538"></circle>
            <circle cx="120" cy="35" r="4" fill="#f7f4ed"></circle>
            <circle cx="440" cy="34" r="4" fill="#f7f4ed"></circle>
            <circle cx="452" cy="138" r="4" fill="#f7f4ed"></circle>
            <circle cx="98" cy="137" r="4" fill="#f7f4ed"></circle>
          </svg>
          <a class="concept-tag central" href="#article/dan-chu" style="left:calc(50% - 48px);top:70px">Dân chủ</a>
          <a class="concept-tag" href="#article/dai-dien-theo-ty-le" style="left:5%;top:8px">Đại diện</a>
          <a class="concept-tag" href="#article/tinh-chinh-danh-chinh-tri" style="right:4%;top:8px">Chính danh</a>
          <a class="concept-tag" href="#article/chu-nghia-hien-phap" style="right:2%;bottom:7px">Hiến pháp</a>
          <a class="concept-tag" href="#article/chu-quyen" style="left:1%;bottom:7px">Chủ quyền</a>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-width timeline-grid">
        <div class="timeline-intro">
          <p class="section-kicker">Lịch sử có ngữ cảnh</p>
          <h2 class="section-heading">Dòng thời gian không chỉ là danh sách ngày tháng.</h2>
          <p class="section-description">Điểm vào để xem sự kiện, văn bản và thiết chế đã được kết nối như thế nào trong từng bối cảnh.</p>
          <a class="text-link" style="margin-top:22px" href="#timeline">Mở dòng thời gian</a>
        </div>
        <div class="timeline-list">
          ${homeEvents.map((event) => `
            <article class="timeline-item">
              <div class="timeline-year">${escapeHtml(event.year)}</div>
              <div class="timeline-content">
                <h3>${escapeHtml(event.title)}</h3>
                <p>${escapeHtml(event.summary)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="page-section border-top">
      <div class="page-width">
        <div class="section-header">
          <div>
            <p class="section-kicker">Hồ sơ quốc gia</p>
            <h2 class="section-heading">Đọc hệ thống chính trị trong bối cảnh riêng của mỗi nơi.</h2>
          </div>
          <a class="text-link" href="#countries">Duyệt thư mục quốc gia</a>
        </div>
        <div class="directory-panel">
          <div class="country-grid">
            ${homeCountries.map((country) => countryCard(country)).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="page-width compare-callout">
      <div>
        <p class="section-kicker">So sánh có tiêu chí</p>
        <h2 class="section-heading">Các hệ tư tưởng không phải những nhãn cố định.</h2>
        <p class="section-description">Đặt các truyền thống tư tưởng cạnh nhau theo từng chiều phân tích, đồng thời giữ lại tính đa dạng và những giới hạn của so sánh.</p>
        <a class="text-link" href="#compare">Mở công cụ so sánh</a>
      </div>
      <a href="#compare" class="mini-matrix" aria-label="Mở bảng so sánh hệ tư tưởng">
        <div class="mini-matrix-row header"><span>Chiều xem xét</span><span>Truyền thống A</span><span>Truyền thống B</span></div>
        <div class="mini-matrix-row"><strong>Vai trò của nhà nước</strong><span><i class="matrix-mark"></i>diễn giải theo dòng</span><span><i class="matrix-mark alt"></i>diễn giải theo dòng</span></div>
        <div class="mini-matrix-row"><strong>Tổ chức kinh tế</strong><span><i class="matrix-mark"></i>không giản lược</span><span><i class="matrix-mark alt"></i>không giản lược</span></div>
        <div class="mini-matrix-row"><strong>Các trường phái nội bộ</strong><span><i class="matrix-mark"></i>có ghi chú</span><span><i class="matrix-mark alt"></i>có ghi chú</span></div>
      </a>
    </section>

    <section class="source-band">
      <div class="page-width source-layout">
        <div>
          <p class="section-kicker">Nguồn &amp; văn bản</p>
          <h2 class="section-heading">Tranh luận tốt bắt đầu bằng nguồn có thể truy lại.</h2>
          <p class="section-description">Phân biệt tài liệu gốc với diễn giải học thuật, hiển thị rõ xuất xứ và lối dẫn về văn bản.</p>
          <a class="text-link" style="margin-top:22px" href="#sources">Vào thư viện nguồn</a>
        </div>
        <div class="source-list">
          ${homeSources.map((source) => sourceRow(source)).join("")}
        </div>
      </div>
    </section>
  `;
}

function countryCard(country) {
  return `
    <a class="country-card" href="#country/${country.slug}">
      <span class="country-region">${escapeHtml(country.region)}</span>
      <h3>${escapeHtml(country.name)}</h3>
      <p class="country-sub">${escapeHtml(country.form || country.system || country.overview || "Hồ sơ tham chiếu")}</p>
      <span class="country-arrow">→</span>
    </a>
  `;
}

function sourceRow(source) {
  return `
    <a class="source-row" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
      <span class="source-type">${escapeHtml(source.kind || source.type || "Nguồn")}</span>
      <span class="source-name">${escapeHtml(source.title)}<span class="source-year">${escapeHtml(source.publisher || source.author || "Nguồn tham chiếu")}</span></span>
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

function pageHero(kicker, title, lede, crumbs = []) {
  return `
    <section class="page-hero">
      <div class="page-width">
        ${crumbs.length ? `<nav class="bread-crumbs" aria-label="Breadcrumb">${crumbs.map((item, index) => item.href ? `<a href="${item.href}">${escapeHtml(item.label)}</a><span>/</span>` : `<span>${escapeHtml(item.label)}</span>`).join("")}</nav>` : ""}
        <p class="eyebrow">${escapeHtml(kicker)}</p>
        <h1 class="display-title">${escapeHtml(title)}</h1>
        <p class="page-lede">${escapeHtml(lede)}</p>
      </div>
    </section>
  `;
}

function renderEncyclopedia(params) {
  const selected = params.get("domain") || "all";
  const matchingTopics = selected === "all"
    ? topics
    : topics.filter((topic) => [topicKey(topic), topicName(topic)].includes(selected));
  const domainNames = matchingTopics.map((topic) => topicName(topic));
  const records = selected === "all"
    ? articles
    : articles.filter((article) => domainNames.includes(article.domain) || article.topicId === selected || article.domainId === selected || article.domain === selected);

  return `
    ${pageHero("Thư viện tham chiếu", "Bách khoa chính trị", "Một cấu trúc phân cấp để bắt đầu từ miền kiến thức, đi vào chủ đề, rồi mở các mục tham chiếu có nguồn.")}
    <div class="page-width">
      <div class="tool-bar">
        <span class="result-count">${records.length} mục trong bộ dữ liệu demo</span>
        <div class="filter-group" aria-label="Lọc theo miền">
          <button class="filter-button ${selected === "all" ? "active" : ""}" data-route="encyclopedia">Tất cả</button>
          ${topics.slice(0, 5).map((topic) => `<button class="filter-button ${selected === topicKey(topic) ? "active" : ""}" data-route="encyclopedia?domain=${encodeURIComponent(topicKey(topic))}">${escapeHtml(topic.shortName || topicName(topic))}</button>`).join("")}
        </div>
      </div>
      <div class="content-grid">
        <aside class="side-panel" aria-label="Taxonomy bách khoa">
          <p class="side-panel-heading">10 miền tri thức</p>
          ${fullTaxonomy.map((name, index) => `<a class="taxonomy-link ${domainNames.includes(name) ? "active" : ""}" href="#encyclopedia">${escapeHtml(name)}<small>${String(index + 1).padStart(2, "0")}</small></a>`).join("")}
        </aside>
        <section>
          <div class="article-tiles">
            ${records.length ? records.map(articleTile).join("") : emptyState("Chưa có mục phù hợp", "Hãy thử một miền khác hoặc quay lại danh mục đầy đủ.")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function articleTile(article) {
  return `
    <a class="article-tile" href="#article/${article.slug}">
      ${statusLine(article)}
      <h3>${escapeHtml(article.title)}</h3>
      <p class="article-tile-summary">${escapeHtml(article.summary)}</p>
      <div class="tile-bottom"><span>${escapeHtml(article.domain || "Tham chiếu")}</span><span>Đọc →</span></div>
    </a>
  `;
}

function emptyState(title, description) {
  return `<div class="empty-state"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p></div>`;
}

function renderArticle(slug) {
  const article = currentRecordByReference(slug, articles, sourceArticles, englishCopy.articles);
  if (!article) return renderNotFound();
  const content = normalizedContent(article);
  const related = article.related || article.relatedSlugs || relationships
    .filter((relation) => relation.sourceId === article.id || relation.targetId === article.id)
    .map((relation) => relation.sourceId === article.id ? relation.targetId : relation.sourceId);
  const relatedArticles = related
    .map((id) => articles.find((item) => item.id === id || item.slug === id))
    .filter(Boolean)
    .slice(0, 4);
  const articleSources = (article.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);

  return `
    ${pageHero(article.domain || "Mục tham chiếu", article.title, article.summary, [{ label: "Bách khoa", href: "#encyclopedia" }, { label: article.domain || "Mục tham chiếu" }, { label: article.title }])}
    <div class="page-width article-layout">
      <article class="article-main">
        <header class="article-header">
          <p class="article-domain">${escapeHtml(article.domain || "Bách khoa chính trị")} · ${escapeHtml(article.readTime || "7 phút đọc")}</p>
          <h1 class="article-title">${escapeHtml(article.title)}</h1>
          <p class="article-dek">${escapeHtml(article.dek || article.summary)}</p>
          <div class="article-actions">
            <button class="small-action" type="button" data-action="copy-link">${icon("copy", 14)} Sao chép liên kết</button>
            <button class="small-action" type="button" data-action="cite-article">${icon("book", 14)} Trích dẫn mục này</button>
          </div>
        </header>
        <div class="article-body">
          <p class="lead">${escapeHtml(article.intro || article.summary)}</p>
          <div class="definition-box"><strong>Định nghĩa ngắn</strong><p>${escapeHtml(article.definition || article.summary)}</p></div>
          ${content.map((section, index) => `
            <section id="section-${index + 1}">
              <h2>${escapeHtml(section.heading)}</h2>
              ${section.paragraphs.map((paragraph, paragraphIndex) => `<p>${escapeHtml(paragraph)}${paragraphIndex === 0 && articleSources.length ? `<sup class="citation">[${Math.min(index + 1, articleSources.length)}]</sup>` : ""}</p>`).join("")}
            </section>
            ${index === 0 ? articleFigure(article) : ""}
          `).join("")}

          <section class="related-panel">
            <h2>Mở rộng từ đây</h2>
            <div class="related-list">
              ${relatedArticles.length ? relatedArticles.map((relatedArticle) => `<a href="#article/${relatedArticle.slug}"><span>${escapeHtml(relatedArticle.title)}</span><span>→</span></a>`).join("") : `<a href="#encyclopedia"><span>Khám phá thêm mục trong bách khoa</span><span>→</span></a>`}
            </div>
          </section>

          <section class="references" id="references">
            <h2>Nguồn &amp; ghi chú</h2>
            ${articleSources.length ? articleSources.map((source, index) => `
              <div class="reference-item"><span class="reference-number">${index + 1}</span><span><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a> · ${escapeHtml(source.publisher || source.author || source.kind || "Nguồn tham chiếu")}</span></div>
            `).join("") : `<p class="article-tile-summary">Mục demo này chưa được gắn nguồn chi tiết. Hãy xem thư viện nguồn để kiểm tra dữ liệu có sẵn.</p>`}
          </section>
        </div>
      </article>
      <aside class="article-aside">
        <section class="aside-box">
          <h3>Trong mục này</h3>
          ${content.map((section, index) => `<a class="toc-link" href="#section-${index + 1}">${String(index + 1).padStart(2, "0")}. ${escapeHtml(section.heading)}</a>`).join("")}
          <a class="toc-link" href="#references">Nguồn &amp; ghi chú</a>
        </section>
        <section class="aside-box">
          <h3>Thông tin biên tập</h3>
          <div class="aside-fact"><span>Trạng thái</span><strong>Đã biên tập</strong></div>
          <div class="aside-fact"><span>Cập nhật</span><strong>${escapeHtml(article.updated || article.lastReviewed || "10.10.2026")}</strong></div>
          <div class="aside-fact"><span>Chế độ dữ liệu</span><strong>Tham chiếu demo</strong></div>
        </section>
      </aside>
    </div>
  `;
}

function normalizedContent(article) {
  if (Array.isArray(article.content) && article.content.length) {
    return article.content.map((section) => {
      if (typeof section === "string") return { heading: "Góc nhìn tham chiếu", paragraphs: [section] };
      return {
        heading: section.heading || section.title || "Góc nhìn tham chiếu",
        paragraphs: Array.isArray(section.paragraphs) ? section.paragraphs : [section.body || section.text || article.summary],
      };
    });
  }
  return [
    { heading: "Phạm vi và cách dùng", paragraphs: [article.summary, "Mục tham chiếu này được thiết kế để định hướng khái niệm, dẫn đến các nguồn có thể kiểm tra và mở ra những liên hệ phù hợp."] },
    { heading: "Bối cảnh và tranh luận", paragraphs: ["Trong khoa học chính trị, cùng một thuật ngữ có thể được dùng theo nhiều truyền thống nghiên cứu. Vì vậy, định nghĩa nên được đọc cùng phạm vi, tiêu chí và bối cảnh lịch sử của nó."] },
    { heading: "Các mối liên hệ", paragraphs: ["Khái niệm này liên quan đến những mục khác trong thư viện, giúp người đọc so sánh cơ chế, thiết chế và cách diễn giải thay vì coi nó như một nhãn độc lập."] },
  ];
}

function articleFigure(article) {
  const isSeparation = article.id === "separation-of-powers" || article.title.toLowerCase().includes("phân quyền");
  return `
    <figure class="article-figure">
      <strong class="figure-title">${isSeparation ? "Sơ đồ minh hoạ: các nhánh quyền lực" : "Lăng kính đọc mục tham chiếu"}</strong>
      ${isSeparation
        ? `<div class="power-diagram"><div class="power-node">Lập pháp<small>làm luật &amp; giám sát</small></div><div class="power-node">Hành pháp<small>thi hành &amp; quản trị</small></div><div class="power-node">Tư pháp<small>xét xử &amp; giải thích luật</small></div></div>`
        : `<div class="power-diagram"><div class="power-node">Khái niệm<small>định nghĩa &amp; phạm vi</small></div><div class="power-node">Bối cảnh<small>lịch sử &amp; thể chế</small></div><div class="power-node">Nguồn<small>văn bản &amp; nghiên cứu</small></div></div>`}
      <figcaption>Minh hoạ cấu trúc đọc trong bản demo; không thay thế mô tả pháp lý hoặc dữ liệu thực chứng chi tiết.</figcaption>
    </figure>
  `;
}

function renderGlossary(params) {
  const query = (params.get("q") || params.get("term") || "").trim().toLocaleLowerCase(currentLanguage);
  const letter = params.get("letter") || state.glossaryLetter;
  const records = glossary.filter((item) => {
    const term = (item.term || item.title || "").toLocaleLowerCase(currentLanguage);
    const definition = (item.definition || item.summary || "").toLocaleLowerCase(currentLanguage);
    const aliases = (item.aliases || []).join(" ").toLocaleLowerCase(currentLanguage);
    const matchQuery = !query || term.includes(query) || definition.includes(query) || aliases.includes(query);
    const matchLetter = letter === "all" || term.startsWith(letter.toLocaleLowerCase(currentLanguage));
    return matchQuery && matchLetter;
  });
  const grouped = records.reduce((groups, item) => {
    const first = (item.term || item.title || "?").charAt(0).toUpperCase();
    groups[first] ||= [];
    groups[first].push(item);
    return groups;
  }, {});
  const alphabet = [...new Set(glossary.map((item) => (item.term || item.title || "?").charAt(0).toUpperCase()))]
    .sort((a, b) => a.localeCompare(b, currentLanguage));

  return `
    ${pageHero("Thuật ngữ chính trị", "Từ điển khái niệm", "Định nghĩa ngắn để định hướng, cùng thuật ngữ tiếng Anh và đường dẫn sang các mục tham chiếu sâu hơn.")}
    <div class="page-width">
      <div class="tool-bar">
        <form class="filter-group" data-glossary-search>
          <input class="filter-select" name="term" value="${escapeHtml(params.get("q") || params.get("term") || "")}" placeholder="Tìm thuật ngữ..." aria-label="Tìm thuật ngữ" />
          <button class="filter-button" type="submit">Tìm</button>
        </form>
        <span class="result-count">${records.length} thuật ngữ trong bản demo</span>
      </div>
      <nav class="alpha-nav" aria-label="Duyệt theo chữ cái">
        <button class="${letter === "all" ? "active" : ""}" data-route="glossary">Tất</button>
        ${alphabet.map((char) => `<button class="${letter === char ? "active" : ""}" data-route="glossary?letter=${encodeURIComponent(char)}">${char}</button>`).join("")}
      </nav>
      <section class="glossary-list">
        ${Object.keys(grouped).length ? Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b, currentLanguage)).map(([char, items]) => `
          <section class="glossary-group">
            <div class="glossary-letter">${char}</div>
            <div class="glossary-entries">
              ${items.map((item) => `
                <a class="glossary-entry" href="#article/${articlePath(item.articleSlug || item.related?.[0])}">
                  <div class="glossary-term">${escapeHtml(item.term || item.title)}${item.english || item.translation ? `<span>${escapeHtml(item.english || item.translation)}</span>` : ""}</div>
                  <p class="glossary-definition">${escapeHtml(item.definition || item.summary)}</p>
                </a>
              `).join("")}
            </div>
          </section>
        `).join("") : emptyState("Không tìm thấy thuật ngữ", "Thử thay đổi từ khoá hoặc duyệt theo chữ cái.")}
      </section>
    </div>
  `;
}

function renderCountries(params) {
  const region = params.get("region") || "all";
  const visible = region === "all" ? countries : countries.filter((country) => country.region === region);
  const regions = [...new Set(countries.map((country) => country.region))];

  return `
    ${pageHero("Hồ sơ so sánh", "Quốc gia &amp; hệ thống", "Các hồ sơ được tổ chức theo bối cảnh, cấu trúc chính thức và đường dẫn về nguồn — không dùng nhãn phân loại như những kết luận tuyệt đối.")}
    <div class="page-width">
      <div class="tool-bar">
        <span class="result-count">${visible.length} hồ sơ trong dữ liệu demo</span>
        <div class="filter-group" aria-label="Lọc theo khu vực">
          <button class="filter-button ${region === "all" ? "active" : ""}" data-route="countries">Tất cả khu vực</button>
          ${regions.map((item) => `<button class="filter-button ${region === item ? "active" : ""}" data-route="countries?region=${encodeURIComponent(item)}">${escapeHtml(item)}</button>`).join("")}
        </div>
      </div>
      <section class="country-directory">
        ${visible.length ? visible.map((country) => `
          <a class="country-card" href="#country/${country.slug}">
            <span class="country-region">${escapeHtml(country.region)}</span>
            <h3>${escapeHtml(country.name)}</h3>
            <p class="country-sub">${escapeHtml(country.overview || country.form || country.system || "Hồ sơ tham chiếu")}</p>
            <div class="country-metadata"><span>${escapeHtml(country.form || "Xem hồ sơ")}</span><span>${escapeHtml(country.system || "Nguồn có dẫn")}</span></div>
            <span class="country-arrow">→</span>
          </a>
        `).join("") : emptyState("Không có hồ sơ ở khu vực này", "Hãy quay lại xem tất cả hồ sơ demo.")}
      </section>
    </div>
  `;
}

function renderCountry(slug) {
  const country = currentRecordByReference(slug, countries, sourceCountries, englishCopy.countries);
  if (!country) return renderNotFound();
  const countrySources = (country.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  const related = articles.filter((article) => (article.tags || []).some((tag) => String(tag).toLowerCase().includes(String(country.name).toLowerCase()))).slice(0, 3);

  return `
    ${pageHero(country.region || "Hồ sơ quốc gia", country.name, country.overview || country.summary || "Hồ sơ tham chiếu theo bối cảnh hiến pháp, thể chế và nguồn tư liệu.", [{ label: "Quốc gia", href: "#countries" }, { label: country.name }])}
    <div class="page-width article-layout">
      <article class="article-main">
        <header class="article-header">
          <p class="article-domain">${escapeHtml(country.region || "Hồ sơ quốc gia")} · HỒ SƠ DEMO</p>
          <h1 class="article-title">${escapeHtml(country.name)}</h1>
          <p class="article-dek">${escapeHtml(country.form || "Mô tả hình thức hiến pháp được ghi ở mức tham chiếu.")} ${country.system ? `· ${escapeHtml(country.system)}` : ""}</p>
        </header>
        <div class="article-body">
          <h2>Đọc hồ sơ này như thế nào</h2>
          <p class="lead">${escapeHtml(country.overview || "Mục này tổ chức một điểm vào về cấu trúc chính thức, bối cảnh lịch sử và nguồn tài liệu có thể kiểm tra.")}</p>
          <div class="definition-box"><strong>Giới hạn dữ liệu</strong><p>Hồ sơ demo không nêu chức danh đương nhiệm, số liệu hoặc phân loại gây tranh cãi nếu chưa có quá trình xác minh theo thời điểm. Hãy mở nguồn gốc để kiểm tra ngữ cảnh và phiên bản mới nhất.</p></div>
          <h2>Khung tham chiếu</h2>
          <p>Trong PolitiCore, mô tả về một quốc gia tách biệt giữa cấu trúc pháp lý chính thức, thực hành chính trị và các diễn giải học thuật. Một nhãn hệ thống không tự giải thích đầy đủ cách quyền lực vận hành trong từng thời kỳ.</p>
          <figure class="article-figure">
            <strong class="figure-title">Các lối vào hồ sơ</strong>
            <div class="power-diagram"><div class="power-node">Văn bản nền tảng<small>hiến pháp &amp; tài liệu gốc</small></div><div class="power-node">Thiết chế<small>cơ quan &amp; thẩm quyền</small></div><div class="power-node">Lịch sử<small>thay đổi &amp; bối cảnh</small></div></div>
            <figcaption>Khung tổ chức thông tin; không phải đánh giá hay xếp hạng quốc gia.</figcaption>
          </figure>
          <section class="references">
            <h2>Nguồn gắn với hồ sơ</h2>
            ${countrySources.length ? countrySources.map((source, index) => `<div class="reference-item"><span class="reference-number">${index + 1}</span><span><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a> · ${escapeHtml(source.publisher || source.author || "Nguồn tham chiếu")}</span></div>`).join("") : `<p class="article-tile-summary">Chưa có nguồn được gắn trực tiếp trong bản demo.</p>`}
          </section>
          <section class="related-panel">
            <h2>Đọc tiếp</h2>
            <div class="related-list">${related.length ? related.map((article) => `<a href="#article/${article.slug}"><span>${escapeHtml(article.title)}</span><span>→</span></a>`).join("") : `<a href="#encyclopedia"><span>Khám phá mục liên quan</span><span>→</span></a>`}</div>
          </section>
        </div>
      </article>
      <aside class="article-aside">
        <section class="aside-box">
          <h3>Tóm tắt hồ sơ</h3>
          <div class="aside-fact"><span>Khu vực</span><strong>${escapeHtml(country.region || "—")}</strong></div>
          <div class="aside-fact"><span>Hình thức</span><strong>${escapeHtml(country.form || "—")}</strong></div>
          <div class="aside-fact"><span>Khung hệ thống</span><strong>${escapeHtml(country.system || "Cần xem nguồn")}</strong></div>
        </section>
        <section class="aside-box">
          <h3>Tình trạng xác minh</h3>
          <div class="aside-fact"><span>Chế độ</span><strong>Demo có nguồn</strong></div>
          <div class="aside-fact"><span>Đương nhiệm</span><strong>Không hiển thị</strong></div>
          <div class="aside-fact"><span>Cập nhật</span><strong>${escapeHtml(country.updated || "10.10.2026")}</strong></div>
        </section>
      </aside>
    </div>
  `;
}

function renderCompare() {
  const first = ideologies.find((item) => item.slug === state.compareLeft) || ideologies[0];
  const second = ideologies.find((item) => item.slug === state.compareRight) || ideologies[1] || ideologies[0];
  const dimensions = [
    ["liberty", "Tự do &amp; bình đẳng"],
    ["state", "Vai trò của nhà nước"],
    ["economy", "Tổ chức kinh tế"],
    ["property", "Tài sản &amp; phân phối"],
    ["democracy", "Dân chủ &amp; thẩm quyền"],
    ["internationalism", "Quốc gia &amp; quốc tế"],
    ["history", "Phát triển &amp; đa dạng nội bộ"],
  ];
  return `
    ${pageHero("Công cụ tham chiếu", "So sánh hệ tư tưởng", "Đặt hai truyền thống cạnh nhau theo các chiều phân tích rõ ràng. Mỗi ô là một mô tả khái quát có giới hạn, không phải thước đo hoặc phổ chính trị tuyệt đối.")}
    <section class="page-width compare-page">
      <form class="compare-controls" data-compare-form>
        <label><span class="control-label">Truyền thống thứ nhất</span><select name="left">${ideologyOptions(first?.slug).join("")}</select></label>
        <label><span class="control-label">Truyền thống thứ hai</span><select name="right">${ideologyOptions(second?.slug).join("")}</select></label>
        <button class="button-primary" type="submit">Cập nhật bảng</button>
      </form>
      <p class="comparison-note">Phương pháp: so sánh dựa trên mô tả của các mục demo và phải được đọc cùng nguồn, thời kỳ cùng sự đa dạng nội bộ của từng truyền thống.</p>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead><tr><th>Chiều phân tích</th><th>${escapeHtml(first?.name || "—")}</th><th>${escapeHtml(second?.name || "—")}</th></tr></thead>
          <tbody>
            <tr><th>Tóm tắt</th><td>${escapeHtml(first?.summary || "—")}</td><td>${escapeHtml(second?.summary || "—")}</td></tr>
            ${dimensions.map(([key, label]) => `<tr><th>${label}</th><td>${escapeHtml(first?.dimensions?.[key] || "Cần xem mục chi tiết.")}</td><td>${escapeHtml(second?.dimensions?.[key] || "Cần xem mục chi tiết.")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
      <section class="related-panel">
        <h2>Đọc từng truyền thống trong bối cảnh riêng</h2>
        <div class="related-list"><a href="#ideology/${first?.slug}"><span>${escapeHtml(first?.name || "Mục thứ nhất")}</span><span>→</span></a><a href="#ideology/${second?.slug}"><span>${escapeHtml(second?.name || "Mục thứ hai")}</span><span>→</span></a></div>
      </section>
    </section>
  `;
}

function ideologyOptions(selected) {
  return ideologies.map((item) => `<option value="${item.slug}" ${selected === item.slug ? "selected" : ""}>${escapeHtml(item.name)}</option>`);
}

function renderIdeology(slug) {
  const ideology = currentRecordByReference(slug, ideologies, sourceIdeologies, englishCopy.ideologies);
  if (!ideology) return renderNotFound();
  const dimensionRows = Object.entries(ideology.dimensions || {});
  const sourceRecords = (ideology.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  return `
    ${pageHero("Hệ tư tưởng", ideology.name, ideology.summary, [{ label: "So sánh", href: "#compare" }, { label: ideology.name }])}
    <div class="page-width article-layout">
      <article class="article-main">
        <header class="article-header">
          <p class="article-domain">MỤC THAM CHIẾU · ĐA DẠNG NỘI BỘ</p>
          <h1 class="article-title">${escapeHtml(ideology.name)}</h1>
          <p class="article-dek">${escapeHtml(ideology.summary)}</p>
        </header>
        <div class="article-body">
          <p class="lead">Một hệ tư tưởng là một truyền thống có lịch sử, văn bản, biến thể và những tranh luận nội bộ — không chỉ là một vị trí trên trục đơn giản.</p>
          <h2>Những chiều tham chiếu</h2>
          <div class="related-list">
            ${dimensionRows.map(([key, value]) => `<div class="related-list"><span style="padding:15px;background:var(--white);font-family:var(--font-serif)">${escapeHtml(key)}</span><span style="padding:15px;background:var(--white);font-family:var(--font-serif);color:var(--ink-soft)">${escapeHtml(value)}</span></div>`).join("")}
          </div>
          <h2>Ghi chú về cách đọc</h2>
          <p>So sánh trong PolitiCore dùng các tiêu chí minh bạch để định hướng, nhưng không thay thế việc đọc nguồn gốc hay các nghiên cứu về trường phái, địa điểm và thời kỳ cụ thể.</p>
          <section class="references"><h2>Nguồn liên quan</h2>${sourceRecords.map((source, index) => `<div class="reference-item"><span class="reference-number">${index + 1}</span><span><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a></span></div>`).join("") || `<p class="article-tile-summary">Chưa có nguồn được gắn trong demo.</p>`}</section>
        </div>
      </article>
      <aside class="article-aside"><section class="aside-box"><h3>Đi tới công cụ</h3><a class="toc-link" href="#compare">So sánh hai hệ tư tưởng</a><a class="toc-link" href="#sources">Mở thư viện nguồn</a></section></aside>
    </div>
  `;
}

function renderTimeline(params) {
  const region = params.get("region") || "all";
  const tag = params.get("tag") || "all";
  const regions = [...new Set(events.map((event) => event.region).filter(Boolean))];
  const tags = [...new Set(events.flatMap((event) => event.tags || []))].slice(0, 8);
  const visible = events.filter((event) => (region === "all" || event.region === region) && (tag === "all" || (event.tags || []).includes(tag)));

  return `
    ${pageHero("Lịch sử &amp; bối cảnh", "Dòng thời gian", "Lọc các sự kiện mẫu theo khu vực và chủ đề. Từng điểm trên dòng thời gian dẫn về bối cảnh, nguồn hoặc mục liên quan thay vì chỉ gợi ý quan hệ nhân quả từ thứ tự thời gian.")}
    <section class="page-width timeline-page">
      <form class="timeline-filters" data-timeline-filter>
        <label><span class="control-label">Khu vực</span><select name="region"><option value="all">Mọi khu vực</option>${regions.map((item) => `<option value="${escapeHtml(item)}" ${region === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>
        <label><span class="control-label">Chủ đề</span><select name="tag"><option value="all">Mọi chủ đề</option>${tags.map((item) => `<option value="${escapeHtml(item)}" ${tag === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>
        <div><span class="control-label">Kết quả</span><div class="filter-select" style="display:flex;align-items:center">${visible.length} sự kiện</div></div>
      </form>
      <div class="timeline-list timeline-page-list">
        ${visible.length ? visible.map((event) => `
          <article class="timeline-item">
            <div class="timeline-year">${escapeHtml(event.year)}</div>
            <div class="timeline-content">
              <h3>${escapeHtml(event.title)}</h3>
              <p>${escapeHtml(event.summary)}</p>
              <div class="event-tags">${(event.tags || []).map((tagItem) => `<span>${escapeHtml(tagItem)}</span>`).join("")}</div>
            </div>
            <div class="event-region">${escapeHtml(event.region || "Bối cảnh toàn cầu")}</div>
          </article>
        `).join("") : emptyState("Không có sự kiện phù hợp", "Thử bỏ bớt bộ lọc để xem thêm mốc thời gian.")}
      </div>
    </section>
  `;
}

function renderSources() {
  return `
    ${pageHero("Xuất xứ &amp; bằng chứng", "Thư viện nguồn", "Nơi phân biệt tài liệu gốc với nguồn thứ cấp, đồng thời dẫn trở lại trang xuất bản hoặc kho lưu trữ công khai.")}
    <section class="page-width sources-page">
      <div class="tool-bar"><span class="result-count">${sources.length} nguồn trong bộ dữ liệu demo</span><a class="text-link" href="#about">Đọc nguyên tắc biên tập</a></div>
      <div class="source-library">
        ${sources.map((source) => `
          <a class="source-card" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
            <div class="card-meta"><span class="pill">${escapeHtml(source.kind || source.type || "Nguồn")}</span><span>${escapeHtml(source.year || "Tham chiếu")}</span></div>
            <h3>${escapeHtml(source.title)}</h3>
            <p>${escapeHtml(source.description || source.publisher || source.author || "Mở nguồn gốc để xem toàn văn và thông tin xuất bản.")}</p>
            <div class="source-card-footer"><span>${escapeHtml(source.publisher || source.author || "Kho lưu trữ")}</span><span>↗ Mở nguồn</span></div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function collectSearchRecords() {
  return [
    ...articles.map((item) => ({ ...item, type: "article", label: "Bài tham chiếu", text: [item.title, item.summary, item.domain, ...(item.tags || [])].join(" ") })),
    ...glossary.map((item) => ({ ...item, type: "glossary", title: item.term || item.title, summary: item.definition || item.summary, text: [item.term || item.title, item.english || "", ...(item.aliases || []), item.definition || item.summary || ""].join(" ") })),
    ...countries.map((item) => ({ ...item, type: "country", title: item.name, summary: item.overview || item.form || item.system, text: [item.name, item.region, item.form || "", item.system || "", item.overview || ""].join(" ") })),
    ...ideologies.map((item) => ({ ...item, type: "ideology", title: item.name, summary: item.summary, text: [item.name, item.summary, ...Object.values(item.dimensions || {})].join(" ") })),
    ...events.map((item) => ({ ...item, type: "event", title: item.title, summary: item.summary, text: [item.title, item.summary, item.region || "", ...(item.tags || [])].join(" ") })),
    ...sources.map((item) => ({ ...item, type: "source", summary: item.description || item.publisher || item.author, text: [item.title, item.publisher || "", item.author || "", item.description || ""].join(" ") })),
  ];
}

function searchRecords(query, type = "all") {
  const normalized = query.trim().toLocaleLowerCase(currentLanguage);
  if (!normalized) return [];
  const tokens = normalized.split(/\s+/).filter(Boolean);
  return collectSearchRecords()
    .filter((record) => type === "all" || record.type === type)
    .map((record) => {
      const haystack = (record.text || "").toLocaleLowerCase(currentLanguage);
      const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
      return { ...record, score };
    })
    .filter((record) => record.score === tokens.length)
    .sort((a, b) => b.score - a.score || String(a.title).localeCompare(String(b.title), currentLanguage));
}

function highlight(value, query) {
  const safe = escapeHtml(value || "");
  const term = String(query || "").trim();
  if (!term) return safe;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

function searchLabel(type) {
  return { article: "Bài tham chiếu", glossary: "Thuật ngữ", country: "Quốc gia", ideology: "Hệ tư tưởng", event: "Sự kiện", source: "Nguồn" }[type] || "Mục";
}

function renderSearch(params) {
  const query = params.get("q") || "";
  const type = params.get("type") || "all";
  const records = searchRecords(query, type);
  return `
    ${pageHero("Khám phá tri thức", "Tìm trong PolitiCore", "Tìm theo tiêu đề, khái niệm, mô tả, khu vực hoặc nhãn trong bộ dữ liệu demo.")}
    <section class="page-width search-page">
      <form class="search-page-bar" data-search-page-form>
        <input name="query" value="${escapeHtml(query)}" autocomplete="off" placeholder="Ví dụ: dân chủ, chủ quyền, Việt Nam..." aria-label="Từ khoá tìm kiếm" />
        <button type="submit">Tìm kiếm</button>
      </form>
      <div class="tool-bar">
        <span class="result-count">${query ? `${records.length} kết quả cho “${escapeHtml(query)}”` : "Nhập từ khoá để bắt đầu"}</span>
        <div class="filter-group">
          ${[["all", "Tất cả"], ["article", "Bài viết"], ["glossary", "Thuật ngữ"], ["country", "Quốc gia"], ["ideology", "Hệ tư tưởng"], ["event", "Sự kiện"], ["source", "Nguồn"]].map(([value, label]) => `<button class="filter-button ${type === value ? "active" : ""}" data-route="search?q=${encodeURIComponent(query)}&type=${value}">${label}</button>`).join("")}
        </div>
      </div>
      <div class="search-results">
        ${query ? (records.length ? records.map((record) => `
          <a class="search-result" href="#${routeFor(record)}">
            <span class="result-type">${searchLabel(record.type)}</span>
            <span><h2>${highlight(record.title || record.term, query)}</h2><p>${highlight(record.summary || record.definition || "", query)}</p></span>
            <span class="search-result-arrow">→</span>
          </a>
        `).join("") : emptyState("Chưa có kết quả phù hợp", "Thử một từ khoá ngắn hơn hoặc chuyển sang tìm tất cả loại mục.")) : emptyState("Bắt đầu với một câu hỏi", "Ví dụ: “chủ quyền”, “hệ thống nghị viện” hoặc “tính chính danh”.")}
      </div>
    </section>
  `;
}

function renderAbout() {
  const principles = [
    ["01", "Có thể truy nguồn", "Những khẳng định quan trọng cần dẫn về văn bản gốc hoặc tài liệu học thuật có thể kiểm tra, thay vì chỉ xuất hiện như một kết luận vô danh."],
    ["02", "Có bối cảnh", "Khái niệm, thể chế và sự kiện được trình bày cùng thời kỳ, phạm vi và giới hạn — đặc biệt khi việc phân loại còn có tranh luận."],
    ["03", "Không đảng phái", "PolitiCore không được thiết kế như nơi cổ động. Sự cân bằng nằm ở cách trình bày bằng chứng và các bất đồng học thuật một cách trung thực."],
    ["04", "Có thể mở rộng", "Bản demo dùng dữ liệu địa phương có cấu trúc để mô phỏng cách một hệ thống nội dung, nguồn và quan hệ có thể lớn dần mà không phải thiết kế lại."],
  ];
  return `
    ${pageHero("Về sản phẩm", "Tri thức là sản phẩm.", "PolitiCore là một mẫu giao diện cho bách khoa chính trị có cấu trúc, lấy việc tra cứu, so sánh và lần theo nguồn làm trải nghiệm cốt lõi.")}
    <section class="page-width about-page">
      <p class="page-lede" style="margin-top:0">Đây là bản demo chạy cục bộ. Những mục có sẵn được gắn nhãn dữ liệu demo, không giả định tích hợp cơ sở dữ liệu trực tuyến hoặc tình trạng chính trị theo thời gian thực.</p>
      <div class="principles-grid">${principles.map(([number, title, description]) => `<article class="principle"><span class="principle-number">${number}</span><h2>${title}</h2><p>${description}</p></article>`).join("")}</div>
      <section class="related-panel"><h2>Tiếp tục khám phá</h2><div class="related-list"><a href="#sources"><span>Thư viện nguồn</span><span>→</span></a><a href="#encyclopedia"><span>Taxonomy bách khoa</span><span>→</span></a></div></section>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="page-hero"><div class="page-width"><p class="eyebrow">Không tìm thấy</p><h1 class="display-title">Mục này chưa có trong bản demo.</h1><p class="page-lede">Hãy quay lại thư viện để tiếp tục từ một khái niệm, quốc gia hoặc nguồn tư liệu khác.</p><a class="text-link" style="margin-top:23px" href="#home">Về trang khám phá</a></div></section>
  `;
}

function renderSearchDialog() {
  if (!state.searchOpen) return "";
  const records = searchRecords(state.query).slice(0, 7);
  return `
    <div class="search-overlay" data-action="close-search">
      <section class="search-dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm PolitiCore" onclick="event.stopPropagation()">
        <form class="dialog-search" data-dialog-search>
          <span class="dialog-search-icon" aria-hidden="true">${icon("search", 20)}</span>
          <input id="dialog-search-input" name="query" value="${escapeHtml(state.query)}" autocomplete="off" placeholder="Tìm khái niệm, quốc gia, nguồn..." />
          <button class="dialog-close" type="button" data-action="close-search" aria-label="Đóng tìm kiếm">${icon("close", 18)}</button>
        </form>
        <div class="dialog-results">
          ${state.query ? (records.length ? records.map((record) => `
            <a class="dialog-result" href="#${routeFor(record)}" data-action="close-search">
              <span class="dialog-result-type">${searchLabel(record.type)}</span>
              <span><strong>${escapeHtml(record.title || record.term)}</strong><span>${escapeHtml(record.summary || record.definition || "")}</span></span>
            </a>
          `).join("") : `<div class="dialog-help">Chưa có kết quả khớp. Thử một từ khoá ngắn hơn hoặc mở trang tìm kiếm để xem toàn bộ.</div>`) : `<div class="dialog-help">Gợi ý: Dân chủ · Chủ quyền · Hiến pháp · Việt Nam · Đại diện</div>`}
        </div>
      </section>
    </div>
  `;
}

function renderApp({ scroll = false } = {}) {
  const { path, params } = getRoute();
  let content = "";
  if (path === "home") content = renderHome();
  else if (path === "encyclopedia" || path === "topics") content = renderEncyclopedia(params);
  else if (path.startsWith("article/")) content = renderArticle(decodeURIComponent(path.slice("article/".length)));
  else if (path === "glossary") content = renderGlossary(params);
  else if (path === "countries") content = renderCountries(params);
  else if (path.startsWith("country/")) content = renderCountry(decodeURIComponent(path.slice("country/".length)));
  else if (path === "compare" || path === "compare/ideologies" || path === "ideologies") content = renderCompare();
  else if (path.startsWith("ideology/")) content = renderIdeology(decodeURIComponent(path.slice("ideology/".length)));
  else if (path === "timeline") content = renderTimeline(params);
  else if (path === "sources") content = renderSources();
  else if (path === "search") content = renderSearch(params);
  else if (path === "about" || path === "editorial-policy") content = renderAbout();
  else content = renderNotFound();

  app.innerHTML = translateUiText(`<div class="app-shell">${header(path)}<main id="main" class="page">${content}</main>${footer()}${renderSearchDialog()}</div>`);
  bindEvents();
  if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
  if (state.searchOpen) setTimeout(() => document.querySelector("#dialog-search-input")?.focus(), 0);
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");
  oldToast?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.role = "status";
  toast.textContent = translateUiText(message);
  document.body.append(toast);
  setTimeout(() => toast.remove(), 3200);
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((node) => {
    node.addEventListener("click", () => navigate(node.dataset.route));
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (language === currentLanguage) return;

      changeLanguage(language);
      const switcher = button.closest(".language-switch");
      const render = () => renderApp();

      if (!switcher || prefersReducedMotion()) {
        render();
        return;
      }

      switcher.classList.remove("is-en", "is-vi");
      switcher.classList.add(`is-${language}`, "is-language-animating");
      switcher.querySelectorAll("[data-language]").forEach((languageButton) => {
        const active = languageButton.dataset.language === language;
        languageButton.classList.toggle("active", active);
        languageButton.setAttribute("aria-pressed", String(active));
      });
      window.clearTimeout(languageRenderTimer);
      // Allow the pill to reach its destination before the app is rebuilt.
      // Replacing the header sooner would cancel its transform mid-flight.
      languageRenderTimer = window.setTimeout(render, LANGUAGE_SWITCH_DURATION + 34);
    });
  });

  document.querySelectorAll("[data-action='toggle-theme']").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTheme();
      const dark = currentTheme === "dark";
      button.classList.toggle("is-dark", dark);
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", themeToggleLabel());
      button.title = themeToggleLabel();
    });
  });

  document.querySelectorAll(".taxonomy-link").forEach((node) => {
    const title = node.childNodes[0]?.textContent?.trim();
    const topic = topics.find((item) => topicName(item) === title);
    if (!topic) return;
    const route = "encyclopedia?domain=" + encodeURIComponent(topicKey(topic));
    node.href = "#" + route;
    node.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(route);
    });
  });

  document.querySelectorAll("[data-search-term]").forEach((button) => {
    button.addEventListener("click", () => navigate(`search?q=${encodeURIComponent(button.dataset.searchTerm)}`));
  });

  document.querySelectorAll("[data-action='open-search']").forEach((button) => {
    button.addEventListener("click", () => {
      state.searchOpen = true;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='close-search']").forEach((button) => {
    button.addEventListener("click", () => {
      state.searchOpen = false;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='toggle-menu']").forEach((button) => {
    button.addEventListener("click", () => {
      const nav = document.querySelector("#mobile-nav");
      nav.hidden = !nav.hidden;
    });
  });

  document.querySelectorAll("[data-action='copy-link']").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        showToast("Đã sao chép liên kết mục tham chiếu.");
      } catch {
        showToast("Không thể sao chép tự động. Bạn có thể sao chép URL trên thanh địa chỉ.");
      }
    });
  });

  document.querySelectorAll("[data-action='cite-article']").forEach((button) => {
    button.addEventListener("click", () => showToast("Trích dẫn gợi ý: PolitiCore, mục tham chiếu demo, truy cập 10.10.2026."));
  });

  document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("query")?.trim();
      if (query) navigate(`search?q=${encodeURIComponent(query)}`);
    });
  });

  document.querySelectorAll("[data-search-page-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("query")?.trim() || "";
      navigate(`search?q=${encodeURIComponent(query)}`);
    });
  });

  document.querySelectorAll("[data-glossary-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("term")?.trim() || "";
      navigate(`glossary?q=${encodeURIComponent(query)}`);
    });
  });

  document.querySelectorAll("[data-compare-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      state.compareLeft = formData.get("left");
      state.compareRight = formData.get("right");
      renderApp();
    });
  });

  document.querySelectorAll("[data-timeline-filter]").forEach((form) => {
    form.addEventListener("change", () => {
      const formData = new FormData(form);
      navigate(`timeline?region=${encodeURIComponent(formData.get("region"))}&tag=${encodeURIComponent(formData.get("tag"))}`);
    });
  });

  const dialogForm = document.querySelector("[data-dialog-search]");
  if (dialogForm) {
    const input = dialogForm.querySelector("input");
    input.addEventListener("input", () => {
      state.query = input.value;
      const cursor = input.selectionStart;
      renderApp();
      requestAnimationFrame(() => {
        const nextInput = document.querySelector("#dialog-search-input");
        nextInput?.setSelectionRange(cursor, cursor);
      });
    });
    dialogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (state.query.trim()) {
        state.searchOpen = false;
        navigate(`search?q=${encodeURIComponent(state.query.trim())}`);
      }
    });
  }
}

window.addEventListener("hashchange", () => {
  state.searchOpen = false;
  renderApp({ scroll: true });
});

window.addEventListener("keydown", (event) => {
  const activeElement = document.activeElement;
  const isTyping = activeElement?.tagName === "INPUT" || activeElement?.tagName === "TEXTAREA" || activeElement?.tagName === "SELECT";
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    state.searchOpen = true;
    renderApp();
  }
  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    state.searchOpen = true;
    renderApp();
  }
  if (event.key === "Escape" && state.searchOpen) {
    state.searchOpen = false;
    renderApp();
  }
});

renderApp();
