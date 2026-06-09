export interface LectureTopic {
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
}

export interface DetailedSection {
  titleEn: string;
  titleAr: string;
  pointsEn: string[];
  pointsAr: string[];
}

export interface Lecture {
  id: string;
  titleEn: string;
  titleAr: string;
  durationEn: string;
  durationAr: string;
  topics: LectureTopic[]; // Condensed Key Points for Summary Mode
  detailedSections: DetailedSection[]; // Detailed Explanations
}

export const LECTURES_DATA: Lecture[] = [
  {
    id: "l1",
    titleEn: "Lecture 1: Introduction to Computers, Processors & Memory",
    titleAr: "المحاضرة 1: مقدمة الحاسب وبنية المعالجات والذاكرة",
    durationEn: "45 mins",
    durationAr: "45 دقيقة",
    topics: [
      {
        titleEn: "Hardware Evolution",
        titleAr: "تطور المكونات الفيزيائية",
        contentEn: "Vacuum Tubes ➔ Transistors ➔ Integrated Circuits (IC) ➔ Microprocessors.",
        contentAr: "الأنابيب المفرغة ➔ الترانزستور ➔ الدارات المتكاملة (IC) ➔ المعالجات الدقيقة."
      },
      {
        titleEn: "The Processing Cycle",
        titleAr: "دورة معالجة البيانات",
        contentEn: "Data input ➔ CPU processing ➔ Information output.",
        contentAr: "المدخلات (بيانات خام) ➔ المعالجة (CPU) ➔ المخرجات (معلومات ذات معنى)."
      },
      {
        titleEn: "CPU Architectures",
        titleAr: "معمارية المعالج ونماذجها",
        contentEn: "• Von-Neumann Architecture: Shared memory for data & code. Fetch-Decode-Execute cycle.\n• Flynn's Taxonomy: SISD, SIMD (vector processors), MISD (theoretical), MIMD (parallel computers).",
        contentAr: "• بنية فون نيومان: ذاكرة مشتركة للبيانات والتعليمات. دورة جلب-ترميز-تنفيذ.\n• تصنيف فلين: SISD (أحادي)، SIMD (مصفوفات/جرافيكس)، MISD (نظري)، MIMD (متوازي)."
      }
    ],
    detailedSections: [
      {
        titleEn: "A. Physical Components Evolution & Machine Language",
        titleAr: "أ. تطور المكونات الفيزيائية ولغة الآلة",
        pointsEn: [
          "Evolution Stages: Computers started historically using Vacuum Tubes, then evolved into Transistors, Integrated Circuits (IC), and finally modern Microprocessors.",
          "Core Processing Cycle: The computer receives raw Data as input, processes it (Processing), and outputs Information (organized, meaningful data).",
          "Signal Types: Inside computers, there are Analog signals (continuous waves like sound) and Digital signals (representing information in binary 0 and 1 series). Since computers rely on digital signals, their low-level code is called Machine Language.",
          "Measurement Units: Bit is the smallest unit (either 0 or 1). Byte consists of 8 bits. Kilobyte (KB) equals 2^10 bytes (1024 bytes)."
        ],
        pointsAr: [
          "مراحل التطور: بدأ الحاسوب تاريخياً باستخدام الأنابيب المفرغة (Vacuum Tubes)، ثم تطور إلى الترانزستور (Transistor)، ثم إلى الدارات المتكاملة (Integrated Circuits - IC)، وصولاً إلى المعالجات الدقيقة (Microprocessors) الحديثة.",
          "دورة المعالجة الأساسية: يستقبل الحاسب البيانات (Data) كمدخلات خام، يقوم بعملية المعالجة (Processing)، ليخرج لنا المعلومات (Information) وهي بيانات منظمة وذات معنى.",
          "نوع الإشارات: داخل الحاسب توجد إشارات تناظرية (Analog) وهي موجات متصلة ومتغيرة مثل الصوت، وإشارات رقمية (Digital) تمثل المعلومات بسلسلة من الـ 0 والـ 1. وبما أن الحاسوب يعتمد على الإشارات الرقمية، فإن لغته تسمى لغة الآلة (Machine Language).",
          "وحدات القياس: الـ Bit هو أصغر وحدة (إما 0 أو 1). والـ Byte يتكون من 8 بتات. والـ Kilobyte (KB) يساوي 1024 بايت."
        ]
      },
      {
        titleEn: "B. Types of Computers",
        titleAr: "ب. تصنيفات الحواسيب",
        pointsEn: [
          "Supercomputers: The most powerful machines available, built custom-tailored to process massive variables and data with extreme speeds (e.g. nuclear research, environmental pollution simulations).",
          "Multiprocessor Systems: Categorized into two architectures: 1) Tightly Coupled (where processors share a single RAM and system clock under one OS), and 2) Loosely Coupled (where each processor has its own independent memory, connected via network lines).",
          "Mainframes: Massive computers used by big enterprises to connect thousands of users and store giant database systems.",
          "Thin Clients / Network Computers: Low-specification hardware machines (mostly without local hard drives) that fully rely on the central server over the network to execute software and process data."
        ],
        pointsAr: [
          "الحواسيب الفائقة (Super Computers): أقوى الأجهزة المتاحة، تُبنى خصيصاً لمعالجة كميات هائلة من المتغيرات والبيانات بسرعة فائقة (مثل الأبحاث النووية ومحاكاة التلوث البيئي).",
          "الأنظمة متعددة المعالجات (Multiprocessor): تنقسم إلى نوعين: متصلة بإحكام (Tightly Coupled) تشترك في ذاكرة وساعة نظام واحدة، ومتصلة بارتخاء (Loosely Coupled) لكل معالج ذاكرته الخاصة ويتصلون عبر الشبكة.",
          "الحواسيب المركزية (Mainframes): أجهزة ضخمة تستخدمها الشركات الكبرى لربط آلاف المستخدمين وتخزين قواعد البيانات العملاقة.",
          "الحواسيب النحيفة (Thin Clients / Network Computers): أجهزة ذات إمكانيات عتاد منخفضة جداً (بدون قرص صلب محلي غالباً)، تعتمد كلياً على السيرفر المركزي عبر الشبكة لتشغيل البرامج ومعالجة البيانات."
        ]
      },
      {
        titleEn: "C. Processor & Memory Architecture",
        titleAr: "ج. معمارية المعالج والذاكرة",
        pointsEn: [
          "Von-Neumann Architecture: A classical design model based on the stored-program concept, where program instructions and data are stored together in a single shared memory unit. It consists of a Central Processing Unit (CPU) containing a Control Unit (CU), Arithmetic Logic Unit (ALU), and Registers.",
          "Fetch-Decode-Execute Cycle: The processor fetches the instruction from memory (Fetch), decodes it to understand the operation (Decode), and executes the instruction (Execute). This cycle repeats millions of times per second.",
          "Virtual Memory: A software memory management technique that integrates physical RAM space with a dedicated partition of the secondary storage (hard drive) to expand address space, allowing programs larger than physical memory size to run.",
          "Flynn's Taxonomy: Classifies computer systems based on instruction streams and data streams into: 1) SISD (Single Instruction Single Data - old serial CPUs), 2) SIMD (Single Instruction Multiple Data - GPUs/vector processors), 3) MISD (Multiple Instruction Single Data - theoretical architecture with no practical implementations), and 4) MIMD (Multiple Instruction Multiple Data - modern parallel servers)."
        ],
        pointsAr: [
          "بنية فون نيومان (Von-Neumann Architecture): نموذج كلاسيكي يعتمد على مفهوم البرنامج المخزن، حيث يتم تخزين البيانات وتعليمات البرنامج معاً في وحدة ذاكرة مشتركة واحدة. تتكون من وحدة معالجة مركزية (CPU) تحتوي على وحدة تحكم (CU)، ووحدة حساب ومنطق (ALU)، ومسجلات (Registers).",
          "دورة الجلب والتنفيذ (Fetch-Decode-Execute Cycle): يقوم المعالج بجلب التعليمة من الذاكرة (Fetch)، ثم تفكيكها وفهمها (Decode)، ثم تطبيقها (Execute)، وتتكرر هذه العملية ملايين المرات في الثانية.",
          "الذاكرة الافتراضية (Virtual Memory): تقنية برمجية تدمج مساحة الذاكرة الرئيسية (RAM) مع جزء مخصص من القرص الصلب (Secondary Storage) لتوسيع فضاء العناوين، مما يتيح تشغيل برامج أضخم من السعة الفعلية للـ RAM.",
          "تصنيف فلين المعماري (Flynn's Taxonomy): يصنف الأنظمة بناءً على مسار التعليمات والبيانات إلى: SISD (تعليمة وبيان واحد)، SIMD (تعليمة واحدة وبيانات متعددة)، MISD (تعليمات متعددة وبيان واحد - هيكل نظري)، MIMD (تعليمات متعددة وبيانات متعددة - الأنظمة المتوازية الحديثة)."
        ]
      }
    ]
  },
  {
    id: "l2",
    titleEn: "Lecture 2: Network Basics, Modes & Broadcast Technology",
    titleAr: "المحاضرة 2: مقدمة الشبكات ومكوناتها وأساليب البث",
    durationEn: "50 mins",
    durationAr: "50 دقيقة",
    topics: [
      {
        titleEn: "Network Definition",
        titleAr: "تعريف شبكة الحاسب",
        contentEn: "Autonomous devices linked together to share resources (printers, databases) and facilitate electronic communication.",
        contentAr: "أجهزة ذاتية التحكم مرتبطة معاً بهدف مشاركة الموارد (طابعات، ملفات) وتسهيل الاتصالات."
      },
      {
        titleEn: "Five Core Components",
        titleAr: "المكونات الأساسية الخمسة",
        contentEn: "Message ➔ Sender ➔ Receiver ➔ Transmission Medium ➔ Protocol.",
        contentAr: "الرسالة ➔ المرسل ➔ المستقبل ➔ وسط النقل ➔ البروتوكول (القواعد الحاكمة)."
      },
      {
        titleEn: "Transmission Modes & Sharing",
        titleAr: "أوضاع الإرسال وتكنولوجيا البث",
        contentEn: "• Modes: Simplex (one-way), Half-Duplex (alternate), Full-Duplex (simultaneous).\n• Tech: Broadcast (single shared channel) vs Point-to-Point (dedicated direct links).",
        contentAr: "• الإرسال: Simplex (أحادي)، Half-Duplex (متناوب)، Full-Duplex (متزامن).\n• البث: شبكات البث العامة (قناة مشتركة) مقابل شبكات التوصيل المباشر P2P."
      }
    ],
    detailedSections: [
      {
        titleEn: "A. Network Concept & Core Components",
        titleAr: "أ. مفهوم الشبكة ومكوناتها الأساسية",
        pointsEn: [
          "Computer Network Definition: A network consists of two or more autonomous computers linked together to share resources (files, printers), software, and facilitate communication.",
          "Five Essential Components: 1) The Message (data/info to send), 2) The Sender (transmitting device), 3) The Receiver (target destination device), 4) The Transmission Medium (physical channel like copper wires or wireless), and 5) The Protocol (the set of rules and standards governing the connection; without protocols, devices are physically linked but cannot understand each other)."
        ],
        pointsAr: [
          "تعريف شبكة الحاسب: تتكون من جهازين أو أكثر من الأجهزة ذاتية التحكم (Autonomous Computers) المرتبطة معاً بهدف مشاركة الموارد (ملفات، طابعات)، البرامج، وتسهيل الاتصالات.",
          "المكونات الخمسة لأي شبكة: الرسالة (Message) المراد نقلها، المرسل (Sender) الباعث للبيانات، المستقبل (Receiver) المستهدف للاستلام، وسط النقل (Transmission Medium) القناة الفيزيائية، البروتوكول (Protocol) القواعد الحاكمة لعملية الاتصال."
        ]
      },
      {
        titleEn: "B. Transmission Modes & Classifications",
        titleAr: "ب. أنماط الإرسال والتصنيفات",
        pointsEn: [
          "Transmission Flow Modes: 1) Simplex (one-way only, e.g. monitor display), 2) Half-Duplex (two-way but not at the same time; when one transmits, the other listens, e.g. walkie-talkies), and 3) Full-Duplex (simultaneous two-way transmission over separate channels, e.g. telephone conversations).",
          "Geographical Network Classification: 1) LAN (Local Area Network - small scale like office, lab), 2) MAN (Metropolitan Area Network - city-wide scale), and 3) WAN (Wide Area Network - country or continent scale, e.g. the Internet).",
          "Administration Models: 1) Client-Server (a strong central server owns files/data and provides authentication/services to clients), and 2) Peer-to-Peer (all computers are equal with no central server; each machine acts as both client and server)."
        ],
        pointsAr: [
          "اتجاه تدفق البيانات (Transmission Modes): أحادي الاتجاه (Simplex) في اتجاه واحد فقط، نصف مزدوج (Half-Duplex) في الاتجاهين ولكن ليس في نفس الوقت، ومزدوج كامل (Full-Duplex) إرسال واستقبال متزامن في نفس الوقت.",
          "التصنيف الجغرافي للشبكات: LAN (المحلية تغطي مكتب أو مبنى)، MAN (الإقليمية تغطي نطاق مدينة)، WAN (الواسعة تغطي مساحات شاسعة كالدول والقارات).",
          "نماذج إدارة الشبكة: خادم وعميل (Client-Server) خادم مركزي قوي يتحكم بالبيانات والصلاحيات، والند للند (Peer-to-Peer) جميع الأجهزة متساوية دون سيطرة مركزية."
        ]
      },
      {
        titleEn: "C. Broadcast Tech, Signaling & Routing",
        titleAr: "ج. أنواع تكنولوجيا البث والتوجيه",
        pointsEn: [
          "Broadcast Networks: Possess a single shared communication channel. When a packet is transmitted, every node receives and examines its destination; nodes ignore non-matching packets. Allocation rules: 1) Static allocation (e.g. dividing time slots systematically like Round Robin), and 2) Dynamic allocation (either centralized controller or decentralized).",
          "Four Signaling Methods: 1) Unicast (one-to-one), 2) Multicast (one-to-group), 3) Broadcast (one-to-all nodes on the network), and 4) Anycast (one-to-nearest node of a group providing the same service).",
          "Point-to-Point / Switched Networks: Composed of many interconnected links between individual nodes. Packets travel through multiple intermediate hops, making Routing algorithms highly crucial. Classified into: 1) Circuit-Switched (reserves a dedicated physical path, e.g. landline telephony), and 2) Packet-Switched (divides data into small packets traversing dynamic, independent paths based on network availability)."
        ],
        pointsAr: [
          "شبكات البث العامة (Broadcast Networks): تمتلك قناة اتصال واحدة مشتركة بين جميع الأجهزة. عندما يرسل جهاز حزمة، يستقبلها الجميع ويفحصون عنوان الوجهة. تنقسم إلى: تخصيص استاتيكي (Static) تقسيم وقت بالدور (Round Robin)، وتخصيص ديناميكي (Dynamic) مركزي أو لا مركزي.",
          "أساليب إرسال الإشارات الأربعة: Unicast (إرسال لجهاز واحد محدد)، Multicast (إرسال لمجموعة محددة)، Broadcast (إرسال للجميع بلا استثناء)، Anycast (إرسال لأقرب جهاز متاح من مجموعة أجهزة تقدم الخدمة ذاتها).",
          "شبكات التوصيل المباشر (Point-to-Point / Switched Networks): تتكون من وصلات بين أزواج فردية من الأجهزة تمر عبر أجهزة وسيطة وتعتمد على التوجيه (Routing). تنقسم إلى: Circuit Switched (حجز مسار مادي مخصص كالهاتف) و Packet Switched (تقطيع البيانات لحزم تسلك مسارات ديناميكية)."
        ]
      }
    ]
  },
  {
    id: "l3",
    titleEn: "Lecture 3: Network Topologies & The 7-Layer OSI Model",
    titleAr: "المحاضرة 3: طوبولوجيا الشبكات ونموذج OSI ذو السبع طبقات",
    durationEn: "55 mins",
    durationAr: "55 دقيقة",
    topics: [
      {
        titleEn: "Physical Layouts",
        titleAr: "الهياكل الهندسية الفيزيائية",
        contentEn: "Bus (terminator dependent) ➔ Star (hub/switch centered, most common) ➔ Ring (unidirectional loop) ➔ Mesh (fully redundant, highly expensive).",
        contentAr: "الممر العام (منتهي إشارة) ➔ النجمة (مركزية المبدل، الأكثر شيوعاً) ➔ الحلقة ➔ المتداخلة كلياً (MESH)."
      },
      {
        titleEn: "OSI Reference Layers",
        titleAr: "طبقات نموذج OSI المرجعي",
        contentEn: "7. Application ➔ 6. Presentation ➔ 5. Session ➔ 4. Transport ➔ 3. Network ➔ 2. Data Link ➔ 1. Physical.",
        contentAr: "7. التطبيقات ➔ 6. العرض ➔ 5. الجلسة ➔ 4. النقل ➔ 3. الشبكة ➔ 2. ربط البيانات ➔ 1. الفيزيائية."
      },
      {
        titleEn: "PDU & Devices",
        titleAr: "وحدات البيانات والأجهزة العاملة",
        contentEn: "• Layer 3: Packets. Runs Router.\n• Layer 2: Frames. Runs Switch.\n• Layer 1: Bits. Runs Repeater/Hub.",
        contentAr: "• الطبقة 3: حزم (Packets)، جهاز الموجه Router.\n• الطبقة 2: إطارات (Frames)، جهاز المبدل Switch.\n• الطبقة 1: بتات (Bits)، الموزع Hub."
      }
    ],
    detailedSections: [
      {
        titleEn: "A. Network Topologies",
        titleAr: "أ. طوبولوجيا الشبكات الفيزيائية",
        pointsEn: [
          "Bus Topology: All devices connect to a single central cable called the Backbone. Both ends must be capped with Terminators to absorb signals and prevent reflections. Backbone cut stops the whole network.",
          "Star Topology: All devices link to a central device (Hub or Switch). Outage of a node doesn't affect others, but central device failure breaks the whole network. This is the most common and easiest to troubleshoot.",
          "Ring Topology: Devices connect in a circular closed loop. Data flows in a single direction, and nodes amplify the signal before passing it on, ensuring transmission over long distances.",
          "Tree Topology: A hierarchical tree where devices connect to sub-switches, which in turn link to a main root switch. Ideal for expanding enterprise networks.",
          "Mesh Topology: Every device has a dedicated physical point-to-point link to every other device on the network. Provides maximum Fault Tolerance; if a cable fails, alternative paths are immediately available. However, it requires a massive quantity of cabling and is highly expensive."
        ],
        pointsAr: [
          "طوبولوجيا الممر العام (Bus Topology): تتصل جميع الأجهزة بكابل مركزي واحد يسمى العمود الفقري (Backbone). يجب إنهاء كل طرف من أطراف الكابل بـ مُنهي إشارة (Terminator) لامتصاص الموجات ومنع ارتدادها.",
          "طوبولوجيا النجمة (Star Topology): تتصل جميع الأجهزة بجهاز مركزي مشترك يسمى الموزع (Hub) أو المبدل (Switch). عطل أي جهاز فرعي لا يؤثر على الآخرين، ولكن عطل الجهاز المركزي يسقط الشبكة كاملة. الأكثر شيوعاً.",
          "طوبولوجيا الحلقة (Ring Topology): تتصل الأجهزة في حلقة مغلقة دائرية. تتحرك البيانات في اتجاه واحد، وتقوم كل عقدة بتقوية وتوليد الإشارة مجدداً قبل تمريرها لتأمين وصولها للمسافات البعيدة.",
          "طوبولوجيا الشجرة (Tree Topology): هيكلية هرمية تتفرع فيها الأجهزة؛ حيث تتصل الأجهزة بمبدلات فرعية، وتتصل المبدلات الفرعية بمبدل رئيسي (النجمة الممتدة).",
          "طوبولوجيا الشبكة المتداخلة (Mesh Topology): يمتلك كل جهاز خط اتصال فيزيائي مخصص ومباشر (Dedicated Link) مع كل الأجهزة الأخرى في الشبكة. توفر أعلى درجات موثوقية ومقاومة الأعطال (Fault Tolerance) ولكن يعيبها تكلفتها الضخمة وصعوبة تركيبها."
        ]
      },
      {
        titleEn: "B. The 7-Layer OSI Model",
        titleAr: "ب. نموذج OSI المرجعي ذو الـ 7 طبقات",
        pointsEn: [
          "Layer 7 - Application: User interface direct interaction. Protocols include: HTTP (web browsing), SMTP (email transmission), FTP (file transfer), and DNS. (PDU: Data).",
          "Layer 6 - Presentation: Translates and formats data so the OS understands it. Manages Encryption, Decryption, and Compression. (PDU: Data).",
          "Layer 5 - Session: Opens, coordinates, manages, synchronizes, and terminates logic channels (sessions) between application layers on the communicating devices. (PDU: Data).",
          "Layer 4 - Transport: Responsible for End-to-End data delivery, flow control, and error verification. Utilizes two core protocols: TCP (reliable, connection-oriented, guarantees packet order) and UDP (very fast, connectionless, unreliable). (PDU: Segment).",
          "Layer 3 - Network: Manages Logical Addressing and selects the best path (Routing) across networks. Devices: Router. Protocols: IP, ARP, ICMP. (PDU: Packet).",
          "Layer 2 - Data Link: Responsible for Physical Addressing (48-bit MAC address burned on NIC cards). Performs framing and detects link errors. Devices: Switch, Bridge. (PDU: Frame).",
          "Layer 1 - Physical: Converts frames into raw binary bits (0s and 1s) and transmits them as electromagnetic, electric, or light signals over physical cabling. Devices: Repeater, Hub. (PDU: Bits)."
        ],
        pointsAr: [
          "الطبقة 7 - التطبيقات (Application): الواجهة البرمجية المباشرة التي تتيح للمستخدم التفاعل مع خدمات الشبكة (مثل HTTP لتصفح الويب، SMTP للبريد، و FTP لنقل الملفات). (وحدة البيانات PDU: Data).",
          "الطبقة 6 - العرض (Presentation): مسؤولة عن صياغة وتنسيق البيانات، وتتولى عمليات الضغط (Compression)، والتشفير (Encryption) وفكه. (وحدة البيانات PDU: Data).",
          "الطبقة 5 - الجلسة (Session): تتولى فتح، إدارة، صيانة، ومزامنة وإنهاء جلسات الاتصال والقنوات المنطقية بين التطبيقات على الجهازين. (وحدة البيانات PDU: Data).",
          "الطبقة 4 - النقل (Transport): مسؤولة عن نقل البيانات من الطرف إلى الطرف النهائي (End-to-End) والتحكم في التدفق والتحقق من السلامة. تعتمد على بروتوكول TCP (موثوق وموجه للاتصال) وبروتوكول UDP (سريع وغير موثوق). (وحدة البيانات PDU: Segment).",
          "الطبقة 3 - الشبكة (Network): مسؤولة عن العنونة المنطقية واختيار أفضل مسار (Routing) وتوجيه الحزم. يعمل فيها الموجه (Router) وتعتمد على بروتوكول IP. (وحدة البيانات PDU: Packet).",
          "الطبقة 2 - ربط البيانات (Data Link): مسؤولة عن العنونة الفيزيائية (MAC Address المكون من 48 بت). تقوم بتقسيم البيانات إلى إطارات واكتشاف الأخطاء. يعمل فيها المبدل (Switch). (وحدة البيانات PDU: Frame).",
          "الطبقة 1 - الفيزيائية (Physical): تحويل الإطارات إلى إشارات كهربائية أو ضوئية خام تتدفق كبتات ثنائية (0, 1) عبر الأوساط المادية. يعمل بها مكرر الإشارة (Repeater) والـ Hub. (وحدة البيانات PDU: Bits)."
        ]
      }
    ]
  },
  {
    id: "l4",
    titleEn: "Lecture 4: Infrastructure & Structured Cabling Standards",
    titleAr: "المحاضرة 4: البنية التحتية والكابلات (Structured Cabling)",
    durationEn: "60 mins",
    durationAr: "60 دقيقة",
    topics: [
      {
        titleEn: "Physical Topology",
        titleAr: "عناصر التمديد الهيكلي",
        contentEn: "MDF (central core room) ➔ IDF (floor closets) ➔ Horizontal Cabling (IDF to workstation wall outlets) ➔ Demarc (ISP boundary point).",
        contentAr: "MDF (غرفة التوزيع الرئيسية) ➔ IDF (خزائن الدور الفرعية) ➔ كابلات أفقية (IDF للمكاتب) ➔ نقطة الترسيم (ISP)."
      },
      {
        titleEn: "Twisted Pair Copper",
        titleAr: "الكابلات النحاسية المجدولة",
        contentEn: "• UTP: Flexible, cheap, susceptible to electromagnetic interference (EMI).\n• STP: Wrapped in aluminum shielding to protect against severe industrial EMI.",
        contentAr: "• UTP: كابلات غير محمية مرنة ورخيصة وتتأثر بالتشويش الكهرومغناطيسي EMI.\n• STP: محمية بطبقة ألومنيوم لمنع التشويش والـ EMI في بيئات المصانع العنيفة."
      },
      {
        titleEn: "Fiber Optic Media",
        titleAr: "كابلات الألياف الضوئية",
        contentEn: "• SMF: Ultra-narrow core, uses Laser, long distances (WAN backbone).\n• MMF: Wider core, uses LED, short distances (MDF to IDF links).\n• Pros: 100% immune to EMI, extremely high bandwidth.",
        contentAr: "• SMF: قلب زجاجي ضيق، مرسل ليزر، مسافات شاسعة (مخصصة لـ WAN).\n• MMF: قلب زجاجي أوسع، مرسل LED، مسافات محلية قصيرة.\n• الميزات: منيعة ومقاومة تماماً للتداخل EMI وسرعاتها فائقة."
      }
    ],
    detailedSections: [
      {
        titleEn: "A. Structured Cabling Components",
        titleAr: "أ. معايير التمديد الهيكلي للأجهزة والخدمات",
        pointsEn: [
          "Demarcation Point (Demarc): The physical boundary point where the public Internet Service Provider (ISP) network ends and the customer-managed LAN network begins.",
          "MDF (Main Distribution Frame): The central data room of an enterprise or building. Contains core routers, switches, primary servers, and the main incoming lines from the ISP.",
          "IDF (Intermediate Distribution Frame): Secondary telecommunications closets distributed on upper floors or adjacent buildings. Collects user network lines on that floor and connects them back to the MDF via vertical backbone cabling.",
          "Horizontal Cabling: Cabling extending horizontally from floor communication closets (IDF) through walls and ceilings, ending at wall outlets in work areas.",
          "Strict 100-Meter Rule: The absolute maximum length allowed for a horizontal run is 100 meters, structured as: 90 meters of solid core horizontal cable inside walls, plus a maximum of 10 meters combined for flexible patch cords (connecting PCs to wall outlets, and patch panels to switches in the IDF room)."
        ],
        pointsAr: [
          "نقطة الترسيم (Demarc / Demarcation Point): هي الحدود أو النقطة الفيزيائية المادية التي تنتهي عندها شبكة ومسؤولية مزود الخدمة الخارجي (ISP) وتبدأ عندها كلياً الشبكة المحلية المدارة (LAN) الخاصة بالمبنى.",
          "MDF (إطار التوزيع الرئيسي): غرفة البيانات المركزية للمؤسسة الكبرى أو المبنى. تحتوي على الموجهات (Routers) الرئيسية والمبدلات المركزية والسيرفرات وخيوط الاتصال الخارجي بالـ ISP.",
          "IDF (إطار التوزيع الوسيط): غرف أو خزائن اتصالات فرعية موزعة في الطوابق أو المباني المجاورة. تجمع كابلات أجهزة المستخدمين في ذلك الدور وتتصل بكابل عمود فقري (Backbone) يتجه للـ MDF.",
          "الكابلات الأفقية (Horizontal Cabling): الكابلات التي تمتد أفقياً من غرف اتصالات الدور (IDF) عبر الحوائط والأسقف لتنتهي عند مقابس الحائط (Wall Outlets) في مكاتب العمل.",
          "قاعدة الـ 100 متر الصارمة: الحد الأقصى المسموح به لطول التمديد الأفقي هو 100 متر كلياً، مقسمة هندسياً إلى: 90 متر كابل صلب ثابت ممتد بداخل الجدران، و 10 أمتار كحد أقصى لأسلاك التوصيل المرنة الفرعية (Patch Cords) لربط الكمبيوتر بمقبس الحائط وربط لوحات التوصيل بالمبدل."
        ]
      },
      {
        titleEn: "B. Transmission Cables & Physical Media Types",
        titleAr: "ب. المواصفات الفيزيائية لوسائط النقل والكابلات",
        pointsEn: [
          "Twisted Pair Copper Cables: Contains pairs of copper wires twisted together to cancel out electromagnetic interference (crosstalk). Types: 1) UTP (Unshielded Twisted Pair - most common, cheap, flexible, but susceptible to electromagnetic interference/EMI. Uses RJ-45 connectors), and 2) STP (Shielded Twisted Pair - wrapped in foil shields to protect against high EMI in industrial sites and power line environments).",
          "Fiber-Optic Cables: Glass cores transmitting data as light pulses. They are 100% immune to electromagnetic interference (EMI) and support ultra-high speeds over huge distances. Types: 1) SMF (Single-Mode Fiber - ultra-narrow core permitting one light ray, uses laser transmission, runs long distances for city/national backbone WANs), and 2) MMF (Multi-Mode Fiber - wider core permitting multiple light reflections, uses LED transmission, runs short distances within a single building campus to link MDF to IDFs).",
          "Media Converters: Small transceiver devices used to connect copper cabling (like UTP) directly to fiber-optic links, enabling easy network upgrades without replacing existing switches."
        ],
        pointsAr: [
          "الكابلات النحاسية المجدولة (Twisted Pair): كابلات تحتوي على أزواج من الأسلاك النحاسية الملتوية حول بعضها لالغاء التداخل المغناطيسي. تنقسم إلى: UTP (غير المحمي) الأكثر استخداماً لمرونته ورخص ثمنه ولكنه يتأثر بالتشويش EMI، و STP (المحمي) مغلف بطبقات حماية معدنية لمقاومة التشويش العنيف في المصانع.",
          "كابلات الألياف الضوئية (Fiber-Optic Cables): تنقل البيانات كنبضات ضوئية داخل قلب زجاجي نقي. منيعة تماماً ومقاومة 100% للتداخل الكهرومغناطيسي (EMI) وتدعم سرعات ومسافات هائلة. تنقسم إلى: SMF (أحادية الوضع) قلب ضيق، مرسل ليزر، للمسافات الطويلة جداً لربط شبكات WAN، و MMF (متعددة الأوضاع) قلب أوسع، مرسل LED، للمسافات المحلية القصيرة كربط MDF والـ IDF.",
          "أجهزة تحويل الوسائط (Media Converters): أجهزة فيزيائية تستخدم لربط كابلات النحاس بكابلات الألياف الضوئية مباشرة لترقية الشبكة بمرونة دون الحاجة لتغيير المبدلات بالكامل."
        ]
      }
    ]
  }
];
