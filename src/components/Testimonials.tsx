import { Container } from '@/components/Container';
import Image from 'next/image';
import React from 'react';

import userOneImg from '../../public/img/user1.jpg';
import userTwoImg from '../../public/img/user2.jpg';
import userThreeImg from '../../public/img/user3.jpg';

export const Testimonials = () => {
	return (
		<Container>
			<div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
				<div className='lg:col-span-2 xl:col-auto'>
					<div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
						<p className='text-2xl leading-normal '>
							Inspiration Academy helped me achieve my academic goals and
							boosted my confidence.
						</p>

						<Avatar image={userOneImg} name='Sarah Steiner' title='Student' />
					</div>
				</div>
				<div className=''>
					<div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
						<p className='text-2xl leading-normal '>
							The tutors are knowledgeable and genuinely care about each
							student&apos;s success.
						</p>

						<Avatar image={userTwoImg} name='Dylan Ambrose' title='Student' />
					</div>
				</div>
				<div className=''>
					<div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
						<p className='text-2xl leading-normal '>
							The personalized learning plans made a huge difference in my
							academic performance.
						</p>

						<Avatar
							image={userThreeImg}
							name='Gabrielle Winn'
							title='Student'
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

interface AvatarProps {
	image: any;
	name: string;
	title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
	return (
		<div className='flex items-center mt-8 space-x-3'>
			<div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
				<Image
					src={props.image}
					width='40'
					height='40'
					alt='Avatar'
					placeholder='blur'
				/>
			</div>
			<div>
				<div className='text-lg font-medium'>{props.name}</div>
				<div className='text-gray-600 dark:text-gray-400'>{props.title}</div>
			</div>
		</div>
	);
}

function Mark(props: { readonly children: React.ReactNode }) {
	return (
		<>
			{' '}
			<mark className='text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200'>
				{props.children}
			</mark>{' '}
		</>
	);
}
