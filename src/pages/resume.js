import React from "react";

function Resume() {
    return(
        <div className="container mt-5">
            <section className="secMain">
                <h1 className="border-bottom border-dark">Resume</h1>
                <iframe
                title="Tina Resume"
                src="https://docs.google.com/document/d/e/2PACX-1vTjcXHi_v2B2-bH1uJJQkrNzIOTlm9KSOX8mb36o0LKgV7AbmaAcIcWFLmgimAr7e9hMphdDXgUwQd4/pub?embedded=true"
                height="700px" 
                width="100%"
                >
                </iframe>
            </section>
        </div>
    )
}

export default Resume;