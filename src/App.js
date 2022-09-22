import PortfolioContainer from './components/PortfolioContainer';
import { Helmet } from 'react-helmet';
import './index.css'

export default function App() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>
      <PortfolioContainer />
    </div>
  )
}
