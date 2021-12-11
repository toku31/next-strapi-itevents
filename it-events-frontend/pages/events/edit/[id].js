import moment from 'moment'
import { FaImage } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { parseCookies } from '@/helpers/index'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function EditEventPage({ evt }) {
  console.log('evt:', evt)
  
  const [values, setValues] = useState({
    name_ja: evt.name_ja,
    name_en: evt.name_en,
    organizers: evt.organizers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description,
  })

  const [imagePreview, setImagePreview] = useState(evt.image
    ? evt.image.formats.thumbnail.url : null)
  
  const [showModal, setShowModal] = useState(false)  

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some((element)=>element ==='')
    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    }

    const res = await fetch(`${API_URL}/events/${evt.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if (!res.ok) {
      toast.error('Something Went Wrong!')
    } else {
      const evt = await res.json()
      router.push(`/events/${evt.slug}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({...values,  [name]: value })
  }

  const imageUploaded = async (e) => {
    console.log('uploaded')
    const res = await fetch(`${API_URL}/events/${evt.id}`)
    const data = await res.json()
    console.log(data)
    setImagePreview(data.image.formats.thumbnail.url)
    setShowModal(false)
  }

  return (
    <Layout title='イベントの編集'>
      <Link href='/events'>Go Back</Link>
      <h1>イベントの編集</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name_ja">イベント名 (Japanese)</label>
            <input type="text" id="name_ja" name="name_ja" value={values.name_ja}
            onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="name_en">Event Name (English)</label>
            <input type="text" id="name_en" name="name_en" value={values.name_en}
            onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="organizers">主催者</label>
            <input type="text" id="organizers" name="organizers" value={values.organizers}
            onChange={handleInputChange} />
          </div>
          <div></div>
          <div>
            <label htmlFor="venue">場所</label>
            <input type="text" id="venue" name="venue" value={values.venue}
            onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="address">アドレス</label>
            <input type="text" id="address" name="address" value={values.address}
            onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="date">日付</label>
            {/* <input type="date" id="date" name="date" value={values.date} onChange={handleInputChange} /> */}
            <input type="date" id="date" name="date" value={moment(values.date).format('yyyy-MM-DD')} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="time">時間</label>
            <input type="text" id="time" name="time" value={values.time}
            onChange={handleInputChange} />
          </div>
        </div>
        <div>
            <label htmlFor="description">イベント詳細</label>
            <textarea type="text" id="description" name="description" value={values.description}
            onChange={handleInputChange} ></textarea>
        </div>
        
        <input type="submit" value="イベントの更新" className='btn'/>
      </form>

      <h2>イメージ</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={170}/>
      ) : <div>
          <p>No image uploaded</p>
      </div>}
      
      <div>
        <button onClick={()=>setShowModal(true)} className="btn-secondary btn-icon">
          <FaImage />画像添付
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload evtId={evt.id} imageUploaded={imageUploaded}/>
      </Modal>
    </Layout>
  )
}

export async function getServerSideProps({ params: {id}, req }) {
  const res = await fetch(`${API_URL}/events/${id}`)
  const evt = await res.json()

  console.log(req.headers.cookie)

  return {
    props: {
      evt
      }
  }
}