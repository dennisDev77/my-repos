import React from 'react'

// importando os pacotes
import card1 from '../../assets/planos/bluetv-black.jpg'
import card2 from '../../assets/planos/bototv-black.jpg'
import card3 from '../../assets/planos/btv-black.jpg'

// Importando os icones
import { FaCartShopping } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

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
