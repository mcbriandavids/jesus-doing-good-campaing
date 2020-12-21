import React from 'react';
import Title from './Title';
import founderImg from '../images/jdg-12.jpeg';

const About = () => {
	return (
		<section className='about-section'>
			<div className='about-body'>
				<Title title='about us' />
				<h2>who we are</h2>
				<p className='one'>
					Jesus Doing Good Campaign is an evangelical outreach aimed at preaching the gospel of the Lord Jesus
					to communities, villages and towns across Africa. Our Mandate is to manifest Acts 10:38 in villages
					and towns across Africa. How God anointed Jesus with the Holy Ghost and power who went about doing
					good and healing all that were oppressed by the devil; for God was with Him. Acts 10: 38
					<br />
					<strong>
						We believe that as the father sent Jesus, <i>so also Jesus sent us...</i>{' '}
					</strong>
				</p>

				<div>
					<h2>
						<strong> The Birth of Jesus Doing Good Campaign</strong>
					</h2>
					<p className='two'>
						{' '}
						On the 8th of August, 2016, The Holy Spirit woke me up with a word. I don't think I have ever
						heard His audible voice, but that faithful Monday morning was around 5:00am. it was as if
						someone stood by my window and should preach Jesus. I jumped out of the bed like someone
						responding to an emergency call. I soon realized that a command has been given to me. That word
						kept resounding in my heart; but what on earth have I been preaching? I asked myself? As time
						went on, I realized that many pastors including me have been more of motivational, inspirational
						and moral combat ministers. The Lord opened my eyes to scripture such as; Acts 3:20 … And he
						shall send Jesus, which before was preached unto you. Acts 5:42 … And daily in the temple and in
						every house, they ceased not to teach and preach Jesus Christ Acts 8:5 … Then Philip went down
						to the city of Samaria and preached Christ unto them. Acts 9:20 … And straight way he(Paul)
						preached Christ in the synagogues that he is the son of God. 1Cor 1:23 … But we preach Christ
						crucified… 2Cor 1:19 … for the son of God, Jesus Christ, who was preached among you. This helped
						me to redirect my focus. The desire to preach the gospel in crusades became so strong in my
						heart...
					</p>
				</div>
				<div>
					{' '}
					<h2>The Revelation that Changed Everything</h2>
					<p className='three'>
						Friday 27th October, 2017 will never leave my memory. I am sure that was the day I became
						anointed to preach as an evangelist I saw a big building (built like a church of about 300 or
						500 seater auditorium). Someone I knew in a friend's ministry was to teach me how to play piano
						in that hall which was used for all manner of activities like birthday parties, wedding
						ceremonies, church programs, rehearsals, meeting, etc. On top of the building was written ' M M
						M'. As we got there, there were all kinds of activities going on. Some people were playing,
						chatting, sleeping; some having rehearsals etc. As we were about to start our keyboard practice,
						I realized that I didn't come with the keyboard adaptor. So, I asked them to hold on as I rushed
						home to get it. When I got home, I totally forgot that I was to come and get an adaptor. A
						pastor friend came to me and said what are you doing here? People are waiting for you at 'MMM'.
						come lets go... but I refused. He kept pressurizing and persuading me to go... Just as he was
						talking, we came out of my house and I saw "a crowd of about a hundred people sitting down in a
						crusade gathering. They seemed to be waiting for a guest minister, the podium was empty, only a
						pulpit standing. I lved the scene and was so excited with it. As I approached the crowd, I
						discovered that my office door was opened. When I looked, I saw Bishop Dag Heward Mills sitting
						on my seat with people seated around to be counseled. Then I asked him 'Sir can I go and preach
						to the crowd outside?" He looked at me and said "yes you can go!" Immediately I leaped for joy.
						My pastor friend standing there, was still trying to talk to over to "MMM". A young lady was
						passing by us who heard him and hissed in disdain and said which kind "yeye" '"MMM"?. zI then
						decided to run inside my house to change my clothes so I can come and preach to the crowd in the
						crusade... As I was running inside the joy, I woke up from the revelation. It was amazing! The
						message was clear. God wants me in the field. After sessions of prayers, the Holy Ghost said to
						me. The "MMM" was actually upside down. WWW - meaning What World Want. "And that He wants me to
						be preaching in crusades and outreaches. He took me to Acts 10:38 and John 20:21.
						<br /> How God anointed Jesus of Nazareth with the Holy Ghost and with power who went about
						doing good and healing all that were oppressed of the devil; for God was with Him. Then Said
						Jesus to them again, peace be unto you: as my father hath sent Me, even so said I you.
						<br />
						<strong>Jesus went about doing good...</strong>{' '}
						<i>
							The good was the preaching of the gospel, healing the sick and the broken hearts, helping
							the poor and setting the captives free. This also is our primary assignment
						</i>
					</p>
				</div>

				<div>
					<h2> Commissioning of Jesus Doing Good Campaign</h2>
					<p className='five'>
						{' '}
						This campaign was commissioned on Saturday 8th December, 2018 by Bishop Dr. Fred Okhiomamhe, a
						spiritual father, mentor and coach to Rev. Harrison Ekhoegbe
					</p>
				</div>

				{/* Founder*/}
				<div className='founder'>
					<h2>about the founder</h2>
					<div className='founder-img'>
						<img src={founderImg} alt='founder' />
					</div>
					<div className='founder-content'>
						{' '}
						<p className='six'>
							Reverend Harrison Ekhoegbe holds a Bachelor Degree of Agriculture in the University of
							Benin, 2008. He proceeded to selling of building materials and fabrication of iron-steels
							until August, 2015 when he yielded to the call of God. He has always been a lover of God
							from his childhood and has been involved in many church works. He had his bible school
							training with the Living Faith Church where he also served as a lay minister for few years.
							after responding to God's call, he started a church and a school at Aviele, Edo State,
							Nigeria. He is very passionate about empowering youths to realize, maximize and multiply
							their God given potentials. His speaking sessions have been said to be very engaging and
							insightful.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
