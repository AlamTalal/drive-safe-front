import styles from './Header.module.css';
import { Car } from "@/svg";
import { ModeSwitcher, ProfileButton, LangSwitcher } from "@/custom";

export default function Header() {

  return (
    <header className={`${styles.appHeader}`}>

      <div>
        {/* <a href="/">
          <div>
            <Car width={44} height={44} />
          </div>
          <h2>Drive Safe</h2>
        </a> */}
      </div>
      
      <div>  
        <div>
          <ModeSwitcher />
        </div>
        <div>
          <LangSwitcher />
        </div>
        <div>
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}
