import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import zingImg from '../public/images/zing3.jpeg'


export default function Entrepeneurship() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entrepeneurship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

          
        <h1 className={styles.title}>Entrepeneurship</h1>
        <h3 className={styles.code}>Overview of my atypical pursuits.</h3>
        <div className={styles.entrepeneurshiplanding}></div>
        <div className={styles.container}>
          


            <div className="text-center">
                <br></br>
                <h2>Startups Overview</h2>
                

            </div>
        </div>
        <br /><br />
        <div className="container row text-left sides">

            <div className="col-sm-3">
                
                <Image 
                className="img img-responsive imgcasing" 
                src={zingImg} 
                layout="intrinsic"
                style={{"border": "0.3vh solid blue"}}
                
                />
                
            </div>
            <div className="col-sm">
            <h2>
                Zing Drone Solutions
            </h2>

            <h5>
                I have been a part of <strong>Zing Drone Solutions </strong> since 2020. I joined as 
                <em> Head of Flight Operations </em> and was promoted to <em>Chief Operating Officer (COO) </em> 
                in January, 2022. Since I joined, Zing has raised about <strong>$250,000</strong> in funding. 
                My role includes managing our FAA Part 107 Category and Part 135 certification efforts, brainstorming
                with the core team, business analytics/strategy, and to act as an in-house technical aerospace 
                expert.
                <br /><br />
                <Button href="https://wefunder.com/zing" target="_blank">Zing's WeFunder Campaign - Closed April 2022</Button>
                <Button href="https://zingdrones.com/" style={{marginLeft: "3vh"}} target="_blank">Zing's Website</Button>

            </h5>
           
                <Alert key={'warning'} variant={'warning'}>
                    Zing will raise a seed funding round starting Q4 of 2022!
                </Alert>
            </div>
            

            
        </div>
        <br /><br />
        <div className="container">
        <h2 className="text-center">Aviation Work Experience</h2>

            <div className="bg-dark text-white row" style={{margin:"3vh"}}>
                <div className="col-sm" style={{padding:"3vh"}}>
                    <h3>Avier Flight School   <Badge>Jan 2022 - Present</Badge></h3>

                        I am a CFII/MEI at Avier Flight School, teaching the following flight training courses:
                        <ul>
                            <li>Private Pilot</li>
                            <li>Instrument Rating</li>
                            <li>Commercial Pilot</li>
                            <li>Certified Flight Instructor + CFII/MEI</li>
                        </ul>
                </div>

                <div className="col-sm" style={{padding:"3vh"}}>
                    <strong>Address:</strong><br />
                    47 LP Henderson Rd. <br />
                    Beverly, MA 01915<br /><br />
                    <Button target="_blank" href="https://avierflight.com">Website</Button>
                    <br /><br />
                    Supervisor: Paul Beaulieu, Owner <br /><br />
                    <Button target="_blank" href="tel:9788939513">Call Avier</Button>
                    <Button target="_blank" style={{marginLeft: "2vh"}} href="mailto:paul@avierflight.com">Email Supervisor</Button>
                </div>

            </div>

            <div className="bg-dark text-white row" style={{margin:"3vh"}}>
                <div className="col-sm" style={{padding:"3vh"}}>
                    <h3>Gulfstream Aerospace   <Badge>May 2022 - Aug 2022</Badge></h3>

                        I wored as a flight operations intern for Gulfstream Flight Operations. I: 
                        <ul>
                            <li>Worked to enhance processes and methods within Gulfstream Flight Operations</li>
                            <li>Utilized Python and Power BI to analyze and present meaningful insights to leadership</li>
                            <li>Applied technical skills to automate out of date scheduling and approvals processes</li>
                            <li>Learned from the best on the corporate aviation industry</li>
                        </ul>
                </div>

                <div className="col-sm" style={{padding:"3vh"}}>
                    <strong>Address:</strong><br />
                    500 Gulfstream Road <br />
                    Savannah, GA 31408<br /><br />
                    <Button target="_blank" href="https://gulfstream.com">Website</Button>
                    <br /><br />
                    Supervisor: Brandon Lundy, Flight Operations Supervisor <br /><br />
                    <Button target="_blank" href="mailto:brandon.lundy@gulfstream.com">Email Supervisor</Button>
                </div>

            </div>

            <div className="bg-dark text-white row" style={{margin:"3vh"}}>
                <div className="col-sm" style={{padding:"3vh"}}>
                    <h3>FlyCorps Aviation   <Badge>May 2022 - Aug 2022</Badge></h3>

                        I wored as a flight instructor (CFI-I) for FlyCorps while in Savannah for the summer.
                        <ul>
                            <li>Taught IFR and CPL courses</li>
                            <li>Earned CMEL and MEI add-on ratings</li>
                        </ul>
                </div>

                <div className="col-sm" style={{padding:"3vh"}}>
                    <strong>Address:</strong><br />
                    100 Eddie Jungemann Dr <br/>Savannah, GA 31408<br /><br />
                    <Button target="_blank" href="https://flycorps.com">Website</Button>
                    <br /><br />
                    Supervisor: Jake Becker, Owner <br /><br />
                    <Button target="_blank" href="mailto:jake@flycorps.com">Email Supervisor</Button>
                </div>

            </div>

            <div className="bg-dark text-white row" style={{margin:"3vh"}}>
                <div className="col-sm" style={{padding:"3vh"}}>
                    <h3>FlyHdg360   <Badge>Aug 2021 - Present</Badge></h3>

                        FlyHdg360 is my independant flight instructing company. I offer:
                        <ul>
                            <li>Instruction in owned aircraft</li>
                            <li>Flight school referrals</li>
                            <li>Mock ground oral exams</li>
                            <li>Complex/High Perf aircraft checkouts</li>
                            <li>Rusty pilot training</li>
                            <li>Nonprofit flight training</li>
                        </ul>
                </div>

                <div className="col-sm" style={{padding:"3vh"}}>
                
                    <Button target="_blank" href="https://flyhdg360.com">Website</Button>
                    <br /><br />
                    
                </div>

            </div>

            
            
            
            
            
         


        </div>
         

  

        
      </main>

    
    </div>
  )
}