import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Header from "../component/header";

export default function Home() {
    return (
            <><Header />
                <div className="home">
                    <p>Sejam bem-vindo(a) ao site do</p>
                    <b>Grupo WB</b>
                </div>
            </>
        );

    }
