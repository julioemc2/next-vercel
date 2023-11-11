import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';


import styles from './MainLayout.module.css';

type DarkLayoutProps = {
  children: ReactNode;
};



export const MainLayout = (props: DarkLayoutProps) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { props.children }
    
          </main>     
        </div>
      )
};
