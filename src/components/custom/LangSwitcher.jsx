import styles from './LangSwitcher.module.css';
import { useAppSelector, useAppDispatch } from "@/hooks"
import { selectLocals, selectLocal, switchLocal } from "@/features/settingsSlice"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui";

export default function LangSwitcher() {

  const locals = useAppSelector(selectLocals);
  const id = useAppSelector(selectLocal);
  const local = locals.find(v => v.id === id);
  const dispatch = useAppDispatch()

  return (
    <div className={`${styles.switcher}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" aria-label="Switch Language">
            {/* <div> */}
              <h2>{local.code}</h2>
            {/* </div> */}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`${styles.dropDown}`}>
          <DropdownMenuGroup>
            {locals.map((v) => ((v.id !== local.id) && (
              <DropdownMenuItem key={v.id}>
                <button type="button" aria-label={`choose ${v.name} language`} onClick={() => dispatch(switchLocal(v.id))}>{v.code}</button>
              </DropdownMenuItem>
            )))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
