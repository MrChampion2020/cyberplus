import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import { BASE_URL } from '.././config';
import { authContext } from '.././context/authContext';
import ChatList from './ChatList';

const ChatRoom = () => {
  const { doctorId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const messagesEndRef = useRef(null);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const newSocket = io(BASE_URL);
    setSocket(newSocket);

    newSocket.emit('join', { doctorId, userId: user._id });

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Fetch doctor details
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/${doctorId}`);
        const data = await response.json();
        if (data.success) {
          setDoctor(data.data);
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    // Fetch previous messages
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/chat/messages/${doctorId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchDoctor();
    fetchMessages();

    return () => newSocket.close();
  }, [doctorId, user, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && socket) {
      socket.emit('sendMessage', { doctorId, message: newMessage, userId: user._id });
      setNewMessage('');
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      const formData = new FormData();
      formData.append('file', file);
      formData.append('doctorId', doctorId);
      formData.append('userId', user._id);

      try {
        const response = await fetch(`${BASE_URL}/api/v1/chat/upload`, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          socket.emit('sendMessage', { doctorId, message: `File uploaded: ${data.filename}`, userId: user._id });
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      alert('File size should be less than 10MB');
    }
  };

  return (
    <div className="container mx-auto mt-8 flex">
      <div className="w-1/4 pr-4">
        <ChatList />
      </div>
      <div className="w-3/4">
        <div className="bg-white shadow-md rounded-lg p-4">
          {doctor && (
            <div className="flex items-center mb-4">
              <img src={doctor.photo} alt={doctor.name} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h2 className="text-xl font-bold">{doctor.name}</h2>
                <p className="text-sm text-gray-500">{doctor.specialization}</p>
              </div>
            </div>
          )}
          <div className="h-[500px] overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === user._id ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${message.sender === user._id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {message.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow border rounded-l-lg p-2"
              placeholder="Type your message..."
            />
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              accept=".pdf,image/*"
            />
            <label htmlFor="file-upload" className="bg-gray-200 p-2 cursor-pointer">
              📎
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

