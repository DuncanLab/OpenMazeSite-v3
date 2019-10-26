import Link from 'next/link';
import { Component } from 'react';
import '../style.css'



const burgerLineStyle = "w-6 h-1 mb-1 rounded bg-gray-700"
const transition = { transition: 'all 0.3s ease' }
const getStyle = (line) => {
    console.log('oijoijoij')
    switch (line) {
        case 1:
            console.log('jijiji')
            return { ...transition, transform: 'rotate(45deg) translate(5px, 6px)' }
        case 2:
            return { ...transition, opacity: '0' }
        case 3:
            return { ...transition, transform: 'rotate(-45deg) translate(5px, -6px)' }
    }
}


class Navbar extends Component {

    state = { burger: true }

    burgerOpen = () => {
        this.setState({ burger: !this.state.burger })
        console.log(this.state);
    }

    render() {
        return (
            <nav className="h-18 bg-blue-600 items-center font-sans">
                <div className="flex justify-between items-center p-2">
                    <div>
                        <Link href="/"><a><h1 className="text-white text-s">OpenMaze</h1></a></Link>
                    </div>

                    <div className="burger h-5 w-5 mr-5" style={{ cursor: 'pointer' }} onClick={this.burgerOpen}>
                        <div className={burgerLineStyle} style={this.state.burger ? transition : getStyle(1)}></div>
                        <div className={burgerLineStyle} style={this.state.burger ? transition : getStyle(2)} ></div>
                        <div className={burgerLineStyle} style={this.state.burger ? transition : getStyle(3)} ></div>
                    </div>
                </div>

                <div className={this.state.burger ? 'hidden' : "pl-1 pb-3 text-s"}>
                    <Link href="/"><a className="block font-semibold text-blue-200 rounded px-1 py-1 hover:bg-blue-700">Home</a></Link>
                    <Link href="/documentation"><a className="block font-semibold text-blue-200 rounded px-1 py-1 hover:bg-blue-700">Documentation</a></Link>
                    <Link href="/tutorials"><a className="block font-semibold text-blue-200 rounded px-1 py-1 hover:bg-blue-700">Tutorials</a></Link>
                    <Link href="/contact"><a className="block font-semibold text-blue-200 rounded px-1 py-1 hover:bg-blue-700">Contact</a></Link>
                </div>
            </nav>

        )
    }
}

export default Navbar;
