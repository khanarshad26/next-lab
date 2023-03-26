import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from "react";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(1);

  const questions = [
    {
      question: "What are the items we will get in Kit for Drone Workshop?",
      answer: "Full kit will be given to the student for the program",
    },
    {
      question: "What are the items we will get in Kit for Drone Workshop?",
      answer: "Full kit will be given to the student for the program",
    },
    {
      question: "What are the items we will get in Kit for Drone Workshop?",
      answer: "Full kit will be given to the student for the program",
    },
    {
      question: "What are the items we will get in Kit for Drone Workshop?",
      answer: "Full kit will be given to the student for the program",
    },
  ];

  const CustomAccordian = ({question, answer, no}) => { 
    const handleChange = () => {
      if(expanded === no) {
        setExpanded(0);
        return;
      }
      setExpanded(no);
    } 
    return (
      <>
        <Accordion expanded={expanded === no} onChange={handleChange}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{no + '. ' + question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      </>
    )
  }


  return (
    <>
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="content px-xl-5">
                <h3>
                  Frequently Asked <strong>Questions</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="accordion accordion-flush"
                id="faqlist"
                // data-aos="fade-up"
                // data-aos-delay={100}
              >
                {questions.map((question, index) => (
                  <CustomAccordian
                    key={"faq_question_" + index}
                    question={question.question}
                    answer={question.answer}
                    no={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

// const Question = ({ question, answer, no }) => {
//   const collapsed = true;
//   const classList = collapsed
//     ? "accordion-collapse collapse"
//     : "accordion-collapse";
//   const accordianButtonStyle = collapsed
//     ? "accordion-button collapsed"
//     : "accordion-button";
//   return (
//     <>
//       <div className="accordion-item">
//         <h3 className="accordion-header">
//           <button
//             className={accordianButtonStyle}
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#faq-content-5"
//           >
//             <span className="num">.{no}</span>
//             {question}
//           </button>
//         </h3>
//         <div id="faq-content-5" className={classList} data-bs-parent="#faqlist">
//           <div className="accordion-body">{answer}</div>
//         </div>
//       </div>
//     </>
//   );
// };
