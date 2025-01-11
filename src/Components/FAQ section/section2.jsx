import React, { useState } from 'react'
import './section2.css';
const Section2 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
      { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
      { question: "Can I change my plan later?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
      { question: "What is your cancellation policy?", answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},
      { question: "Can other info be added to an invoice?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
      { question: "How does billing work?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
      { question: "How do I change my account email?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    ];
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    return (
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="action">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer || "No information available."}</div>}
          </div>
        ))}
      </div>
    );
}

export default Section2;