class ProfileClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        }
        console.log(this.props.name + " Child Constructor")
    }
    async componentDidMount(){
        console.log(this.props.name + " Child Component Did mount")
        const data = await fetch("https://api.github.com/users/chinarayudu");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json)
    }
    componentDidUpdate(){
        console.log("Component Did Update")
    }
    componentWillUnmount(prevProps, prevState){
        
        console.log("Component will unmount")
    }
    render(){
        console.log(this.props.name + " Child render")
        const {login, location, avatar_url} = this.state.userInfo   
    return (
    <div className="user-card">
            <img style={{ width: "100px", height: "100px" }} src={avatar_url} />
            <h2>Name: {login}</h2>
            <h3>Location: {location ? "null" : ''} </h3>
        </div>
        )
    }
}
export default ProfileClass; 