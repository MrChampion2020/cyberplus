// import React from 'react';
// import { Link } from 'react-router-dom';


// const Footer = () => {
//   return (
//     <footer className='pb-10 pt-5' >
//       <div className='container'>
//         <div className='flex justify-between flex-col flex-wrap gap-[30px]' >
//           <div>
//             <p className='text-[14px] leading-6  font-semibold text-textColor text-center'>
//               © 2024 From <a href="https://cyber-safe-nine.vercel.app" target="_blank" rel="noopener noreferrer">Cyber Safe</a> All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsDribbble, } from 'react-icons/bs';
import logo from "../../assets/images/logo.png"

export default function myFooter() {

    return (
        <Footer container className='border border-t-1 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'
                    style={{
                         width: "10%",
                                height: "100%"
                    }}>
                        <Link
                            to='/'
                            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-blue'
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        >
                            <span 
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}>
                               <img src={logo} alt="" 
                               style={{
                                width: "100%",
                                height: "100%"
                               }}/>
                            </span>
                            
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' style={{
                                      color: "darkblue"
                                    }}/>
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    style={{
                                      color: "darkblue"
                                    }}
                                >
                                    Tools
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' style={{
                                      color: "darkblue"
                                    }}/>
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href=''
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    style={{
                                      color: "darkblue"
                                    }}
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link href='#'
                                style={{
                                  color: "darkblue"
                                }}
                                >X</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div
                        style={{
                          color: "darkblue"
                        }}>
                            <Footer.Title title='Legal'  style={{
                                      color: "darkblue"
                                    }}/>
                            <Footer.LinkGroup col>
                                <Footer.Link href='#'
                                style={{
                                  color: "darkblue"
                                }}>Privacy Policy</Footer.Link>
                                <Footer.Link href='#'
                                style={{
                                  color: "darkblue"
                                }}>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by="Cyber Safe"
                        year={new Date().getFullYear()}
                        style={{
                          color: "darkblue"
                        }}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitterX} />
                        <Footer.Icon href='' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsDribbble} />

                    </div>
                </div>
            </div>
        </Footer>
    );
}