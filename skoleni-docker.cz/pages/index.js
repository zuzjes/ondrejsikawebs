import '../css'
import Footer from '../../course-landing/components/Footer'
import Alert from '../../course-landing/components/Alert'
import Person from '../../course-landing/components/Person'

const Index = () => (
  <div>
    <h1>Ondrej Sika Webs / Skoleni Docker</h1>
    <Alert>Hello</Alert>
    <Person
      name='Ondrej Sika'
      imgSrc='https://ondrejsika.com/ondrej/photo/ondrejsika3_200px.jpg'
      bio='Hacker from Prague'
    />
    <Footer />
  </div>
)

export default Index
