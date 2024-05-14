import React, { useState } from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCheck, faChevronDown, faDashboard, faPerson, faSort, faStoreAlt, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'



function Sidebar() {
  
  const [click, setClick] = useState(true)

  const onclick = () =>{
    setClick(!true);
  }

  const onClose = () => {
    setClick(true);
  }
  
  return (
    <div className='sidebar-flex'>
    <div className={click ? 'sidebar-container hidden' : 'sidebar-container'}>
      <div className='sidebar'>
        <button className='close' ><FontAwesomeIcon icon={faXmark} onClick={onClose}/></button>
        <h3 className='sidebar-heading'>Employee Management </h3>
        <ul className='sidebar-topics'>
          <li>Dashborad</li>
          <li>Community</li>
          <li>Personnel Files <FontAwesomeIcon icon={faChevronDown} className='icon'/></li>
          <li>Salaries</li>
          <li>Employee Roles <FontAwesomeIcon icon={faChevronDown} className='icon'/></li>
          <li>Access Rights <FontAwesomeIcon icon={faChevronDown} className='icon'/></li>
          <li className='hr'>HR <FontAwesomeIcon icon={faChevronDown} className='icon'/></li>
            <ul className='sidebar-hr-subtopics'>
              <li>Appovals</li>
              <li>Attendances</li>
              <li>Work Schedule</li>
              <li>Overtime</li>
              <li>Sick Days</li>
            </ul>
          
          
          <li>On-Off Boarding</li>
          {/* <li>Genersls</li> */}
          <li>HR Reports <FontAwesomeIcon icon={faChevronDown} className='icon'/></li>
          {/* <li>Personia</li>
          <li>Settings</li> */}
        </ul>
      </div>
    </div>

    {/* dashboar */}


    <div className='dashboard-heading'>
      
      <h2><button className='menu' ><FontAwesomeIcon icon={faBars} onClick={onclick}/></button>Attendances</h2>

      <div className='select'>
        <label>Employee Id&emsp;
        <select>
          <option>All</option>
        </select></label>

        <label>Year&emsp;
        <select >
          <option>2024</option>
        </select></label>

        <label>month&emsp;
        <select >
          <option>May</option>
        </select></label>

        <label>Date&emsp;
        <select >
          <option>date</option>
        </select></label>

        <button className='btn'>Get</button>
      </div>

      <div className='attendance-box'>
          <div className='flex'>
            <div>
              <p>Employees
              <button className='btn'>Export</button>
              <button className='btn'>Import</button></p>
            </div>
            <div className='dashboard-icons'>
              <FontAwesomeIcon icon={faSort} className='dashboard-icon'/>
              <FontAwesomeIcon icon={faUser} className='dashboard-icon'/>
              <FontAwesomeIcon icon={faStoreAlt} className='dashboard-icon'/>
            </div>
          </div>
      
      {/* Attendance table */}
      <div className='table'>
        {/* <tbody> */}
        <table>
          <tr>
            <th></th>
            <th>1/05</th>
            <th>2/05</th>
            <th>3/05</th>
            <th>4/05</th>
            <th>5/05</th>
            <th className='hiddenr'>6/05</th>
          </tr>
          <tr>
            <th>Hari</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Thilak</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Varma</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
          </tr>
          <tr>
            <th>Shanmugavel</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Shafiq</th>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Romas Tony</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Tamilselvam</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
          </tr>
          <tr>
            <th>Kishor</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Bala</th>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faXmark} className='decline'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Mahesh</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Nethaji</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Hariram</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
          <tr>
            <th>Hakash</th>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
            <td><FontAwesomeIcon icon={faCheck} className='accept'/></td>
          </tr>
        </table>
        {/* </tbody> */}
      </div>
    </div>


    </div>
    </div>
  )
}

export default Sidebar
