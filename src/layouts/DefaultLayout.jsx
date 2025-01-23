import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'


const DefaultLayout = () => {
    return (
        <>
            <header className='bg-dark'>
                <NavBar />
            </header>
            <main className='my-3 text-center'>
                <Outlet />
            </main>
            <footer className='bg-dark'>
                <p className='text-light text-center p-3'>FOOTER</p>

            </footer>
        </>
    )
}

export default DefaultLayout