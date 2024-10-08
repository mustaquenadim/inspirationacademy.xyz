import {
	AdjustmentsHorizontalIcon,
	ChartBarSquareIcon,
	CursorArrowRaysIcon,
	DevicePhoneMobileIcon,
	FaceSmileIcon,
	SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../../public/img/benefit-one.png';
import benefitTwoImg from '../../public/img/benefit-two.png';

const benefitOne = {
	title: '',
	desc: '',
	image: benefitOneImg,
	bullets: [
		{
			title: 'Understand Your Goals',
			desc: 'We help you set and achieve personalized goals, ensuring you stay motivated and on track.',
			icon: <FaceSmileIcon />,
		},
		{
			title: 'Improve Academic Performance',
			desc: 'Our expert tutors provide targeted assistance to strengthen your understanding of challenging subjects.',
			icon: <ChartBarSquareIcon />,
		},
		{
			title: 'Build Confidence',
			desc: 'We equip you with the skills needed to succeed in school and beyond, boosting your confidence every step of the way.',
			icon: <CursorArrowRaysIcon />,
		},
		{
			title: 'Foster Lifelong Learning',
			desc: 'Our holistic approach helps you develop critical thinking and problem-solving skills that last a lifetime.',
			icon: <CursorArrowRaysIcon />,
		},
	],
};

const benefitTwo = {
	title: '',
	desc: '',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Experienced Faculty',
			desc: 'Our instructors are experts in their fields and dedicated to providing high-quality education.',
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: 'Flexible Learning Options',
			desc: 'Choose between in-person and online classes to fit your schedule.',
			icon: <AdjustmentsHorizontalIcon />,
		},
		{
			title: 'Modern Curriculum',
			desc: 'Our courses are updated regularly to align with the latest academic standards and trends.',
			icon: <SunIcon />,
		},
		{
			title: 'Community Support',
			desc: 'Join a vibrant community of learners and educators committed to your success.',
			icon: <SunIcon />,
		},
	],
};

export { benefitOne, benefitTwo };
