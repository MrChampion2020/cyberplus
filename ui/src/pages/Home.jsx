import React from 'react';
import headImg from '../../src/assets/images/onboard.png'
import About from '../components/About/About';
import ServiceList from '../components/Services/ServicesList';
import DoctorList from '../components/Doctors/DoctorList';
import Testsmonial from '../components/Testimonial/Testimonial';
import { Link } from 'react-router-dom';

const Home = () => {
  return <>
    {/* hero section */}

    <section className='hero__section pt-[180px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* hero content */}
          <div>
            <div className='lg:w-[570px] '>
              <h1 className='text-[26px] leading-[34px] text-primaryColor md:font-[900] font-[900] md:text-[60px] md:leading-[70px]'>
              Your Security <br/> Our Priority</h1>
              <p className='text_para font-[500] '>Welcome to Cyber Safe Security Plus, Get appointment,
                 Find help from a reliable Cyber Seccurity Expert.</p>
              <button className='btn'> <Link to='/experts'> Take an Appoinment </Link></button>
            </div>
          </div>
          {/* hero images */}
          <div className='flex gap-[30px] justify-end'>
            <div>
              <img src={headImg} alt="" style={{ borderRadius: '5%', height: "100%"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
    {/* service section start*/}
    <section className='pt-[10px]'>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our security services</h2>
          <p className='text__para mt-1 text-center text-textColor'>Comprehensive security services ensuring safety of Data</p>
        </div>
        <ServiceList />
      </div>
    </section>
    {/* service section end*/}

    {/* our greate doctors start*/}
    <section className='pt-[10px]'>
      <div className=''>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our great Engineers</h2>
          <p className='text__para mt-2 text-center text-textColor'>Dedicated, skilled doctors provide exceptional care, improving lives with expertise</p>
        </div>
        <DoctorList />
      </div>
    </section>
    {/* our greate doctors end*/}

    {/* testmonial start*/}
    {/* <section className='pt-[20px]'>
      <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patients say</h2>
          <p className='text__para mt-2 text-center text-textColor'>Patients commend our care: compassionate, life-changing, and highly recommended</p>
        </div>
      <Testsmonial/>
      </div>
    </section> */}
    {/* testmonial end */}
  </>
}

export default Home