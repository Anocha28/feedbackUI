import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"
function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About this Projects</h1>
                <p>React Feedback UI project by Anocha</p>
                <p>Version: 1.0.0</p>

                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
