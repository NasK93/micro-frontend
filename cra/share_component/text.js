constructor(props) {
  super(props);
  this.state = {
    value: null
  }
}

const Text = () => <p>{this.props.value}</p>;
export default Text;
