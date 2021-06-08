import { Link as RLink, LinkProps } from 'react-router-dom';
import styles from './home.module.scss';

const Link = (props: LinkProps) => {
  return <RLink {...props} className={styles.link} />;
};

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Link to='/hooks/use-modal'>useModal</Link>
      <Link to='/ui/button'>button</Link>
    </div>
  );
};

export default Home;
