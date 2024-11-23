import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import {app, db, auth} from './FireBase/Config.js' 
import Context, { FirebaseContext } from './Store/FirebaseContext.jsx' 
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux' 
import { store, perStore } from './Redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Provider store={store}>
        <PersistGate persistor={perStore}> 
          <FirebaseContext.Provider value={{app, db, auth}}>
              <Context>
                <App />
              </Context>
          </FirebaseContext.Provider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
