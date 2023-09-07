import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
  return (
   <ul className={css.friendList}>
   {friends.map(({avatar, name, id, isOnline }) => (<FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />))}
 </ul>
    )
}

