import { clients } from '../constants';
import styles from '../styles';

const Clients = () => (
  <section className={`${styles.flexCenter}my-4 `}>
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div key={client.id} className={``}>
          <img
            src={client.logo}
            alt="client"
            className="w-[192px] w-[100px] object-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
