import styles from '../styles'
import { clients } from '../constants'

export function Clients() {
  return (
    <div className={`${styles.flexCenter} my4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}