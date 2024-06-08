"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuBar, setMenuBar] = useState(false);
  const [slider, setSlider] = useState([1, 2, 3, 4, 5, 6]);
  const [sliderbar, setSliderbar] = useState([1, 2, 3]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="w-full h-full flex items-center justify-center flex-col mb-10 relative">
        <section className="w-full w-full text-black items-center justify-center flex pt-6 pb-2 text-base top-container">Join our community. <strong>Learn more</strong></section>
        <div className="flex justify-between mt-8 pr-5 pl-5 w-full"><h1 className="text-lg font-bold">Toingg</h1><button onClick={() => {
          setMenuBar(!menuBar);
        }}
        ><Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={`/${menuBar ? 'close-icon' : 'menu'}.png`}
            alt="menu-icon"
            width={30}
            height={40}
            priority
          /></button></div>
        <div className={`absolute mt-44 md:mt-24 rounded-3xl flex-col menu-bar w-11/12	 h-4/5 md:w-1/4 md:right-14 ${menuBar ? 'flex' : 'hidden'}`}>
          <button className="flex justify-between ml-10 mr-10 text-black-900 mt-8 text-lg font-medium	"><p>Contact</p><p>→</p></button>
          <button className="flex justify-between ml-10 mr-10 text-black-900 mt-8 text-lg font-medium	"><p>Pricing</p><p>→</p></button>
          <button className="flex justify-between ml-10 mr-10 text-black-900 mt-8 text-lg font-medium	"><p>Documentation</p><p>→</p></button>
          <button className="flex justify-between ml-10 mr-10 text-black-900 mt-8 text-lg font-medium	"><p>Join our community</p><p>→</p></button>
        </div>
        <div className="flex items-center justify-center text-5xl font-medium text-center text-gray-600 mt-10 leading-none pl-1 pr-1">Build AI Calling Agent that can do</div>
        <div className="flex items-center justify-center text-4xl font-bold text-center text-black-600 mt-2 leading-tight pl-1 pr-1">Sales Call</div>
        <div className="flex items-center justify-center flex-col mt-10 pt-3 pb-3 rounded-lg build-container shadow-xl w-2/4 md:w-1/4"><p className="font-medium text-white text-center">Build your own voice agent</p><p className="font-medium">‘It’s free!’</p></div>
        <div className="flex items-center justify-center flex-col mt-4 pt-3 pb-3 rounded-lg font-semibold text-xl border-solid border border-gray-600 w-2/4 md:w-1/4 text-center">Hear it in action</div>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col mt-10 mb-10">
        <div className=" flex items-center justify-center flex-col rounded-2xl try-now-container mt-10 w-3/4 md:w-1/4 pl-10 pr-10">
          <div className="flex flex-col justify-evenly mt-10 mb-10">
            <p className="text-3xl font-bold text-black-600 mt-10 leading-tight">Try now</p>
            <p className="text-s font-medium text-gray-600 leading-tight mb-1" style={{ color: '#989898' }}>Get a call from Toingg</p>
            <input className="p-1 pt-2 pb-2 pl-4 rounded-lg bg-transparent mt-3 border-solid border border-gray-700 text-sm focus:outline-none focus:border-solid focus:border focus:border-orange-500" type="text" placeholder="Name"></input>
            <div className="relative"><input type="text" className="p-1 pt-2 pb-2 rounded-lg bg-transparent mt-5 border-solid border border-gray-700 pl-16 text-sm relative focus:outline-none focus:border-solid focus:border focus:border-orange-500" placeholder="+91"></input>
              <select className="absolute select-box bg-transparent mt" style={{ width: '50px', left: '3%', top: '27px' }} name="" id="">
                <option value="null" className="bg-gray w-full h-full select-box"></option>

              </select></div>
            <select className="p-1 pt-2 pb-2 rounded-lg bg-transparent mt-5 border-solid border border-gray-700 pl-3 text-gray-600 mb-10 text-sm minimal focus:outline-none focus:border-solid focus:border focus:border-orange-500" style={{ color: '#989898' }} name="" id="">
              <option value="null" className="text-gray-400">Choose your language</option>
              <option value="null" className="text-gray-400">English</option>
              <option value="null" className="text-gray-400">Tamil</option>
            </select>
            <div className="flex items-center justify-center mt-10"><button className="flex items-center justify-center rounded-full w-12	h-12" style={{ backgroundColor: "#FF9345B0" }}><svg className="w-5 h-5 hover:w-6 hover:h-6 hover:duration-300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0257 19.9998C15.1541 19.9998 13.9297 19.6846 12.0963 18.6605C9.86683 17.4105 8.14237 16.2565 5.92495 14.0453C3.78701 11.9091 2.74662 10.5261 1.29052 7.87691C-0.354456 4.88581 -0.074042 3.31793 0.239415 2.64783C0.612706 1.84693 1.16371 1.36791 1.87591 0.892454C2.28043 0.627466 2.70852 0.400313 3.15474 0.213874C3.1994 0.194677 3.24092 0.176374 3.27798 0.159856C3.49901 0.0603008 3.8339 -0.0901474 4.25809 0.0705688C4.54119 0.17682 4.79392 0.394233 5.18953 0.784863C6.00086 1.58487 7.10957 3.36659 7.51858 4.2416C7.79319 4.83134 7.97493 5.22063 7.97537 5.65724C7.97537 6.16841 7.71818 6.56261 7.40606 6.98806C7.34756 7.06797 7.28952 7.14431 7.23325 7.21842C6.89345 7.66486 6.81888 7.79388 6.868 8.02424C6.96758 8.48719 7.71014 9.86533 8.93048 11.0828C10.1508 12.3002 11.4895 12.9957 11.9543 13.0948C12.1945 13.1462 12.3263 13.0685 12.7871 12.7167C12.8532 12.6663 12.921 12.614 12.992 12.5618C13.468 12.2078 13.844 11.9573 14.3432 11.9573H14.3459C14.7803 11.9573 15.1523 12.1457 15.7685 12.4564C16.5722 12.8618 18.4079 13.956 19.2129 14.7681C19.6045 15.1627 19.8229 15.4145 19.9296 15.6971C20.0903 16.1225 19.939 16.456 19.8403 16.6793C19.8238 16.7163 19.8055 16.7569 19.7863 16.802C19.5983 17.2474 19.3698 17.6745 19.1035 18.0779C18.6289 18.7878 18.148 19.3373 17.3451 19.711C16.9329 19.9059 16.4817 20.0047 16.0257 19.9998Z" fill="white" />
            </svg>
            </button></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <p className="text-base m-5 leading-tight text-gray-500 mr-10 ml-10 pl-10 pr-10 text-center ">Automate your agent with 5000+ integrations like</p>
        <div className="flex items-center justify-evenly pl-20 pr-20 w-full"><Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter grayscale"
          src="/img2.png"
          alt="menu-icon"
          width={30}
          height={40}
          priority
        />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter grayscale"
            src="/img1.png"
            alt="menu-icon"
            width={30}
            height={40}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter grayscale"
            src="/im3.png"
            alt="menu-icon"
            width={30}
            height={40}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter grayscale"
            src="/start.png"
            alt="menu-icon"
            width={30}
            height={40}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert filter grayscale"
            src="/salesforce.png"
            alt="menu-icon"
            width={30}
            height={40}
            priority
          /></div>
        <div className="flex items-center justify-center mt-10 mb-10 text-white text-center w-4/5 h-96" style={{ background: 'black' }}>
          Video
        </div>
      </div>
      <div className=" flex items-center mt-5 flex-col rounded-lg mb-5 md:w-2/4 md:h-2/4 w-4/5 h-4/5" style={{ background: '#FFF6E8' }}>
        <div className="mt-5 mb-2 w-2/4 h-2/4" style={{
          overflow: 'hidden', alignItems: 'center',
        }}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
            src="/img3.png"
            alt="menu-icon"
            width={280}
            height={220}
            priority
          />
        </div>
        <p className="text-3xl font-medium pl-16 pr-16 text-center">Explore TOINGG in <span style={{ color: '#FC6B01' }}>GPT</span> Store</p>
        <ol className="list-disc ml-10 mr-10">
          <li className="text-sm mt-3">Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
          <li className="text-sm mt-3">Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
          <li className="text-sm mt-3">Data Export: Conveniently export call logs to CSV.</li>
          <li className="text-sm mt-3">Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
        </ol>
        <button className="text-sm rounded-md explore-button p-2 mb-5 mt-1" style={{ width: '120px', height: '50px' }}>Explore more</button>
      </div>
      <div className="mt-20 mb-10 relative sliders w-4/4">
        <hr className="hr" />
        <div className="flex items-center justify-center flex-col">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-10 mb-5"
            src="/img4.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-lg font-semibold mb-8">
            Ultra-Fast Response
          </p>
          <p className="ml-24 mr-24 text-center">
            Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.
          </p>
          <button className="text-sm rounded-md font-normal	mb-10 mt-10" style={{ width: '100px', height: '40px', background: '#FF9345', color: 'white' }}>Try now</button>
        </div>
        <hr className="hr" />
        <div className='absolute vr md:left-14 left-14' style={{top:'-45px'}}></div>
        <div className='absolute vr md:right-14 right-14' style={{top:'-45px'}}></div>
      </div>
      <div className="mt-20 mb-10 relative sliders hidden">
        <hr className="hr" />
        <div className="flex items-center justify-center flex-col">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-10 mb-5"
            src="/img5.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-lg font-semibold mb-8">
            Smart Interruption Management
          </p>
          <p className="ml-24 mr-24 text-center">
            Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations
          </p>
          <button className="text-sm rounded-md font-normal	mb-10 mt-10" style={{ width: '100px', height: '40px', background: '#FF9345', color: 'white' }}>Try now</button>
        </div>
        <hr className="hr" />
        <div className='absolute vr md:left-14 left-14' style={{top:'-45px'}}></div>
        <div className='absolute vr md:right-14 right-14' style={{top:'-45px'}}></div>
      </div>
      <div className="mt-20 mb-10 relative sliders hidden">
        <hr className="hr" />
        <div className="flex items-center justify-center flex-col">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-10 mb-5"
            src="/img6.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-lg font-semibold mb-8">
            Advanced Memory Recall
          </p>
          <p className="ml-24 mr-24 text-center">
            Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.          </p>
          <button className="text-sm rounded-md font-normal	mb-10 mt-10" style={{ width: '100px', height: '40px', background: '#FF9345', color: 'white' }}>Try now</button>
        </div>
        <hr className="hr" />
        <div className='absolute vr md:left-14 left-14' style={{top:'-45px'}}></div>
        <div className='absolute vr md:right-14 right-14' style={{top:'-45px'}}></div>
      </div>
      <div className="mt-20 mb-10 relative sliders hidden">
        <hr className="hr" />
        <div className="flex items-center justify-center flex-col">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-10 mb-5"
            src="/img7.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-lg font-semibold mb-8">
            Dynamic Conversational Flows
          </p>
          <p className="ml-24 mr-24 text-center">
            Navigate through complex conversations with ease, thanks to our AI&quot;s ability to understand and adapt to various conversational pathways.</p>
          <button className="text-sm rounded-md font-normal	mb-10 mt-10" style={{ width: '100px', height: '40px', background: '#FF9345', color: 'white' }}>Try now</button>
        </div>
        <hr className="hr" />
        <div className='absolute vr md:left-14 left-14' style={{top:'-45px'}}></div>
        <div className='absolute vr md:right-14 right-14' style={{top:'-45px'}}></div>
      </div>
      <div className="mt-20 mb-10 relative sliders hidden">
        <hr className="hr" />
        <div className="flex items-center justify-center flex-col">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-10 mb-5"
            src="/img8.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-lg font-semibold mb-8">
            Custom AI Solutions
          </p>
          <p className="ml-24 mr-24 text-center">
            Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.</p>          <button className="text-sm rounded-md font-normal	mb-10 mt-10" style={{ width: '100px', height: '40px', background: '#FF9345', color: 'white' }}>Try now</button>
        </div>
        <hr className="hr" />
        <div className='absolute vr md:left-14 left-14' style={{top:'-45px'}}></div>
        <div className='absolute vr md:right-14 right-14' style={{top:'-45px'}}></div>
      </div>
      <div className="mt-20 mb-10 relative sliders hidden" style={{ width: '100%', height: '100%' }}>
        <hr className="hr" />
        <div className="flex items-center justify-center flex-col">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-10 mb-5"
            src="/img9.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-lg font-semibold mb-8">
            Scalability at Your Fingertips          </p>
          <p className="ml-24 mr-24 text-center">
            From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.</p>          <button className="text-sm rounded-md font-normal	mb-10 mt-10" style={{ width: '100px', height: '40px', background: '#FF9345', color: 'white' }}>Try now</button>
        </div>
        <hr className="hr" />
        <div className='absolute vr md:left-14 left-14' style={{top:'-45px'}}></div>
        <div className='absolute vr md:right-14 right-14' style={{top:'-45px'}}></div>
      </div>
      <div>{slider.map((value, index) => (<button className={`ml-2 rounded-full slider-btn w-3 h-3 md:w-4 md:h-4 bg-black hover:bg-gray-500 ${index === 0 ? 'sliders-bg' : ''}`}onClick={() => {
        var x = document.getElementsByClassName("sliders");
        var y = document.getElementsByClassName("slider-btn");
        for (let i = 0; i < x.length; i++) {
          if (i === index) {
            x[i].classList.remove("hidden");
            y[i].classList.add("sliders-bg");
          }
          else {
            x[i].classList.add("hidden");
            y[i].classList.remove("sliders-bg");
          }
        }
      }} key={index}></button>))}</div>
      <div className="flex items-center justify-center flex-col m-10 mt-24">
        <p className="text-3xl text-center font-medium">Scale with Enterprise - grade capabilities</p>
        <div className="flex items-center justify-evenly flex-col rounded-lg mb-8 mt-8 slider-bar" style={{ width: '350px', height: '360px', boxShadow: `0px 0px 150px 30px #d38751` }}>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-3 mb-3"
            src="/img11.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-3xl font-semibold">Fine tuning</p>
          <p className="pl-10 pr-10 text-center mb-5">Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.</p>
        </div>
        <div className="flex items-center justify-evenly flex-col rounded-lg mb-8 mt-8 slider-bar hidden" style={{ width: '350px', height: '360px', boxShadow: `0px 0px 150px 30px #d38751` }}>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-5 mb-5"
            src="/img10.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-3xl font-semibold">Custom tools</p>
          <p className="pl-10 pr-10 text-center mb-5">Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.</p>
        </div>
        <div className="flex items-center justify-evenly flex-col rounded-lg mb-8 mt-8 slider-bar hidden" style={{ width: '350px', height: '360px', boxShadow: `0px 0px 150px 30px #d38751` }}>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-5 mb-5"
            src="/img12.png"
            alt="menu-icon"
            width={80}
            height={50}
            priority
          />
          <p className="text-3xl font-semibold text-center">Dedicated infrastructure</p>
          <p className="pl-10 pr-10 text-center mb-5">Even during moments of high volume, your enterprise’ infrastructure is partitioned from our general API, increasing the reliability of your phone agents.</p>
        </div>
        <div>{sliderbar.map((value, index) => (<button className={`ml-2 rounded-full slider-btn-bar w-3 h-3 md:w-4 md:h-4 bg-black hover:bg-gray-500 ${index === 0 ? 'sliders-bg' : ''}`} onClick={() => {
          var x = document.getElementsByClassName("slider-bar");
          var y = document.getElementsByClassName("slider-btn-bar");
          for (let i = 0; i < x.length; i++) {
            if (i === index) {
              x[i].classList.remove("hidden");
              y[i].classList.add("sliders-bg");
            }
            else {
              x[i].classList.add("hidden");
              y[i].classList.remove("sliders-bg");
            }
          }
        }} key={index}></button>))}</div>
      </div>
      <div className="flex items-center justify-center flex-col ml-20 mr-20 mb-10 mt-8">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-5 mb-3"
          src="/img13.png"
          alt="menu-icon"
          width={100}
          height={80}
          priority
        />
        <p className="text-2xl font-medium text-center mb-10">The highest standards of trust and safety.</p>
        <p className="text-center">We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole.</p>
        <div className="flex items-center  justify-evenly mt-10 w-full"><div className="flex items-center justify-center flex-col text-center text-sm font-medium"><section className="rounded-full flex items-center justify-center" style={{ width: '40px', height: '40px', background: '#ED6705' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0257 19.9998C15.1541 19.9998 13.9297 19.6846 12.0963 18.6605C9.86683 17.4105 8.14237 16.2565 5.92495 14.0453C3.78701 11.9091 2.74662 10.5261 1.29052 7.87691C-0.354456 4.88581 -0.074042 3.31793 0.239415 2.64783C0.612706 1.84693 1.16371 1.36791 1.87591 0.892454C2.28043 0.627466 2.70852 0.400313 3.15474 0.213874C3.1994 0.194677 3.24092 0.176374 3.27798 0.159856C3.49901 0.0603008 3.8339 -0.0901474 4.25809 0.0705688C4.54119 0.17682 4.79392 0.394233 5.18953 0.784863C6.00086 1.58487 7.10957 3.36659 7.51858 4.2416C7.79319 4.83134 7.97493 5.22063 7.97537 5.65724C7.97537 6.16841 7.71818 6.56261 7.40606 6.98806C7.34756 7.06797 7.28952 7.14431 7.23325 7.21842C6.89345 7.66486 6.81888 7.79388 6.868 8.02424C6.96758 8.48719 7.71014 9.86533 8.93048 11.0828C10.1508 12.3002 11.4895 12.9957 11.9543 13.0948C12.1945 13.1462 12.3263 13.0685 12.7871 12.7167C12.8532 12.6663 12.921 12.614 12.992 12.5618C13.468 12.2078 13.844 11.9573 14.3432 11.9573H14.3459C14.7803 11.9573 15.1523 12.1457 15.7685 12.4564C16.5722 12.8618 18.4079 13.956 19.2129 14.7681C19.6045 15.1627 19.8229 15.4145 19.9296 15.6971C20.0903 16.1225 19.939 16.456 19.8403 16.6793C19.8238 16.7163 19.8055 16.7569 19.7863 16.802C19.5983 17.2474 19.3698 17.6745 19.1035 18.0779C18.6289 18.7878 18.148 19.3373 17.3451 19.711C16.9329 19.9059 16.4817 20.0047 16.0257 19.9998Z" fill="white" />
          </svg>
        </section>
          Call Monitoring</div>
          <div className="flex items-center justify-center flex-col text-center text-sm font-medium">
            <section className="rounded-full flex items-center justify-center" style={{ width: '40px', height: '40px', background: '#ED6705' }}>
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/img14.png"
                alt="menu-icon"
                width={25}
                height={25}
                priority
              />
            </section>
            Prompt Injection
          </div>
        </div>
        <div className="flex items-center justify-evenly mt-10 w-full"><div className="flex items-center justify-center flex-col text-center text-sm font-medium ml-3"><section className="rounded-full flex items-center justify-center" style={{ width: '40px', height: '40px', background: '#ED6705' }}>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/img15.png"
            alt="menu-icon"
            width={25}
            height={25}
            priority
          />
        </section>
          Rate Limits</div>
          <div className="flex items-center justify-center flex-col text-center text-sm font-medium ml-6">
            <section className="rounded-full flex items-center justify-center" style={{ width: '40px', height: '40px', background: '#ED6705' }}>
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/img16.png"
                alt="menu-icon"
                width={25}
                height={25}
                priority
              />
            </section>
            Prompt Injection
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-10">
        <p className="text-4xl font-medium ml-20 mr-20 mb-5">
          Frequently asked questions
        </p>
        <div className="flex items-center justify-between w-4/6"><p>What is Toingg’s pricing?</p><span className="text-3xl">+</span></div>
        <hr className="w-8/12 mb-5 border	border-gray-400	border-solid" />
        <div className="flex items-center justify-between w-4/6"><p>What is Toingg?</p><span className="text-3xl">+</span></div>
        <hr className="w-8/12 mb-5 border	border-gray-400	border-solid" />
        <div className="flex items-center justify-between w-4/6"><p>How secure is Toingg?</p><span className="text-3xl">+</span></div>
        <hr className="w-8/12 mb-5 border	border-gray-400	border-solid" />
        <div className="flex items-center justify-between w-4/6"><p>How secure is Toingg?</p><span className="text-3xl">+</span></div>
        <hr className="w-8/12 mb-5 border	border-gray-400	border-solid" />
        <div className="flex items-center justify-between w-4/6"><p>How does billing work?</p><span className="text-3xl">+</span></div>
        <hr className="w-8/12 mb-5 border	border-gray-400	border-solid" />
        <div className="flex items-center justify-between w-4/6"><p>What phone numbers can I use with Toingg?</p><span className="text-3xl">+</span></div>
        <hr className="w-8/12 mb-5 border	border-gray-400	border-solid" />
        <div className="flex items-center justify-between w-4/6 mb-14"><p>Does Toingg support multiple languages?</p><span className="text-3xl">+</span></div>
        {/* <hr className="w-8/12 mb-20 border	border-gray-400	border-solid"/> */}
      </div>
      <div className="pt-16 w-full h-full" style={{
        background: 'linear-gradient(180deg, #FFD6B8 0%, rgba(153, 145, 139, 0) 100%)'
      }}>
        <div className="text-center">
          <h1 className="font-bold text-4xl">TOINGG</h1>
          <h3 className="font-semibold text-2xl	text-center ml-20 mr-20 text-white">We are here to grow your business <span style={{ color: 'red' }}>&#9829;</span>
          </h3>
          <h4 className="text-black-500 mt-8 text-base">Terms and conditions</h4>
          <h4 className="text-black-500 mt-2 text-base">Privacy policy</h4>
          <h4 className="text-black-500 mt-2 text-base">Help center</h4>
          <h4 className="text-black-500 mt-2 text-base">API docs</h4>
          <h4 className="text-black-500 mt-2 text-base">Careers</h4>
          <div className="flex items-center justify-center w-full mt-10 text-black">
            <Image
              className="m-1 md:m-5"
              src="/linkedin.png"
              alt="heart-icon"
              width={20}
              height={20} />
            <Image
              className="m-1 md:m-5"
              src="/insta.png"
              alt="heart-icon"
              width={25}
              height={25} />
            <Image
              className="m-1 md:m-5"
              src="/x.png"
              alt="heart-icon"
              width={20}
              height={20} />
            <Image
              className="m-1 md:m-5"
              src="/mask.png"
              alt="heart-icon"
              width={25}
              height={25} />
          </div>
        </div>
        <div className="text-xs text-black mt-10 ml-20 mb-5">
          <h6>Copyright © 2024Toingg</h6>
          <h6> Inc. All rights reserved.</h6>
          <h6 className="flex mt-5"><p className="mt-1">Join our community</p><Image
            className="m-0 filter grayscale"
            src="/mask.png"
            alt="heart-icon"
            width={20}
            height={20} /> </h6>
        </div>
      </div>
    </main>
  );
}
