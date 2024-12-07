import React from 'react';
import  aboutImg from '../../assets/images/onboard.jpg';
import { Link } from 'react-router-dom';


const About = () => {
  return <section className=' pt-[20px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* hero images */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={aboutImg} alt="" style={{ borderRadius: '5%', }} />
              </div>
            </div>
            {/* hero content */}
            <div>
              <div className='lg:w-[570px] '>
                <h2 className='heading'>
                Excellent Feedbacks: leading in Cyber Recovery</h2>
                <p className='text_para '>We have provided and will continue to provide the best cyber security services .</p>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>



  // <section>
  //   <div className="container">
  //       <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
  //           {/* about image */}
  //           <div className='flex gap-[30px] justify-start'>
  //               <img src={aboutImg} alt="" style={{borderRadius:'10%'}} />
  //           </div>
  //           {/* about content */}
  //           <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
  //               <h2 className='heading'>Proud to be a one of the nations best.</h2>
  //               <p className='text_para'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
  //               </p>
                
  //               <Link to='/'> <button className='btn' >Learn More</button></Link>
  //           </div>
  //       </div>
  //   </div>
  // </section>
}

export default About