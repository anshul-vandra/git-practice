
interface userTypes {
    userStatus: 'loading' | 'error' | 'success',
}
interface objName {
    email: 'anshul@gmail.com',
    password?: '123456'
}
interface propTypes extends userTypes {
    name: string,
    count?: number,
    status: boolean,
    nameObj: {
        fname: string,
        lname: string
    } | null,
    listOfUser: objName[]
    // userStatus: 'loading' | 'error' | 'success',
}

const onSubmit = (e: any) => {
    console.log('e: ', e);
}
const One = (props: propTypes) => {
    console.log('props: ', props);

    return (
        <>
            <button style={{ color: 'red' }} onClick={onSubmit}> submit </button>
            <div>{props.name} {props.count} {props.status}</div>
            <p>{props.nameObj?.fname || 'Default fname'}</p>
            <p>{props.nameObj?.lname || 'Default lname'}</p>
        </>)
}

export default One  