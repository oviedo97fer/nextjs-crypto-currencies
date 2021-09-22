import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 20,
                }}
            >
                <a
                    href="#"
                    style={{
                        padding: 10,
                        color: "#7B87DF",
                        fontFamily: "Urbanist",
                        fontSize: 25
                    }}
                >
                    CRIPTOPRICE
                </a>
              {/*   <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span>
                </button> */}
               {/*  <div id="navbarNavAltMarkup">
                    <div>
                        <Link href="/">
                            <a aria-current="page">Home</a>
                        </Link>
                        <Link href="/about">
                            <a>About</a>
                        </Link>

                        <Link href="/services">
                            <a>Services</a>
                        </Link>
                    </div>
                </div> */}
            </div>
        </nav>
    );
};

export default Navigation;
