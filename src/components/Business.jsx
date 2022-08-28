import { features } from '../constants';
import styles, { layout } from '../styles';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] 
    ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-4 ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain " />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Electric Scooters! <br className="sm:block hidden" /> Free Shipping &
          No Sales Tax.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Order your Electric Scooters today from Ronin Scooter PH to get Free
          shipping on all of our Electric Scooters. Order today for your chance
          to win a special promotion + free gift! See product page for more
          details.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={` ${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
