import { FAQItem } from "./FAQItem";

export const FAQGrid = () => {
  const faqData = [
    {
      question: "What types of videos do you edit?",
      answer:
        "We specialize in YouTube videos, short-form content (Reels, TikTok, Shorts), SaaS videos, ad creatives, VSLs, podcasts, demo videos, and launch videos. Our team has experience across all major content formats.",
    },
    {
      question: "How long does it take to get?",
      answer:
        "Turnaround time depends on the complexity and length of your video. Typically, YouTube videos take 3-5 business days, while short-form content can be delivered within 24-48 hours. Rush delivery is available for urgent projects.",
    },
    {
      question: "Do you offer unlimited revisions?",
      answer:
        "We offer up to 3 rounds of revisions included in our standard packages to ensure you're completely satisfied with the final product. Additional revisions can be requested if needed.",
    },
    {
      question: "What makes us different from ?",
      answer:
        "We have an in-house team of 40+ experts, proven DFY content funnels, experience with 500+ clients, and a results-oriented approach. We focus on creating content that converts, not just looks good.",
    },
    {
      question: "Can you help with content strategy?",
      answer:
        "Yes! We provide comprehensive content strategy, including ideation, scripting, thumbnail design, SEO optimization, and distribution planning to maximize your reach and engagement.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing varies based on the type and volume of content you need. We offer flexible packages for different needs and budgets. Book a call with us to discuss a custom solution for your business.",
    },
  ];

  return (
    <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-stretch gap-y-[30px] w-full md:grid-cols-[1fr_1fr]">
      <div className="items-start box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] gap-y-[30px]">
        {faqData.slice(0, 3).map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="items-start box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] gap-y-[30px]">
        {faqData.slice(3, 6).map((faq, index) => (
          <FAQItem
            key={index + 3}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};
