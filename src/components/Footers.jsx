export default function Footers() {
    return(
        <footer className="grid grid-cols-1 p-14 mt-8 gap-10 bg-black md:grid-cols-2" id="footer">
                <div>
                    <p className="text-white text-[18px]">Technical React test</p>
                    <p className="text-white text-[18px]">Sopping cart with useContext and useReducer</p>
                </div>
                <div className="">
                    <a rel="stylesheet" href="https://www.instagram.com/silviajaimesc/" className="flex text-[18px] items-center gap-2 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary-400 duration-300">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <p>silviajaimesc</p>
                    </a>
                    <a rel="stylesheet" href="https://www.linkedin.com/in/silvia-jaimes-c" className="flex text-[18px] items-center gap-2 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-primary-400 duration-300">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <p>Silvia Jaimes</p>
                    </a>
                    <a rel="stylesheet" href="https://github.com/SilviaJaimes" className="flex text-[18px] items-center gap-2 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-400 duration-300">
                        <ion-icon name="logo-github"></ion-icon>
                        <p>SilviaJaimes</p>
                    </a>
                </div>
        </footer>
    );
}