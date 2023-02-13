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
                    <td>TBD</td>
                    <td>Fall 2022</td>
                    <td>TBD</td>
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
                </tbody>
                </Table>


        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDisp;