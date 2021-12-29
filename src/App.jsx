import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import Feed from './screens/Feed';
import Messages from './screens/Messages';
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/messages" element={<Messages />} />
        {/* <Route exact path='/' element={<Navigate to='/home' />} /> */}
        {/* <Route exact path='*' element={<Navigate to='/home' />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
