import styles from './ModeSwitcher.module.css';
import { useAppSelector, useAppDispatch } from "@/hooks"
import { switchTheme, selectTheme } from "@/features/settingsSlice"

export default function ModeSwitcher({ classes = '' }) {

	const mode = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  return (
		<div className={`${styles.modeSwitcher} ${classes}`}>
				<button onClick={() => dispatch(switchTheme())} title={`Switch to ${((mode === 'dark')? 'light' : 'dark')} mode`}>
					<div></div>
				</button>
		</div>
	)
}
