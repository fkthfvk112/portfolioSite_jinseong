import './intoSection2.css'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function IntroSectionTwo(){
    let [gray_Ani, setGray_Ani] = useState<boolean>(false);
    
    let [Chart_Ani, setChart_Ani] = useState<boolean>(false);


    const { ref:grayBoxRef, inView:grayBoxInView} = useInView({
        /* Optional options */
        threshold: 0,
      });

      const { ref:chartRef, inView:chartRefInView} = useInView({
        /* Optional options */
        threshold: 0.5,
      });

    
      useEffect(()=>{
        console.log("인뷰", chartRefInView);
        if(chartRefInView){
            setChart_Ani(true);
        }

        if(grayBoxInView){
            setGray_Ani(true);
        }
      },[grayBoxInView, chartRefInView]);

    return(
        <div className="section">
                <div className={`grayBox2 ${gray_Ani&&'grayBox2-ani'}`} ref={grayBoxRef}>
                    <div className='pSection'>
                        <p>
                        웹 개발자를 목표로 공부를 하고 있습니다.
                        <br></br>
                        Node.js 환경에 익숙합니다.
                        <br></br>
                        매일 공부하고 기록합니다.
                        <br></br>
                        <br></br>
                        
                        적응력, 소통 능력,
                        <br></br>
                        집중력, 참을성,
                        <br></br>
                        성취욕이 장점입니다.
                        <br></br>
                        <br></br>
                        아래 버튼을 눌러 저의 이력을 살펴보세요.
                        </p>
                    </div>
                <button className="cvBtn">Download CV</button>
                
            </div>
            <div className={`brownBox2`}> 
                <div>
                    <div className='myPrice'>My price</div>
                    <div className='chartSection' ref={chartRef}>
                        <span className={`chart ${Chart_Ani&&'chart-ani1'}`}>now</span>
                        <span className={`chart ${Chart_Ani&&'chart-ani2'}`}></span>
                        <span className={`chart ${Chart_Ani&&'chart-ani3'}`}>future</span>
                    </div>
                    <p className='infoP'>
                        contact me
                        <br></br>
                        email: wjdwl545@naver.com
                        <br></br>
                        phon: 010-4346-4228
                    </p>
                </div>
            </div>
        </div>
    )
}