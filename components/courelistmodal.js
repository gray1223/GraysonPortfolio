import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'

function ModalDisp() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Course List - Detailed
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detailed Course List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>Course Name</th>

                    </tr>
                </thead>
                <tbody>
                    <tr colSpan={3}><br></br></tr>
                    <tr>
                    <td colSpan={3}>Freshman Year: 2021-2022</td>

                    </tr>


                    <tr>
                    <td>8.01</td>
                    <td>Fall 2021</td>
                    <td>Physics I - Mechanics</td>
                

                    </tr>
                    <tr>
                    <td>15.359</td>
                    <td>Fall 2021</td>
                    <td>Engineering Innovation</td>
                   
                    </tr>
                    <tr>
                    <td>3.091</td>
                    <td>Fall 2021</td>
                    <td>Introduction to Solid-State Chemistry</td>
                    </tr>
                    <tr>
                    <td>18.03</td>
                    <td>Fall 2021</td>
                    <td>Differential Equations</td>
                    </tr>

                    <tr>
                    <td>8.02</td>
                    <td>Spring 2022</td>
                    <td>Physics II - Electrostatics</td>
                    </tr>
                    <tr>
                    <td>21H.161</td>
                    <td>Spring 2022</td>
                    <td>The Modern Middle East</td>
                    </tr>
                    <tr>
                    <td>6.0001</td>
                    <td>Spring 2022</td>
                    <td>Introduction to Computer Programming in Python</td>
                    </tr>
                    <tr>
                    <td>16.0002</td>
                    <td>Spring 2022</td>
                    <td>Computational Science and Engineering (CSE)</td>
                    </tr>
                    <tr>
                    <td>7.014</td>
                    <td>Spring 2022</td>
                    <td>Ecological Biology</td>
                    </tr>

                    <tr colSpan={3}><br></br></tr>
                    <tr>
                    <td colSpan={3}>Sophomore Year: 2022-2023</td>

                    </tr>

                    <tr>
                    <td>16.001</td>
                    <td>Fall 2022</td>
                    <td>Unified Engineering: Mechanics and Materials</td>
                    </tr>
                    <tr>
                    <td>16.002</td>
                    <td>Fall 2022</td>
                    <td>Unified Engineering: Signals and Systems</td>
                    </tr>
                    <tr>
                    <td>21H.160</td>
                    <td>Fall 2022</td>
                    <td>Islam, Iran, and the Middle East</td>
                    </tr>
                    <tr>
                    <td>15.388</td>
                    <td>Fall 2022</td>
                    <td>Venture Creation Tactics</td>
                    </tr>

                    <tr>
                    <td>16.003</td>
                    <td>Spring 2023</td>
                    <td>Unified Engineering: Fluid Dynamics</td>
                    </tr>
                    <tr>
                    <td>16.004</td>
                    <td>Spring 2023</td>
                    <td>Unified Engineering: Thermodynamics and Propulsion</td>
                    </tr>
                    <tr>
                    <td>21A.500</td>
                    <td>Spring 2023</td>
                    <td>Technology and Culture</td>
                    </tr>
                    <tr>
                    <td>17.569</td>
                    <td>Spring 2023</td>
                    <td>Russia's Foreign Policy</td>
                    </tr>
                    <tr>
                    <td>15.6181</td>
                    <td>Fall 2022</td>
                    <td>Startups and the Law</td>
                    </tr>

                    <tr colSpan={3}><br></br></tr>
                    <tr>
                    <td colSpan={3}>Junior Year: 2023-2024</td>

                    </tr>

                    <tr>
                    <td>15.305</td>
                    <td>Fall 2023</td>
                    <td>Leadership and Management</td>
                    </tr>
                    <tr>
                    <td>15.6221</td>
                    <td>Fall 2023</td>
                    <td>Law of AI, Big Data, and Social Media</td>
                    </tr>
                    <tr>
                    <td>16.07</td>
                    <td>Fall 2023</td>
                    <td>Dynamics</td>
                    </tr>
                    <tr>
                    <td>16.100</td>
                    <td>Fall 2023</td>
                    <td>Aerodynamics</td>
                    </tr>
                    <tr>
                    <td>16.400</td>
                    <td>Fall 2023</td>
                    <td>Human Systems Engineering</td>
                    </tr>
                    <tr>
                    <td>21M.294</td>
                    <td>Fall 2023</td>
                    <td>Popular Musics of the World</td>
                    </tr>

                    <tr>
                    <td>9.00</td>
                    <td>Spring 2024</td>
                    <td>Introduction to Psychological Science</td>
                    </tr>
                    <tr>
                    <td>16.06</td>
                    <td>Spring 2024</td>
                    <td>Principles of Automatic Control</td>
                    </tr>
                    <tr>
                    <td>16.09</td>
                    <td>Spring 2024</td>
                    <td>Statistics and Probability</td>
                    </tr>
                    <tr>
                    <td>16.90</td>
                    <td>Spring 2024</td>
                    <td>Computational Methods for Aerospace Engineering Problem Solving</td>
                    </tr>
                    <tr>
                    <td>15.373</td>
                    <td>Spring 2024</td>
                    <td>Venture Engineering</td>
                    </tr>

                    <tr colSpan={3}><br></br></tr>
                    <tr>
                    <td colSpan={3}>Senior Year: 2024-2025</td>

                    </tr>

                    <tr>
                    <td>15.951</td>
                    <td>Fall 2024</td>
                    <td>Independent Study in Management</td>
                    </tr>
                    <tr>
                    <td>21H.261</td>
                    <td>Fall 2024</td>
                    <td>Modern Iran: A Century of Revolution</td>
                    </tr>
                    <tr>
                    <td>16.S811</td>
                    <td>Fall 2024</td>
                    <td>Advanced Manufacturing for Aerospace Engineers</td>
                    </tr>
                    
                </tbody>
                </Table>


        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDisp;