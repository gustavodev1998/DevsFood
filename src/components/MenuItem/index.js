import React from 'react'

import { LinkArea, LinkIcon } from './styled'

import { useNavigate, useLocation } from 'react-router-dom'

export default ({ title, icon, link }) => {
  const navigate = useNavigate()
  const location = useLocation()

  let isActive = location.pathname === link

  const handleLinkClick = e => {
    e.preventDefault()
    navigate(link)
  }

  return (
    <LinkArea
      active={isActive}
      href={link}
      onClick={handleLinkClick}
      data-tip={title}
      data-for="tip-right"
    >
      <LinkIcon src={icon} />
    </LinkArea>
  )
}
