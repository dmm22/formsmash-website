import { Link } from "react-router-dom";
import { routes } from "../routes";

export default function Footer() {
  return (
    <footer className="mb-8 flex flex-col gap-4 p-4">
      {/* <div className="mb-8 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src={logo} alt="FormSmash" className="w-8" />
          <strong>FormSmash</strong>
        </div>
        <p>Autofill job applications in 1 click.</p>
      </div> */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <strong className="underline">Product</strong>
          <ul>
            <li className="text-text-secondary">
              <a href="#">Install The Extension</a>
            </li>
            <li className="text-text-secondary">
              <a href="#">Getting Started</a>
            </li>
            <li className="text-text-secondary">
              <a href="#">Custom GPT</a>
            </li>
          </ul>
        </div>
        <div>
          <strong className="underline">Support</strong>
          <ul>
            <li className="text-text-secondary">
              <Link to={routes.contact.path}>Contact</Link>
            </li>
            <li className="text-text-secondary">
              <Link to={routes.privacy.path}>Privacy Policy</Link>
            </li>
            <li className="text-text-secondary">
              <Link to={routes.terms.path}>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong className="underline">About</strong>
          <ul>
            <li className="text-text-secondary">
              <Link to={routes.about.path}>About FormSmash</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
