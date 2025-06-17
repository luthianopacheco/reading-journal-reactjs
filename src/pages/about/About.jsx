import './About.css';

function About({ descriptions }) {
    return (
        <div className='container'>
            <p className='text'> {descriptions[0]} </p>
            <p className='text' style={{ maxWidth: "670px" }}> {descriptions[1]} </p>

            <br /><br /><br /><br />
        </div>
    );
}

export default About;
