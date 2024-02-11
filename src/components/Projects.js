// src/components/Projects.js
import React from 'react';
import { Element } from 'react-scroll';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Nook Simple Touch Next Bus Display Board',
        image: 'nook.jpg',
        link: 'https://github.com/brendanshen24/nook-nextbus-server',
        description: 'I transformed this over 12-year-old e-reader into a sleek E-paper next bus display board. Using bus schedule data pulled from sorrybusfull.com, I created a web server which put aggregated information into a web interface that would be legible for smaller E-paper displays like those found on the Nook Simple Touch. After rooting the Nook Simple Touch, I paired the website with an app called <a href="https://play.google.com/store/apps/details?id=com.sugoi.electricsign" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">Electric Sign</a>, which automatically refreshes the page every minute. What remains now is a simple and elegant way of keeping track of when your next bus is coming.',
    },
    {
        id: 2,
        title: 'Improved Translink Next Bus SMS service',
        image: 'sms1.jpg',
        link: 'https://github.com/brendanshen24/Translink-NextBus-Twilio',
        description: 'Using bus schedule data pulled from sorrybusfull.com, I created a web server which responds to Twilio webhook POST requests to respond to the user with more information about their next bus than Translink provides with their SMS next bus service.', // Give it a try! Text a bus stop number to (778-902-0507). If you bothered poking around here, you deserve to use some of my Twilio credits.
    },
    {
        id: 3,
        title: 'Evo Car Share Refuel App',
        image: 'evorefuel.jpg',
        link: 'https://github.com/brendanshen24/evo-refuel',
        description: 'I created a React Native app in <a href="https://expo.dev/client" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">Expo</a> that streamlines the process of sending out <a href="https://evo.ca/fuel" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">Evo Car Share fuel refund</a> requests. To sumbit a fuel refund request that is given in credits, Evo Car Share requires you to send an email with pictures of the gas receipt, as well as the license plate of the car, all with the subject line \'CREDIT\'. My app streamlines this process into a visual interface that allows users to take the licence plate and fuel receipt pictures within the app, and automatically compose an email addressed to Evo Car Share with the two images already attached, and the subject line already filled in.',
    },
    {
        id: 4,
        title: 'SFU Traffic Webcam Youtube Livestream',
        image: 'sfu.jpg',
        link: 'https://github.com/brendanshen24/SFU-Youtube-Traffic-Livestream',
        description: 'I used node-canvas and ffmpeg to create a NodeJS application that streamed to Youtube 24/7 the feeds of the four live traffic cameras of the SFU Burnaby campus backed with soothing lofi hiphop audio, with feed updating every 15 mins. Unfortunately, this livestream is no longer running due to VPS costs. Channel can be found <a href="https://www.youtube.com/@SFULivestream" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">here</a>.',
    },
    {
      id: 5,
      title: 'Surface RT LAN Printing Server',
      image: 'surface.jpg',
      link: 'https://openrt.gitbook.io/open-surfacert/',
      description: 'I converted on old Microsoft Surface RT into a LAN printing server with a touchscreen dashboard. I started by disabling Secure Boot, by using the OpenRT team\'s <a href="https://archive.org/download/windows-rt-device-tools/Tegra_Jailbreak_USB.zip" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">Tegra Jailbreak</a> and then installed <a href="https://github.com/e3ndr/SurfaceRT-Images/blob/main/Raspbian.md" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: inherit;">e3ndr\'s Raspian image</a> onto the device. I configured the print server by running CUPS and shared the previously unnetworked printer over my LAN.\n',
    },
];

const Projects = () => {
    return (
        <Element name="projects">
            <section className="projects">
                <div className="about-brendan">
                    <div className="about-brendan-text">
                        <h2>Hi, I'm Brendan.</h2>
                        <p>
                            I'm a second-year student at SFU pursuing a joint major degree in Business Administration and Computing Science.
                        </p>
                        <p>
                            I love leveraging technology to make our lives easier, and to rethink what we consider to be "good enough."
                        </p>
                        <p>
                             Here are some of my projects!
                        </p>
                    </div>
                </div>
                {projectsData.map(project => (
                    <div className="project" key={project.id}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={process.env.PUBLIC_URL + '/' + project.image} alt={project.title} />
                        </a>
                        <h3>{project.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                ))}
            </section>
        </Element>
    );
};

export default Projects;
