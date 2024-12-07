import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/authContext';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import { BASE_URL } from '../../config';
import useFetchData from '../../Hooks/useFetchData';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loading/Loading';

const DoctorDetails = () => {
  const { id } = useParams();
  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors/${id}`);
  const [tab, setTab] = useState('about');
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleChatStart = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/chat/${id}`);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className='pt-[160px]'>
      <div className='container'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            {/* Doctor details */}
            {/* ... (keep the existing doctor details code) */}
            
            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button
                onClick={() => setTab('about')}
                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 text-[16px] leading-7 text-primaryColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab('feedback')}
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 text-[16px] leading-7 text-primaryColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              {tab === 'about' && <DoctorAbout doctor={doctor} />}
              {tab === 'feedback' && <Feedback reviews={doctor.reviews} totalRating={doctor.totalRating} />}
            </div>
          </div>
          <div>
            <SidePanel doctor={doctor} />
            <button
              onClick={handleChatStart}
              className='btn bg-primaryColor text-white w-full rounded-md'
            >
              Chat with Doctor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;

