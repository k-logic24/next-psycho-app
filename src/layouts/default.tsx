import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '@/layouts/Header'
import Sidebar from '@/layouts/Sidebar'

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Container fluid>
          <Header title={title} />
          {children}
        </Container>
      </div>
    </>
  )
}

export default Layout
