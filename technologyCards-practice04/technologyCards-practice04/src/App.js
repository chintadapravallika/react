import './App.css'
import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
  {
    id: 5,
    title: '3D printing',
    description:
      'Used to create custom prototype,tool,and parts,reducing production time and cost',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-5',
  },
  {
    id: 6,
    title: 'Cloud computing',
    description:
      'A key component of Industry 4.0,cloud computing allows for the integration of enginnering,supply chain,production,sales,and distribution.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-6',
  },
  {
    id: 7,
    title: 'Cybersecurity',
    description:
      'Some important cybersecurity measures for Industry 4.0 include embedded security, secure communication, and data availability.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-7',
  },
  {
    id: 8,
    title: 'Robotics ',
    description:
      'Robotics 4.0, or the 4th Industrial Revolution, is a technology that integrates robotics and other cutting-edge technologies to increase efficiency and intelligence in manufacturing',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-8',
  },
]

const App = () => (
  <div className="container">
    <h1 className="heading">Learn 4.0 Technologies</h1>
    <p className="para">
      Get trained by alumni of IITs and top companies like
      Amazon,Microsoft,Intel, Nvidia,Qualcomm,etc.Learn directly from
      professionals involved in Product Development.
    </p>
    <ul>
      {cardsList.map(eachItem => (
        <CardItem key={eachItem.id} details={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
