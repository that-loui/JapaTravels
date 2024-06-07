import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../LayoutComponents/Layout';
import Homepage from '../pages/Hompage';
import PageNotFound from '../pages/PageNotFound';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
