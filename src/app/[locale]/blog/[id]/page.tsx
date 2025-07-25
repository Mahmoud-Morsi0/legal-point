"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LocalizedContent {
  title: string;
  excerpt: string;
  content: string;
}

interface BlogPost {
  id: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  imageUrl?: string;
  content: {
    en: LocalizedContent;
    ar: LocalizedContent;
  };
}

export default function BlogDetailPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const blogId = params.id as string;

  // Mock data - in real app, this would fetch from API based on blogId
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        author: 'Sarah Johnson',
        createdAt: '2024-01-15',
        updatedAt: '2024-01-15',
        tags: ['Corporate Law', 'Business', 'Legal Guide'],
        content: {
          en: {
            title: 'Understanding Corporate Law Fundamentals',
            excerpt: 'A comprehensive guide to the basics of corporate law and how it affects your business operations.',
            content: `Corporate law is a complex and multifaceted area of legal practice that governs the formation, operation, and dissolution of corporations. Understanding the fundamentals of corporate law is essential for any business owner, executive, or legal professional working in the corporate sector.

## What is Corporate Law?

Corporate law encompasses the legal rules and regulations that govern the formation, management, and operation of corporations. It includes:

- **Formation and Structure**: Legal requirements for creating a corporation
- **Governance**: Rules for how corporations are managed and controlled
- **Rights and Responsibilities**: The legal rights and obligations of shareholders, directors, and officers
- **Compliance**: Regulatory requirements and ongoing legal obligations

## Key Components of Corporate Law

### 1. Corporate Formation

The process of forming a corporation involves several legal steps:

1. **Articles of Incorporation**: Legal document filed with the state
2. **Bylaws**: Internal rules governing corporate operations
3. **Shareholder Agreements**: Contracts between shareholders
4. **Board of Directors**: Governing body responsible for major decisions

### 2. Corporate Governance

Effective corporate governance is crucial for:

- Protecting shareholder interests
- Ensuring compliance with laws and regulations
- Maintaining transparency and accountability
- Managing conflicts of interest

### 3. Fiduciary Duties

Directors and officers owe fiduciary duties to the corporation and its shareholders:

- **Duty of Care**: Making informed decisions with reasonable care
- **Duty of Loyalty**: Acting in the best interests of the corporation
- **Duty of Good Faith**: Acting honestly and in good faith

## Why Corporate Law Matters

Understanding corporate law is essential because:

- **Legal Compliance**: Ensures your business operates within the law
- **Risk Management**: Helps identify and mitigate legal risks
- **Strategic Planning**: Informs important business decisions
- **Investor Relations**: Builds confidence with investors and stakeholders

## Conclusion

Corporate law provides the legal framework that enables businesses to operate effectively while protecting the interests of all stakeholders. Whether you're starting a new business or managing an existing corporation, understanding these fundamentals is crucial for long-term success.

For expert guidance on corporate law matters, consult with experienced legal professionals who can provide tailored advice for your specific situation.`
          },
          ar: {
            title: 'فهم أساسيات قانون الشركات',
            excerpt: 'دليل شامل لأساسيات قانون الشركات وكيفية تأثيره على عمليات عملك.',
            content: `قانون الشركات هو مجال معقد ومتعدد الأوجه من الممارسة القانونية يحكم تشكيل وتشغيل وحل الشركات. فهم أساسيات قانون الشركات ضروري لأي صاحب عمل أو مدير تنفيذي أو محترف قانوني يعمل في القطاع المؤسسي.

## ما هو قانون الشركات؟

يشمل قانون الشركات القواعد واللوائح القانونية التي تحكم تشكيل وإدارة وتشغيل الشركات. ويتضمن:

- **التشكيل والهيكل**: المتطلبات القانونية لإنشاء شركة
- **الحوكمة**: قواعد كيفية إدارة ومراقبة الشركات
- **الحقوق والمسؤوليات**: الحقوق والالتزامات القانونية للمساهمين والمدراء والمسؤولين
- **الامتثال**: المتطلبات التنظيمية والالتزامات القانونية المستمرة

## المكونات الرئيسية لقانون الشركات

### ١. تشكيل الشركة

تتضمن عملية تشكيل الشركة عدة خطوات قانونية:

١. **ميثاق التأسيس**: وثيقة قانونية تودع لدى الدولة
٢. **النظام الداخلي**: القواعد الداخلية التي تحكم عمليات الشركة
٣. **اتفاقيات المساهمين**: عقود بين المساهمين
٤. **مجلس الإدارة**: الهيئة الحاكمة المسؤولة عن القرارات الرئيسية

### ٢. حوكمة الشركات

الحوكمة المؤسسية الفعالة ضرورية من أجل:

- حماية مصالح المساهمين
- ضمان الامتثال للقوانين واللوائح
- الحفاظ على الشفافية والمساءلة
- إدارة تضارب المصالح

### ٣. الواجبات الائتمانية

المدراء والمسؤولون مدينون بواجبات ائتمانية للشركة ومساهميها:

- **واجب العناية**: اتخاذ قرارات مستنيرة بعناية معقولة
- **واجب الولاء**: التصرف في مصلحة الشركة
- **واجب حسن النية**: التصرف بأمانة وحسن نية

## لماذا يهم قانون الشركات

فهم قانون الشركات ضروري لأن:

- **الامتثال القانوني**: يضمن أن عملك يعمل ضمن القانون
- **إدارة المخاطر**: يساعد في تحديد وتخفيف المخاطر القانونية
- **التخطيط الاستراتيجي**: يوجه القرارات التجارية المهمة
- **علاقات المستثمرين**: يبني الثقة مع المستثمرين وأصحاب المصلحة

## الخلاصة

يوفر قانون الشركات الإطار القانوني الذي يمكّن الشركات من العمل بفعالية مع حماية مصالح جميع أصحاب المصلحة. سواء كنت تبدأ عملاً جديداً أو تدير شركة قائمة، فإن فهم هذه الأساسيات ضروري للنجاح على المدى الطويل.

للحصول على إرشادات خبراء في مسائل قانون الشركات، استشر المحترفين القانونيين ذوي الخبرة الذين يمكنهم تقديم نصائح مخصصة لحالتك المحددة.`
          }
        }
      },
      {
        id: '2',
        author: 'Michael Chen',
        createdAt: '2024-01-10',
        updatedAt: '2024-01-10',
        tags: ['Employment Law', 'Updates', 'HR'],
        content: {
          en: {
            title: 'Employment Law Updates 2024',
            excerpt: 'Stay updated with the latest changes in employment legislation and what it means for employers.',
            content: `The employment law landscape continues to evolve with new regulations and court decisions that impact how businesses manage their workforce. Here's what you need to know about the latest updates in 2024.

## Key Changes in Employment Legislation

### 1. Remote Work Regulations

With the continued rise of remote work, new regulations have been introduced to address:

- **Workplace Safety**: Ensuring home offices meet safety standards
- **Overtime Calculations**: Clarifying how remote work hours are calculated
- **Equipment Provisions**: Employer responsibilities for providing necessary equipment

### 2. Anti-Discrimination Protections

Enhanced protections have been implemented for:

- **Gender Identity**: Expanded protections for transgender employees
- **Religious Accommodations**: Clearer guidelines for religious practices in the workplace
- **Age Discrimination**: Strengthened protections for older workers

### 3. Wage and Hour Updates

Important changes to wage and hour laws include:

- **Minimum Wage Increases**: Updates to minimum wage requirements in various jurisdictions
- **Overtime Eligibility**: Expanded eligibility for overtime pay
- **Meal and Rest Breaks**: Clarified requirements for break periods

## Impact on Employers

These changes require employers to:

- Review and update employment policies
- Train managers on new requirements
- Ensure compliance with updated regulations
- Maintain proper documentation

## Best Practices for Compliance

To stay compliant with the latest employment law updates:

1. **Regular Policy Reviews**: Conduct quarterly reviews of employment policies
2. **Manager Training**: Provide ongoing training on employment law changes
3. **Documentation**: Maintain detailed records of all employment decisions
4. **Legal Consultation**: Work with employment law experts for guidance

## Conclusion

Staying current with employment law updates is crucial for maintaining a compliant and fair workplace. Regular consultation with legal professionals can help ensure your business remains on the right side of the law while protecting both employer and employee interests.`
          },
          ar: {
            title: 'تحديثات قانون العمل ٢٠٢٤',
            excerpt: 'ابق على اطلاع بأحدث التغييرات في تشريعات العمل وما تعنيه لأصحاب العمل.',
            content: `يستمر مشهد قانون العمل في التطور مع لوائح جديدة وقرارات محكمة تؤثر على كيفية إدارة الشركات لقوتها العاملة. إليك ما تحتاج لمعرفته عن أحدث التحديثات في ٢٠٢٤.

## التغييرات الرئيسية في تشريعات العمل

### ١. لوائح العمل عن بُعد

مع استمرار ارتفاع العمل عن بُعد، تم إدخال لوائح جديدة لمعالجة:

- **سلامة مكان العمل**: ضمان تلبية المكاتب المنزلية لمعايير السلامة
- **حسابات العمل الإضافي**: توضيح كيفية حساب ساعات العمل عن بُعد
- **توفير المعدات**: مسؤوليات صاحب العمل لتوفير المعدات اللازمة

### ٢. حماية مكافحة التمييز

تم تنفيذ حماية محسنة لـ:

- **الهوية الجنسية**: حماية موسعة للموظفين المتحولين جنسياً
- **التسهيلات الدينية**: إرشادات أوضح للممارسات الدينية في مكان العمل
- **التمييز العمري**: حماية معززة للعمال الأكبر سناً

### ٣. تحديثات الأجور والساعات

التغييرات المهمة في قوانين الأجور والساعات تشمل:

- **زيادات الحد الأدنى للأجور**: تحديثات لمتطلبات الحد الأدنى للأجور في مختلف الولايات القضائية
- **أهلية العمل الإضافي**: أهلية موسعة لأجر العمل الإضافي
- **فترات الراحة والوجبات**: متطلبات واضحة لفترات الراحة

## التأثير على أصحاب العمل

هذه التغييرات تتطلب من أصحاب العمل:

- مراجعة وتحديث سياسات التوظيف
- تدريب المديرين على المتطلبات الجديدة
- ضمان الامتثال للوائح المحدثة
- الحفاظ على التوثيق المناسب

## أفضل الممارسات للامتثال

للبقاء متوافقاً مع أحدث تحديثات قانون العمل:

١. **مراجعات السياسات المنتظمة**: إجراء مراجعات ربع سنوية لسياسات التوظيف
٢. **تدريب المديرين**: توفير تدريب مستمر على تغييرات قانون العمل
٣. **التوثيق**: الحفاظ على سجلات مفصلة لجميع قرارات التوظيف
٤. **الاستشارة القانونية**: العمل مع خبراء قانون العمل للحصول على إرشادات

## الخلاصة

البقاء محدثاً مع تحديثات قانون العمل ضروري للحفاظ على مكان عمل متوافق وعادل. الاستشارة المنتظمة مع المحترفين القانونيين يمكن أن تساعد في ضمان بقاء عملك على الجانب الصحيح من القانون مع حماية مصالح كل من صاحب العمل والموظف.`
          }
        }
      },
      {
        id: '3',
        author: 'Emily Rodriguez',
        createdAt: '2024-01-05',
        updatedAt: '2024-01-05',
        tags: ['IP Law', 'Protection', 'Strategy'],
        content: {
          en: {
            title: 'Intellectual Property Protection Strategies',
            excerpt: 'Learn how to protect your intellectual property and navigate the complex world of IP law.',
            content: `Intellectual property (IP) is often the most valuable asset of a business, yet many companies fail to adequately protect their IP rights. Understanding IP protection strategies is essential for safeguarding your innovations and maintaining competitive advantage.

## Types of Intellectual Property

### 1. Patents

Patents protect inventions and provide exclusive rights for up to 20 years:

- **Utility Patents**: Protect new and useful processes, machines, or compositions
- **Design Patents**: Protect ornamental designs of functional items
- **Plant Patents**: Protect new varieties of plants

### 2. Trademarks

Trademarks protect brand identity and consumer recognition:

- **Word Marks**: Protect brand names and slogans
- **Design Marks**: Protect logos and visual elements
- **Service Marks**: Protect services rather than products

### 3. Copyrights

Copyrights protect original creative works:

- **Literary Works**: Books, articles, software code
- **Visual Arts**: Paintings, photographs, graphics
- **Performing Arts**: Music, plays, choreography

### 4. Trade Secrets

Trade secrets protect confidential business information:

- **Formulas**: Chemical formulas, recipes, algorithms
- **Processes**: Manufacturing processes, business methods
- **Customer Lists**: Confidential customer information

## IP Protection Strategies

### 1. Comprehensive IP Audit

Conduct regular audits to identify all IP assets:

- Inventory all inventions, brands, and creative works
- Assess current protection levels
- Identify gaps in protection
- Prioritize protection efforts

### 2. Strategic Filing

Develop a strategic approach to IP filings:

- **Timing**: File early to establish priority
- **Scope**: Consider international protection
- **Cost-Benefit**: Balance protection costs with business value

### 3. Enforcement Planning

Prepare for potential IP disputes:

- **Monitoring**: Watch for potential infringements
- **Documentation**: Maintain detailed records
- **Legal Strategy**: Develop response protocols

## Common IP Mistakes to Avoid

1. **Delaying Protection**: Waiting too long to file for protection
2. **Insufficient Documentation**: Failing to document IP development
3. **Ignoring International Markets**: Not considering global protection
4. **Poor Contract Management**: Inadequate IP clauses in contracts

## Best Practices for IP Management

- **Regular Reviews**: Conduct annual IP portfolio reviews
- **Employee Training**: Educate staff on IP protection
- **Legal Partnerships**: Work with specialized IP attorneys
- **Technology Monitoring**: Stay informed about industry developments

## Conclusion

Effective IP protection requires a proactive and comprehensive approach. By understanding the different types of IP and implementing strategic protection measures, businesses can safeguard their valuable assets and maintain competitive advantage in the marketplace.

Consult with IP law experts to develop a customized protection strategy that aligns with your business goals and budget.`
          },
          ar: {
            title: 'استراتيجيات حماية الملكية الفكرية',
            excerpt: 'تعلم كيفية حماية ملكيتك الفكرية والتنقل في عالم قانون الملكية الفكرية المعقد.',
            content: `الملكية الفكرية (IP) هي غالباً الأصول الأكثر قيمة للشركة، ومع ذلك تفشل العديد من الشركات في حماية حقوق الملكية الفكرية بشكل كافٍ. فهم استراتيجيات حماية الملكية الفكرية ضروري لحماية ابتكاراتك والحفاظ على الميزة التنافسية.

## أنواع الملكية الفكرية

### ١. البراءات

تحمي البراءات الاختراعات وتوفر حقوقاً حصرية لمدة تصل إلى ٢٠ عاماً:

- **براءات المنفعة**: تحمي العمليات والآلات أو التركيبات الجديدة والمفيدة
- **براءات التصميم**: تحمي التصاميم الزخرفية للعناصر الوظيفية
- **براءات النباتات**: تحمي الأصناف الجديدة من النباتات

### ٢. العلامات التجارية

تحمي العلامات التجارية هوية العلامة التجارية والاعتراف بالعملاء:

- **علامات الكلمات**: تحمي أسماء العلامات التجارية والشعارات
- **علامات التصميم**: تحمي الشعارات والعناصر المرئية
- **علامات الخدمة**: تحمي الخدمات بدلاً من المنتجات

### ٣. حقوق النشر

تحمي حقوق النشر الأعمال الإبداعية الأصلية:

- **الأعمال الأدبية**: الكتب والمقالات ورمز البرمجيات
- **الفنون البصرية**: اللوحات والصور والرسومات
- **الفنون الأدائية**: الموسيقى والمسرحيات والرقص

### ٤. الأسرار التجارية

تحمي الأسرار التجارية المعلومات التجارية السرية:

- **الصيغ**: الصيغ الكيميائية والوصفات والخوارزميات
- **العمليات**: عمليات التصنيع والطرق التجارية
- **قوائم العملاء**: معلومات العملاء السرية

## استراتيجيات حماية الملكية الفكرية

### ١. تدقيق شامل للملكية الفكرية

إجراء تدقيقات منتظمة لتحديد جميع أصول الملكية الفكرية:

- جرد جميع الاختراعات والعلامات التجارية والأعمال الإبداعية
- تقييم مستويات الحماية الحالية
- تحديد الفجوات في الحماية
- تحديد أولويات جهود الحماية

### ٢. التسجيل الاستراتيجي

تطوير نهج استراتيجي لتسجيلات الملكية الفكرية:

- **التوقيت**: سجل مبكراً لإنشاء الأولوية
- **النطاق**: فكر في الحماية الدولية
- **التكلفة-المنفعة**: وازن تكاليف الحماية مع القيمة التجارية

### ٣. تخطيط التنفيذ

الاستعداد للنزاعات المحتملة في الملكية الفكرية:

- **المراقبة**: راقب الانتهاكات المحتملة
- **التوثيق**: حافظ على سجلات مفصلة
- **الاستراتيجية القانونية**: طور بروتوكولات الاستجابة

## أخطاء الملكية الفكرية الشائعة لتجنبها

١. **تأخير الحماية**: الانتظار طويلاً لتقديم طلب الحماية
٢. **التوثيق غير الكافي**: الفشل في توثيق تطوير الملكية الفكرية
٣. **تجاهل الأسواق الدولية**: عدم النظر في الحماية العالمية
٤. **إدارة العقود السيئة**: بنود الملكية الفكرية غير كافية في العقود

## أفضل الممارسات لإدارة الملكية الفكرية

- **المراجعات المنتظمة**: إجراء مراجعات سنوية لمحفظة الملكية الفكرية
- **تدريب الموظفين**: تعليم الموظفين على حماية الملكية الفكرية
- **الشراكات القانونية**: العمل مع محامين متخصصين في الملكية الفكرية
- **مراقبة التكنولوجيا**: البقاء على اطلاع بتطورات الصناعة

## الخلاصة

تتطلب حماية الملكية الفكرية الفعالة نهجاً استباقياً وشاملاً. من خلال فهم أنواع الملكية الفكرية المختلفة وتنفيذ تدابير الحماية الاستراتيجية، يمكن للشركات حماية أصولها القيمة والحفاظ على الميزة التنافسية في السوق.

استشر خبراء قانون الملكية الفكرية لتطوير استراتيجية حماية مخصصة تتوافق مع أهداف عملك وميزانيتك.`
          }
        }
      }
    ];

    const post = mockPosts.find(p => p.id === blogId);
    setBlogPost(post || null);
    setIsLoading(false);
    setIsAuthenticated(true); // Mock authentication
  }, [blogId]);

  const handleDelete = async () => {
    if (confirm(t('blog.deleteConfirm'))) {
      // Mock delete - in real app, this would be an API call
      router.push(`/${locale}/blog`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pure-white flex items-center justify-center">
        <div className="text-cape-cod text-xl">{t('status.loading')}</div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-pure-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-cape-cod mb-4">
            {t('blog.notFound')}
          </h1>
          <Link href={`/${locale}/blog`}>
            <Button className="bg-cape-cod text-pure-white hover:bg-obsidian transition-colors">
              {t('blog.backToList')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <div className="mb-8">
              <Link href={`/${locale}/blog`}>
                <Button variant="outline" className="text-pure-white border-pure-white hover:bg-pure-white hover:text-cape-cod">
                  ← {t('blog.backToList')}
                </Button>
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pure-mint text-cape-cod text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {blogPost.content[locale as keyof typeof blogPost.content].title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-pure-mint">
              <div className="flex items-center space-x-4">
                <span>👤 {blogPost.author}</span>
                <span>📅 {new Date(blogPost.createdAt).toLocaleDateString()}</span>
              </div>
              
              {isAuthenticated && (
                <div className="flex gap-2">
                  <Link href={`/${locale}/blog/${blogId}/edit`}>
                    <Button variant="outline" className="text-pure-white border-pure-white hover:bg-pure-white hover:text-cape-cod">
                      ✏️ {t('blog.editButton')}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-red-300 border-red-300 hover:bg-red-300 hover:text-cape-cod"
                    onClick={handleDelete}
                  >
                    🗑️ {t('blog.delete')}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Excerpt */}
            <div className="bg-pure-mint p-6 rounded-lg mb-8">
              <p className="text-lg text-cape-cod italic">
                {blogPost.content[locale as keyof typeof blogPost.content].excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-obsidian leading-relaxed">
                {blogPost.content[locale as keyof typeof blogPost.content].content}
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-cape-cod mb-2">
                {t('blog.aboutAuthor')}
              </h3>
              <p className="text-obsidian">
                {blogPost.author} is a legal expert with extensive experience in corporate law and business legal matters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 