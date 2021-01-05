import React, { useState } from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ServiceModel from '../navbar/models/sevicemodel'
import SolutionModel from '../navbar/models/solution'
import AboutModel from '../navbar/models/about'
import ResourcesModel from '../navbar/models/resources'


// import HoverModel from './service/aboutModel'
const NavList = ({ hideFunc, showFunc, openList, hide,vertical ,aboutFunc,hideAbout}) => {
    // console.log(vertical)
    
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    let [value, setValue] = useState('')
    
    const handleShoww = (e) => {
        setValue(e)
        setOpen(!open)
        // document.body.style.overflowY='scroll'
        // console.log(e)
    }
    const handleAbout = (e) => {
        setValue(e)
        setOpen2(!open2)
        // console.log(e)
        // console.log('run')
    }
    // console.log(value)
    // const show1 = (e) =>{
    //     // console.log('hello',e.target.value)
    //     setOpen(!false)
    //     setValue(e.target.value)
    // }
    

    return (
        <div className='main_navList_div'>
            {!openList ?

                <div className='navList_div'>
                    <ul className='navList_ul' >
                        <li
                        onMouseOver={showFunc}
                        onMouseLeave={hideFunc}
                          value='1' 
                        //   className='servicesss'
                          className={!vertical?'servicesss':'servicesss2'}
                           >Services
                           
                           <div className='model_div'>
                           <ServiceModel value={value}   />

                           </div> 
                        
                        </li>
                        <li  value='2'   className={!vertical?'solutions':'solutions2'} 
                             onMouseOver={showFunc}
                             onMouseLeave={hideFunc}
                        >Solutins
                        <div className='model_div2'>
                           <SolutionModel  />

                           </div>
                        </li>
                        <li className={!vertical?'works':'work2'}>Work</li>
                        <li 
                         value='3'className={!vertical?'abouts':'about2'}
                        onMouseOver={showFunc}
                        onMouseLeave={hideFunc}
                         >About
                        <div className='model_div3'>
                           <AboutModel  />

                           </div>
                        </li>
                        <li
                        onMouseOver={showFunc}
                        onMouseLeave={hideFunc}
                         value='4' className={!vertical?'resourcess':'resourcess2'}
                          >Resources
                        <div className='model_div4'>
                           <ResourcesModel  />

                           </div>
                        </li>
                        <li className={!vertical?'contacts':'contacts2'}>Contact</li>
                        <li className={!vertical?'cl_li':'cl_li2'}>
                            <PhoneIcon className='callIcon' />
                            <p > 866-978-2220</p>
                        </li>
                        <li>
                            <button className='estimate_btn'>ESTIMATE PROJECT</button>
                        </li>
                    </ul>
                </div>
                :

                <div className='div_list2'>
                    <div className='main_list2'>
                        <ul className='list_ul2'>
                            <li className='services' >
                                <p>Services</p>
                                <ExpandMoreIcon className='expand' name='2' onClick={() => handleShoww('services')} />
                            </li>
                            {open===true && value==='services' ?

                                <ul>
                                    {/* <HoverModel value={value} openn={open} /> */}
                                    <ServiceModel openn={open} />
                                </ul>
                                : null
                            }
                            <li className='solution'>
                                <p>Solutions</p>
                                <ExpandMoreIcon className='expand' onClick={() => handleShoww('solution')} />
                            </li>
                            {open ===true && value=='solution' ?
                                
                                <ul>
                                    <SolutionModel value={value} openn={open} />
                                </ul>
                                : null
                            }
                            <li className='work'>
                                <p>Work</p>
                            </li>
                            <li className='about'>
                                <p>About</p>
                                <ExpandMoreIcon className='expand' onClick={()=>handleAbout('about')} />
                            </li>
                            {open2 ===true && value=='about' ?
                                
                                <ul>
                                    <AboutModel value={value} open2={open2} />
                                </ul>
                                : null
                            }
                            <li className='resources'>
                                <p>Resource</p>
                                <ExpandMoreIcon className='expand' onClick={()=>handleAbout('resources')} />
                            </li>
                            {open2 ===true && value=='resources' ?
                                
                                <ul>
                                    <ResourcesModel value={value} open2={open2} />
                                </ul>
                                : null
                            }
                            <li className='contact'>
                                <p>Contact</p>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavList