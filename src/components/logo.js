/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import Image from 'next/image'

export default function Logo({ isSticky, footer, ...props }) {
  return (
      <Image src="https://res.cloudinary.com/dxdsyeoz9/image/upload/v1698096155/lighting_pqbote.png" width={50} height={50} alt="logo" />
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    maxWidth: [null, null, null, 185, null, 'none'],
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
