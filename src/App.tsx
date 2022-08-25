import React, { useRef, useState } from 'react'
import Container from './practice/Container'
import One from './practice/One'
import PropTest from './PropTest'

const App: React.FunctionComponent = () => {

  // useref
  const inputRef = useRef<HTMLInputElement>(null)

  // onchange
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log('e: ', e);
  }

  const [name, setname] = useState<boolean | any>(true)
  console.log('setname: ', setname);

  console.log('name: ', name);
  console.log('name: ', name);

  return (
    <div>
      <input ref={inputRef} onChange={(e) => onInputChange(e)} />
      <PropTest fname={undefined} age={18} isDeleted={true} />
      <Container>
        <One name={'anshul'}
          // count={12}
          listOfUser={
            [{ email: 'anshul@gmail.com', password: '123456' }]
          }
          status={true}
          nameObj={{ fname: 'fname', lname: 'lname' }}
          userStatus={'loading'} />
      </Container>
    </div>
  )
}

export default App