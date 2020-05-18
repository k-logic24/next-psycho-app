import React from 'react'

type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <section className="section">
      <h1 className="section__ttl">{title}</h1>
    </section>
  )
}

export default Title
