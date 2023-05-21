import React from 'react';
import Domain_layout from '../components/Domain_layout';
import Team_card from '../components/Team_card';
// import design_cores from "../information/cores";

const design_cores = [
  {
    name: 'Amisha Amisha',
    degree: 'MA',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739215/Cores/Amisha_Amisha_uqezex.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Subiksha Gayathiri',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739220/Cores/Subiksha_Gayathiri_K_K_kpnqcq.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Lanka Prasanna',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739215/Cores/Lanka_Prasanna_g9x6h0.jpg',
    l_link: '',
    p_link: '',
  },
];

const web_cores = [
  {
    name: 'Shreya Kumar',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739218/Cores/ShreyaKumar_-_SHREYA_KUMAR_amujbu.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Vicky Kumar',
    degree: 'B.Tech ',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739219/Cores/vicky_-_Vicky_Kumar_xqth2c.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Arpita Gautam',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739216/Cores/My_fotu_-_ARPITA_GAUTAM_nizlmm.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Gayathri Shreeya',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739215/Cores/Gayathri_Shreeya_Patnala_lezxmj.jpg',
    l_link: '',
    p_link: '',
  },
];

const events_cores = [
  {
    name: 'Nivedya V Nair',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739217/Cores/Nivedya_-_Nivedya_V_Nair_hp9tyh.jpg',
    l_link: '',
    p_link: '',
  },
  {
    name: 'Nikita Nimbark',
    degree: 'M.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739216/Cores/Nikita_Nimbark_lyog7k.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Harsh Daga',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739216/Cores/Harsh_Daga_xaztq8.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Sruthi S',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739219/Cores/SRUTHI_S_pdpclg.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Ishani Chakraborty',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1682521708/ecell/ACM-W/WhatsApp_Image_2023-04-26_at_12.15.03_1_b1cz3g.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Oliva Debnath',
    degree: 'M.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739217/Cores/Oliva_Debnath_beebak.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'P Rashmitha',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739217/Cores/P_RASHMITHA_rfm68q.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Lakshmi Sravya K',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739215/Cores/LAKSHMI_SRAVYA_K_kcu59t.jpg',
    l_link: '',
    p_link: '',
  },
];

const finance_cores = [
  {
    name: 'Shubham Mohanty',
    degree: 'B.Tech',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739219/Cores/Subham_Mohanty_mzodon.jpg',
    l_link: '',
    p_link: '',
  },
];

const heads = [
  {
    name: 'Soumi Chakraborty',
    degree: 'B.Tech',
    role: 'Chair',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739287/Heads/Soumi_Chakraborty_ozrfdu.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Anwesha Kar',
    degree: 'M.Tech',
    role: 'Vice chair',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739286/Heads/Anwesha_Kar_uio3jw.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Sharanya Gupta',
    degree: 'B.Tech',
    role: 'secratary',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739287/Heads/Sharanya_Gupta_mlx9ku.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Divya Pathak',
    degree: 'M.Tech',
    role: 'tresaurer',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739287/Heads/Divya_Pathak_hoo7t3.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Nandita Lakshmi',
    degree: 'B.Tech',
    role: 'web',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739286/Heads/Nandita_Tunuguntla_lnmkfq.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Sunke Sruthi',
    degree: 'B.Tech',
    role: 'web',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739288/Heads/Sruthi_Sunke_uhcj3k.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Harshitha Sagiraju',
    degree: 'B.Tech',
    role: 'membership',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739286/Heads/Harshitha_Sagiraju_wagswi.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Madhuri Annavazzala',
    degree: 'M.Tech',
    role: 'social media',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739286/Heads/Madhuri_Annavazzala_xmes2n.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Supriya Kumari',
    degree: 'M.Tech',
    role: 'events',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739289/Heads/Supriya_kumari_dmguya.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Sravanthi Reddy M',
    degree: 'B.Tech',
    role: 'events',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739288/Heads/Sravanthi_M_b3luxk.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Unnati Dixit',
    degree: 'M.Tech',
    role: 'design',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739288/Heads/Unnati_Dixit_e28nyd.jpg',
    l_link: '',
    p_link: '',
  },
];

const profs = [
  {
    name: 'K Subrahmanyam',
    degree: 'Professor',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739317/Professors/Subrahmanyam-Kalyanasundaram_lvqu5o.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Jyothi Vedurada',
    degree: 'Professor',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739317/Professors/Jyothi-Vedurada_tmxcyg.jpg',
    l_link: '',
    p_link: '',
  },

  {
    name: 'Maria Francis',
    degree: 'Professor',
    i_link:
      'https://res.cloudinary.com/dhpbbbzhs/image/upload/v1667739317/Professors/Maria-Francis_bmi6m6.jpg',
    l_link: '',
    p_link: '',
  },
];

const social_cores = [
  {
    name: 'Nivas',
    degree: 'B. Tech',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668543511/ecell/ACM-W/NIVAS_1_o8dwxo.jpg',
    l_link: '',
    p_link: '',
  },
  {
    name: 'Prem',
    degree: 'B. Tech',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668543328/ecell/ACM-W/Prem_ghoxlq.jpg',
    p_link: '',
  },
  {
    name: 'Priyansha Tiwari',
    degree: 'B. Tech',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668543328/ecell/ACM-W/Priyansha_Tiwari_z570iz.jpg',
    l_link: '',
    p_link: '',
  },
  {
    name: 'Lanka Prasanna',
    degree: 'B. Tech',
    i_link:
      'https://res.cloudinary.com/dbmw0xoar/image/upload/v1668543327/ecell/ACM-W/Lanka_Prasanna_rquvdn.jpg',
    l_link: '',
    p_link: '',
  },
];

const team = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-16">
      <div className=" ">
        <Domain_layout data={profs} domain={'FACULTY ADVISORS'} />
      </div>

      <Domain_layout data={heads} domain={'heads'} />
      <h1 className="text-center text-xl md:text-2xl lg:text-[2.2rem] border-b-[3px] border-[#33769C] my-5 uppercase text-[#33769C] main__font">
        CORES
      </h1>
      <Domain_layout data={events_cores} domain={'events'} />
      <Domain_layout data={web_cores} domain={'Web'} />
      <Domain_layout data={social_cores} domain={'Social Media'} />

      <Domain_layout data={design_cores} domain={'Design'} />
      <Domain_layout data={finance_cores} domain={'Finance'} />
    </div>
  );
};

export default team;
