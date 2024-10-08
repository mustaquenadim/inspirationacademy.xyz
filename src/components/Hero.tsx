import { Container } from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export const Hero = () => {
	return (
		<Fragment>
			<Container className='flex flex-wrap '>
				<div className='flex items-center w-full lg:w-1/2'>
					<div className='max-w-2xl mb-8'>
						<h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
							Unlock Your Academic and Personal Potential
						</h1>
						<p className='py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'>
							At Inspiration Academy, every student can achieve greatness. We
							provide an environment for academic and personal growth.
						</p>

						<div className='flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
							<Link
								href='/'
								className='px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md '
							>
								Enroll Now
							</Link>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center w-full lg:w-1/2'>
					<div className=''>
						<Image
							src='/educator.svg'
							width='616'
							height='617'
							className={'object-cover'}
							alt='Hero Illustration'
						/>
					</div>
				</div>
			</Container>
		</Fragment>
	);
};
