import React from 'react';
import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import cn from 'classnames';
import { Card } from '..';
import RateIcon from './rate.svg';
import { price } from '../../helpers';

const HhData = ({count,juniorSalary,middleSalary,seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
    <Card className={styles.count}>
      <div className={styles.title}>
        All vacancy
      </div>
      <div className={styles.countValue}>
        {count}
      </div>
    </Card>

    <Card className={styles.salary}>
      <div>
        <div className={styles.title}>
          Junior salary
        </div>
        <div className={styles.salaryValue}>
          {price(juniorSalary)}
        </div>
        <div className={styles.rate}>
          <RateIcon className={styles.filled}/>
          <RateIcon />
          <RateIcon />
        </div>
      </div>

      <div>
        <div className={styles.title}>
          Middle salary
        </div>
        <div className={styles.salaryValue}>
          {price(middleSalary)}
        </div>
        <div className={styles.rate}>
          <RateIcon className={styles.filled} />
          <RateIcon className={styles.filled} />
          <RateIcon />
        </div>
      </div>

      <div>
        <div className={styles.title}>
          Senior salary
        </div>
        <div className={styles.salaryValue}>
          {price(seniorSalary)}
        </div>
        <div className={styles.rate}>
          <RateIcon className={styles.filled} />
          <RateIcon className={styles.filled} />
          <RateIcon className={styles.filled} />
        </div>
      </div>
    </Card>
  </div>
  );
};

export default HhData;
