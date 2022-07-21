import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [hello, setHello] = useState('')

    useEffect(() => {
        fetch('/api/hello')
        .then(response => response.text())
        .then((text) => {
          setHello(text);
          console.log(text);
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다{hello}
        </div>
    );
}

export default App;
