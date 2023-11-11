import { FC, ReactNode } from "react";

type DarkLayoutProps = {
  children: ReactNode;
};

export const DarkLayout = (props: DarkLayoutProps) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { props.children } 
        </div>
    </div>
  );
};
