import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageSpectrum from '@site/src/components/HomepageSpectrum';
import HomepageMaturity from '@site/src/components/HomepageMaturity';
import HomepageShift from '@site/src/components/HomepageShift';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    // Add class to body for transparent navbar on homepage
    document.body.classList.add('homepage');

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('homepage');
    };
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics — An AI-Native Textbook for Panaversity">
      <HomepageHero />
      <main>
        <HomepageSpectrum />
        <HomepageFeatures />
        <HomepageMaturity />
        <HomepageShift />
      </main>
    </Layout>
  );
}