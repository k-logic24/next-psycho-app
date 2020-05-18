import React from 'react'

type HeaderProps = {
  title: string;
  description: string;
};

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="header">
      <h1 className="header__ttl">{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export default Header
