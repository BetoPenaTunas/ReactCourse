import { createRoot } from 'react-dom/client';
import UseEffectTest from "./UseEffectTest";
import Fetch from './Fetch';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UseEffectTest/>);

const container2 = document.getElementById('fetch');
const root2 = createRoot(container2);
root2.render(<Fetch/>);