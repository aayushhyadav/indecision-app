class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            msg: ''
        }

    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            if(!prevState.msg){
                return {
                    msg: 'Here are some details for you'
                }
            }
            else{
                return {
                    msg: ''
                }
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{!!this.state.msg ? 'Show Details' : 'Hide Details'}</button>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));