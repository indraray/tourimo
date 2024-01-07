import React from 'react'
import './Home.css'
import Agency from '../../Components/Agency/Agency'
import Heading from '../../Components/Heading/Heading'


export default function Home() {
  return (
    <>
      <div className='Home_description'>
        <div>
          <p className='title_name'>LET US PLAN YOU A PERFECT</p>
          <p className='place_name'>BONGAIGAON LOCALE <br /> TRIP</p>
        </div>
        <div className="bottom_home">
        </div>

      </div>

      <div className="home_details">
        <div className="home_details_color_up">
          <Heading name="REASON" first_name="WHY VISIT" second_name="BONGAIGAON" />

          <div className="parent">
            <div className="div1"> <span class="material-symbols-outlined">
              target
            </span></div>
            <div className="div2"> <p>The forest consist of around 60 endangered Golden langurs as well as scheduled I endangered species.People and non-governmental organisations are pressing hard to convert it into an wildlife sanctuary. Golden langurs are listed in the category of "rare species" in the Red Data Book of International Union for Conservation of Nature</p></div>
            <div className="div3"><span class="material-symbols-outlined">
              target
            </span> </div>
            <div className="div4"> <p>Nakkati Hill, located in the Bongaigaon district of Assam, India, is the highest peak in the lower Assam region. Its cut-nose-shape edge is closely compared to the famous McAfee Knob in the US. The hill is known for its mythological relation with Maa Maharani (Goddess Parvati), and the locality built a temple of the goddess in the village</p></div>
            <div className="div5"> <span class="material-symbols-outlined">
              target
            </span></div>
            <div className="div6"> <p>The river enters into plains of Assam near Mathanguri and flows through Manas reserve forest. At Mathanguri, this river bifurcates into two branches, the eastern branch is known as Beki and western branch is known as Manas. The river Manas meets the river Brahmaputra near Jogighopa.</p></div>
            <div className="div7"> <span class="material-symbols-outlined">
              target
            </span></div>
            <div className="div8"> <p>An important city of Assam, Bongaigaon was the last capital of the Kamatapur Kingdom and home to many historical monuments of Assamese culture. Centrally located within the state at around 180 Kms northwest of Guwahati, the city depicts a vibrant Assamese township and culture. The scenic beauty of Bongaigaon is well preserved</p></div>
            <div className="div9"> </div>
            <div className="div10"></div>
            <div className="div11"> </div>
            <div className="div12"></div>

            <div className="div13">
              <div className="image_wrapper">
                <div className="div_img1"></div>
                <div className="div_img2"></div>
                <div className="div_img3"></div>
              </div>
            </div>
          </div>

        </div>
        <div className="home_details_color_down">
          <Agency />
        </div>
      </div>
    </>
  )
}
