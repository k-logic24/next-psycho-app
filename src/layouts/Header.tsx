import React from 'react'

type HeaderProps = {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header__ttl">{title}</h1>
    </header>
  )
}

export default Header
