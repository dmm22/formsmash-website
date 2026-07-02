import { useState } from "react"
import logo from "../assets/logo.svg"
import { IoMdMenu } from "react-icons/io"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  /*
  if mobile:
  logo top left
  <IoMdMenu /> top right
  context menu toggle on click
  close context menu if clicking outside
  */

  return (
    <nav className="flex items-center justify-between">
      <img src={logo} alt="Formsmash Logo" />
      <ul>
        <li>Home</li> {/* only have this if mobile, desktop should not see this option */}
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
