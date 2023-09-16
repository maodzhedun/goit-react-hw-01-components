import { Status } from "./FriendListItem.styled"

export function FriendListItem({ avatar, name, isOnline }) {
    return <>
                <Status>{isOnline}</Status>
                <img src={avatar} alt={name} width="48" />
                <p>{name}</p>
            </>
}