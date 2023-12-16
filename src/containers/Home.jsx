import styles from './Home.module.css';
import { Car } from '@/svg';

export default function Home() {
  return (
    <main className={`${styles.home}`}>
			<div>
				<Car withWindow={true} withLights={true} />
				<div>
					<h1>Drive Safe</h1>
					<h2>You'll get there!</h2>
					<button>
						let's go
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>
			</div>
		</main>
  )
}
