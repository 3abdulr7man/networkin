export interface Question {
  id: string;
  category: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  answerIndex: number;
  explanationAr: string;
  explanationEn: string;
  hasDiagram?: boolean;
  diagramType?: 'subnet195' | 'subnet200';
}

export const QUESTIONS_DATA: Question[] = [
            // --- MIDTERM EXAM (10 QUESTIONS) ---
            {
                id: "m1",
                category: "midterm",
                questionAr: "أي بروتوكول يُسخدم لإرسال البريد الإلكتروني (E-mail)؟",
                questionEn: "Which protocol is used to send email?",
                optionsAr: ["SNMP", "SMTP", "HTTP", "FTP"],
                optionsEn: ["SNMP", "SMTP", "HTTP", "FTP"],
                answerIndex: 1,
                explanationAr: "بروتوكول SMTP (Simple Mail Transfer Protocol) هو المسؤول الحصري عن توجيه وإرسال الرسائل الإلكترونية لطبقة التطبيقات.",
                explanationEn: "SMTP (Simple Mail Transfer Protocol) is the standard application layer protocol used for routing and sending emails."
            },
            {
                id: "m2",
                category: "midterm",
                questionAr: "في أي طوبولوجيا تتصل جميع الأجهزة بجهاز مركزي (Hub)؟",
                questionEn: "In which topology does each node connect to a central hub?",
                optionsAr: ["طوبولوجيا الحلقة (Ring)", "طوبولوجيا المشبك (Mesh)", "طوبولوجيا الناقل (Bus)", "طوبولوجيا النجمة (Star)"],
                optionsEn: ["Ring Topology", "Mesh Topology", "Bus Topology", "Star Topology"],
                answerIndex: 3,
                explanationAr: "في طوبولوجيا النجمة (Star Topology)، ترتبط جميع الأجهزة بشكل مباشر بنقطة تحكم مركزية متمثلة بالـ Switch أو الـ Hub.",
                explanationEn: "In a Star topology, all network nodes connect directly to a central hub or switch which handles all routing."
            },
            {
                id: "m3",
                category: "midterm",
                questionAr: "أي طبقة من نموذج OSI ترتبط باكتشاف وتصحيح الأخطاء؟",
                questionEn: "Which layer of the OSI model is associated with error detection and correction?",
                optionsAr: ["طبقة النقل (Transport Layer)", "طبقة التطبيقات (Application Layer)", "طبقة ربط البيانات (Data Link Layer)", "طبقة الشبكة (Network Layer)"],
                optionsEn: ["Transport Layer", "Application Layer", "Data Link Layer", "Network Layer"],
                answerIndex: 2,
                explanationAr: "طبقة ربط البيانات (Data Link) مسؤولة مسبقاً عن تجميع الإشارات في أطر (Frames) واكتشاف وتصحيح أخطاء الوسيط الفيزيائي.",
                explanationEn: "The Data Link layer handles framing, physical addressing, and error checking on the physical medium."
            },
            {
                id: "m4",
                category: "midterm",
                questionAr: "ما هي الوظيفة الأساسية للموجه (Router)؟",
                questionEn: "What is the primary function of a router?",
                optionsAr: ["توصيل الأجهزة اللاسلكية", "تضخيم الإشارات التالفة", "توجيه البيانات بين الشبكات المختلفة", "لا شيء مما سبق"],
                optionsEn: ["To connect wireless devices", "To amplify signals", "To route data between networks", "None of the above"],
                answerIndex: 2,
                explanationAr: "يقوم الراوتر (Router) بربط وتوجيه حزم البيانات عبر الطرق المثلى بين الشبكات المختلفة باستخدام بروتوكول الـ IP.",
                explanationEn: "Routers forward packets across different subnets and networks based on logical IP addressing."
            },
            {
                id: "m5",
                category: "midterm",
                questionAr: "أي مما يلي يُعد بروتوكولاً موجهاً بالاتصال (Connection-oriented)؟",
                questionEn: "Which of the following is a connection-oriented protocol?",
                optionsAr: ["TCP", "UDP", "IP", "ICMP"],
                optionsEn: ["TCP", "UDP", "IP", "ICMP"],
                answerIndex: 0,
                explanationAr: "بروتوكول TCP هو بروتوكول موجه بالاتصال يتطلب عمل اتصال مسبق (3-way handshake) وتأكيد لتسليم البيانات دون تلف.",
                explanationEn: "TCP is connection-oriented because it establishes an active session and guarantees delivery through sequence numbers."
            },
            {
                id: "m6",
                category: "midterm",
                questionAr: "الإنترنت (The internet) هو مثال على شبكات WAN الواسعة.",
                questionEn: "The internet is an example of a WAN.",
                optionsAr: ["صح (True)", "خطأ (False)"],
                optionsEn: ["True", "False"],
                answerIndex: 0,
                explanationAr: "الإنترنت يمتد ليغطي قارات العالم بالكامل، وهو أوسع شبكة واسعة على الإطلاق.",
                explanationEn: "The global internet spans across countries and continents, classifying it as a Wide Area Network."
            },
            {
                id: "m7",
                category: "midterm",
                questionAr: "خدمة بروتوكول UDP لا تتطلب عمل إعداد اتصال مسبق قبل الإرسال.",
                questionEn: "UDP service does not require connection setup.",
                optionsAr: ["صح (True)", "خطأ (False)"],
                optionsEn: ["True", "False"],
                answerIndex: 0,
                explanationAr: "بروتوكول UDP هو Connectionless يرسل البيانات دون إشعار مسبق لتوفير أقصى سرعة.",
                explanationEn: "True. UDP is a connectionless protocol that transmits data packets instantly without awaiting handshakes."
            },
            {
                id: "m8",
                category: "midterm",
                questionAr: "كافة أنشطة الاتصال بالإنترنت محكومة ببروتوكولات ثابتة.",
                questionEn: "All communication activity in the Internet is governed by protocols.",
                optionsAr: ["خطأ (False)", "صح (True)"],
                optionsEn: ["False", "True"],
                answerIndex: 1,
                explanationAr: "البروتوكولات هي القواعد التي تتيح للبرمجيات والعتاد المختلفة التحدث والتواصل بسلاسة بالإنترنت.",
                explanationEn: "True. Internet communication relies strictly on standard protocols like IP, TCP, and HTTP to align endpoints."
            },
            {
                id: "m9",
                category: "midterm",
                questionAr: "في شبكات الند للند (P2P)، الحواسب المتصلة تتمتع بصلاحيات ومكانة متساوية تماماً (Equal Status).",
                questionEn: "In P2P networks, all computers have equal status.",
                optionsAr: ["خطأ (False)", "صح (True)"],
                optionsEn: ["False", "True"],
                answerIndex: 1,
                explanationAr: "في شبكات الند للند، تمتلك الأجهزة صلاحيات ومكانة متساوية تماماً (Equal status) وتعمل كعميل وخادم معاً.",
                explanationEn: "True. P2P nodes are entirely symmetric and equal."
            },
            {
                id: "m10",
                category: "midterm",
                questionAr: "الشبكة المحلية (LAN) هي شبكة تغطي مساحات جغرافية صغيرة كبنى مفرد أو مبنى واحد.",
                questionEn: "A Local Area Network (LAN) covers a small area like a single building.",
                optionsAr: ["خطأ (False)", "صح (True)"],
                optionsEn: ["False", "True"],
                answerIndex: 1,
                explanationAr: "الشبكة التي تغطي مبنى مفرد أو مساحة صغيرة هي LAN وليس WAN التي تغطي دولاً وقارات.",
                explanationEn: "True. A network covering small zones like single buildings is a Local Area Network (LAN)."
            },

            // --- QUIZ 1 (20 QUESTIONS) ---
            {
                id: "q1_1",
                category: "quiz1",
                questionAr: "ما هو التعريف الدقيق للشبكة (Network)؟",
                questionEn: "What is the definition of a network?",
                optionsAr: [
                    "جهاز كمبيوتر واحد يعمل بمفرده",
                    "مجموعة من الأجهزة المتصلة ببعضها لتتشارك الموارد والبيانات",
                    "نوع من أنواع البرمجيات والتطبيقات فقط",
                    "جهاز مخصص للتخزين"
                ],
                optionsEn: [
                    "A single computer working alone",
                    "A group of connected devices that share resources and data",
                    "A type of software only",
                    "A storage device"
                ],
                answerIndex: 1,
                explanationAr: "الشبكة هي نظام ربط يضم حواسب وملحقات متعددة لتسهيل تبادل ونقل الملفات ومشاركة الطابعات والملحقات.",
                explanationEn: "A computer network is defined as two or more autonomous computing devices interconnected to share resources."
            },
            {
                id: "q1_2",
                category: "quiz1",
                questionAr: "أي مما يلي يُعد مثالاً ملموساً على مشاركة الموارد (Resource Sharing)؟",
                questionEn: "Which of the following is an example of resource sharing?",
                optionsAr: ["تشغيل ألعاب الفيديو", "مشاركة استخدام الطابعة", "مشاهدة الأفلاف", "كتابة وتنسيق المستندات"],
                optionsEn: ["Playing games", "Sharing a printer", "Watching videos", "Writing documents"],
                answerIndex: 1,
                explanationAr: "مشاركة طابعة واحدة بين عشرة حواسب بالمكتب يمثل الفكرة المثلى والأبرز لمشاركة العتاد لتقليل النفقات والمصاريف.",
                explanationEn: "Sharing hardware resources, like utilizing one network-attached printer, saves costs and optimizes operations."
            },
            {
                id: "q1_3",
                category: "quiz1",
                questionAr: "ما هي الأهداف الرئيسية لشبكات الحواسب والاتصال؟",
                questionEn: "What are the main goals of computer networks?",
                optionsAr: ["الاتصال والمراسلة", "تبادل ونقل البيانات والملفات", "مشاركة الموارد والعتاد", "كل ما سبق ذكره"],
                optionsEn: ["Communication", "Data exchange", "Resource sharing", "All of the above"],
                answerIndex: 3,
                explanationAr: "تجمع الشبكات الفائدة المتكاملة لتقليل التكاليف ومشاركة العتاد، وتسهيل الإرسال، والتنسيق السريع للبيانات الكبرى.",
                explanationEn: "All are major drivers of networking: providing instant communications, data backup, and resource cost pooling."
            },
            {
                id: "q1_4",
                category: "quiz1",
                questionAr: "يمكن تصنيف الشبكات في العتاد والاتصالات إلى:",
                questionEn: "Networks can be classified into:",
                optionsAr: ["شبكات سلكية ولاسلكية", "شبكات لاسلكية فقط", "شبكات واي فاي فقط", "شبكات قنوات فضائية فقط"],
                optionsEn: ["Wired and Wireless", "Wireless only", "Wi-Fi only", "Satellite only"],
                answerIndex: 0,
                explanationAr: "تعتمد وسائط الاتصال إما على الكابلات السلكية المادية (Wired) أو الترددات الكهرومغناطيسية الهوائية (Wireless).",
                explanationEn: "Transmission media splits down into guided/physical paths (wired) or unguided/airborne paths (wireless)."
            },
            {
                id: "q1_5",
                category: "quiz1",
                questionAr: "يُعتبر كابل الأزواج الملتوية (Twisted Pair) مثالاً على:",
                questionEn: "Twisted Pair cable is considered:",
                optionsAr: ["الوسائط الموجهة (Guided media)", "الوسائط غير الموجهة (Unguided media)", "كلاهما معاً", "لا شيء مما سبق"],
                optionsEn: ["Guided media", "Unguided media", "Both", "None"],
                answerIndex: 0,
                explanationAr: "الوسائط الموجهة (Guided) تعني انتقال الإشارات بداخل مجرى مادي ملموس ومحدد كالأسلاك والكابلات النحاسية والضوئية.",
                explanationEn: "Guided media restrict optical or electrical wave propagation to physical pathways such as wires or glass fibers."
            },
            {
                id: "q1_6",
                category: "quiz1",
                questionAr: "أي من كابلات الأزواج الملتوية هي الأكثر تكلفة في التصنيع والبيع؟",
                questionEn: "Which is more expensive in Twisted Pair cables?",
                optionsAr: ["UTP (غير محمي)", "STP (محمي بطبقة حماية)", "كلاهما متساوٍ في السعر والتكلفة", "كابلات الفايبر والضوء"],
                optionsEn: ["UTP", "STP", "Both are equal", "Fiber"],
                answerIndex: 1,
                explanationAr: "كابلات STP (Shielded Twisted Pair) تحتوي على حماية ألمنيوم إضافية تمنع الضوضاء والتداخل، مما يزيد تكلفة تصنيعها.",
                explanationEn: "STP is more expensive because of the extra metallic shielding around the inner wires to prevent interference."
            },
            {
                id: "q1_7",
                category: "quiz1",
                questionAr: "أي طوبولوجيا تعتمد على كابل رئيسي واحد متصل بكافة الأجهزة؟",
                questionEn: "Which topology uses a single main cable to connect all devices?",
                optionsAr: ["طوبولوجيا النجمة (Star)", "طوبولوجيا المشبك (Mesh)", "طوبولوجيا الناقل (Bus)", "طوبولوجيا الحلقة (Ring)"],
                optionsEn: ["Star", "Mesh", "Bus", "Ring"],
                answerIndex: 2,
                explanationAr: "طوبولوجيا الناقل (Bus Topology) تستخدم كبلاً واحداً كحبل فقري للشبكة (Backbone) وتتصل كافة الحواسب بجوانبه.",
                explanationEn: "Bus topology uses a single linear cable, called the bus, as the backbone of the entire network."
            },
            {
                id: "q1_8",
                category: "quiz1",
                questionAr: "أي طوبولوجيا تستوجب وتفرض وجود جهاز مركزي للربط؟",
                questionEn: "Which topology has a central device?",
                optionsAr: ["طوبولوجيا الناقل (Bus)", "طوبولوجيا النجمة (Star)", "طوبولوجيا الحلقة (Ring)", "طوبولوجيا المشبك (Mesh)"],
                optionsEn: ["Bus", "Star", "Ring", "Mesh"],
                answerIndex: 1,
                explanationAr: "طوبولوجيا النجمة (Star Topology) تفترض اتصال جميع الأجهزة بنقطة تجميع مركزية نشطة كالـ Hub أو الـ Switch.",
                explanationEn: "The Star topology layout centers around a central concentrator or hub through which all nodes communicate."
            },
            {
                id: "q1_9",
                category: "quiz1",
                questionAr: "أي طوبولوجيا يُفضل ويتم بناؤها للأنظمة العسكرية وأنظمة الطوارئ الحرجة؟",
                questionEn: "Which topology is used in emergency and military systems?",
                optionsAr: ["طوبولوجيا النجمة (Star)", "طوبولوجيا الناقل (Bus)", "طوبولوجيا الحلقة (Ring)", "طوبولوجيا المشبك (Mesh)"],
                optionsEn: ["Star", "Bus", "Ring", "Mesh"],
                answerIndex: 3,
                explanationAr: "طوبولوجيا المشبك (Mesh) توفر أعلى حماية لكون الأجهزة مربوطة بعدة مسارات بديلة، فلا يقطع تعطل كابل واحد الخدمة.",
                explanationEn: "Mesh topology is highly resilient, providing multiple redundant paths which prevent system-wide outages."
            },
            {
                id: "q1_10",
                category: "quiz1",
                questionAr: "ما الذي يمثله الاختصار العلمي لـ CSMA/CA؟",
                questionEn: "What does CSMA/CA stand for?",
                optionsAr: [
                    "Carrier Signal Multiple Access / Collision Avoidance",
                    "Carrier Sense Multiple Access / Collision Avoidance",
                    "Computer System Multiple Access",
                    "Central Signal Management Access"
                ],
                optionsEn: [
                    "Carrier Signal Multiple Access / Collision Avoidance",
                    "Carrier Sense Multiple Access / Collision Avoidance",
                    "Computer System Multiple Access",
                    "Central Signal Management Access"
                ],
                answerIndex: 1,
                explanationAr: "مصلح CSMA/CA يعني تحسس وفحص خلو الناقل مع تجنب حدوث تصادم الإشارات بالشبكات اللاسلكية.",
                explanationEn: "CSMA/CA stands for Carrier Sense Multiple Access / Collision Avoidance, which is utilized heavily in 802.11 Wi-Fi networks."
            },
            {
                id: "q1_11",
                category: "quiz1",
                questionAr: "ما الذي يمثله الاختصار العلمي لـ CSMA/CD؟",
                questionEn: "What does CSMA/CD stand for?",
                optionsAr: [
                    "Carrier Sense Multiple Access / Collision Detection",
                    "Central System Media Access",
                    "Collision System Media Access",
                    "Carrier Signal Multiple Access / Data"
                ],
                optionsEn: [
                    "Carrier Sense Multiple Access / Collision Detection",
                    "Central System Media Access",
                    "Collision System Media Access",
                    "Carrier Signal Multiple Access / Data"
                ],
                answerIndex: 0,
                explanationAr: "مصلح CSMA/CD يعني تحسس وفحص خلو الناقل مع كشف فوري لحدوث التصادم بالشبكات السلكية (Ethernet).",
                explanationEn: "CSMA/CD stands for Carrier Sense Multiple Access / Collision Detection. It listens to wire traffic and halts on frame collisions."
            },
            {
                id: "q1_12",
                category: "quiz1",
                questionAr: "كيف تعمل طوبولوجيا وشبكات الـ Token Ring؟",
                questionEn: "How does Token Ring work?",
                optionsAr: [
                    "ترسل الأجهزة بياناتها في نفس الوقت عشوائياً",
                    "يدور رمز إلكتروني (Token) بالشبكة، والجهاز الذي يمسكه فقط يحصل على صلاحية الإرسال",
                    "ترسل جميع الأجهزة دفعة واحدة دون تفرقة",
                    "تعتمد على وجود خادم مركزي يوزع الإشارات"
                ],
                optionsEn: [
                    "Devices send data randomly",
                    "A token circulates and only the device holding it can transmit",
                    "All devices transmit at the same time",
                    "Uses central server"
                ],
                answerIndex: 1,
                explanationAr: "تعتمد شبكات الـ Token Ring على تمرير رمز مخصص إلكتروني بالدور لمنع تداخل الإشارات والتصادم كلياً بالشبكة.",
                explanationEn: "In Token Ring, a physical token is passed sequentially. A node can only append data if it possesses the token."
            },
            {
                id: "q1_13",
                category: "quiz1",
                questionAr: "ما هو الاختصار الصحيح والمطابق للـ OSI؟",
                questionEn: "What does OSI stand for?",
                optionsAr: [
                    "Open System Interface",
                    "Operating System Internet",
                    "Open Systems Interconnection",
                    "Optical System Interface"
                ],
                optionsEn: [
                    "Open System Interface",
                    "Operating System Internet",
                    "Open Systems Interconnection",
                    "Optical System Interface"
                ],
                answerIndex: 2,
                explanationAr: "يمثل الاختصار الاسم المعياري Open Systems Interconnection لتشغيل وتنسيق المعايير القياسية العالمية للشبكات.",
                explanationEn: "OSI stands for Open Systems Interconnection, the conceptual network model developed by ISO."
            },
            {
                id: "q1_14",
                category: "quiz1",
                questionAr: "ما هو عدد طبقات نموذج الـ OSI؟",
                questionEn: "How many layers are in the OSI model?",
                optionsAr: ["5 طبقات", "6 طبقات", "7 طبقات", "8 طبقات"],
                optionsEn: ["5", "6", "7", "8"],
                answerIndex: 2,
                explanationAr: "يتكون نموذج OSI بالكامل من سبع طبقات متكاملة تبدأ بالطبقة الفيزيائية صعوداً لطبقة التطبيقات.",
                explanationEn: "The OSI architecture utilizes exactly seven layers to segment networking actions from Physical to Application."
            },
            {
                id: "q1_15",
                category: "quiz1",
                questionAr: "ما هو الاسم الكامل والوظيفة لبروتوكول TCP؟",
                questionEn: "What does TCP stand for?",
                optionsAr: [
                    "Transmission Control Protocol",
                    "Transfer Communication Process",
                    "Transport Channel Protocol",
                    "Technical Control Program"
                ],
                optionsEn: [
                    "Transmission Control Protocol",
                    "Transfer Communication Process",
                    "Transport Channel Protocol",
                    "Technical Control Program"
                ],
                answerIndex: 0,
                explanationAr: "بروتوكول TCP (Transmission Control Protocol) هو ركيزة النقل بالطبقة الرابعة لضمان وصول المكونات دون تلف.",
                explanationEn: "TCP represents Transmission Control Protocol, the connection-oriented layer-4 transport standard."
            },
            {
                id: "q1_16",
                category: "quiz1",
                questionAr: "يعمل المحول الذكي (Switch) في أي من طبقات الـ OSI؟",
                questionEn: "A Switch operates at which OSI layer?",
                optionsAr: ["الطبقة الفيزيائية (Physical)", "طبقة الشبكة (Network)", "طبقة ربط البيانات (Data Link)", "طبقة النقل (Transport)"],
                optionsEn: ["Physical Layer", "Network Layer", "Data Link Layer", "Transport Layer"],
                answerIndex: 2,
                explanationAr: "يعمل الـ Switch في طبقة ربط البيانات (Data Link) لأنه يقوم بتمرير وتوصيل الإطارات بفحص الـ MAC Address للأجهزة.",
                explanationEn: "Switches utilize hardware MAC addressing to target frames, placing them inside the Data Link Layer (Layer 2)."
            },
            {
                id: "q1_17",
                category: "quiz1",
                questionAr: "أي الأجهزة التالية يُسخدم لربط شبكات مختلفة ومتعددة ببعضها البعض؟",
                questionEn: "Which device connects different networks together?",
                optionsAr: ["جهاز الـ Hub", "جهاز الـ Switch", "الموجه (Router)", "الجسر (Bridge)"],
                optionsEn: ["Hub", "Switch", "Router", "Bridge"],
                answerIndex: 2,
                explanationAr: "الموجه (Router) هو الجهاز الذكي المسؤول عن الربط بين النطاقات المختلفة وتوفير التوجيه باستخدام بروتوكولات الـ IP.",
                explanationEn: "Routers forward packets across distinct networks, defining logical routing paths at the Network layer."
            },
            {
                id: "q1_18",
                category: "quiz1",
                questionAr: "أي طبقة من طبقات الـ OSI هي المسؤولة الأساسية عن التشفير والضغط؟",
                questionEn: "Which OSI layer is responsible for encryption?",
                optionsAr: ["طبقة الجلسة (Session)", "طبقة العرض والتقديم (Presentation)", "طبقة النقل (Transport)", "طبقة الشبكة (Network)"],
                optionsEn: ["Session", "Presentation", "Transport", "Network"],
                answerIndex: 1,
                explanationAr: "طبقة العرض والتقديم (Presentation Layer) تهتم بترجمة وصياغة وتشفير وفك ضغط البيانات لتجهيزها للعرض الفوري.",
                explanationEn: "The Presentation Layer handles data representation, parsing, compression, and cryptography tasks."
            },
            {
                id: "q1_19",
                category: "quiz1",
                questionAr: "ما هو نطاق التصادم (Collision Domain) في المحول (Switch)؟",
                questionEn: "The collision domain in a switch is:",
                optionsAr: [
                    "واحد لجميع الأجهزة",
                    "يعتمد على عدد المنافذ المتاحة والمستخدمة بالمحول",
                    "اثنان فقط لكل محول سويتش",
                    "لا توجد تصادمات على الإطلاق في أجهزة السويتش"
                ],
                optionsEn: [
                    "One",
                    "Depends on number of ports",
                    "Two",
                    "No collisions at all"
                ],
                answerIndex: 1,
                explanationAr: "كل منفذ بداخل السويتش (Switch) يمثل نطاق تصادم منفصل ومستقل بذاته تماماً، مما يمنع حدوز تصادم كلي بالشبكة.",
                explanationEn: "Unlike Hubs, each physical port on an Ethernet switch is its own separate, distinct collision domain."
            },
            {
                id: "q1_20",
                category: "quiz1",
                questionAr: "يعمل الموزع التقليدي (Hub) في أي طبقة من طبقات نموذج الـ OSI؟",
                questionEn: "A Hub works at which layer?",
                optionsAr: ["الطبقة الفيزيائية (Physical Layer)", "طبقة ربط البيانات (Data Link Layer)", "طبقة الشبكة (Network Layer)", "طبقة الجلسة (Session Layer)"],
                optionsEn: ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"],
                answerIndex: 0,
                explanationAr: "جهاز الـ Hub يمثل مكرراً للمنافذ ويقوم بنسخ الإشارات الكهربائية وتوزيعها على كافة الأجهزة دون فحص، فيعمل في الطبقة الفيزيائية الأولى.",
                explanationEn: "Hubs do not parse data or look at headers. They duplicate electrical physical waves, putting them in the Physical Layer."
            },

            // --- QUIZ 2 (9 QUESTIONS) ---
            {
                id: "q2_1",
                category: "quiz2",
                questionAr: "كافة الأنشطة والاتصالات في شبكة الإنترنت محكومة بقوانين تسمى البروتوكولات.",
                questionEn: "All communication activity in the Internet is governed by protocols.",
                optionsAr: ["خطأ (False)", "صح (True)"],
                optionsEn: ["False", "True"],
                answerIndex: 1,
                explanationAr: "نعم، لولا وجود البروتوكولات (الأعراف والقواعد) لم يكن ليتصل جهازان مختلفان في التصنيع ونظام التشغيل بالإنترنت.",
                explanationEn: "True. Internet communications require strict protocols to normalize interactions between diverse systems."
            },
            {
                id: "q2_2",
                category: "quiz2",
                questionAr: "أي طبقة من نموذج الـ OSI ترتبط بالتحكم وتصحيح واكتشاف الأخطاء؟",
                questionEn: "Which layer of the OSI model is associated with error detection and correction?",
                optionsAr: ["طبقة التطبيقات (Application)", "طبقة النقل (Transport)", "طبقة الشبكة (Network)", "طبقة ربط البيانات (Data Link)"],
                optionsEn: ["Application Layer", "Transport Layer", "Network Layer", "Data Link Layer"],
                answerIndex: 3,
                explanationAr: "طبقة ربط البيانات هي المسؤولة عن سلامة الإطارات (Frames) وخلوها من التلف على الوسيط الفيزيائي المباشر.",
                explanationEn: "The Data Link layer controls framing and error checking protocols on local hops."
            },
            {
                id: "q2_3",
                category: "quiz2",
                questionAr: "ما هو بروتوكول الإيميل المعتمد ليرسل الرسائل في طبقة التطبيقات؟",
                questionEn: "Which protocol is used to send email?",
                optionsAr: ["SNMP", "SMTP", "HTTP", "FTP"],
                optionsEn: ["SNMP", "SMTP", "HTTP", "FTP"],
                answerIndex: 1,
                explanationAr: "بروتوكول SMTP يمثل اختصار Simple Mail Transfer Protocol ويستخدم لنقل البريد الإلكتروني بنجاح بين الخوادم والأجهزة.",
                explanationEn: "SMTP (Simple Mail Transfer Protocol) is universally used to route, forward, and transmit emails."
            },
            {
                id: "q2_4",
                category: "quiz2",
                questionAr: "خدمة بروتوكول الـ UDP السريع تتطلب عمل وبناء اتصال مسبق قبل البدء بنقل البيانات.",
                questionEn: "UDP service does require connection setup.",
                optionsAr: ["صح (True)", "خطأ (False)"],
                optionsEn: ["True", "False"],
                answerIndex: 1,
                explanationAr: "العبارة خاطئة. بروتوكول UDP هو Connectionless لا يحتاج لبناء اتصال مسبق، بل يرسل فورا لزيادة سرعة التناقل.",
                explanationEn: "False. UDP is lightweight and connectionless, sending streams without a handshake."
            },
            {
                id: "q2_5",
                category: "quiz2",
                questionAr: "تُعد شبكة الإنترنت الدولية الكبرى مثالاً ملموساً لشبكة WAN الواسعة النطاق.",
                questionEn: "The internet is an example of a WAN.",
                optionsAr: ["صح (True)", "خطأ (False)"],
                optionsEn: ["True", "False"],
                answerIndex: 0,
                explanationAr: "بالتأكيد، تغطي شبكة الإنترنت النطاف الأكبر لربط الشبكات بجميع أقطار وقارات العالم.",
                explanationEn: "True. The internet binds thousands of independent subnets globally, representing a Wide Area Network."
            },
            {
                id: "q2_6",
                category: "quiz2",
                questionAr: "الشبكة الواسعة (WAN) هي تلك التي تغطي نطاقاً جغرافياً صغيراً مثل مبنى مفرد أو حرم جامعي ضيق.",
                questionEn: "A wide area network (WAN) is a network that covers a small geographic area, such as a single building or campus.",
                optionsAr: ["صح (True)", "خطأ (False)"],
                optionsEn: ["True", "False"],
                answerIndex: 1,
                explanationAr: "العبارة خاطئة تماماً. النطاق الموصوف للمبنى المفرد أو الحرم الضيق هو شبكة LAN المحلية.",
                explanationEn: "False. Networks confined to local buildings are Local Area Networks (LANs)."
            },
            {
                id: "q2_7",
                category: "quiz2",
                questionAr: "في أي طوبولوجيا هيكلية يتصل كل جهاز فرعي بجهاز مركزي مثل الـ Hub؟",
                questionEn: "In which topology does each node connect to a central hub?",
                optionsAr: ["طوبولوجيا الناقل (Bus)", "طوبولوجيا النجمة (Star)", "طوبولوجيا الحلقة (Ring)", "طوبولوجيا الشجرة (Tree)"],
                optionsEn: ["Bus topology", "Star topology", "Ring topology", "Tree topology"],
                answerIndex: 1,
                explanationAr: "في طوبولوجيا النجمة (Star Topology)، تتصل الحواسب جميعاً بجهاز السويتش أو الهب المركزي بشكل شعاعي.",
                explanationEn: "The Star network configuration runs all node links to a centralized networking node (Hub/Switch)."
            },
            {
                id: "q2_8",
                category: "quiz2",
                questionAr: "شبكة الند للند (P2P) هي نوع من الشبكات التي تتمتع فيها جميع الحواسب بصلاحيات ومكانة متساوية.",
                questionEn: "A peer-to-peer (P2P) network is a type of network where all computers have equal status.",
                optionsAr: ["صح (True)", "خطأ (False)"],
                optionsEn: ["True", "False"],
                answerIndex: 0,
                explanationAr: "صح، حيث لا يوجد خادم رئيسي مخصص للتحكم، بل تتشارك كافة الأجهزة الأدوار مناصفة دون فرق في الصلاحية.",
                explanationEn: "True. Every computer on a peer-to-peer network is functionally identical, possessing equal status."
            },
            {
                id: "q2_9",
                category: "quiz2",
                questionAr: "أي البروتوكولات التالية هو بروتوكول موجه بالاتصال (Connection-oriented)؟",
                questionEn: "Which of the following is a connection-oriented protocol?",
                optionsAr: ["UDP", "ICMP", "TCP", "IP"],
                optionsEn: ["UDP", "ICMP", "TCP", "IP"],
                answerIndex: 2,
                explanationAr: "بروتوكول TCP هو البروتوكول الموجه بالاتصال بالطبقة الرابعة لضمان ترتيب وسلامة الحزم الواصلة.",
                explanationEn: "TCP establishes a virtual connection using handshakes, classifying it as connection-oriented."
            },

            // --- FINAL EXAM 2023 (30 QUESTIONS) ---
            {
                id: "f23_1",
                category: "final2023",
                questionAr: "يتم تصنيف الشبكات وفقاً للغرض من استخدامها ونوع الوحدات المستخدمة إلى:",
                questionEn: "The networks are classified according to the purpose of their use and the type of units used to:",
                optionsAr: ["نوعين (2 types)", "3 أنواع (3 types)", "4 أنواع (4 types)", "5 أنواع (5 types)"],
                optionsEn: ["2 types", "3 types", "4 types", "5 types"],
                answerIndex: 2,
                explanationAr: "وفق المنهج المعتمد، تنقسم الشبكات وفقاً للغرض من الاستخدام ونوع الوحدات إلى 4 أنواع رئيسية.",
                explanationEn: "According to the textbook, networks are structured into 4 classes based on use goals and hardware units."
            },
            {
                id: "f23_2",
                category: "final2023",
                questionAr: "تُستخدم المعالجات الدقيقة في أجهزة التحكم الإلكترونية للقياس والاستشعار والتحكم بـ:",
                questionEn: "It uses the microprocessors in control devices electronic to measurement, sensing, and control:",
                optionsAr: ["شبكات الاتصالات (Telecommunication)", "شبكات التحكم الرقمي (Digital control)", "شبكات النقل والتبادل (Transmission)", "غير ذلك (Otherwise)"],
                optionsEn: ["Telecommunication network", "Digital control network", "Transmission network", "Otherwise"],
                answerIndex: 1,
                explanationAr: "شبكات التحكم الرقمي (Digital control network) تعتمد على المعالجات للتحكم والقياس في الأجهزة والآلات الصناعية.",
                explanationEn: "Digital control networks process inputs from electronic microprocessors to sensor-check automated systems."
            },
            {
                id: "f23_3",
                category: "final2023",
                questionAr: "يُسستخدم لتجديد الإشارات التناظرية أو الرقمية المشوشة بسبب فقد وبث الإرسال الناجم عن التوهين (Attenuation):",
                questionEn: "It is used to regenerate analog or digital signals distorted by transmission loss due to attenuation:",
                optionsAr: ["الموزع (Hub)", "المحول (Switch)", "المكرر (Repeater)", "الموجه (Router)"],
                optionsEn: ["Hub", "Switch", "Repeater", "Router"],
                answerIndex: 2,
                explanationAr: "المكرر (Repeater) يعمل في الطبقة الأولى لتضخيم الإشارات التالفة والمشوشة وإرسالها لمسافات أطول دون تعديل.",
                explanationEn: "Repeaters reconstruct and amplify electrical signals weakened over distances by transmission attenuation."
            },
            {
                id: "f23_4",
                category: "final2023",
                questionAr: "يقوم بتوجيه حزم البيانات بين شبكات الحواسب المختلفة أو الشبكات الفرعية (Subnets):",
                questionEn: "It forwards data packets between computer networks or subnetworks:",
                optionsAr: ["المودم (Modem)", "المكرر (Repeater)", "المحول (Switch)", "الموجه (Router)"],
                optionsEn: ["Modem", "Repeater", "Switch", "Router"],
                answerIndex: 3,
                explanationAr: "الموجه (Router) هو الجهاز المسؤول عن فحص العناوين وتوجيه الحزم بين الشبكات والشبكات الفرعية المختلفة.",
                explanationEn: "Routers forward packets across different subnets, resolving routes through Network IP headers."
            },
            {
                id: "f23_5",
                category: "final2023",
                questionAr: "ما هو الطول والبتات المخصصة للعنوان الفيزيائي MAC Address؟",
                questionEn: "What is the length of the MAC address?",
                optionsAr: ["8 بت", "16 بت", "32 بت", "48 بت"],
                optionsEn: ["8 bits", "16 bits", "32 bits", "48 bits"],
                answerIndex: 3,
                explanationAr: "يتكون عنوان الـ MAC من 48 بت فريد مخصص ومحفور مسبقاً على بطاقة واجهة الشبكة NIC لكل جهاز.",
                explanationEn: "MAC physical hardware addresses are exactly 48 bits long, represented as 12 hexadecimal characters."
            },
            {
                id: "f23_6",
                category: "final2023",
                questionAr: "في شبكات الـ ........، تعمل الحواسب المتصلة كشركاء متساويين أو أنداد متطابقين:",
                questionEn: "In a ........ network, networked computers act as equal partners or peers.",
                optionsAr: ["Primary to peer", "Peer to primary", "Primary to secondary", "الند للند (Peer to Peer)"],
                optionsEn: ["Primary to peer", "Peer to primary", "Primary to secondary", "Peer to Peer"],
                answerIndex: 3,
                explanationAr: "في شبكات الند للند (Peer to Peer)، لا يوجد تحكم مركزي، وتتشارك كافة الأجهزة المتصلة الأدوار بصفة متساوية تماماً.",
                explanationEn: "In Peer-to-Peer networks, nodes have equal capabilities and responsibilities, without a central authority."
            },
            {
                id: "f23_7",
                category: "final2023",
                questionAr: "أي الطبقات التالية ليست متواجدة في نموذج TCP/IP ولكنها مدرجة بنموذج الـ OSI القياسي؟",
                questionEn: "Which of the following layers isn't present in the TCP/IP model but is included in the OSI model?",
                optionsAr: ["Network layer", "Session layer", "Application layer", "Transport layer"],
                optionsEn: ["Network layer", "Session layer", "Application layer", "Transport layer"],
                answerIndex: 1,
                explanationAr: "طبقة الجلسة (Session Layer) وطبقة التقديم (Presentation Layer) موجودتان في OSI وتم دمجهما بداخل طبقة التطبيقات في TCP/IP.",
                explanationEn: "The Session layer (and Presentation) exists in OSI, but is merged into the general Application layer in TCP/IP."
            },
            {
                id: "f23_8",
                category: "final2023",
                questionAr: "أي طبقة من الطبقات التالية تقوم بتحويل البتات الرقمية إلى إشارات كهرومغناطيسية مادية؟",
                questionEn: "Which of the following layer change the bits onto electromagnetic signals.",
                optionsAr: ["الطبقة الفيزيائية (Physical)", "طبقة النقل (Transport)", "طبقة ربط البيانات (Data Link)", "طبقة العرض والتقديم (Presentation)"],
                optionsEn: ["Physical", "Transport", "Data Link", "Presentation"],
                answerIndex: 0,
                explanationAr: "الطبقة الفيزيائية (Physical Layer) هي المسؤولة عن نقل البتات المباشرة كإشارات كهرومغناطيسية أو ضوئية وضخها بداخل الكابلات مادياً.",
                explanationEn: "The Physical layer handles the physical medium transmission, converting raw bits into electrical/optical waves."
            },
            {
                id: "f23_9",
                category: "final2023",
                questionAr: "أي مما يلي يُسخدم لتجهيز حزم وقطع البيانات (Segments) لنقلها وضمان وصولها عبر الشبكة؟",
                questionEn: "Which of the following is used to prepare segments of data for transmission over a network",
                optionsAr: ["TCP", "UDP", "IP", "كلاهما أ وب (Both A & B)"],
                optionsEn: ["TCP", "UDP", "IP", "Both A & B"],
                answerIndex: 0,
                explanationAr: "بروتوكول TCP يقوم بتجهيز وتقطيع البيانات الكبرى لقطع (Segments) مرقمة لضمان نقلها بنجاح عبر طبقة النقل.",
                explanationEn: "TCP chunks upper-layer application streams into numbered segments to handle sequential flow control."
            },
            {
                id: "f23_10",
                category: "final2023",
                questionAr: "أي مما يلي يوفر نقل بيانات موثوق وثنائي الاتجاه بالكامل (Reliable full-duplex)؟",
                questionEn: "Which of the following provides reliable full-duplex data transmission.",
                optionsAr: ["TCP", "UDP", "IP", "كلاهما أ وب (Both A & B)"],
                optionsEn: ["TCP", "UDP", "IP", "Both A & B"],
                answerIndex: 0,
                explanationAr: "بروتوكول TCP هو الموثوق وثنائي الاتجاه بالكامل (Full-Duplex) لوجود آليات تأكيد الاستلام (Acknowledgments).",
                explanationEn: "TCP provides fully reliable, ordered, and error-checked delivery over bidirectional full-duplex connections."
            },
            {
                id: "f23_11",
                category: "final2023",
                questionAr: "أي الطبولوجيا التالية تحتوي على روابط ثنائية الاتجاه بين كل جهازين ممكنين بالشبكة؟",
                questionEn: "Which of the following topologies contains bi-directional links between every possible node?",
                optionsAr: ["طوبولوجيا الحلقة (Ring)", "طوبولوجيا النجمة (Star)", "طوبولوجيا الشجرة (Tree)", "طوبولوجيا المشبك (Mesh)"],
                optionsEn: ["Ring topology", "Star topology", "Tree topology", "Mesh topology"],
                answerIndex: 3,
                explanationAr: "طوبولوجيا المشبك (Mesh Topology) هي التي تربط كل عقدة بكافة العقد الأخرى بروابط مباشرة مخصصة وثنائية الاتجاه.",
                explanationEn: "Mesh topology implements dedicated point-to-point links between all nodes, forming redundant paths."
            },
            {
                id: "f23_12",
                category: "final2023",
                questionAr: "ما هو شكل البيانات في طبقة الإنترنت (Internet layer) في نموذج TCP/IP؟",
                questionEn: "What is the form of data in the Internet layer in the TCP/IP model?",
                optionsAr: ["بيانات عامة (Data)", "إطارات (Frame)", "بتات مادية (Bits)", "غير ذلك (Otherwise)"],
                optionsEn: ["Data", "Frame", "Bits", "Otherwise"],
                answerIndex: 3,
                explanationAr: "شكل البيانات في طبقة الإنترنت هو حزم (Packets) أو (Datagrams)، وهي غير متواجدة في الخيارات أ، ب، ج، لذا الخيار الصحيح هو غير ذلك.",
                explanationEn: "Otherwise. The protocol data unit (PDU) at the Internet Layer is called Packets or Datagrams."
            },
            {
                id: "f23_13",
                category: "final2023",
                questionAr: "أي من البروتوكولات التالية تقوم ببناء اتصال مباشر مسبق وموثوق بين أجهزة الشبكة؟",
                questionEn: "Which of the following protocols that make direct connection between network devices",
                optionsAr: ["بروتوكول موجه بالاتصال (Connection Protocol)", "بروتوكول غير موجه بالاتصال (Connectionless Protocol)", "بروتوكول IP", "غير ذلك (Otherwise)"],
                optionsEn: ["Connection Protocol", "Connectionless Protocol", "IP Protocol", "Otherwise"],
                answerIndex: 0,
                explanationAr: "بروتوكولات الـ Connection-oriented (مثل TCP) هي التي تتطلب إنشاء جلسة اتصال مباشرة بين الأجهزة.",
                explanationEn: "Connection-oriented protocols build logical peer-to-peer active connections prior to sending payload bytes."
            },
            {
                id: "f23_14",
                category: "final2023",
                questionAr: "أي من وسائط الإرسال التالية هو الأنسب لنقل البيانات في شبكة معرضة بشدة للتداخلات والتشويش الكهربائي؟",
                questionEn: "Which of the following transmission medium is most appropriate to carry data in a computer network that is exposed to electrical interferences?",
                optionsAr: ["الأسلاك النحاسية غير المحمية (UTP)", "الألياف الضوئية (Optical fiber)", "الكابل المحوري (Coaxial cable)", "الموجات اللاسلكية (Microwave)"],
                optionsEn: ["Unshielded twisted pair", "Optical fiber", "Coaxial cable", "Microwave"],
                answerIndex: 1,
                explanationAr: "الألياف الضوئية (Optical Fiber) تنقل نبضات الضوء بداخل زجاج رقيق، لذا فهي مقاومة تماماً للتداخل المغناطيسي أو التشويش الكهربائي.",
                explanationEn: "Optical fiber is immune to Electro-Magnetic Interference (EMI) because it uses light instead of electrical currents."
            },
            {
                id: "f23_15",
                category: "final2023",
                questionAr: "أي مما يلي يمثل الحد الأقصى لكمية البيانات المرسلة والممررة عبر اتصال الإنترنت في وقت محدد؟",
                questionEn: "Which of the following represent the maximum amount of data transmitted over an internet connection in a given amount of time",
                optionsAr: ["السرعة (Speed)", "عرض النطاق الترددي (Bandwidth)", "التدفق المروري (Traffic)", "غير ذلك (Otherwise)"],
                optionsEn: ["Speed", "Bandwidth", "Traffic", "Otherwise"],
                answerIndex: 1,
                explanationAr: "عرض النطاق الترددي (Bandwidth) يعبر عن الطاقة القصوى لنقل كم البيانات عبر الخط في وقت معين ويقاس بالبت لكل ثانية.",
                explanationEn: "Bandwidth defines the theoretical maximum capacity of a communication link in bits per second (bps)."
            },
            {
                id: "f23_16",
                category: "final2023",
                questionAr: "أي من الكابلات التالية يربط الأسلاك الداخلية بنسق مباشر ومتطابق (واحد لواحد) على كلا الجانبين؟",
                questionEn: "Any of the following cables connect the wires inside it one to one on both sides",
                optionsAr: ["الكابل المستقيم (Straight-Through Cable)", "الكابل المعكوس (Crossover cable)", "الكابل المحوري (Coaxial)", "غير ذلك (Otherwise)"],
                optionsEn: ["Straight-Through Cable", "Crossover cable", "Coaxial cable", "Otherwise"],
                answerIndex: 0,
                explanationAr: "الكابل المستقيم (Straight-Through) يربط الأسلاك بنسق متطابق على الجانبين لتوصيل أجهزة مختلفة مثل كمبيوتر بسويتش.",
                explanationEn: "Straight-Through cables map pin-1 to pin-1, pin-2 to pin-2, etc., to connect dissimilar network hardware devices."
            },
            {
                id: "f23_17",
                category: "final2023",
                questionAr: "ما هو عدد عناوين الأجهزة المتاحة (Hosts) في شبكة فرعية تستخدم قناع الشبكة 255.255.255.224؟",
                questionEn: "What is the number of hosts on a local subnet that uses the 255.255.255.224 subnet mask?",
                optionsAr: ["14 جهاز", "15 جهاز", "16 جهاز", "30 جهاز"],
                optionsEn: ["14", "15", "16", "30"],
                answerIndex: 3,
                explanationAr: "القناع ينتهي بـ 224، أي تم استعارة 3 بتات من الجزء الأخير (256 - 224 = 32 عنوان). نطرح عنوان الشبكة وعنوان البث (32 - 2 = 30 جهاز متاح).",
                explanationEn: "A mask ending in .224 (/27) allocates 5 bits for hosts. 2^5 - 2 = 30 usable host IP addresses."
            },
            {
                id: "f23_18",
                category: "final2023",
                questionAr: "نحتاج إلى 5 شبكات فرعية (Subnets)، على أن تحتوي كل شبكة على 16 جهازاً على الأقل. أي من الأقنعة التالية هو الصحيح؟",
                questionEn: "We need to 5 subnets, each with at least 16 hosts. Which of the following subnet masks is correct",
                optionsAr: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
                optionsEn: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
                answerIndex: 1,
                explanationAr: "للحصول على 16 جهازاً، نحتاج إلى 5 بتات على الأقل للجزء الأخير (2^5 - 2 = 30 جهاز وهو كافٍ، بينما 2^4-2=14 غير كافٍ). قناع الـ 5 بتات هو 255.255.255.224.",
                explanationEn: "With 255.255.255.224, we get 8 subnets with 30 hosts each, satisfying both conditions (>5 subnets, and >16 hosts)."
            },
            {
                id: "f23_19",
                category: "final2023",
                questionAr: "لدينا شبكة من الفئة Class B، ونريد تقسيمها إلى 59 شبكة فرعية. كم عدد البتات التي يجب استعارتها من حقل الـ Host لتوفير قناع الشبكة الصحيح؟",
                questionEn: "We have a network of class B, and we need to 59 subnets, how many bits must you borrow from the host fields to provide the correct subnet mask?",
                optionsAr: ["بتين (2)", "4 بتات (4)", "6 بتات (6)", "8 بتات (8)"],
                optionsEn: ["2", "4", "6", "8"],
                answerIndex: 2,
                explanationAr: "لتوفير 59 شبكة فرعية، نطبق المعادلة 2^S >= 59. نجد أن 2^6 = 64 وهو أول أس يحقق القيمة المطلوبة، لذا نستعير 6 بتات.",
                explanationEn: "We need 2^S >= 59 subnets. Since 2^6 = 64 subnets, we must borrow 6 bits from the host portion."
            },
            {
                id: "f23_20",
                category: "final2023",
                questionAr: "كم عدد الشبكات الفرعية وعناوين الأجهزة لكل شبكة إذا كان العنوان المعطى هو 180.85.0.0/22؟",
                questionEn: "How many subnets and hosts if the IP address of a network is 180.85.0.0/22.",
                optionsAr: [
                    "32 شبكة فرعية، 6 أجهزة لكل شبكة",
                    "64 شبكة فرعية، 1024 جهاز لكل شبكة",
                    "28 شبكة فرعية، 2046 جهاز لكل شبكة",
                    "27 شبكة فرعية، 2046 جهاز لكل شبكة"
                ],
                optionsEn: [
                    "32 subnets, 6 hosts each",
                    "64 subnets, 1024 hosts each",
                    "28 subnets, 2,046 hosts each",
                    "27 subnets, 2,046 hosts each"
                ],
                answerIndex: 1,
                explanationAr: "العنوان هو Class B بقناع افتراضي /16. القناع المكتوب هو /22، أي تم استعارة 6 بتات (2^6 = 64 شبكة فرعية). البتات المتبقية للأجهزة هي 32 - 22 = 10 بتات (2^10 = 1024 جهاز).",
                explanationEn: "Class B default is /16. Given /22, we borrowed 6 bits (2^6 = 64 subnets). Remaining host bits = 10 (2^10 = 1024 hosts)."
            },
            {
                id: "f23_21",
                category: "final2023",
                questionAr: "أي من العناوين التالية هو عنوان جهاز صحيح (Valid host address) ضمن النطاق الشبكي 175.16.20.0/22؟",
                questionEn: "Which of the following is a valid host address with the network 175.16.20.0/22. ?",
                optionsAr: [
                    "175.16.17.1  255.255.252.0",
                    "175.16.0.1  255.255.240.0",
                    "175.16.20.1  255.255.252.0",
                    "175.16.18.255  255.255.252.0"
                ],
                optionsEn: [
                    "175.16.17.1  255.255.252.0",
                    "175.16.0.1  255.255.240.0",
                    "175.16.20.1  255.255.252.0",
                    "175.16.18.255  255.255.252.0"
                ],
                answerIndex: 2,
                explanationAr: "قناع /22 هو 255.255.252.0. نطاق الشبكة 175.16.20.0 يمتد من 20.0 إلى 23.255. العنوان 175.16.20.1 يقع تماماً بداخل هذا النطاق ومعه القناع الصحيح.",
                explanationEn: "A /22 mask is 255.255.252.0. The range for network 175.16.20.0 is 20.0 to 23.255, making 175.16.20.1 a valid host IP."
            },
            {
                id: "f23_22",
                category: "final2023",
                questionAr: "ما هو عنوان الشبكة الفرعية (Subnet address) للجهاز الذي يحمل الـ IP التالي: 210.20.15.68/28؟",
                questionEn: "What is the subnet address for a host with the IP address 210.20.15.68/28?",
                optionsAr: ["210.25.15.6", "210.20.15.32", "210.20.15.64", "210.20.15.0"],
                optionsEn: ["210.25.15.6", "210.20.15.32", "210.20.15.64", "210.20.15.0"],
                answerIndex: 2,
                explanationAr: "قناع /28 يعني قفزات بمقدار 16 (256-240). العناوين الفرعية هي 0, 16, 32, 48, 64, 80. العنوان 68 يقع بين 64 و 79، لذا عنوان شبكته الفرعية هو 64.",
                explanationEn: "With /28, increments are 16. Subnets are .0, .16, .32, .48, .64, .80. 68 falls inside the .64 subnet."
            },
            
            // QUESTIONS 23 to 30 share 195.150.100.0/28 Subnet Visualizer
            {
                id: "f23_23",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو قناع الشبكة الافتراضي (Default Subnet Mask) للعنوان 195.150.100.0؟",
                questionEn: "[Diagram Question 195.150.100.0] What is default subnet mask?",
                optionsAr: ["255.0.0.0 (Class A)", "255.255.0.0 (Class B)", "255.255.255.0 (Class C)", "غير ذلك (Otherwise)"],
                optionsEn: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "Otherwise"],
                answerIndex: 2,
                explanationAr: "العنوان يبدأ بـ 195، مما يضعه تلقائياً ضمن نطاق الفئة Class C، والتي يحق لها قناع افتراضي هو 255.255.255.0.",
                explanationEn: "The IP starts with 195, classifying it as Class C, which has a default subnet mask of 255.255.255.0 (/24)."
            },
            {
                id: "f23_24",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو قناع الشبكة المخصص والمستعار (Custom Subnet Mask) إذا تم تقسيمها لقناع /28؟",
                questionEn: "[Diagram Question 195.150.100.0] What is costume subnet mask?",
                optionsAr: ["255.255.255.128/25", "255.255.255.224/27", "255.255.255.240/28", "255.255.255.252/30"],
                optionsEn: ["255.255.255.128/25", "255.255.255.224/27", "255.255.255.240/28", "255.255.255.252/30"],
                answerIndex: 2,
                explanationAr: "قناع /28 يعني استعارة 4 بتات إضافية (128+64+32+16 = 240)، فيكتب القناع المخصص بالصيغة 255.255.255.240.",
                explanationEn: "A prefix of /28 borrows 4 bits from the host octet (11110000 = 240), yielding a custom mask of 255.255.255.240."
            },
            {
                id: "f23_25",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو قفزة عد الشبكات (Hop count / Block size) في هذا التقسيم؟",
                questionEn: "[Diagram Question 195.150.100.0] What is the hop count?",
                optionsAr: ["4 خطوات", "16 خطوة", "32 خطوة", "128 خطوة"],
                optionsEn: ["4", "16", "32", "128"],
                answerIndex: 1,
                explanationAr: "نحسب حجم القفزة بطرح الرقم الأخير بالقناع من 256 (256 - 240 = 16)، وهو يمثل الفارق وحجم النطاق لكل شبكة.",
                explanationEn: "The block size (hop count) is determined by subtracting the sub-masked octet from 256 (256 - 240 = 16)."
            },
            {
                id: "f23_26",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو إجمالي عدد الشبكات الفرعية المتاحة (Number of subnets)؟",
                questionEn: "[Diagram Question 195.150.100.0] How many number of subnets?",
                optionsAr: ["شبكتين (2)", "8 شبكات (8)", "16 شبكة (16)", "64 شبكة (64)"],
                optionsEn: ["2", "8", "16", "64"],
                answerIndex: 2,
                explanationAr: "استعرنا 4 بتات، لذا نطبق المعادلة 2^S = 2^4 = 16 شبكة فرعية متساوية تماماً.",
                explanationEn: "Since we borrowed 4 bits from the host field, we get 2^4 = 16 available subnets."
            },
            {
                id: "f23_27",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو عدد الحواسب وعناوين الأجهزة المتاحة لكل شبكة فرعية؟",
                questionEn: "[Diagram Question 195.150.100.0] What is the number of hosts for each subnet",
                optionsAr: ["30 جهاز", "126 جهاز", "جهازين", "14 جهاز"],
                optionsEn: ["30", "126", "2", "14"],
                answerIndex: 3,
                explanationAr: "عدد بتات المضيف المتبقية هي 4 بتات. نطبق المعادلة: 2^H - 2 = 2^4 - 2 = 16 - 2 = 14 جهازاً متاحاً للاستخدام الفعلي.",
                explanationEn: "Remaining host bits = 4. Applying the formula: 2^4 - 2 = 14 usable host IPs per subnet."
            },
            {
                id: "f23_28",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو عنوان الـ IP لآخر مضيف (Last host) في الشبكة الفرعية الثانية (Subnet #2)؟",
                questionEn: "[Diagram Question 195.150.100.0] What is the IP address of the last host in subnet #2",
                optionsAr: ["195.150.100.30", "195.150.100.14", "195.150.100.46", "195.150.100.62"],
                optionsEn: ["195.150.100.30", "195.150.100.14", "195.150.100.46", "195.150.100.62"],
                answerIndex: 0,
                explanationAr: "الشبكة الأولى نطاقها (.0 إلى .15)، الشبكة الثانية نطاقها (.16 إلى .31). عنوان البث للثانية هو .31، والجهاز الأخير المتاح قبله مباشرة هو .30.",
                explanationEn: "Subnet #2 is (.16 to .31). Broadcast is .31, which means the last usable host IP in this subnet is .30."
            },
            {
                id: "f23_29",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو عنوان المضيف الثالث (Host #3) في الشبكة الفرعية الثالثة (Subnet #3)؟",
                questionEn: "[Diagram Question 195.150.100.0] What is the IP address of host # 3 in subnet # 3?",
                optionsAr: ["195.150.100.32", "195.150.100.33", "195.150.100.34", "195.150.100.35"],
                optionsEn: ["195.150.100.32", "195.150.100.33", "195.150.100.34", "195.150.100.35"],
                answerIndex: 3,
                explanationAr: "الشبكة الثالثة تبدأ بعنوان الشبكة .32. المضيف الأول هو .33، المضيف الثاني .34، والمضيف الثالث هو .35.",
                explanationEn: "Subnet #3 network ID is .32. First host is .33, second is .34, and third usable host is .35."
            },
            {
                id: "f23_30",
                category: "final2023",
                hasDiagram: true,
                diagramType: "subnet195",
                questionAr: "[سؤال مخطط 195.150.100.0] ما هو عنوان البث (Broadcast IP) للشبكة الفرعية الرابعة (Subnet #4)؟",
                questionEn: "[Diagram Question 195.150.100.0] What is the IP address of broadcast of subnet # 4?",
                optionsAr: ["195.150.100.62", "195.150.100.63", "195.150.100.64", "195.150.100.65"],
                optionsEn: ["195.150.100.62", "195.150.100.63", "195.150.100.64", "195.150.100.65"],
                answerIndex: 1,
                explanationAr: "الشبكة الرابعة تبدأ بـ .48 وتنتهي بـ .63. عنوان البث يمثل دائماً العنوان الأخير في النطاق وهو .63 (الشبكة الخامسة تليها وتبدأ بـ .64).",
                explanationEn: "Subnet #4 spans (.48 to .63). The final address of this range, .63, is dedicated for broadcast packets."
            },

            // --- FINAL EXAM 2024 (30 QUESTIONS) ---
            {
                id: "f24_1",
                category: "final2024",
                questionAr: "أي مما يلي يُعد تصنيفاً لشبكات الكمبيوتر وفقاً لغرض وبنية ونوع استخدام الأجهزة المتصلة؟",
                questionEn: "Which of the following is an one of the classification of the computer networks according to purpose:",
                optionsAr: ["أنواع الأجهزة (Types of devices)", "عدد الأجهزة (Number of devices)", "الامتداد الجغرافي (Spatial scale)", "أدوات ومعدات الاتصال (Types of communication tools)"],
                optionsEn: ["Types of devices", "Number of devices", "Spatial scale", "Types of communication tools"],
                answerIndex: 0,
                explanationAr: "يتم تصنيف الشبكات وفقاً للغرض الأساسي ونوع ووحدات الأجهزة المتصلة (مثل شبكات التحكم الرقمي أو شبكات نقل البيانات).",
                explanationEn: "According to purpose, networks are classified by types of connected devices/units (e.g. Digital Control, Computers)."
            },
            {
                id: "f24_2",
                category: "final2024",
                questionAr: "كم عدد الأنواع والتقسيمات لشبكات الحواسب بالاستناد لنوع التكنولوجيا المستخدمة للربط والاتصال؟",
                questionEn: "How many types of computer networks according to the technology used in the network",
                optionsAr: ["نوعين (Two)", "3 أنواع (Three)", "4 أنواع (Four)", "5 أنواع (Five)"],
                optionsEn: ["Two", "Three", "Four", "Five"],
                answerIndex: 2,
                explanationAr: "تنقسم شبكات الكمبيوتر وفقاً للتكنولوجيا والوسائط المعمول بها لربط المكونات إلى 4 تقسيمات أساسية ومطابقة.",
                explanationEn: "The curriculum classifies computer networks into 4 types based on underlying structural technologies."
            },
            {
                id: "f24_3",
                category: "final2024",
                questionAr: "أي من أنواع الشبكات التالية يمثل تجميعة لشبكات مختلفة متصلة ببعضها البعض ومفتوحة للعامة؟",
                questionEn: "Which of the following networks is just the collection of networks that can be joined together",
                optionsAr: ["الإنترانت المغلقة (Intranet)", "الإكسترانت المشتركة (Extranet)", "الإنترنت العامة (Internet)", "الشبكة المحلية (LAN)"],
                optionsEn: ["Intranet", "Extranet", "Internet", "LAN"],
                answerIndex: 2,
                explanationAr: "شبكة الإنترنت (Internet) هي شبكة الشبكات العالمية التي تربط آلاف النطاقات العامة والخاصة ببعضها لتوفير الاتصال المفتوح.",
                explanationEn: "The global Internet is defined as a massive public network connecting many smaller subnets together."
            },
            {
                id: "f24_4",
                category: "final2024",
                questionAr: "في أي من الشبكات التالية يمكن لكل جهاز متصل أن يتولى دور العميل (Client) ودور الخادم (Server) معاً؟",
                questionEn: "In any of the following networks, each computer can take on the client function or the server function.",
                optionsAr: ["طوبولوجيا المشبك (Mesh)", "طوبولوجيا النجمة (Star)", "الند للند (Peer to Peer)", "العميل والخادم (Client/Server)"],
                optionsEn: ["Mesh", "Star", "Peer to Peer", "Client/Server"],
                answerIndex: 2,
                explanationAr: "في شبكات الند للند (P2P)، تتساوى جميع الأجهزة في الرتبة والمهام، فيقوم كل جهاز بمشاركة واستقبال البيانات بوقت واحد.",
                explanationEn: "In peer-to-peer networks, every connected device acts as both a consumer (client) and supplier (server) of resources."
            },
            {
                id: "f24_5",
                category: "final2024",
                questionAr: "من أمثلة شبكة الـ ........: شبكات الهاتف الأرضي، وشبكات الهاتف المحمول اللاسلكي، وشبكة البث التلفزيوني الكبرى:",
                questionEn: "Examples of ........ network: the telephone network, the mobile network, and the television broadcast network.",
                optionsAr: ["شبكات الاتصالات (Telecommunication)", "شبكات التحكم الرقمي (Digital control)", "شبكات النقل والتبادل (Transmission)", "شبكات الكمبيوتر المعتادة (Computers)"],
                optionsEn: ["Telecommunication", "Digital control", "Transmission", "Computers"],
                answerIndex: 0,
                explanationAr: "شبكة الاتصالات (Telecommunication network) تشمل الأنظمة التقليدية واللاسلكية المخصصة لنقل الصوت والصور والبث التلفزيوني.",
                explanationEn: "Telecommunication networks include landlines, cellular systems, and broadcast media designed for transmission."
            },
            {
                id: "f24_6",
                category: "final2024",
                questionAr: "أي من الشبكات التالية تقوم بتحويل ومعالجة وتجميع ونقل البيانات عبر خطوط الاتصال بين وحداتها المختلفة؟",
                questionEn: "Which of the following networks is converting, processing, collecting and transferring data through communication lines between units.",
                optionsAr: ["شبكات الاتصالات (Telecommunication)", "شبكات التحكم الرقمي (Digital control)", "شبكات النقل والتبادل (Transmission)", "شبكات الكمبيوتر (Computers)"],
                optionsEn: ["Telecommunication", "Digital control", "Transmission", "Computers"],
                answerIndex: 2,
                explanationAr: "شبكة النقل والتبادل (Transmission Network) تهتم كلياً بتحويل ومعالجة وتأمين خطوط تمرير المعلومات بين المكونات التكنولوجية.",
                explanationEn: "Transmission networks focus on converting, packaging, and transporting data reliably across structural media."
            },
            {
                id: "f24_7",
                category: "final2024",
                questionAr: "تنقسم أجهزة ومعدات شبكات الحواسب وتصنف بالأساس إلى ........ تصنيفات رئيسية ومطابقة:",
                questionEn: "The computer network devices are broken up into ........ classifications.",
                optionsAr: ["تصنيفين (Two)", "3 تصنيفات (Three)", "4 تصنيفات (Four)", "5 تصنيفات (Five)"],
                optionsEn: ["Two", "Three", "Four", "Five"],
                answerIndex: 0,
                explanationAr: "تصنف أجهزة الشبكة بشكل رئيسي إلى تصنيفين: أجهزة طرفية (End Devices) كالكمبيوتر، وأجهزة وسيطة (Intermediate Devices) كالسويتش والراوتر.",
                explanationEn: "Network hardware is split down into two main divisions: End-user systems and Intermediate transit devices."
            },
            {
                id: "f24_8",
                category: "final2024",
                questionAr: "أي مما يلي يمثل بطاقة الدوائر المطبوعة التي توفر للكمبيوتر الشخصي إمكانية وواجهة الاتصال المباشر من وإلى الشبكة؟",
                questionEn: "Any of them is a printed circuit board that provides network communication capabilities to and from a personal computer",
                optionsAr: ["كارت المودم (Modem Card)", "كارت واجهة الشبكة (Network Interface Card)", "المكرر (Repeater)", "الموجه (Router)"],
                optionsEn: ["Modem Card", "Network Interface Card", "Repeater", "Router"],
                answerIndex: 1,
                explanationAr: "كارت الشبكة (NIC) هو لوحة الاتصال الفيزيائية المدمجة بالكمبيوتر لربطه بالكابلات وتجهيز البتات الفيزيائية للإرسال.",
                explanationEn: "The Network Interface Card (NIC) is the computer circuit board acting as the interface to the network medium."
            },
            {
                id: "f24_9",
                category: "final2024",
                questionAr: "عندما يصل إطار البيانات (Frame) إلى أي منفذ، يقوم بفحص عنوان الوجهة وإرسال الإطار فقط للجهاز المعني والمطابق:",
                questionEn: "When a data frame arrives at any port, it examines the destination address and sends the frame to the corresponding device(s)",
                optionsAr: ["الموزع (Hub)", "المحول (Switch)", "المكرر (Repeater)", "الموجه (Router)"],
                optionsEn: ["Hub", "Switch", "Repeater", "Router"],
                answerIndex: 1,
                explanationAr: "المحول الذكي (Switch) يفحص عنوان الماك (MAC Address) ويوجه أطر البيانات بدقة للمنفذ المعني فقط لمنع تداخل الإرسال.",
                explanationEn: "Switches analyze destination MAC addresses within frames and route them strictly to the targeted port."
            },
            {
                id: "f24_10",
                category: "final2024",
                questionAr: "عندما تصل حزمة البيانات (Packet)، يقوم بقراءة معلومات عنوان الشبكة في رأس الحزمة لتحديد الوجهة النهائية المثلى للعبور:",
                questionEn: "When a data packet comes, it reads the network address information in the packet header to determine the ultimate destination.",
                optionsAr: ["الموزع (Hub)", "المحول (Switch)", "شبكة السحاب (Cloud)", "الموجه (Router)"],
                optionsEn: ["Hub", "Switch", "Cloud", "Router"],
                answerIndex: 3,
                explanationAr: "الموجه (Router) يحلل ترويسة حزم البيانات بطلب عنوان الشبكة (IP) ليوجه الحزمة للمسار الأفضل بين الشبكات الفرعية المختلفة.",
                explanationEn: "Routers process packet headers at the network layer, mapping pathways to direct payloads to target subnets."
            },
            {
                id: "f24_11",
                category: "final2024",
                questionAr: "يتم بناء وتطبيق طوبولوجيا الـ ........ لتوفير أكبر قدر ممكن من الحماية ومقاومة الخدمة لانقطاع الاتصالات وخلل الميديا:",
                questionEn: "A ........ topology is implemented to provide as much protection as possible from interruption of service",
                optionsAr: ["الهرمية (Hierarchical)", "النجمة (Star)", "المشبك (Mesh)", "الحلقة (Ring)"],
                optionsEn: ["Hierarchical", "Star", "Mesh", "Ring"],
                answerIndex: 2,
                explanationAr: "طوبولوجيا المشبك (Mesh Topology) تربط الأجهزة بروابط مكررة ومتعددة، فلو تلف خط اتصال، تسلك الإشارة طريقاً بديلاً فوراً.",
                explanationEn: "Mesh topology implements path redundancy, making it highly fault-tolerant and ideal for critical missions."
            },
            {
                id: "f24_12",
                category: "final2024",
                questionAr: "ما هو المعنى الكامل والمطابق لاسم البروتوكول العالمي المعتمد TCP/IP؟",
                questionEn: "What does TCP/IP mean?",
                optionsAr: [
                    "Transmission control protocol/Internet protocol",
                    "Transmission control protocol/International protocol",
                    "Telephone control protocol/Internet protocol",
                    "غير ذلك (Otherwise)"
                ],
                optionsEn: [
                    "Transmission control protocol/Internet protocol",
                    "Transmission control protocol/International protocol",
                    "Telephone control protocol/Internet protocol",
                    "Otherwise"
                ],
                answerIndex: 0,
                explanationAr: "يمثل TCP/IP بروتوكول التحكم بالإرسال / بروتوكول الإنترنت، وهو الركيزة الأساسية لتوجيه وتشغيل الإنترنت العالمي.",
                explanationEn: "TCP/IP stands for Transmission Control Protocol/Internet Protocol, the core protocol suite of the internet."
            },
            {
                id: "f24_13",
                category: "final2024",
                questionAr: "أي طبقة من طبقات نموذج الـ OSI القياسي هي التي تحدد وتصمم واجهة النظام وعلاقته المباشرة مع المستخدم؟",
                questionEn: "Which of the following layers determines the interface of the system with the user.",
                optionsAr: ["طبقة الشبكة (Network)", "طبقة ربط البيانات (Datalink)", "طبقة العرض والتقديم (Presentation)", "طبقة التطبيقات (Application)"],
                optionsEn: ["Network", "Datalink", "Presentation", "Application"],
                answerIndex: 3,
                explanationAr: "طبقة التطبيقات (Application Layer) تتيح للبرامج التفاعل مباشرة مع الشبكة وتصمم واجهة البريد والتصفح للمستخدم.",
                explanationEn: "The Application Layer acts as the software interface interacting directly with human user applications."
            },
            {
                id: "f24_14",
                category: "final2024",
                questionAr: "تقوم طبقة الـ ........ بتحويل البتات الرقمية إلى إشارات كهرومغناطيسية ملموسة لنقلها مادياً عبر الميديا:",
                questionEn: "The............ layer change bits onto electromagnetic signals.",
                optionsAr: ["الفيزيائية (Physical)", "طبقة النقل (Transport)", "طبقة ربط البيانات (Data Link)", "طبقة العرض والتقديم (Presentation)"],
                optionsEn: ["Physical", "Transport", "Data Link", "Presentation"],
                answerIndex: 0,
                explanationAr: "الطبقة الفيزيائية هي المسؤولة عن تحويل البتات الصرفة لإشارات كهرومغناطيسية أو ضوئية وضخها بداخل الكابلات مادياً.",
                explanationEn: "The Physical layer maps raw binary bits directly onto electrical, optical, or radio-frequency physical signals."
            },
            {
                id: "f24_15",
                category: "final2024",
                questionAr: "ما هي الوظيفة الأساسية والمحورية لطبقة النقل (Transport Layer) بالمنهج والاتصال؟",
                questionEn: "What is the main function of transport layer?",
                optionsAr: ["تسليم عقدة لعقدة (Node to node delivery)", "تسليم من النهاية للنهاية (End to end delivery)", "التزامن وتوقيت الجلسة (Synchronization)", "تحديث وصيانة جداول التوجيه الشبكي"],
                optionsEn: ["Node to node delivery", "End to end delivery", "Synchronization", "Updating and maintaining routing tables"],
                answerIndex: 1,
                explanationAr: "طبقة النقل مسؤولة عن النقل السليم وضمان وصول البيانات من النهاية إلى النهاية (End-to-End) أي من المصدر للمستقبل النهائي.",
                explanationEn: "The primary job of the Transport Layer is managing complete end-to-end data delivery across different nodes."
            },
            {
                id: "f24_16",
                category: "final2024",
                questionAr: "أي مما يلي يُعد خدمة معتمدة من خدمات طبقة التطبيقات (Application layer services) بالشبكات؟",
                questionEn: "Which of the following is an application layer service?",
                optionsAr: ["التحكم بالطرف الافتراضي للشبكة (Network virtual terminal)", "إدارة ووصول ونقل الملفات بالمنهج", "خدمات المراسلة والبريد الإلكتروني", "كل ما سبق ذكره (All of the above)"],
                optionsEn: ["Network virtual terminal", "File transfer, access and management", "Mail service", "All of the above"],
                answerIndex: 3,
                explanationAr: "طبقة التطبيقات تقدم وتدعم خدمات تداول ونقل الملفات (FTP)، وخدمات البريد (SMTP)، والوصول الافتراضي (Telnet)، لذا الإجابة هي كل ما سبق.",
                explanationEn: "The Application Layer provides direct network services for email, remote terminal sessions, and file management."
            },
            {
                id: "f24_17",
                category: "final2024",
                questionAr: "ما هو شكل واسم وحدة البيانات (PDU) في طبقة الإنترنت (Internet layer) بنموذج TCP/IP المعياري؟",
                questionEn: "What is the form of data in the Internet layer in the TCP/IP model",
                optionsAr: ["بيانات عامة (Data)", "إطارات (Frame)", "بتات مادية (Bits)", "غير ذلك (Otherwise)"],
                optionsEn: ["Data", "Frame", "Bits", "Otherwise"],
                answerIndex: 3,
                explanationAr: "تسمى وحدة البيانات في هذه الطبقة بالـ الحزم (Packets) أو (Datagrams)، وهي غير متواجدة بالخيارات الثلاثة الأولى، فالجواب غير ذلك.",
                explanationEn: "Otherwise. The Internet layer encapsulates segments into packets (or IP datagrams)."
            },
            {
                id: "f24_18",
                category: "final2024",
                questionAr: "أي من الطبقات التالية ليست متواجدة بنموذج TCP/IP العملي ولكنها مدمجة ومفصلة بنموذج OSI القياسي؟",
                questionEn: "Which of the following layers isn't present in the TCP/IP model but is included in the OSI model?",
                optionsAr: ["طبقة الشبكة (Network)", "طبقة الجلسة (Session)", "طبقة التطبيقات (Application)", "طبقة النقل (Transport)"],
                optionsEn: ["Network", "Session", "Application", "Transport"],
                answerIndex: 1,
                explanationAr: "طبقة الجلسة (Session Layer) متواجدة بشكل مستقل بنموذج OSI السداسي والسباعي، ولكن تم دمجها مع طبقة التطبيقات بنموذج الـ TCP/IP المحدث.",
                explanationEn: "The Session layer is present in OSI but merged into the general Application layer in TCP/IP."
            },
            {
                id: "f24_19",
                category: "final2024",
                questionAr: "ما هو الاسم والمدلول الكامل للمصطلح القياسي والموديل العالي للشبكات OSI model؟",
                questionEn: "What is the full form of OSI model?",
                optionsAr: [
                    "Operating System Interface",
                    "Optical System Interconnection",
                    "Operating System Internet",
                    "Open System Interconnection"
                ],
                optionsEn: [
                    "Operating System Interface",
                    "Optical System Interconnection",
                    "Operating System Internet",
                    "Open System Interconnection"
                ],
                answerIndex: 3,
                explanationAr: "الاختصار OSI يعني Open Systems Interconnection وهو مرجع التصميم المعياري للشبكات المفتوحة الصادر عن منظمة الـ ISO.",
                explanationEn: "OSI is the abbreviation for Open Systems Interconnection, the standard theoretical layer reference."
            },
            {
                id: "f24_20",
                category: "final2024",
                questionAr: "أي من البروتوكولات التالية يقوم ببناء اتصال مباشر وموثوق بين أجهزة الشبكة المختلفة؟",
                questionEn: "Which of the following protocols makes direct connection between network devices?",
                optionsAr: ["بروتوكول IP", "بروتوكول UDP", "بروتوكول موجه بالاتصال (Connection)", "بروتوكول غير موجه بالاتصال (Connectionless)"],
                optionsEn: ["IP", "UDP", "Connection", "Connectionless"],
                answerIndex: 2,
                explanationAr: "البروتوكولات الموجهة بالاتصال (Connection-oriented) كبروتوكول TCP تقوم ببناء خط اتصال وتزامن مباشر وموثوق بين الجهازين قبل بدء النقل.",
                explanationEn: "A Connection-oriented protocol builds an active peer communication session to guarantee packet receipt."
            },
            {
                id: "f24_21",
                category: "final2024",
                questionAr: "أي من الخيارات التالية يعبر عن كمية البيانات القصوى التي يمكن نقلها وتمريرها عبر اتصال الإنترنت في وقت معطى؟",
                questionEn: "Any of the following expresses the maximum amount of data transmitted over an internet in a given time",
                optionsAr: ["حجم الترافيك والتدفق (Traffic)", "معدل الإنتاجية الفعلي (Throughput)", "السرعة الفيزيائية (Speed)", "عرض النطاق الترددي (Bandwidth)"],
                optionsEn: ["Traffic", "Throughput", "Speed", "Bandwidth"],
                answerIndex: 3,
                explanationAr: "عرض النطاق الترددي (Bandwidth) هو المعيار النظري الأقصى لكمية تناقل البيانات في وقت محدد عبر رابط الشبكة ويقاس بالبت لكل ثانية.",
                explanationEn: "Bandwidth represents the absolute maximum link capacity, whereas Throughput is the actual current transfer rate."
            },
            {
                id: "f24_22",
                category: "final2024",
                questionAr: "أي كابلات الإيثرنت التالية يقوم بتوصيل وتثبيت الأسلاك الداخلية بنسق مباشر ومتطابق (واحد لواحد) على كلا الجانبين؟",
                questionEn: "Which of the following Ethernet cables connects the wires within it one to one on both sides",
                optionsAr: ["الكابل المحوري (Coaxial)", "الألياف الضوئية (Optical fiber)", "الكابل المعكوس (Crossover)", "الكابل المستقيم (Straight-Through)"],
                optionsEn: ["Coaxial", "Optical fiber", "Crossover", "Straight-Through"],
                answerIndex: 3,
                explanationAr: "كابل المستقيم (Straight-Through) يربط الأسلاك بنسق متطابق على الجانبين لتوصيل أجهزة مختلفة (كمبيوتر بسويتش) ويقاس بمعايير T568A/T568B.",
                explanationEn: "Straight-Through cabling maintains identical pin mappings on both cable ends to join dissimilar components."
            },
            {
                id: "f24_23",
                category: "final2024",
                questionAr: "أي من الأقنعة (Masks) التالية يمكن استخدامه لتقسيم شبكة الفئة Class B للعنوان 130.100.0.0 إلى 30 شبكة فرعية متساوية؟",
                questionEn: "Which of the following masks can be used to divide the 130.100.0.0 network into 30 equal-sized subnets?",
                optionsAr: ["255.255.192.0", "255.255.224.0", "255.255.240.0", "255.255.248.0"],
                optionsEn: ["255.255.192.0", "255.255.224.0", "255.255.240.0", "255.255.248.0"],
                answerIndex: 3,
                explanationAr: "العنوان هو Class B بقناع افتراضي /16. لتقسيمها إلى 30 شبكة نحتاج لمعادلة 2^S >= 30، فنجد 2^5 = 32 وهو كافٍ. نستعير 5 بتات للجزء الثالث (128+64+32+16+8 = 248) فيصبح القناع 255.255.248.0.",
                explanationEn: "Class B default mask is /16. For 30 subnets, we need 2^S >= 30 subnets (2^5 = 32 is sufficient). Custom mask: 255.255.248.0."
            },
            {
                id: "f24_24",
                category: "final2024",
                questionAr: "إذا كان عنوان شبكتنا هو 160.96.0.0/22، فكم عدد الشبكات الفرعية وعناوين الأجهزة لكل شبكة؟",
                questionEn: "If we have the IP of a network 160.96.0.0/22 provides how many subnets and hosts?",
                optionsAr: [
                    "32 شبكة فرعية، 6 أجهزة لكل شبكة",
                    "64 شبكة فرعية، 1024 جهاز لكل شبكة",
                    "28 شبكة فرعية، 2046 جهاز لكل شبكة",
                    "27 شبكة فرعية، 2046 جهاز لكل شبكة"
                ],
                optionsEn: [
                    "32 subnets, 6 hosts each",
                    "64 subnets, 1024 hosts each",
                    "28 subnets, 2,046 hosts each",
                    "27 subnets, 2,046 hosts each"
                ],
                answerIndex: 1,
                explanationAr: "الشبكة بقناع افتراضي Class B (/16)، والقناع المذكور هو /22، أي تم استعارة 6 بتات (2^6 = 64 شبكة فرعية). البتات المتبقية للأجهزة هي 32 - 22 = 10 بتات (2^10 = 1024 جهاز).",
                explanationEn: "Default is /16, custom is /22, meaning 6 bits borrowed (2^6 = 64 subnets). Remaining host bits = 10 (2^10 = 1024 hosts)."
            },
            {
                id: "f24_25",
                category: "final2024",
                questionAr: "أي العناوين التالية يمثل عنوان الشبكة الفرعية الصحيح (Subnet address) لجهاز يحمل الـ IP التالي: 172.16.66.0/21؟",
                questionEn: "Which of the following is the subnet address of a host with an IP address of 172.16.66.0/21?",
                optionsAr: ["172.16.36.0", "172.16.48.0", "172.16.64.0", "172.16.0.0"],
                optionsEn: ["172.16.36.0", "172.16.48.0", "172.16.64.0", "172.16.0.0"],
                answerIndex: 2,
                explanationAr: "قناع /21 يعني قفزات بمقدار 8 في الجزء الثالث (256-248). الشبكات الفرعية المتوفرة هي 0, 8, 16, 24, 32, 40, 48, 56, 64, 72. القيمة 66 تقع ضمن النطاق الشبكي الذي يبدأ بـ 64، لذا عنوان شبكتها الفرعية هو 64.0.",
                explanationEn: "With /21, block increments are 8 in the third octet (.0, .8, .16 ... .64, .72). 66.0 falls into the 64.0 subnet segment."
            },
            
            // QUESTIONS 26 to 30 share 200.100.100.5/28 Subnet Visualizer
            {
                id: "f24_26",
                category: "final2024",
                hasDiagram: true,
                diagramType: "subnet200",
                questionAr: "[سؤال مخطط 200.100.100.5/28] ما هو إجمالي عدد الشبكات الفرعية المتاحة (Number of subnets)؟",
                questionEn: "[Diagram Question 200.100.100.5/28] What is the number of subnets",
                optionsAr: ["4 شبكات", "8 شبكات", "12 شبكة", "16 شبكة"],
                optionsEn: ["4", "8", "12", "16"],
                answerIndex: 3,
                explanationAr: "العنوان ينتمي للفئة Class C (الافتراضي هو /24). القناع هو /28، أي تم استعارة 4 بتات من الجزء الأخير. نطبق المعادلة: 2^S = 2^4 = 16 شبكة فرعية.",
                explanationEn: "Class C network using /28 has borrowed 4 bits from the host portion. Subnets = 2^4 = 16."
            },
            {
                id: "f24_27",
                category: "final2024",
                hasDiagram: true,
                diagramType: "subnet200",
                questionAr: "[سؤال مخطط 200.100.100.5/28] ما هو عدد عناوين الحواسب والأجهزة المتاحة للاستخدام في كل شبكة فرعية؟",
                questionEn: "[Diagram Question 200.100.100.5/28] What is the number of hosts for each subnet",
                optionsAr: ["6 أجهزة", "14 جهاز", "30 جهاز", "62 جهاز"],
                optionsEn: ["6", "14", "30", "62"],
                answerIndex: 1,
                explanationAr: "البتات المتبقية للأجهزة هي 32 - 28 = 4 بتات. نطبق المعادلة: 2^H - 2 = 2^4 - 2 = 16 - 2 = 14 جهازاً متاحاً لكل شبكة فرعية.",
                explanationEn: "Remaining host bits = 4. Applying standard calculation: 2^4 - 2 = 14 usable hosts per subnet."
            },
            {
                id: "f24_28",
                category: "final2024",
                hasDiagram: true,
                diagramType: "subnet200",
                questionAr: "[سؤال مخطط 200.100.100.5/28] ما هو عنوان الـ IP لآخر جهاز متاح (Last host) في الشبكة الفرعية الثانية (Subnet #2)؟",
                questionEn: "[Diagram Question 200.100.100.5/28] What is an IP address of last host in subnet No. 2",
                optionsAr: ["200.100.100.30", "200.100.100.14", "200.100.100.46", "200.100.100.62"],
                optionsEn: ["200.100.100.30", "200.100.100.14", "200.100.100.46", "200.100.100.62"],
                answerIndex: 0,
                explanationAr: "حجم قفزة التقسيم هو 16. الشبكة الثانية نطاقها يمتد من .16 إلى .31. عنوان البث هو .31، وآخر جهاز متاح قبله مباشرة هو .30.",
                explanationEn: "Subnet #2 is (.16 to .31). Broadcast is .31, leaving .30 as the final usable host IP of this sub-net."
            },
            {
                id: "f24_29",
                category: "final2024",
                hasDiagram: true,
                diagramType: "subnet200",
                questionAr: "[سؤال مخطط 200.100.100.5/28] ما هو عنوان المضيف الثالث (Host #3) في الشبكة الفرعية الثالثة (Subnet #3)؟",
                questionEn: "[Diagram Question 200.100.100.5/28] What is an IP address of host No. 3 in subnet No. 3.",
                optionsAr: ["200.100.100.32", "200.100.100.33", "200.100.100.34", "200.100.100.35"],
                optionsEn: ["200.100.100.32", "200.100.100.33", "200.100.100.34", "200.100.100.35"],
                answerIndex: 3,
                explanationAr: "الشبكة الفرعية الثالثة تبدأ بـ .32. المضيف الأول هو .33، المضيف الثاني .34، والمضيف الثالث المتاح هو .35.",
                explanationEn: "Subnet #3 network address is .32. First host is .33, second is .34, and third host IP is .35."
            },
            {
                id: "f24_30",
                category: "final2024",
                hasDiagram: true,
                diagramType: "subnet200",
                questionAr: "[سؤال مخطط 200.100.100.5/28] ما هو عنوان البث (Broadcast IP) للشبكة الفرعية الرابعة (Subnet #4)؟",
                questionEn: "[Diagram Question 200.100.100.5/28] What is an IP address of broadcast of subnet No.4.",
                optionsAr: ["200.100.100.62", "200.100.100.63", "200.100.100.64", "200.100.100.65"],
                optionsEn: ["200.100.100.62", "200.100.100.63", "200.100.100.64", "200.100.100.65"],
                answerIndex: 1,
                explanationAr: "الشبكة الرابعة تبدأ بـ .48 وتنتهي بـ .63. آخر عنوان في هذا النطاق هو .63 وهو المخصص للبث (Broadcast).",
                explanationEn: "Subnet #4 spans (.48 to .63). The final address of the pool, .63, is set aside for broadcasting."
            }
        ];
