export interface Flashcard {
  id: number;
  topic: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export const FLASHCARDS_DATA: Flashcard[] = [
  { id: 1, topic: "DNS", titleEn: "Domain Name System", titleAr: "نظام أسماء النطاقات", descEn: "Translates human-readable hostnames (e.g., google.com) into machine IP addresses.", descAr: "يقوم بتحويل أسماء النطاقات المكتوبة لسهولة قراءتها إلى عناوين IP تفهمها الأجهزة." },
  { id: 2, topic: "MAC Address", titleEn: "Physical Address", titleAr: "العنوان الفيزيائي للموقع", descEn: "A 48-bit permanent hexadecimal address burned into the NIC by manufacturers.", descAr: "عنوان فيزيائي دائم من 48 بت بنظام السداسي عشر، يتم وضعه في بطاقة الشبكة من قِبل المصنع." },
  { id: 3, topic: "UTP vs STP", titleEn: "Twisted Pair Cabling", titleAr: "الكابلات الملتوية المحمية وغير المحمية", descEn: "UTP has no shield. STP features individual metallic wire shielding to protect against high EMI.", descAr: "كابلات UTP غير محمية. بينما تتميز STP بدرع معدني واقٍ يحمي البيانات من التداخل الكهرومغناطيسي." },
  { id: 4, topic: "Fiber Optic", titleEn: "Light Pulse Media", titleAr: "الألياف الضوئية", descEn: "Transmits data via high-speed light pulses through glass or plastic cores over immense distances.", descAr: "تعتمد على نقل نبضات الضوء بسرعات فائقة عبر خيوط زجاجية دقيقة للمسافات الشاسعة." },
  { id: 5, topic: "TCP vs UDP", titleEn: "Layer 4 Transport Layer", titleAr: "بروتوكول TCP مقابل UDP", descEn: "TCP is connection-oriented guaranteeing delivery. UDP is connectionless, fast, and lightweight.", descAr: "TCP موجه للاتصال ويضمن التسليم. UDP غير موجه للاتصال، وهو سريع وخفيف للبث المباشر." },
  { id: 6, topic: "Hub vs Switch", titleEn: "Data Forwarding Modes", titleAr: "الموزع مقابل المبدل", descEn: "Hub broadcasts incoming signals to all ports. Switch reads destination MAC for direct micro-targeted delivery.", descAr: "الموزع يرسل الإشارات لجميع المنافذ بلا تفرقة. المبدل يقرأ عناوين MAC ويوجه لجهة الهدف مباشرة." },
  { id: 7, topic: "Router", titleEn: "Layer 3 Routing Engine", titleAr: "الموجه ذو الطبقة الثالثة", descEn: "Determines paths between different subnets using logical IP addresses to route packets accurately.", descAr: "يحدد أفضل المسارات لتمرير حزم البيانات بين الشبكات المختلفة بالاعتماد على عناوين IP." },
  { id: 8, topic: "Application Layer", titleEn: "OSI Layer 7 Interface", titleAr: "طبقة التطبيقات السابعة", descEn: "Directly handles system interface and communication for programs via HTTP, SMTP, and FTP.", descAr: "تحدد واجهة الاتصال المباشرة مع البرامج والمستخدم وتدير بروتوكولات مثل HTTP و SMTP." },
  { id: 9, topic: "Data Link Layer", titleEn: "OSI Layer 2 Formatting", titleAr: "طبقة ربط البيانات الثانية", descEn: "Formats packets into Frames, executes hardware MAC addressing, and runs basic link error detection.", descAr: "تحول الحزم لإطارات (Frames) وتدير العنونة الفيزيائية وتكتشف أخطاء الإرسال في الخط المحلي." },
  { id: 10, topic: "Subnet Host Formula", titleEn: "Host Space Equation", titleAr: "معادلة حساب الأجهزة المتاحة", descEn: "Usable hosts per subnet is defined as 2^H - 2, where H is the remaining available host bits.", descAr: "عدد الأجهزة الصالحة لكل شبكة فرعية = 2أس H مطروحاً منه 2، حيث H عدد بتات المضيف المتبقية." },
  { id: 11, topic: "Collision Domain", titleEn: "Signal Traffic Isolation", titleAr: "نطاق تصادم الإشارات", descEn: "Hubs share a single global collision domain. Every individual port on a Switch creates an isolated domain.", descAr: "الموزع يشترك بالكامل في نطاق تصادم واحد. بينما كل منفذ على المبدل يشكل نطاق تصادم معزول ومستقل." },
  { id: 12, topic: "Bandwidth", titleEn: "Data Carrying Capacity", titleAr: "عرض النطاق الترددي", descEn: "The theoretical maximum capacity of a network transmission channel measured in bits per second.", descAr: "أقصى سعة خط نقل بيانات لإرسال المعلومات خلال فترة زمنية محددة (تقاس بالبت لكل ثانية)." },
  { id: 13, topic: "Transmission Modes", titleEn: "Simplex to Full Duplex", titleAr: "أوضاع إرسال البيانات", descEn: "Simplex is 1-way. Half-duplex is 2-way alternating. Full-duplex is concurrent simultaneous bidirectional flow.", descAr: "أحادي: اتجاه واحد. نصف ثنائي: اتجاهين بالتبادل. ثنائي كامل: اتجاهين متزامنين في نفس الوقت." },
  { id: 14, topic: "Circuit Switching", titleEn: "Dedicated Line Paths", titleAr: "تبديل الدوائر المخصصة", descEn: "Establishes a completely dedicated continuous physical link layer circuit before data exchange starts.", descAr: "ينشئ مساراً فيزيائياً مخصصاً ومحجوزاً بالكامل قبل بدء الاتصال، كما في شبكات الهاتف التقليدية." },
  { id: 15, topic: "Packet Switching", titleEn: "Dynamic Routing Architecture", titleAr: "تبديل الحزم الديناميكي", descEn: "Splits messages into atomic packets that move independently across shared media based on efficiency.", descAr: "يقسم البيانات إلى أجزاء صغيرة (حزم) يتم توجيهها ديناميكياً وكفاءة عالية عبر مسارات مشتركة." },
  { id: 16, topic: "IPv4 vs IPv6", titleEn: "Addressing Scalability", titleAr: "مقارنة عناوين IPv4 و IPv6", descEn: "IPv4 utilizes 32-bit addresses (4.3B limits). IPv6 scales to a massive 128-bit hexadecimal field.", descAr: "يستخدم IPv4 عناوين 32 بت (محدودة النطاق). بينما يعتمد IPv6 على 128 بت ليعطي عدداً هائلاً من العناوين." }
];
