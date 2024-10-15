import "./userInfo.css"

const UserInfo = ({ user }) => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Shantanu Khadse</h2>
            </div>
            <div className="icon">
                <img src="./mpre.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo