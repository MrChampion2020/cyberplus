// import { useEffect, useRef, useContext } from 'react';
// import logo from '../../assets/images/logo.png';
// import { BiMenu } from 'react-icons/bi';
// import { NavLink, Link } from 'react-router-dom';
// import { authContext } from '../../context/authContext';

// let navLinks = [
//   {
//     path: '/home',
//     display: 'Home',
//   },
//   {
//     path: '/services',
//     display: 'Services',
//   },
//   {
//     path: '/experts',
//     display: 'Experts',
//   },
//   {
//     path: '/contact',
//     display: 'Contact',
//   },
//   {
//     path: '/chat',
//     display: 'Chat',
//   },
//   {
//     // path: '/chat',
//     display: 'Blog',
//     external: true,
//     url: 'https://cyber-safe-nine.vercel.app/', // Replace with the actual blog URL
//   }
  
// ];

// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);
//   const { user, role, token } = useContext(authContext);

//   const handleStickyHeader = () => {
//     if (headerRef.current) {
//       if (window.pageYOffset > 80) {
//         headerRef.current.classList.add('sticky__header');
//       } else {
//         headerRef.current.classList.remove('sticky__header');
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleStickyHeader);
//     return () => window.removeEventListener('scroll', handleStickyHeader);
//   }, []);

//   const toggleMenu = () => {
//     if (menuRef.current) {
//       menuRef.current.classList.toggle('show__menu');
//     }
//   };

//   return (
//     <header className="header flex items-center" style={{
//       backgroundColor: "white",
//       borderBottom: "0.05px solid lightgreen"
//     }}>
//       <div className="container">
//         <div className="flex items-center justify-between">
//           {/* logo */}
//           <div>
//             <a href="/">
//               <img
//                 src={logo}
//                 alt=""
//                 style={{ width: '60px', height: '60px' }}
//               />
//             </a>
//           </div>
//           {/* menu */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}
//           style={{color: "white"}}>
//             <ul className="menu flex items-center gap-[2.7rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={(navClass) =>
//                       navClass.isActive
//                         ? 'text-[16px] leading-7 font-[600]'
//                         : 'text-[16px] leading-7 font-[500]'
//                     }
//                     style={{
//                       color: "darkblue"
//                     }}
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* nav right */}
//           <div className="flex items-center gap-4">
//             {token && user ? (
//               <div>
//                 <Link
//                   to={`${
//                     role === 'doctor'
//                       ? '/doctors/profile/me'
//                       : '/users/profile/me'
//                   }`}
//                 >
//                   <figure className="w-10 h-10  rounded-full cursor-pointer">
//                     <img
//                       src={user?.photo}
//                       className="w-10 h-10 rounded-full"
//                       alt=""
//                     />
//                   </figure>
//                 </Link>
//               </div>
//             ) : (
//               <Link to="/login">
//                 <button className="btn  mt-0 py-1 px-6 text-white font-[600] h-[35px] flex item-cnter justify-center rounded-[50px]"
//                 style={{
//                   backgroundColor: "darkblue"
//                 }}>
//                   Login
//                 </button>
//               </Link>
//             )}
//             <span className="md:hidden" onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { BiMenu } from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';
import { authContext } from '../../context/authContext';

let navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/experts',
    display: 'Experts',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
  {
    path: '/chat/:doctorId',
    display: 'Chat',
  },
  {
    display: 'Blog',
    external: true,
    url: 'https://cyber-safe-nine.vercel.app/', // Replace with the actual blog URL
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    if (headerRef.current) {
      if (window.pageYOffset > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyHeader);
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show__menu');
    }
  };

  return (
    <header
      className="header flex items-center"
      style={{
        backgroundColor: 'white',
        borderBottom: '0.05px solid lightgreen',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                style={{ width: '60px', height: '60px' }}
              />
            </a>
          </div>

          {/* Menu */}
          <div
            className="navigation"
            ref={menuRef}
            onClick={toggleMenu}
            style={{ color: 'white' }}
          >
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] leading-7 font-[500]"
                      style={{
                        color: 'darkblue',
                        textDecoration: 'none',
                      }}
                    >
                      {link.display}
                    </a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? 'text-[16px] leading-7 font-[600]'
                          : 'text-[16px] leading-7 font-[500]'
                      }
                      style={{
                        color: 'darkblue',
                      }}
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === 'doctor'
                      ? '/doctors/profile/me'
                      : '/users/profile/me'
                  }`}
                >
                  <figure className="w-10 h-10 rounded-full cursor-pointer">
                    <img
                      src={user?.photo}
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className="btn mt-0 py-1 px-6 text-white font-[600] h-[35px] flex item-cnter justify-center rounded-[50px]"
                  style={{
                    backgroundColor: 'darkblue',
                  }}
                >
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
