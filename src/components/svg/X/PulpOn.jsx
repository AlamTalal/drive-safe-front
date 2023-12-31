import styles from './PulpOn.module.css';

export default function PulpOn({ classes = '', width = 25, height = 25 }) {
  return (
		<div className={`${styles.icon} ${classes}`}>
			<svg viewBox="-23.1 -24.1 22.2 23.2" width={`${width}px`} height={`${height}px`}>
				<path d="M -14 -22 L -10 -22 C -9 -22 -9 -21 -10 -21 L -14 -21 C -15 -21 -15 -22 -14 -22 M -14 -23 C -14 -23 -14 -24 -13 -24 L -11 -24 C -10 -24 -10 -23 -10 -23 L -10 -22.5 L -14 -22.5 Z" />
				<path d="M -12 -6 C -15.3137 -6 -18 -8.6863 -18 -12 C -18 -14.22 -16.79 -16.16 -15 -17.2 L -15 -19 C -15 -19.5523 -14.5523 -20 -14 -20 L -10 -20 C -9.4477 -20 -9 -19.5523 -9 -19 L -9 -17.2 C -7.21 -16.16 -6 -14.22 -6 -12 C -6 -8.6863 -8.6863 -6 -12 -6 Z" />
				<path d="M -20 -11 L -23 -11 L -23 -13 L -20 -13 L -20 -11 M -1 -11 L -4 -11 L -4 -13 L -1 -13 L -1 -11 M -13 -1 L -13 -4 L -11 -4 L -11 -1 L -13 -1 M -4.92 -3.5 L -7.05 -5.64 L -5.63 -7.05 L -3.5 -4.93 L -4.92 -3.5 M -16.95 -5.63 L -19.07 -3.5 L -20.5 -4.93 L -18.37 -7.05 L -16.95 -5.63 Z" />
			</svg>
		</div>
  )
}
