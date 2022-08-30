import { apple, google } from '../assets';
import styles, { layout } from '../styles';
import bill from '../assets/pawpal.png';
const Billing = () => (
  <section id="payment" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className=" w-[100%] h-[100%] relative z-[5] "
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient  " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient  " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily pay your <br className="sm:block hidden" /> purchases & orders.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Go all out and purchase the Ronin Scooter from millions of shops
        worldwide. With PayPal, you can shop for Ronin Scooter from the comfort
        of your own home, at work, or even on the road.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
        <img
          src={google}
          alt="google_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
