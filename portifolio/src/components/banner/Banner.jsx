import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import './Banner.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-end Dev", "Back-end Dev", "Full tack Dev"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                <span className='tagline'>Welcome to my Portfolio</span>
                                <h1>{`Hi I'm  webdecoded `}<span className='wrap'>{text}</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi maxime cum placeat illo iste quidem quibusdam officia, est debitis voluptatum asperiores odit tempore temporibus nesciunt magnam repellat sed nostrum.</p>
                                <buttom onClick={() => console.log('connected')}>Let's connect<ArrowRightCircle size={25}/></buttom>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt='Headder img'/>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}
