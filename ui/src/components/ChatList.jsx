import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '.././config';
import { authContext } from '.././context/authContext';

const ChatList = () => {
  const [doctors, setDoctors] = useState([]);
  const { user } = useContext(authContext);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors`);
        const data = await response.json();
        if (data.success) {
          setDoctors(data.data);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchChats = async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/v1/chat/list`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          const data = await response.json();
          if (data.success) {
            // Merge chat data with doctors
            const updatedDoctors = doctors.map(doctor => {
              const chat = data.chats.find(chat => chat.doctorId === doctor._id);
              return {
                ...doctor,
                lastMessage: chat ? chat.lastMessage : null,
                lastMessageTime: chat ? chat.createdAt : null,
              };
            });
            // Sort doctors based on last message time
            updatedDoctors.sort((a, b) => {
              if (!a.lastMessageTime) return 1;
              if (!b.lastMessageTime) return -1;
              return new Date(b.lastMessageTime) - new Date(a.lastMessageTime);
            });
            setDoctors(updatedDoctors);
          }
        } catch (error) {
          console.error('Error fetching chats:', error);
        }
      };
      fetchChats();
    }
  }, [user, doctors]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Doctors</h2>
      <ul className="space-y-2">
        {doctors.map((doctor) => (
          <li key={doctor._id} className="border-b last:border-b-0">
            <Link to={`/chat/${doctor._id}`} className="flex items-center p-2 hover:bg-gray-100 rounded">
              <img src={doctor.photo} alt={doctor.name} className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-grow">
                <p className="font-semibold">{doctor.name}</p>
                <p className="text-sm text-gray-500">{doctor.specialization}</p>
                {doctor.lastMessage && (
                  <p className="text-xs text-gray-400">{doctor.lastMessage}</p>
                )}
              </div>
              {doctor.lastMessageTime && (
                <span className="text-xs text-gray-400">
                  {new Date(doctor.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;

