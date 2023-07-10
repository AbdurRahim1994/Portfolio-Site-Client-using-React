import React, { useEffect } from 'react';
import { IntroductionListRequest } from '../../APIRequests/portfolioAPIRequest';
import { useSelector } from 'react-redux';
import MyPhoto from '../../assets/images/MyPhoto.JPG'
import CV from '../../assets/document/CV.pdf'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    useEffect(() => {
        IntroductionListRequest()
    }, [])

    const IntroductionList = useSelector((state) => state.portfolio.IntroductionList)

    const OnResumeDownload = () => {
        fetch('CV').then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = CV;
                alink.click();
            })
        })
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            {
                                IntroductionList.map((item, i) =>
                                    <div>
                                        <div className='intro'>
                                            <h1>{item.welcomeText}</h1>
                                            <h3>I'm <span>{item.name}</span><br></br> {item.caption}</h3>
                                            <p>{item.description}</p>
                                            <a href={CV} target='_blank'>Resume</a>
                                            <a href={CV} download='CV.pdf'>Download</a>
                                            <ul>
                                                <li><span>5</span>Projects</li>
                                                <li><span>5</span>Clients</li>
                                                <li><span>5</span>Experiences (Years)</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='col-lg-4'>
                            <div className='image'>
                                <img src={MyPhoto} height={400} width={400}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className='contact'>
                        <h1>Contact</h1>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;