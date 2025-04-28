import { defineStore } from 'pinia'

import audio1 from '~/assets/aud/burbuja.mp3'
import audio2 from '~/assets/aud/desmadre.mp3'
import audio3 from '~/assets/aud/Don_Omar.mp3'
import audio4 from '~/assets/aud/efecto.mp3'
import audio5 from '~/assets/aud/foals.mp3'
import audio6 from '~/assets/aud/Guayacan.mp3'
import audio7 from '~/assets/aud/Tiki.mp3'


export const useDataStore = defineStore('data', () => {
 const redes_info = [
    {
      title: "Facebook",
      photo: "https://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
      texo: "ddddddddddd",
      link: ""
    },
    {
        title: "Facebook",
        photo: "https://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
        texo: "cqwecfeqvqer",
        link: ""
      },
      {
        title: "Facebook",
        photo: "https://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
        texo: "reveqrveqr",
        link: ""
      },
     


      
 ]

 const pistas = [

    {
    id:1,
    name:"Veterano",
    description:"bhgrnhrgnhgnhgfnfghnghnghnghnghnghnghnghnghnghngh",
    aud:audio1,
    img1 : "https://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
    img2 : "",
    banner : true,
    },
    {
        id:2,
        name:"luis",
        description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
        aud:audio2,
        img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
        img2:"",
        banner:true,
        },
        {
            id:3,
            name:"Veterano2",
            description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
            aud:audio3,
            img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
            img2:"",
            banner:true,
        },
        {
          id:3,
          name:"Veterano2",
          description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
          aud:audio4,
          img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
          img2:"",
          banner:false,
      },
      {
        id:3,
        name:"Veterano2",
        description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
        aud:audio5,
        img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
        img2:"",
        banner:false,
    },
    {
      id:3,
      name:"Veterano2",
      description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
      aud:audio6,
      img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
      img2:"",
      banner:false,
  },
  {
    id:3,
    name:"Veterano2",
    description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
    aud:audio7,
    img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
    img2:"",
    banner:false,
},
{
  id:3,
  name:"Veterano2",
  description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
  aud:audio4,
  img1:"",
  img2:"",
  banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio5,
img1:"",
img2:"",
banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio6,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio7,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
  id:3,
  name:"Veterano2",
  description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
  aud:audio4,
  img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
  img2:"",
  banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio5,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio6,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio7,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
  id:3,
  name:"Veterano2",
  description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
  aud:audio4,
  img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
  img2:"",
  banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio5,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio6,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},
{
id:3,
name:"Veterano2",
description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
aud:audio7,
img1:"ttps://avatars.githubusercontent.com/oa/1787661?s=120&u=62dead1c48aae82c79ba6bf1501bdec78750558b&v=4",
img2:"",
banner:false,
},


 ]


 return {redes_info, pistas};
})