import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="mt-5 bg-dark">
            <h2 className="text-white">&copy; {year}</h2>
        </footer>
    )
}

export default Footer;