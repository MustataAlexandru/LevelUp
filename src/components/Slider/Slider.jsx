import React , {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import FirstPage from "../FirstPage/FirstPage";

import ionut from './img/ionut.jfif';
import ioan from './img/iulian.jfif';
import tudor from './img/tudor.jfif';
import alesia from './img/fata-mica1.jfif';
import andreeaStoian from './img/andreea.jfif';
import simona from './img/prof-simona.jpg'
import ana from './img/maria.jfif'
import andreea from './img/andreea-leader.jpg';
import alex from './img/MustataAlexandru.jpg';
import robert from './img/TrascaRobert.jpg';


const ioanDescription ='Sunt o persoană extrem de pasionată de informatică, programare, utilizarea computerului și siguranța pe internet. Cu o curiozitate firească și o sete de cunoaștere, mă cufund adeseori în lumea tehnologiei, căutând constant să-mi extind înțelegerea și abilitățile.'
const tudorDescrption = 'Sunt un entuziast al tehnologiei, fascinat de tot ceea ce ține de aceasta și IT. Ca elev am fost întotdeauna motivat să înveț despre calculatoare și aplicațiile acestora. Pasiunea mea pentru tehnologie și IT a început în copilărie, când ma jucam mereu cu dispozitivele electronice pentru a descoperi cum funcționează. '
const alesiaDescription = 'Sunt o adolescentă cu o dorință puternică de a-mi ajuta comunitatea. Am fost întotdeauna un susținător al voluntariatului și am contribuit la inițiative care îi sprijină pe cei mai puțin privilegiați. Cred în puterea colaborării și sunt plină de compasiune pentru cei din jur. Sunt încântată să mă implic și să muncesc din greu pentru a avea un impact pozitiv asupra vieţilor oamenilor.'
const mustataDescription = 'My name is Alexandru Mustată, and I am a passionate individual with a strong interest in the fields of Artificial Intelligence (AI), Internet of Things (IoT), and computer programming. I am deeply enthusiastic about technology and have a burning desire to explore and understand how these domains can transform the world we live in.'
const trascaDescription = 'Robert is a charismatic and adventurous guy with an infectious zest for life. With his rugged charm and a mischievous glint in his eyes, he effortlessly captivates those around him. An avid outdoorsman, he\'s often found exploring nature\'s hidden gems, whether hiking rugged trails or chasing waves on his surfboard. His warm heart and genuine empathy make him a natural confidant and loyal friend. John\'s insatiable curiosity fuels his intellectual pursuits, and he\'s known for engaging conversations that span a myriad of topics.'
const andreeaLeaderDescription = 'În prezent sunt colaboratoare în regim de voluntariat la centrul educațional Professor A\'s International Academy, înregistrat la Registrul Comerțului sub numele: Demetrian Ana Smart Education II, și coordonez cursuri de Matematică și Raționament aplicat în Viața de Zi cu Zi în taberele de vacanță - unele dintre cursuri fiind în limba engleză. Predau într-o manieră non-formală și mereu găsesc inspiraţie în metodele moderne de predare-învățare.'
const anaDescription = 'Sunt o persoana care încearcă să lase o amprentă pozitivă în lume. M-a interesat mereu şi mă intereseaza ceea ce se întâmplă în societate. Întotdeauna am fost dornică să învăț lucruri noi și să obțin note bune sau certificări recunoscute pentru a-mi construi credibilitatea. Drept urmare, am reușit cu succes să intru la profilul de liceu pe care mi I-am dorit cel mai mult, știinţe sociale, și să obțin o diplomă Cambridge nivel B2. '
const vladZotescuDescription = 'Experiența mea se bazează pe participarea activă în proiecte și acțiuni de voluntariat și doresc să îmi mai îmbunătățesc abilitățile. Fiind pasionat de lucrul cu calculatoarele și tot ceea ce este legat de ele, am învățat să foloseasc o varietate de soft-uri. Cunoștințele IT dobândite m-au ajutat să-mi dezvolt mintea și creativitatea, deoarece am făcut practică nu doar folosind aspectele de bază ale calculatoarelor, ci am și creat jocuri şi am editat videoclipuri și fotografii. Mai mult, am cunoştinţe de hardware deoarece am construit diverse tipuri de calculatoare și alte dispozitive electronice. De asemenea, am lucrat cu servere, console de jocuri video și alte electronice.'
const ionutDescription = 'Mă consider o persoană dinamică cu un set divers de abilități care include informatică, marketing și siguranță online. Abilitățile mele tehnice în informatică îmi permit să navighez cu ușurință în peisajul digital care este în continuă schimbare. Cu o înțelegere profundă a limbajelor de programare, dezvoltarea web și analiza datelor, îmi plac provocările complexe și identificarea soluțiilor inovatoare.'
const ioanDinculescuDescription = 'Sunt o persoană extrem de pasionată de informatică, programare, utilizarea computerului și siguranța pe internet. Cu o curiozitate firească și o sete de cunoaștere, mă cufund adeseori în lumea tehnologiei, căutând constant să-mi extind înțelegerea și abilitățile.'
const simonaDescription = 'În acest proiect, sunt responsabilă de activitățile legate de cunoștințe de matematică, raționament, finanțe și logistică pe lângă relațiile cu publicul având în vedere participarea mea la activități similare și vârsta care mi-a dat timp să-mi extind experienţa. Mi-am dezvoltat bune abilități organizatorice care sunt utile pentru rolul meu în proiect, precum și cunoștințe matematice și financiare rezultate din implicarea în diverse activități.'
const andreeaDescription = 'În acest proiect sunt responsabilă cu activitățile legate de învățare într-un mod distractiv pe lângă gestionarea relațiilor publice având în vedere participarea mea la activități similare și studiile mele.\n' +
    '\n' +
    'În viață mi-am dezvoltat abilități organizatorice care sunt esențiale într-un astfel de proiect. Am dobândit şi experiență de predare prin implicarea în diverse activități educaţionale.'


const members = [
    {
        id: 1,
        name: 'Mustata Alexandru-Cristian',
        age: '27',
        role: 'Web Developer',
        image: alex,
        description: mustataDescription,
        position: 'Team Member',
    },
    {   id: 2,
        name: 'Trasca Robert-Valentin',
        age: '20',
        role: 'Web Developer',
        image: robert,
        description: trascaDescription,
        position: 'Team Member'
    },
    {
        id: 3,
        name: 'Andreea-Maria Florescu',
        age: '?',
        role: 'Team Leader',
        image: andreea,
        description: andreeaLeaderDescription,
        position: 'Team Leader'
    },
    {
        id: 4,
        name: 'Ana-Maria Demetrian',
        age: '?',
        role: '?',
        image: ana,
        description: anaDescription,
        position: 'Team Member'
    },
    {
        id: 5,
        name: 'Laban Simona',
        role: 'Mathematician',
        age: '?',
        image: simona,
        description: simonaDescription,
        position: 'Team Member'
    },
    {
        id: 6,
        name: 'Andreea Stoian',
        role: 'Happy Studying',
        age: '?',
        image: andreeaStoian,
        description: andreeaDescription,
        position: 'Team Member'
    } ,
    {
        id: 7,
        name: 'Alesia-Gabriela Demetrian',
        role: '?',
        image: alesia,
        age: '?',
        description: alesiaDescription,
        position: 'Team Member'
    },
    {
        id: 8,
        name: 'Tudor Nisipasu',
        role: '?',
        image: tudor,
        age: '?',
        description: tudorDescrption,
        position: 'Team Member'

    },
    {
        id: 9,
        name: 'Ioan Diculescu',
        role: '?',
        image: ioan,
        age: '?',
        description: ioanDescription,
        position: 'Team Member'

    },
    {id: 10,
        name: 'Ionut Daniel-Dodoc',
        role: '?',
        image: ionut,
        age: '?',
        description: ionutDescription,
        position: 'Team Member'

    }
];


const Slider = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(members[0]);

    const openModal= (member) => {
        setSelectedMember(member);
        setModalOpen(true);
        console.log(selectedMember);
    }

    const closeModal = () => {
        setSelectedMember(null);
        setModalOpen(false);
    }

    return (
        <>
        <div className="container1">
            <div style={{marginTop: '2rem'}}>
         <FirstPage >Who we are</FirstPage>
            </div>
            <Swiper
                style={{maxWidth: '50rem' , height: '50rem', }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >

                {members.map((member) => (
                    <SwiperSlide key={member.id}  >
                        <div className="slide-component" onClick={()=>openModal(member)}>
                            <div className="img-container">
                                <img src={member.image} />
                            </div>
                            <div className='details'>
                                <h4 className='flex-item'>{member.name} </h4>
                                <h5 className="flex-item">Role: {member.role}</h5>
                                <p className='flex-item'>{member.position} of LevelUp</p>
                                <p className='flex-item'>{member.age} years old.</p>


                            </div>
                            <div className="slide-right">
                                <p>{member.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
<div className='swiper-button-next'>
    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
</div>
                <div className='swiper-button-prev'></div>
                <div className='swiper-pagination'></div>
                {/*<div className="slider-controler">*/}
                {/*    <div className="swiper-button-prev">*/}
                {/*        <ion-icon name="arrow-back-circle-outline"></ion-icon>*/}
                {/*    </div>*/}
                {/*    <div className="swiper-button-next">*/}
                {/*        <ion-icon name="arrow-back-circle-outline"></ion-icon>*/}
                {/*    </div>*/}
                {/*    <div className="swiper-pagination"></div>*/}
                {/*</div>*/}
            </Swiper>
        </div>
        {modalOpen && (
            <div className="modal" >
                <div className="modal-content" >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
                    <div className="modal-body">
                        {selectedMember && (
                            <div className='flex-container2'>
                                <img src={selectedMember.image} />
                                <h5>Role: {selectedMember.role}</h5>
                                <p>{selectedMember.description}</p>
                                <div className='flex-contact'>
                                    <a href='https://www.facebook.com/alecs.pdm/'><ion-icon name="logo-facebook"></ion-icon></a>
                                    <button className='btn-contact'>Contact Me</button>
                                    <a href='https://www.instagram.com/mustata_alexandru123/'><ion-icon name="logo-instagram"></ion-icon></a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

        </>
    );
}
export default Slider;