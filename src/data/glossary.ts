export interface GlossaryItem {
  term: string;
  category: string;
  descEn: string;
  descAr: string;
}

export const GLOSSARY_DATA: GlossaryItem[] = [
  { term: "HTTP", category: "Protocols", descEn: "Hypertext Transfer Protocol - Web application layer communication standard.", descAr: "بروتوكول نقل النص التشعبي - معيار نقل صفحات الويب في طبقة التطبيقات." },
  { term: "HTTPS", category: "Protocols", descEn: "Secure HTTP - Encrypts data payload using TLS/SSL cryptographic signatures.", descAr: "بروتوكول الويب الآمن - يشفر حركة نقل البيانات لحماية خصوصية وأمان الاتصال." },
  { term: "FTP", category: "Protocols", descEn: "File Transfer Protocol - Explicit bulk data transaction model across client-server architecture.", descAr: "بروتوكول نقل الملفات - ينقل الملفات بين الأجهزة بصورة مخصصة." },
  { term: "SMTP", category: "Protocols", descEn: "Simple Mail Transfer Protocol - Used to push outbound electronic mail records between servers.", descAr: "بروتوكول إرسال البريد الإلكتروني البسيط - مسؤول عن إرسال الرسائل عبر الملقمات المخصصة." },
  { term: "POP3", category: "Protocols", descEn: "Post Office Protocol v3 - Legacy endpoint retrieval pattern that unloads email and purges remote storage.", descAr: "بروتوكول مكتب البريد الإصدار الثالث - يجلب الرسائل للمستلم ويحذفها من خادم البريد تلقائياً." },
  { term: "IMAP", category: "Protocols", descEn: "Internet Message Access Protocol - Syncs structural message queues interactively without local deletions.", descAr: "بروتوكول الوصول للرسائل عبر الإنترنت - يقرأ الرسائل ويتحكم بها مباشرة على الخادم مع إتاحة المزامنة المتعددة." },
  { term: "DNS", category: "Protocols", descEn: "Domain Name System - Global mapping tree resolving hostname text queries to operational logical IPs.", descAr: "نظام أسماء النطاقات - يترجم العناوين النصية المألوفة إلى عناوين رقمية صالحة للأجهزة." },
  { term: "TCP", category: "Protocols", descEn: "Transmission Control Protocol - Reliable Layer 4 transport featuring strict session control frameworks.", descAr: "بروتوكول التحكم بالإرسال - بروتوكول موثوق وموجه للاتصال يعمل في الطبقة الرابعة ويتحقق من سلامة البيانات." },
  { term: "UDP", category: "Protocols", descEn: "User Datagram Protocol - Lightweight stateless protocol tuned for low latency streams.", descAr: "بروتوكول بيانات المستخدم - سريع وخفيف، لا يتطلب مصافحة أولية لتقليل زمن التأخير." },
  { term: "IP", category: "Protocols", descEn: "Internet Protocol - Core addressing methodology supporting cross-subnet routing logic.", descAr: "بروتوكول الإنترنت - العنونة الأساسية لتحديد مسارات حركة البيانات عبر الشبكات الفرعية المختلفة." },
  { term: "MAC", category: "Hardware", descEn: "Media Access Control - 48-bit immutable unique structural layer identity.", descAr: "عنوان فيزيائي فريد ومحروق على بطاقة الشبكة يتكون من 48 بت للتعريف المحلي للعتاد." },
  { term: "OSI", category: "Models", descEn: "Open Systems Interconnection - 7 structural layer concept pipeline explaining networking architectures.", descAr: "النموذج المرجعي لترابط الأنظمة المفتوحة - يتكون من سبع طبقات لشرح معمارية الشبكة." },
  { term: "LAN", category: "Geographic", descEn: "Local Area Network - Private network loop covering single physical buildings or offices.", descAr: "شبكة محلية - تغطي مساحة صغيرة ومحدودة مثل مبنى مكاتب، منزل، أو حرم جامعي." },
  { term: "WAN", category: "Geographic", descEn: "Wide Area Network - Expansive geographical reach linking continents or global enterprise spaces.", descAr: "شبكة واسعة - تمتد عبر مدن أو قارات مختلفة وتغطي مساحات واسعة جداً كالإنترنت." },
  { term: "MAN", category: "Geographic", descEn: "Metropolitan Area Network - City scale structural connection topology.", descAr: "شبكة مدينية - مصممة لربط الموارد ضمن نطاق جغرافي على حجم مدينة واحدة." },
  { term: "UTP", category: "Cabling", descEn: "Unshielded Twisted Pair - Standard unprotected twisted pairs common inside modern consumer Ethernet.", descAr: "كابلات مجدولة غير محمية - الأسلاك النحاسية الأكثر شيوعاً للتوصيل المحلي." },
  { term: "STP", category: "Cabling", descEn: "Shielded Twisted Pair - Wrapped inside specialized localized ground isolation matrix to halt aggressive interference.", descAr: "كابلات مجدولة محمية - كابلات مغلفة بدرع واقٍ لحماية البيانات من التداخل الكهرومغناطيسي العالي." },
  { term: "EMI", category: "Cabling", descEn: "Electromagnetic Interference - Radiated electromagnetic disruption that can distort electrical signals on physical wire fields.", descAr: "التداخل الكهرومغناطيسي - التشويش الخارجي المؤثر سلباً على سلامة الإشارات الكهربائية عبر الكابلات." }
];
