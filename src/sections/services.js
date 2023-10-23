/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/services/1.png';
import icon2 from 'assets/images/icons/services/2.png';
import icon3 from 'assets/images/icons/services/3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Maximize Your Earning Potential',
    description: `Our AI Job Offer Optimizer empowers you to break through earning plateaus. It identifies opportunities within job offers that you may have missed, ensuring you earn every dollar you deserve.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Negotiate with Confidence for Top-Dollar Salaries',
    description: `Say goodbye to the anxiety of salary negotiations. With our tool, you'll have a comprehensive understanding of your job offer's value, allowing you to confidently secure top-dollar salaries and lucrative benefits.`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Find Roles that Genuinely Value Your Skills and Expertise',
    description: `Our AI tool is your compass in the job market, guiding you to roles that truly recognize and reward your unique skills and expertise. Say hello to job satisfaction and financial fulfillment.`,
  },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        // fade: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Services = () => {
  return (
    <section id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Benefits"
          title="Go beyond typical negotiation coaching"
        />
        <Slider sx={styles.features} {...settings}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Services;

const styles = {
  section: {
    pt: [12],
    pb: [6, null, null, 12, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
  },
  features: {
    gap: [6, null, null, 8],
    display: [null, null, null, null, 'grid'],
    maxWidth: 1175,
    mx: 'auto',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(3, 1fr)'],
    '.slick-list': {
      paddingTop: ['31px', null, null, null, 0],
    },
    '.slick-dots': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      li: {
        display: 'flex',
      },
      button: {
        backgroundColor: '#CED7E1',
        border: 0,
        outline: 0,
        padding: 0,
        margin: '0 3.5px',
        width: 10,
        height: 10,
        borderRadius: '50%',
        overflow: 'hidden',
        textIndent: '-9999rem',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'heading',
        width: 13,
        height: 13,
      },
    },
  },
};
