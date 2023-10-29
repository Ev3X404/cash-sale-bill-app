import React, { useState } from 'react';
import { useProfile } from '../../contexts/profileContext';
import { Link } from 'react-router-dom';
import "./profile.css"

const Profile = () => {
  const { setProfileInfo } = useProfile();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [nameTwo, setNameTwo] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleNameTwoChange = (e) => {
    setNameTwo(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('วันที่:', date);
    console.log('NameTwo:', nameTwo);

    setProfileInfo(name, address, phoneNumber,date,nameTwo);

    // ล้างข้อมูล
    // setName('');
    // setAddress('');
    // setPhoneNumber('');
    alert("กรอกข้อมูลเบื้องต้น เข้าในรายการเรียบร้อย กรุณาไปที่หน้าต่อไป");
  }

  return (
    <div className='profilePage'>
      <h1>ระบบสร้าง บิลเงินสด</h1>

    <h2>กรุณากรอกข้อมูล</h2>
      <form onSubmit={handleSubmit} className='profile-form'>
        <div className='input-label'>
          <label>ชื่อ : </label>
          
          <input type="text" value={name} onChange={handleNameChange} />
          
        </div>
        <div className='input-label'>
          <label>ที่อยู่ : </label>
          
          <input type="text" value={address} onChange={handleAddressChange} />
          
        </div>
        <div className='input-label'>
          <label>เบอร์โทรศัพท์ : </label>
          
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
          
        </div>
        <div className='input-label'>
          <label>วันที่ : </label>
          
          <input type="date" value={date} onChange={handleDateChange} />
          
        </div>
        <div className='input-label'>
          <label>ผู้รับเงิน :</label>
          
          <input type="text" value={nameTwo} onChange={handleNameTwoChange} />
          
        </div>
        <button className='profile-button'  type="submit">Submit</button>
      </form>
      <Link to="/2"> next page ⇒ </Link>
    </div>
  );
}

export default Profile;
