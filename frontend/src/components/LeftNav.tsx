import UnilectivesLogo from "../assets/unilectives.svg"
import ArrowRightEndOnRectangle from "./left-nav-components/ArrowRightEndOnRectangle";
import BarsArrowUp from "./left-nav-components/BarsArrowUp";
import BookOpen from "./left-nav-components/BookOpen";
import Moon from "./left-nav-components/Moon";
import ShieldCheck from "./left-nav-components/ShieldCheck";
import UserCircle from "./left-nav-components/UserCircle";

const LeftNav = () => {
  return (
    <aside className="flex flex-col justify-between bg-[#f9fafb] p-5">
      <section className="flex flex-col gap-5">
        <img src={UnilectivesLogo} alt="Logo of unilectives" className="w-6 h-6" />
        <hr />
        <BookOpen />
        <ShieldCheck />
      </section>

      <section className="flex flex-col gap-5">
        <BarsArrowUp />
        <UserCircle />
        <Moon />
        <ArrowRightEndOnRectangle />
      </section>



    </aside>
  )
}

export default LeftNav;
