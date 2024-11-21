import './Footer.css'

export default function Footer(){
    return(
        <>
        <div className="footer">
        <a href="mailto:budalmohitsingh@gmail.com">budalmohitsingh@gmail.com</a> <br />
        Designed and Developed By: Mohit Singh Budal <br />
        &copy; {new Date().getFullYear()} Mohit Singh Budal - All Rights Reserved
        </div>
        </>
    )
}