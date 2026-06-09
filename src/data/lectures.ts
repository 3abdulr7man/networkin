export interface LectureTopic {
  titleEn: string;
  titleAr: string;
  contentEn: string;
  contentAr: string;
}

export interface Lecture {
  id: string;
  titleEn: string;
  titleAr: string;
  durationEn: string;
  durationAr: string;
  topics: LectureTopic[];
}

export const LECTURES_DATA: Lecture[] = [
  {
    id: "l1",
    titleEn: "Lecture 1: Introduction & Networking Basics",
    titleAr: "المحاضرة 1: مقدمة وأساسيات الشبكات",
    durationEn: "45 mins",
    durationAr: "45 دقيقة",
    topics: [
      {
        titleEn: "What is a Computer Network?",
        titleAr: "ما هي شبكة الحاسب؟",
        contentEn: "A computer network consists of two or more autonomous computers linked together to share resources (files, printers, software), allow electronic communication, and increase overall productivity.",
        contentAr: "تتكون شبكة الحاسوب من جهازين أو أكثر من الأجهزة المستقلة والمترابطة معاً لمشاركة الموارد (الملفات، الطابعات، البرمجيات) والسماح بالاتصالات الإلكترونية وزيادة الإنتاجية العامة."
      },
      {
        titleEn: "Five Core Network Components",
        titleAr: "المكونات الأساسية الخمسة للشبكة",
        contentEn: "1. Message (data/info)\n2. Sender (device transmitting)\n3. Receiver (device receiving)\n4. Transmission Medium (wires, cables, radio waves)\n5. Protocol (set of rules governing communication).",
        contentAr: "1. الرسالة (البيانات/المعلومات)\n2. المرسل (الجهاز الناقل)\n3. المستقبل (الجهاز المستلم)\n4. وسط النقل (الأسلاك، الكابلات، موجات الراديو)\n5. البروتوكول (مجموعة القواعد التي تحكم عملية الاتصال)."
      },
      {
        titleEn: "Network Classifications",
        titleAr: "تصنيفات الشبكات",
        contentEn: "• Geographical: LAN (local, single building), MAN (metropolitan, city scale), WAN (wide, countries/internet).\n• Authentication: Peer-to-Peer (equal partners, no dedicated server) vs Client-Server (centralized security/database controlled by a Domain Controller with Active Directory).",
        contentAr: "• جغرافياً: LAN (محلية، مبنى واحد)، MAN (متروبوليتان، على مستوى مدينة)، WAN (واسعة، دول/الإنترنت).\n• الصلاحيات: الند للند P2P (أجهزة متكافئة، بدون خادم مخصص) مقابل العميل-الخادم Client-Server (أمن مركزي تدار فيه الصلاحيات بواسطة قاعدة بيانات نشطة Active Directory)."
      }
    ]
  },
  {
    id: "l2",
    titleEn: "Lecture 2: Transmission Technology & Topologies",
    titleAr: "المحاضرة 2: تقنيات الإرسال وطبوغرافيا الشبكات",
    durationEn: "50 mins",
    durationAr: "50 دقيقة",
    topics: [
      {
        titleEn: "Transmission Modes",
        titleAr: "أوضاع الإرسال",
        contentEn: "• Simplex: Unidirectional flow (e.g., mainframe to monitor).\n• Half-Duplex: Bidirectional but not simultaneous (e.g., walkie-talkie).\n• Full-Duplex: Simultaneous bidirectional transmission (e.g., telephone call).",
        contentAr: "• أحادي الاتجاه (Simplex): تدفق في اتجاه واحد فقط (مثل من الحاسب المركزي للشاشة).\n• نصف ثنائي الاتجاه (Half-Duplex): اتجاهين ولكن ليس في نفس الوقت (مثل اللاسلكي).\n• ثنائي الاتجاه بالكامل (Full-Duplex): إرسال واستقبل متزامن في نفس الوقت (مثل مكالمة الهاتف)."
      },
      {
        titleEn: "Physical vs Logical Topologies",
        titleAr: "البنية الفيزيائية مقابل المنطقية",
        contentEn: "• Physical Topology: Hardware layout and physical cabling connections.\n• Logical Topology: Software-driven access control, showing how data actually moves and gets shared across the network.",
        contentAr: "• الطبوغرافيا الفيزيائية (Physical): التخطيط المادي للأجهزة وتوصيلات الكابلات.\n• الطبوغرافيا المنطقية (Logical): التحكم في الوصول البرمجي وكيفية انتقال ومشاركة البيانات فعلياً."
      }
    ]
  },
  {
    id: "l3",
    titleEn: "Lecture 3: Network Hardware & Media",
    titleAr: "المحاضرة 3: عتاد الشبكات ووسائط النقل",
    durationEn: "55 mins",
    durationAr: "55 دقيقة",
    topics: [
      {
        titleEn: "Active and Passive Devices",
        titleAr: "الأجهزة النشطة وغير النشطة",
        contentEn: "• Passive Hub: Simply transmits data without regeneration; not a repeater.\n• Active Hub / Repeater: Amplifies and regenerates electrical signals to extend transmission distances.\n• Bridge: Filters/forwards frames using MAC addresses; operates at Layer 2 (Data Link).\n• Switch: High port-density Bridge, establishes point-to-point connections directly.\n• Router: Connects dissimilar networks using logical IP addresses; operates at Layer 3 (Network).",
        contentAr: "• الموزع الخامل (Passive Hub): يمرر الإشارات دون تقويتها (لا يعتبر مكرر إشارة).\n• الموزع النشط/المكرر (Active Hub/Repeater): يجدد ويقوي الإشارات الكهربائية لزيادة مسافة النقل.\n• الجسر (Bridge): يفحص عنوان MAC لتمرير أو تصفية البيانات في الطبقة الثانية.\n• المبدل (Switch): جسر متعدد المنافذ، ينشئ اتصالات مباشرة مخصصة.\n• الموجه (Router): يربط شبكات مختلفة باستخدام العناوين المنطقية IP في الطبقة الثالثة."
      }
    ]
  },
  {
    id: "l4",
    titleEn: "Lecture 4: OSI Reference Model & TCP/IP Stack",
    titleAr: "المحاضرة 4: النموذج المرجعي OSI وحزمة بروتوكولات TCP/IP",
    durationEn: "60 mins",
    durationAr: "60 دقيقة",
    topics: [
      {
        titleEn: "The 7 Layers of OSI",
        titleAr: "الطبقات السبع لنموذج OSI",
        contentEn: "7. Application: User-interface with system (HTTP, SMTP, FTP, DNS).\n6. Presentation: Encryption, formatting, and data compression.\n5. Session: Syncing, connection management, recovery (e.g., Skype sessions).\n4. Transport: Segment delivery; TCP (connection-oriented) vs UDP (connectionless).\n3. Network: Logical addressing & routing; parses Packets (IP, ARP, ICMP).\n2. Data Link: Logical to physical translation, framing, MAC addressing, error detection.\n1. Physical: Converts frames into raw bits onto physical media.",
        contentAr: "7. التطبيق (Application): واجهة المستخدم (HTTP, SMTP, FTP, DNS).\n6. العرض (Presentation): التشفير وضغط البيانات وتنسيق الملفات.\n5. الجلسة (Session): مزامنة واستعادة وإدارة قنوات الاتصال.\n4. النقل (Transport): تسليم البيانات؛ بروتوكول TCP (موثوق) مقابل UDP (غير موثوق).\n3. الشبكة (Network): التوجيه والعنونة المنطقية؛ يتعامل مع الحزم Packets (IP, ARP).\n2. ربط البيانات (Data Link): التأطير وتحديد عناوين MAC واكتشاف الأخطاء.\n1. الفيزيائية (Physical): تحويل الإطارات إلى بتات RAW ونقلها عبر الأوساط المادية."
      }
    ]
  }
];
