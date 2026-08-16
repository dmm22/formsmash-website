import { useNavigate } from "react-router-dom";
import { IoMdOpen } from "react-icons/io";
import { routes } from "../../routes";

export default function UninstallPage() {
  const navigate = useNavigate();

  const handleContactClicked = () => {
    navigate(routes.contact.path);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-24">
      <div className="flex w-full max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-text-secondary">
          Thanks for giving FormSmash a shot. Sorry it wasn&apos;t what you
          needed.
        </p>
        <p className="text-text-secondary">
          Would you mind telling us what went wrong? If it&apos;s something we
          can fix or add, we&apos;ll do it.
        </p>
        <p className="text-text-secondary">
          If you&apos;d rather not say, we understand. Good luck with your job
          search.
        </p>
        <button
          type="button"
          onClick={handleContactClicked}
          className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent-hover"
        >
          <IoMdOpen />
          Contact us
        </button>
      </div>
    </main>
  );
}
