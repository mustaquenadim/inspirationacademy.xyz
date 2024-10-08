import { Benefits } from '@/components/Benefits';
import { Container } from '@/components/Container';
import { Faq } from '@/components/Faq';
import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { Testimonials } from '@/components/Testimonials';

import { benefitOne, benefitTwo } from '@/components/data';
export default function Home() {
	return (
		<Container>
			<Hero />
			<SectionTitle preTitle='Benefits' title='Why Choose Inspiration Academy?'>
				Inspiration Academy is a premier coaching center dedicated to helping
				students excel through personalized learning plans, experienced
				instructors, and a supportive environment that fosters growth.
			</SectionTitle>

			<Benefits data={benefitOne} />
			<Benefits imgPos='right' data={benefitTwo} />

			{/* <SectionTitle
				preTitle='Watch a video'
				title='Learn how to fullfil your needs'
			>
				This section is to highlight a promo or demo video of your product.
				Analysts says a landing page with video has 3% more conversion rate. So,
				don&apos;t forget to add one. Just like this.
			</SectionTitle>

			<Video videoId='fZ0D0cnR88E' /> */}

			<SectionTitle
				preTitle='Testimonials'
				title="Here's what our students say"
			>
				Testimonials is a great way to increase the brand trust and awareness.
				Use this section to highlight your popular customers.
			</SectionTitle>

			<Testimonials />

			<SectionTitle preTitle='FAQ' title='Frequently Asked Questions'>
				Answer your customers possible questions here, it will increase the
				conversion rate as well as support or chat requests.
			</SectionTitle>

			<Faq />
			{/* <Cta /> */}
		</Container>
	);
}
