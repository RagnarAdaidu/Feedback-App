import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is a React App to leave feedback for a product or service</p>
      <p>
        <Link to={{
            pathname: "/about",
            search: "?sort=name",
        }}>
            Back to home
        </Link>
      </p>
    </Card>
  )
}

export default AboutPage
