import { Link } from "react-router-dom"

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="editor" >Editor</Link>
            <br />
            <Link to="anime" >Anime</Link>

        </div>
    )
}