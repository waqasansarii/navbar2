import React, { useState,useEffect } from 'react'
// import Logo from '../images/logo.png'
import NavList from '../navbar/navbarList'
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
// import HoverModel from '../unusedModels/onHoverModel'
// import AboutModel from '../unusedModels/aboutModel'
import './navbar.css'



const Navbar = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
      };
      React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    },[]);
    
    
    let [hide, setHide] = useState(false)
    let [model, setModel] = useState(false)
    let [open, setOpen] = useState(false)
    let [value ,setValue] =useState('')
    if(width>990){
        open=false
    }
    if(width<990){
        // open=false
        hide=true
        // document.body.classList.add('scroll');
    }


    const handleShow = (e) => {
        setHide(!false)
        // console.log(hide)
        // console.log(e.target)
        setValue(e.target.value)
    }
    const handleAbout = (e) => {
        // console.log(e)
        setModel(!false)
        // console.log(hide)
        setValue(e.target.value)
    }
    const handleHide = () => {
        setHide(false)
    }

    const handleOpen = () => {
        setOpen(!false)
        document.body.classList.add('scroll');
        
        
    }

    const handleHideAbout =(e)=>{
        setModel(!model)
    }
    const handleShowww =()=>{
        console.log('true')
    }

    return (
        <div className={!hide? 'containerr' :'containerr2'}>
            <div className='sub_navbar_div'>

                <div className='logo_div'>
                    <img className='logo' src="https://www.cubix.co/themes/responsiv-clean/assets/img/cubix-logo.svg" alt="" />
                </div>
                <div>
                    <NavList openList={open} vertical={hide} aboutFunc={handleAbout} hideAbout={handleHideAbout} showFunc={handleShow} hideFunc={handleHide} />
                </div>
                <div className='nav_and_phoneIcon'>
                    <div className='cl_div'>
                        <PhoneIcon className='phoneIcon' />
                    </div>
                    {!open ?
                        <div className='showItem_div'>
                            <SortIcon className='showItem' onClick={handleOpen} />
                        </div>
                        :
                        <div className='close_div'>
                            <CloseIcon className='close' onClick={()=>{setOpen(false);document.body.classList.remove('scroll'); }} />
                        </div>
                }
                </div>
            </div>
            
        </div>
    )
}

export default Navbar