import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation, saveDonation } from '../Utility/localStorage';

const Donations = () => {
    const donations = useLoaderData()
    const [serviceDonate, setServiceDonate] = useState([])
    useEffect(() => {
        const storedDonations = getStoredDonation()
        if (donations.length > 0) {
            // const donated = donations.filter(donation=>storedDonations.includes(donation.id))
            const donated = []
            for (const id of storedDonations) {
                const donation = donations.find(donation => donation.id === id)
                if (donation) {
                    donated.push(donation)
                }
            }
            setServiceDonate(donated)
            //console.log(donated);
        }
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center mb-5'>Donations: {serviceDonate.length}</h1>
            <ul className='grid grid-cols-2 max-w-7xl mx-auto gap-4'>
                {
                    serviceDonate.map(donate => <li key={donate.id}>
                      <div>
                      <div className='rounded-xl' style={{ backgroundColor: `${donate.card_bg}` }}>
                           <div className='flex'>
                           <img src={donate.picture} alt="" />
                            <div className="m-3">
                                <button className='px-6 py-1 rounded-md' style={{ backgroundColor: `${donate.category_bg}` }}><p style={{ color: `${donate.text_bg}` }} >{donate.category_type}</p></button>
                                <h2 style={{ color: `${donate.text_bg}` }} className="card-title">{donate.title}</h2>
                                <p style={{color:`${donate.text_bg}`}} className='font-semibold text-lg'>$ {donate.price}</p>
                                <button className='px-3 py-2 rounded-lg mt-5 text-white font-medium' style={{backgroundColor:donate.text_bg}}>View Details</button>
                            </div>
                           </div>
                        </div>
                      </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Donations;