import React from "react";
import { formateDate } from "../../utils/formateDate";
const About=({name, about, experiences})=>{
    return(
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-primaryColor mt-3 font-semibold flex items-center gap-2">
                    About of
                    <span className="text-greenColor font-bold text-[24px] leading-9">
                        {name}
                    </span>
                </h3>
                <p className="text__para text-textColor">{about}</p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-greenColor font-semibold">Education</h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:justify-between md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-primaryColor text-[15px] leading-6 font-semibold">{formateDate('09-12-2014')} - {formateDate('09-12-2016')}</span>
                            <p className="text-[16px] leading-6 text-textColor">Security Administration</p>
                            <p className="text-[14px] leading-5 font-medium text-textColor">BSc Computer Science</p>
                        </div>
                        
                    </li>
                    <li className="flex flex-col sm:justify-between md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-primaryColor text-[15px] leading-6 font-semibold">{formateDate('11-04-2011')} - {formateDate('05-05-2013')}</span>
                            <p className="text-[16px] leading-6 text-textColor">Beginner in Cyber Security Analysis</p>
                            <p className="text-[14px] leading-5 font-medium text-textColor">Runorx</p>
                        </div>
                        
                    </li>
                </ul>
                
            </div>

            <div className="mt--1">
            <h3 className="text-[20px] leading-[30px] text-greenColor font-semibold">Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                {experiences?.map((item, index)=> <li key={index} className="p-3 rounded bg-[#ccf0f3]">
                    <span className="text-primaryColor text-[16px] leading-6 font-semibold">
                    {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                    </span>
                    <p className="text-[16px] leading-6 text-textColor">Position: {item.position}</p>
                    <p className="text-[16px] leading-6 font-medium text-textColor">Firm: {item.hospital}</p>
                </li>)}  
            </ul>
            </div>
            
        </div>
    )
}
export default About