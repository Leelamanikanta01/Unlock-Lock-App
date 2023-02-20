import {useState} from 'react'

import {BgContainer, Locker, Img, Text, Button} from './styledComponents'

const Unlock = () => {
  const [locker, setLocker] = useState(false)

  const onChangeLocker = () => {
    setLocker(prevLock => !prevLock)
  }

  return (
    <BgContainer>
      <Locker>
        <Img
          src={
            locker
              ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
          }
          alt={locker ? 'unlock' : 'lock'}
        />
        <Text>
          {locker ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </Text>
        <Button onClick={onChangeLocker}>{locker ? 'Lock' : 'Unlock'}</Button>
      </Locker>
    </BgContainer>
  )
}

export default Unlock
