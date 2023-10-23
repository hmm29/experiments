/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'How does your AI tool work?',
    ans: `Our AI tool simplifies the process. You just need to upload your job offer, and our advanced algorithms will compare it to compensation data from established sources. In no time, you'll receive a detailed report with earnings insights.`,
  },
  {
    id: 2,
    ques: 'Is my data secure and private?',
    ans: `We take data security seriously. Your uploaded job offer data is anonymized and all PII is redacted. Your trust is our priority.`,
  },
  {
    id: 3,
    ques: 'How accurate is the compensation data you use?',
    ans: `Our tool uses data from well-known and reliable sources such as Candor and Levels.fyi. We regularly update our data to ensure it reflects the most current market trends, making our comparisons highly accurate.`,
  },
  {
    id: 4,
    ques: 'What if I need help interpreting the report?',
    ans: `We're here to support you. If you have any questions or need assistance understanding the report, our customer support team is available to provide guidance and clarification.`,
  },
  {
    id: 5,
    ques: 'Can I use this tool for any type of job offer?',
    ans: `Yes, our tool is designed to evaluate job offers across various industries and roles. Whether you're considering a tech position, a managerial role, or any other job, our tool is adaptable.`,
  },
  {
    id: 6,
    ques: `What happens if I'm not satisfied with the tool?`,
    ans: `We stand by the quality of our product. If, for any reason, you're not satisfied with the results, we offer a 100% satisfaction guarantee. We'll refund your purchase – no questions asked. Your satisfaction is our commitment.`,
  },
  {
    id: 7,
    ques: 'What makes your tool different from other job offer evaluators?',
    ans: `Our AI tool goes the extra mile. It doesn't just compare your job offer to standard data; it's equipped to identify hidden earning potential and unique perks within the offer. Our goal is to help you earn the maximum possible, setting us apart from the rest.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: 15 }}
          slogan="Get your questions answered"
          title="Frequently asked questions"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, 10, 14],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
};
