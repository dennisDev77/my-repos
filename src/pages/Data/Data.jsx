import React from 'react'

// importando os pacotes
import card1 from '../../assets/planos/bluetv-black.jpg'
import card2 from '../../assets/planos/bototv-black.jpg'
import card3 from '../../assets/planos/btv-black.jpg'
import dispositivo from '../../assets/download/Dispositivo.png'


// Importando os icones
import { FaCartShopping } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineTv } from "react-icons/md";



export const ObterPacote=[
   {
      id:1,
      title:'Download',
      icon: <FaCloudDownloadAlt/>
   },
   {
      id:2,
      title:'Whasapp',
      icon: <FaWhatsapp/>
   },
   {
      id:3,
      title:'Pagar Com Pix',
      icon: <FaPix/>
   },
]
export const Downloads=[
   {
      id:1,
      img:dispositivo,
      descricao:'Baixe Agora no seu Dispositivo Favorito',
      button1:'Baixe Mobile', 
      button2:'Baixe TV BOX', 
      icon1:<FaMobileAlt/>,
      icon2:<MdOutlineTv/>,
   },
]

export const PlanosMensal=[
   {
      id:1,
      descricao:'10 Unidades Restantes',
      button:'Comprar', 
      icon:<FaCartShopping/>,
      img:card1
   },
   {
      id:2,
      descricao:'10 Unidades Restantes',
      button:'Comprar',
      icon:<FaCartShopping/>,
      img:card2
   },
   {
      id:3,
      descricao:'10 Unidades Restantes',
      button:'Comprar',
      icon:<FaCartShopping/>,
      img:card3
   },
   {
      id:4,
      descricao:'10 Unidades Restantes',
      button:'Comprar',
      icon:<FaCartShopping/>,
      img:card3
   },

]

export const PlanosAnual=[
     {
        id:1,
        descricao:'10 Unidades Restantes',
        button:'Comprar', 
        icon:<FaCartShopping/>,
        img:card1
     },
     {
        id:2,
        descricao:'10 Unidades Restantes',
        button:'Comprar',
        icon:<FaCartShopping/>,
        img:card2
     },
     {
        id:3,
        descricao:'10 Unidades Restantes',
        button:'Comprar',
        icon:<FaCartShopping/>,
        img:card3
     },
     {
        id:4,
        descricao:'10 Unidades Restantes',
        button:'Comprar',
        icon:<FaCartShopping/>,
        img:card3
     },
]
