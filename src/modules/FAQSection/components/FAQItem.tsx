import { useState } from "react";

export type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="backdrop-blur-[13px] bg-white/5 box-border caret-transparent border overflow-hidden rounded-[15px] border-solid border-white/10 radial-gradient">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-left items-center box-border caret-transparent flex justify-between w-full p-5  transition-colors"
      >
        <h3 className="text-lg font-medium box-border caret-transparent leading-[28.8px] font-secondary">
          {question}
        </h3>
        <div className="box-border caret-transparent ml-4 shrink-0">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-white/70 box-border caret-transparent leading-[24px] px-5 pb-5">
          {answer}
        </div>
      </div>
    </div>
  );
};
