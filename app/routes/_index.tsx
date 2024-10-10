import {
  EditOutlined,
  FileTextOutlined,
  CloudUploadOutlined,
  FormOutlined,
  ShareAltOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Automated Quiz Generation`,
      description: `Upload your .docx files and watch as QuizCraft instantly creates professional quizzes, saving you hours of manual work.`,
      icon: <CloudUploadOutlined />,
    },
    {
      heading: `Image Support`,
      description: `Enhance your quizzes with visual elements. QuizCraft seamlessly integrates images from your documents into your quizzes.`,
      icon: <FileTextOutlined />,
    },
    {
      heading: `Easy Editing`,
      description: `Fine-tune your auto-generated quizzes with our intuitive editing tools, ensuring perfect alignment with your learning objectives.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Multiple Choice Format`,
      description: `Create engaging and effective assessments with our versatile multiple-choice quiz format, suitable for various subjects and difficulty levels.`,
      icon: <FormOutlined />,
    },
    {
      heading: `Effortless Sharing`,
      description: `Distribute your quizzes with ease. Share them with students, colleagues, or trainees in just a few clicks.`,
      icon: <ShareAltOutlined />,
    },
    {
      heading: `Time-Saving Efficiency`,
      description: `Reduce quiz creation time by up to 80%, allowing you to focus more on teaching and less on administrative tasks.`,
      icon: <ClockCircleOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Dr. Sarah Thompson`,
      designation: `University Professor`,
      content: `QuizCraft has revolutionized my assessment process. I've reclaimed hours of my week that I now dedicate to research and student mentoring. It's an indispensable tool for any educator.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Mark Rodriguez`,
      designation: `Corporate Trainer`,
      content: `The efficiency of QuizCraft is unmatched. Our training programs are now more engaging and effective, thanks to the quick and accurate quiz generation. It's a game-changer for corporate learning.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Chen`,
      designation: `High School Teacher`,
      content: `QuizCraft has made my life so much easier. I can create diverse quizzes for multiple subjects in minutes, leaving me more time to focus on my students' individual needs.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Okonkwo`,
      designation: `E-learning Developer`,
      content: `The image support in QuizCraft is fantastic. Our online courses are now more visually appealing and effective. It's improved our learner engagement significantly.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Education Technology Specialist`,
      content: `I've tested many quiz tools, but QuizCraft stands out. Its automation capabilities combined with easy editing make it the perfect solution for modern educators.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `John Stevenson`,
      designation: `School Principal`,
      content: `Implementing QuizCraft across our school has boosted teacher productivity and improved assessment quality. It's an investment that pays off every single day.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Educator`,
      description: `Perfect for individual teachers and small educational institutions`,
      monthly: 19,
      yearly: 190,
      features: [
        `Up to 500 quizzes/month`,
        `Basic editing tools`,
        `Email support`,
      ],
    },
    {
      title: `Institution`,
      description: `Ideal for schools, universities, and medium-sized organizations`,
      monthly: 49,
      yearly: 490,
      features: [
        `Unlimited quizzes`,
        `Advanced editing tools`,
        `Priority support`,
        `Team collaboration`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large corporations and educational networks`,
      monthly: 99,
      yearly: 990,
      features: [
        `Custom integrations`,
        `Dedicated account manager`,
        `24/7 support`,
        `Advanced analytics`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does QuizCraft automatically generate quizzes?`,
      answer: `QuizCraft uses advanced AI algorithms to analyze your uploaded .docx files, extracting key information and creating relevant multiple-choice questions. The system also integrates any images from your documents into the quizzes.`,
    },
    {
      question: `Can I edit the auto-generated quizzes?`,
      answer: `Absolutely! While QuizCraft's auto-generation is highly accurate, you have full control to edit, add, or remove questions as needed. Our intuitive editing tools make it easy to refine your quizzes.`,
    },
    {
      question: `Is QuizCraft suitable for all subjects and education levels?`,
      answer: `Yes, QuizCraft is designed to be versatile. It can generate quizzes for various subjects and adapt to different education levels, from elementary school to higher education and professional training.`,
    },
    {
      question: `How secure is my data on QuizCraft?`,
      answer: `We take data security very seriously. All uploaded documents and generated quizzes are encrypted and stored securely. We comply with GDPR and other relevant data protection regulations to ensure your information is safe.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Upload Your Document`,
      description: `Simply upload your .docx file containing the content you want to turn into a quiz.`,
    },
    {
      heading: `AI-Powered Generation`,
      description: `Our advanced AI analyzes your document and automatically creates a multiple-choice quiz.`,
    },
    {
      heading: `Review and Edit`,
      description: `Fine-tune your quiz using our intuitive editing tools to ensure perfect alignment with your objectives.`,
    },
    {
      heading: `Share and Assess`,
      description: `Distribute your quiz to students or trainees and gather insights from their responses.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Spending hours creating quizzes manually`,
    },
    {
      emoji: `🤯`,
      title: `Struggling to come up with diverse and engaging questions`,
    },
    {
      emoji: `⏰`,
      title: `Losing valuable teaching time to administrative tasks`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Teaching: Create Quizzes in Seconds, Not Hours`}
        subtitle={`QuizCraft uses AI to instantly generate professional multiple-choice quizzes from your documents, saving you time and enhancing your educational impact.`}
        buttonText={`Start Creating Quizzes`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/isox1q-quizadu-i8TI`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy educators`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Educational Institutions`}
      />
      <LandingPainPoints
        title={`Educators Spend 7 Hours Per Week on Assessments - It's Time for a Change`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Effortless Quiz Creation in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Teaching with AI-Driven Quiz Creation`}
        subtitle={`Discover how QuizCraft revolutionizes assessment creation, saving you time and enhancing learning outcomes.`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Educators Transforming Their Assessment Process`}
        subtitle={`See how QuizCraft is making a difference in classrooms and training rooms worldwide.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Efficiency, Elevate Your Teaching`}
        subtitle={`Choose the plan that fits your needs and start creating impactful assessments today.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how QuizCraft can transform your assessment process.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Quiz Creation?`}
        subtitle={`Join thousands of educators saving time and improving assessments with QuizCraft.`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
