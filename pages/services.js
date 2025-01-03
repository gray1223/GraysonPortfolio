import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import teachingImg from '../public/images/landing.jpeg'
import mockImg from '../public/images/cockpit.jpeg'
import webDev from '../public/images/zing2.jpeg'
import photography from '../public/images/gav.jpeg'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Services</title>
        <meta name="description" content="FlyHdg360 Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      
        <h1 className={styles.title}>
          Services
        </h1>
        <h3 className={styles.code}>Grayson's Companies and Services</h3>


        <div className={styles.serviceslanding}></div>
        <p className={styles.description}>
          My rates and packages are below! I typically repond within a few hours.<br /><br/>
          <em>Standard CFI Rate (All Services): $75/hr</em>
          <br /><br />
          Contact me directly at (386) 597-9976 for all professional pilot service or aircraft management inquiries.
          
        </p>
        <h5>Learn more about my background in each of the following areas:</h5>
        <div className={styles.grid}>
          <Link href="/academics"><a className={styles.card}>
            <h2>Academics &rarr;</h2>
            <p>
              MIT '25 AeroAstro
              <br/>Research & Teaching
              
            </p>
          </a></Link>

          <Link href="/aviation"><a className={styles.card}>
            <h2>Aviation &rarr;</h2>
            <p>
              CFI/CFII/MEI, ATP<br/>Flight Instruction Services
            </p>
          </a></Link>

          <Link href="/entrepeneurship"><a className={styles.card}>
            <h2>Entrepeneurship &rarr;</h2>
            <p>
              Founder and COO<br/>Web Dev & Photography
            </p>
          </a></Link>

        </div>

        <div className="row wrap container flex flex-wrap justify-content-center">
            <Card className="col-lg-4 bg-dark text-white" style={{margin: "2vh", padding: "2vh"}}>
            <Image 
                  src={teachingImg} 
                  style={{borderRadius: "10px"}}
                  />
                <Card.Body>
                    <Card.Title>Flight or Ground Instruction</Card.Title>
                    <Card.Text>
                    CFI/CFII/MEI services in any light single or multi engine airplane towards 
                    any certificate or rating. 
                    </Card.Text>
                    <Link href="tel:8578297049"><Button variant="primary">Call or Text Me</Button></Link>
                </Card.Body>
            </Card>

            <Card className="col-lg-4 bg-dark text-white " style={{margin: "2vh", padding: "2vh"}}>
            
                <Image 
                  src={mockImg} 
                  style={{borderRadius: "10px"}}
                  />
            
                <Card.Body>
                    <Card.Title>Mock FAA Oral Exam (In Person or Remote)</Card.Title>
                    <Card.Text>
                    60-120 minute mock oral exam, designed to help you practice for your real FAA Practical exam.
                    </Card.Text>
                    <Link href="tel:8578297049"><Button variant="primary">Call or Text Me</Button></Link>
                </Card.Body>
            </Card>

        </div>

     

        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
