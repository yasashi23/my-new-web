import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import logo from '../img/logo.svg'
import Btn from './Btn';
import gsap from 'gsap';




class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            text:[],
            tog: true
        }
    }

    diClick = () => {
        this.setState({tog : !this.state.tog})  
        // this.state.tog ? gsap.to(".list", {width: '100%'}) : gsap.to(".list", {width: '50%'})

        if(this.state.tog){
            gsap.fromTo("nav",{'grid-template-columns': '40% auto' },{'grid-template-columns': '90% auto' })
            gsap.to(".menus div", {background: 'white'})
                gsap.to(".menus div:nth-child(2)", {opacity: 10, top: '2px'})
            gsap.to(".list ul", { width: '0%'})
            gsap.to(".list", {background: 'transparent'})
            gsap.to(".menus div:first-child", {transform: 'rotate(0deg)', top: '10px'})
            gsap.to(".menus div:last-child", {transform: 'rotate(0deg)', top: '16px'})

            // TABLET RESPONSIVE
            let mm = gsap.matchMedia()

            mm.add("(max-width: 921px", () => {
                gsap.fromTo("nav",{'grid-template-columns': '25% auto' },{'grid-template-columns': '80% auto' })
            })

            // PHONE RESPONSIVE
            mm.add("(max-width: 620px", () => {
                gsap.to("nav",{padding: "0em 1em 1.5em 1em"})
                gsap.fromTo("nav",{'grid-template-columns': '17% auto' },{'grid-template-columns': '80% auto' })
            })
            // little phone responsive
            mm.add("(max-width: 460px", () => {
                gsap.to("nav .logo img", {height: '50px'})
                gsap.fromTo("nav", {'grid-template-columns': '0% auto' }, {'grid-template-columns': '80% auto' } )
                
            })




        }else{
            gsap.fromTo("nav", {'grid-template-columns': '90% auto' }, {'grid-template-columns': '40% auto' } )
            gsap.to(".list", {background: '#489CC2'})
            gsap.to(".menus div", {background: '#690000'})
            gsap.to(".list ul", { width: '100%'})
            gsap.to(".menus div:nth-child(2)", {opacity: 0, transition: "0.01s", top: '-20px'})
            gsap.to(".menus div:first-child", {transform: 'rotate(135deg)'})
            gsap.to(".menus div:last-child", {transform: 'rotate(-135deg)', top: '10px'})

            // TABLET RESPONSIVE
            let mm = gsap.matchMedia()
            mm.add("(max-width: 921px", () => {
                gsap.fromTo("nav", {'grid-template-columns': '80% auto' }, {'grid-template-columns': '25% auto' } )
            })

            // PHONE RESPONSIVE
            mm.add("(max-width: 620px", () => {
                gsap.to("nav",{padding: "0em 1em 1.5em 1em"})
                gsap.fromTo("nav", {'grid-template-columns': '80% auto' }, {'grid-template-columns': '17% auto' } )
            })

            // little phone responsive
            mm.add("(max-width: 460px", () => {
                gsap.to("nav .logo img", {height: '0px'})
                gsap.fromTo("nav", {'grid-template-columns': '80% auto' }, {'grid-template-columns': '0% auto' } )
                
            })


        }
    }



    componentWillMount() {
        axios.get('/api').then(res => {this.setState({
            text: {
                title: res.data.nav.text.titleComp,
                list: res.data.nav.text.paragaf
            }
        })

    })

    }

    

    render(){
        const t = this.state.text
        const togg = this.state.tog
        return(
            <Navi>
                <nav>
                    <div className='logo'><img src={logo}/></div>
                    <div className={togg ? "list" : "list on"}>
                        <ul>
                            {t.list?.map((ls,i) => <li key={i}>{ls}</li>)}
                        </ul>
                        <div className='menus'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </nav>
            </Navi>
        )
    }

    

    componentDidMount(){
        const gg = document.getElementsByClassName('list')
gg[0].addEventListener("click", this.diClick)


    }


}




const Navi = styled.div`
width: 100%;
nav {
    width:100%;
    display: grid;
    align-items: center;
    margin-top: 20px;
    padding: 0em 3em 1.5em 3em;
    box-sizing: border-box;  
    grid-template-columns: 40% auto;
    position: relative;
    z-index: 5;
    .logo{
        img{
            height: 65px;
        }
    }
    .list {
        display:flex;
        float: right;
        overflow: hidden;
        align-items: center;
        justify-content: flex-end;
        color: #00000;
        background-color: #489CC2;
        padding: 0.5rem 1rem 0.5rem 1.5rem;
        border-radius: 24px;
        ul{
            ${'' /* width:0px;
            overflow:hidden; */}
            overflow: hidden;
            width:100%;
            display: grid;
            gap: 1em;
            grid-template-columns: auto auto auto auto;
            margin-right: 1rem;
        }
        li {
            display:flex;
            justify-content: center;
            list-style: none;
            cursor: pointer;
            font-size: .9em;
            font-weight:700;
        }
        .menus{
            position: relative;
            width: 35px;
            height:25px;
            cursor: pointer;
            display: flex;
            overflow: hidden;
            justify-content: center;
            div{
                width:25px;
                height: 3px;
                border-radius:8px;
                background-color: #690000;
                position: absolute;
                
            }
            div:nth-child(2){
                top:-20px;
                opacity: 0;
                margin:2px 0px 2px 0px;
            }
            div:first-child{
                top: 10px;
                transform: rotate(135deg);
            }
            div:last-child{
                transform: rotate(-135deg);
                top: 10px;
                ${'' /* top: 16px; */}
            }
        }
    }
}

@media only screen and (max-width: 1136px) {
    .list {
        ul {
            gap: 10px;
        }
    }
}

@media only screen and (max-width: 921px){
    nav{
        grid-template-columns: 25% auto;
    }
}

@media only screen and (max-width: 620px){
    nav{
        grid-template-columns: 17% auto;
        padding: 0.5em 1em 1.5em 1em;
        .logo {
            height: 50px;
            img {
                height:50px;
            }
        }
        .list{
            padding: 0.2rem 1rem 0.2rem 1rem;
            li{
                font-size: .8em;
            }
        }
    }
}

@media only screen and (max-width: 460px) {
    nav {
        grid-template-columns: 0% auto;
        .logo {
            img{
                height: 0px;
            }
        }
        .list {
            ul {
                gap: 0.5em;
            }
            li {
                font-size: .7em;

            }
        }
    }
}

`


export default Nav