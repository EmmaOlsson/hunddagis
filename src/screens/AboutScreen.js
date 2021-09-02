import React, { useState, useEffect } from 'react';
import Styles from '../css/about.module.css'
import dog from '../assets/graphics/dog-logo-paws.png'



const AboutScreen = () => {

  const [staffData, setStaffData] = useState([])

  useEffect(() => {
    fetch('staff.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setStaffData(data)
      })

  }, [])

  console.log('hej', staffData)

  return <section>
    <main className={Styles.mainContainer}>
      {/* About */}
      <div className={Styles.topAbout}>
        <article className={Styles.aboutText}>
          <h2 className={Styles.aboutTitles}>- Vi tar hand om din bästa vän</h2>
          <div className={Styles.aboutInfo}>
            <p>
              <span>Hundkojan hittar du på en stor familjegård bara 5 minuter från Helsingborgs centrum. Gården har stora inhängnade utomhusytor där din fyrbenta vän kan springa fritt med andra fyrbenta kompisar. Inomhusdelen renoverades under 2020 och där finns både sociala och indivduella utrymmen, allt för att din hund ska känna sig trygg.</span>
              <span>Hundkojan ser till att din vovve både får lugn och ro, aktivering, stimulans och härligt umgänge med andra hundar – så att du kan göra det du behöver göra!</span>
              <span>Du väljer själv vilken tjänst som passar dig och din hund bäst!</span>
              <span>Smulan och Bosse Hundsson grundade 1998 Hundkojan AB och har sedan dess samlat på sig väldigt många fyrbenta vänner runtom i Skåne. Verksamheten är godkänd av Länsstyrelsen.</span>
            </p>
          </div>
        </article>
        {/* Offers */}
        <aside className={Styles.priceList}>
          <h2 className={Styles.aboutTitles}>Våra tjänster</h2>
          <div className={Styles.ourOffers}>
            <h3>Heltid</h3>
            <ul className={Styles.aboutLists}>
              <li>4 till 5 dagar i veckan</li>
              <li>2990 kr i månaden</li>
            </ul>
          </div>
          <div className={Styles.ourOffers}>
            <h3>Deltid</h3>
            <ul className={Styles.aboutLists}>
              <li>2 till 3 dagar i veckan</li>
              <li>2290 kr i månaden</li>
            </ul>
          </div>
          <div className={Styles.ourOffers}>
            <h3>Flex</h3>
            <ul className={Styles.aboutLists}>
              <li>I mån av plats </li>
              <li>350 kr för en dag</li>
            </ul>
          </div>
        </aside>
      </div>
      {/* Staff */}
      <div className={Styles.bottomAbout}>
        <h2 className={Styles.aboutTitles}>Vår personal</h2>
        <article className={Styles.staffContainer}>
          {
            staffData.map((staff) => {
              return <section className={Styles.staffInfo} key={staff.id}>
                <img className={Styles.staffImg} src={dog}></img>
                <h3>{staff.name}</h3>
                <p>{staff.email}</p>
                <p>{staff.desc}</p>
              </section>
            }
            )
          }
        </article>
      </div>
    </main>
  </section>;
};

export default AboutScreen;
