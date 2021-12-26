import {parseCookies} from '@/helpers/index'
import Layout from "@/components/Layout"
import { API_URL } from '@/config/index'
import styles from '@/styles/Dashboard.module.css'
import DashboardEvent from '@/components/DashboardEvent'

export default function DashboardPage({ events }) {
  // console.log({ events })
  console.log(events)

  const deleteEvent = (id) => {
    console.log('id:', id)
  }

  return (
    <Layout title='User Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>マイ イベント</h3>
        {events.map((evt) => (
          <DashboardEvent evt={evt} key={evt.id}
           handleDelete={deleteEvent} />
          // <h3>{evt.name_ja} : {evt.name_en}</h3>
        )
        )}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  console.log(token)
  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const events = await res.json()
  // console.log(events)
  return {
    props: {
      events
    },
  }
}