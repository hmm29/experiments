/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Grid,
  Container,
  Button,
  Heading,
  Text,
} from 'theme-ui';
import { rgba } from 'polished';
import { Link } from 'components/link';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'components/image';
import illustration from 'assets/images/banner.png';

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <div sx={styles.newsUpdate}>
              <span>NEWS</span>
              We have updated our term &amp; condition policy{' '}
              <IoIosArrowForward
                color={rgba('#02073E', 0.3)}
                size="14px"
                sx={{ ml: 1 }}
              />
            </div>
            <Heading as="h1">
            Maximize Your Income with Confidence.
            </Heading>
            <Text as="p">
            We'll meticulously analyze your job offers using market data from established compensation sources to help you get paid more.
            </Text>
            <div sx={styles.buttonGroup}>
              <Button variant="primary" >GET MY SALARY REPORT</Button>
              <Button variant="white" className="white">
                <a href="https://res.cloudinary.com/dxdsyeoz9/image/upload/v1698090202/ac1_yk0ohd.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                  VIEW SAMPLE
                </a>
              </Button>
            </div>
          </Box>
          <Flex as="figure" sx={styles.illustration}>
            <Image src={illustration} alt="illustration" />
          </Flex>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    background: `linear-gradient(180deg, rgba(255, 254, 252, 0.5) 0%, #FEFAF5 100%)`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    alignItems: ['center'],
    gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
    minHeight: [null, null, null, null, '45vh', '100vh'],
    pt: [15, null, null, 17, 12],
  },
  content: {
    textAlign: ['center', null, null, null, 'left'],
    h1: {
      color: 'textSecondary',
      fontWeight: 'bold',
      fontSize: [9, null, null, null, 12, 14, 15],
      lineHeight: [1.33, null, null, null, 1.36],
      letterSpacing: 'heading',
    },
    p: {
      color: 'textSecondary',
      fontSize: [1, null, null, 2],
      lineHeight: 2.62,
      maxWidth: 480,
      mx: [null, null, null, 'auto', 'unset'],
      marginTop: [1, null, null, 3],
    },
  },
  newsUpdate: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 8px rgba(67, 99, 136, 0.07)',
    borderRadius: 50,
    padding: '4px 15px 4px 5px',
    display: 'inline-flex',
    alignItems: 'center',
    color: rgba('#02073E', 0.9),
    fontSize: ['12px', null, null, 1],
    mb: 4,
    textAlign: 'left',
    span: {
      backgroundColor: 'primary',
      color: 'white',
      fontSize: ['10px', null, null, '13px'],
      fontWeight: 700,
      display: 'inline-flex',
      minHeight: 24,
      alignItems: 'center',
      px: '11px',
      borderRadius: 50,
      mr: '12px',
    },
  },
  buttonGroup: {
    mt: [6, null, null, null, 10],
    button: {
      minHeight: 45,
      px: ['17px', 4],
    },
    '.white': {
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
      fontWeight: 500,
      ml: 3,
    },
  },
  illustration: {
    maxWidth: [null, null, null, '80%', 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    mt: [6, null, null, null, 0],
    alignItems: 'center',
  },
};