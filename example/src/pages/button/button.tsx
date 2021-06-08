import { Button } from 'react-frankenstein';
import styles from './button.module.scss';

const ArrowCircleLeft = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
    />
  </svg>
);

const ArrowCircleRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const Basic = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.flex}>
          <Button text='Text only' />
          <Button text='With iconStart' iconStart={ArrowCircleLeft} />
          <Button text='With iconEnd' iconEnd={ArrowCircleRight} />
          <Button
            text='With both icon'
            iconStart={ArrowCircleLeft}
            iconEnd={ArrowCircleRight}
          />
          <Button text='Loading' isLoading={true} />
          <Button text='Disabled' disabled={true} />
          <Button variant='fab-circle' text='Fab' iconStart={ArrowCircleLeft} />
          <Button
            variant='fab-circle'
            text='Fab'
            iconStart={ArrowCircleLeft}
            isLoading={true}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <Button
          text='With very long text distinctively architect optimal quality vectors whereas adaptive scenarios. Collaboratively reinvent 24/365 outsourcing without robust expertise. Appropriately plagiarize client-focused opportunities via alternative best practices. Objectively productize.'
          iconStart={ArrowCircleLeft}
        />
      </div>
    </div>
  );
};

export default Basic;
