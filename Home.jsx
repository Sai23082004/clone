import { useEffect, useState } from "preact/hooks"
import Navbar from "./navbar"
import './cssPages/home.css'

export const Home = () => {
    const [url, setUrls] = useState("https://cbit.edu.in/wp-content/uploads/2023/06/cbit-1.jpg")
    const images = ["https://cbit.edu.in/wp-content/uploads/2023/06/cbit-1.jpg", "https://cbit.edu.in/wp-content/uploads/2023/06/CBIT-Ground.jpg", "https://cbit.edu.in/wp-content/uploads/2023/06/CBIT-slide.jpg"]
    let count = 1



    useEffect(() => {
        setInterval(() => {
            setUrls(images[count]);
            count += 1

            if (count > 2) {
                count = 0;
            }
        }, 5000);

    }, [count])




    return (
        <div>
            <Navbar />
            <div className="w-100 overflow-hidden position-relative mt-2">
                <div >
                    <img src={url} style={{ objectFit: 'cover', width: '100%', height: '44rem', zIndex: '-1' }} className="image"></img>
                </div>
                <div className="position-absolute top-50 text-light text-center w-100">
                    <h1>Your Future Secure With Us</h1>
                    <h1 style={{ fontSize: '50px' }}>Chaitanya Bharathi Institute of Technology</h1>
                </div>
            </div>

            <div className="py-2" style={{backgroundColor:'#F3F5F5'}}>
            <div style={{fontSize:'10px'}} className="container d-flex align-items-center">
                <button style={{backgroundColor:'#1E73BE',color:'white',border:'none',width:'auto',textWrap:'nowrap',fontSize:'10px'}}>Latest Updates</button>
                <marquee behavior="" direction="" >
                    <div className="d-flex gap-5">
                    <a style={{color:'blue',fontSize:'10px'}}>FIRST YEAR STUDENT INDUCTION PROGRAMME – 2024</a>
                    <a style={{color:'blue',fontSize:'10px'}}> Excellent Placements in CBIT – 2024 [Accenture-24 & TCS-01 (9Lac Package)</a>
                    <a style={{color:'blue',fontSize:'10px'}}>Eligibility Criteria for Admission to B.Tech Courses,—B.Tech 1-2 sem & MBA 1-2 sem Result coming soon..</a>
                    </div>
                </marquee>
            </div>
            </div>

        </div>
    )
}

