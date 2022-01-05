import Dropdown from './components/Dropdown';
import './assets/css/index.css';
function App() {
    return (
        <div className='app'>
            <Dropdown className='dropdown'>
                <Dropdown.Menu>
                    {({ toggle, open }) => (
                        <button className={open ? 'button_active' : ''} onClick={() => toggle(!open)}>
                            {open ? 'Close' : 'View'} Item
                        </button>
                    )}
                </Dropdown.Menu>
                <Dropdown.Item>
                    {() => (
                        <div className='items'>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    )}
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}

export default App;
