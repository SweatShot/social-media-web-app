import React from "react"

type Props = {
  children: string
  size?: string
}

export const Typogrpapy: React.FC<Props> = ({ children, size = "text-xl" }) => {
  return <p className={`${size}`}>{children}</p>
}
