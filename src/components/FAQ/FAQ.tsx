import React, { useState } from 'react';
import s from './FAQ.module.scss';
import { ReactComponent as DropDownIcon } from '../../assets/icons/arrow-down.svg';

const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const questions = [
    {
      question: 'Question 1',
      answer:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    },
    {
      question: 'Question 2',
      answer:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    },
    {
      question: 'Question 3',
      answer:
        'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Frequently Asked Questions</h2>

      {questions.map((item, index) => (
        <div key={item.question}>
          <div
            className={s.dropDownButton}
            onClick={() => toggleDropdown(index)}
          >
            <span>{item.question}</span>
            <DropDownIcon
              className={`${s.dropDownIcon} ${openIndexes.includes(index) ? s.isOpen : ''}`}
            />
          </div>

          <div
            className={s.dropDownItemWrapper}
            style={{
              maxHeight: openIndexes?.includes(index) ? '1000px' : '0',
            }}
          >
            <div className={s.dropDownItem}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
