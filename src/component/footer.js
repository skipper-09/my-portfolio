import Logo from 'assets/images/logov2.png';

export default function Footer() {
    return (
        <>
            <footer className="p-4">
                <div className="container">
                    <div className="row ">
                        <div className="col-3">
                            <img src={Logo} alt="logo" width={100} />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}