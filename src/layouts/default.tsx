import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Title from '@/layouts/Title'
import Sidebar from '@/layouts/Sidebar'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Container fluid>
          <Title title={title} />
          {children}
        </Container>
      </div>
    </>
  )
}

export default Layout
