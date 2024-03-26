import { classNames } from '@/components/Commons';
import Image from 'next/image';
import LinkInfos from '@/infos/Links';
import style from './style.module.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import homeImage from '@/app/assets/home.svg';
import avatarImage from '@/app/assets/avatar.svg';

export const metadata: Metadata = {
  title: 'Wilcox Ekente | Senior Full Stack Developer & SEO Specialist',
  description:
    'As a seasoned Senior Full Stack Developer specializing in SEO and MERN Stack, I offer a proven track record of crafting resilient, intuitive web applications.',
};

export default function Page() {
  return (
    <>
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[562px]">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7 text-4xl flex flex-col items-center justify-center">
            <div className="pb-4 text-center">
              <span className={style.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br />
              <br />
              Hi There!
            </div>

            <h1 className="py-2 text-center">
              My name is
              <strong className="font-bold text-impact"> Wilcox Ekente</strong>
            </h1>

            <div className="py-14">
              <ul className="text-2xl leading-10">
                <li>
                  <strong className="text-impact">Senior</strong> Full Stack Developer
                </li>
                <li>
                  <strong className="text-impact">SEO</strong> Specialist
                </li>
                <li>
                  Continuously <strong className="text-impact">Learning</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 flex items-center justify-center">
            <Image
              src={homeImage}
              alt="Home"
              className="w-auto max-h-[450px]"
              width={505}
              height={529}
              title="Home"
              priority
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[712px]">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-8 px-10">
            <h2 className="text-4xl uppercase text-center mb-16">
              Let me <span className="text-impact">Introduce</span> myself
            </h2>
            <p className="text-xl leading-8">
              As a Senior Full Stack Developer and also SEO specialist with over a decade of experience, I have excelled
              in implementing strategic SEO techniques, leveraging technologies like MERN stack and WordPress in
              crafting visually stunning web applications and deliver innovative solutions. Recognized for strong
              problem-solving and analytical capabilities, coupled with effective communication. Eager to bring my
              dynamic skill set to contribute to innovative projects.
              <br />
              <br />
              Web Application Development and SEO is not only my job, but also my life.
              <br />
              <br />I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.
            </p>
          </div>
          <div className="md:col-span-4 flex items-center justify-center px-10 pt-10">
            <Image
              src={avatarImage}
              className="w-auto"
              alt="Avatar"
              width="645"
              height="500"
              title="Avatar"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[256px]">
          <div className="grid md:grid-cols-2">
            <div className="px-10">
              <h3 className="text-3xl capitalize text-center pb-5">
                Comprehensive SEO Optimization for Ecommerce Website
              </h3>
              <p className="text-2xl leading-8">
                This project optimized an ecommerce website SEO for enhanced online visibility and organic traffic,
                resulting in improved search rankings, increased CTRs, and boosted conversions, fueling business growth.
              </p>
              <p className="text-xl leading-8 pl-5">
                The project resulted in significant improvements in search engine rankings, organic traffic, clickthrough
                rates (CTRs), and conversions for the ecommerce website.
              </p>
              <p className="text-xl leading-8 pl-5">
                Our strategic SEO optimization and customized strategies guided to a 40% increase in organic search
                traffic within six months, greatly improving website visibility.
              </p>
              <p className="text-xl leading-8 pl-5">
                The SEO strategies we implemented led to significant business growth, with a 20% increase in organic leads
                and a 15% boost in conversion rates.
              </p>
            </div>
            <div className="px-10">
              <h3 className="text-3xl capitalize text-center pb-5">
                Web Application Development and Optimization Project
              </h3>
              <p className="text-xl leading-8">
                Enhanced development efficiency by 20% through React implementation and reduced communication latency by
                30% with DynamoDB configuration.
              </p>
              <p className="text-xl leading-8">
                Improved team efficiency by 20% through process standardization, achieved a 15% increase in organic
                traffic, and enhanced site performance by 25% through technical SEO optimizations.
              </p>
            </div>
          </div>
        </section> */}
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[256px]">
        <div className="py-14 flex flex-col gap-5 justify-center">
          <h2 className="text-4xl uppercase text-center">FIND ME ON</h2>
          <p className="text-center">
            Feel free to <span className="text-impact">connect</span> with me
          </p>
          <ul className="home-about-social-links text-center">
            {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
              <li className={style.socialIcons} key={`intro-social-icon-${idx}`}>
                <Link
                  className={classNames(`title-tooltip`, style.homeSocialIcons)}
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <DarkIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
