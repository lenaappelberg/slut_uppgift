import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import store  from '../store'
const Providers = ({ children }) => {
  return (
    <Fragment>
        <Provider store={store}>
            {children}
        </Provider>
    </Fragment>
  )
}

export default Providers