import { Component } from "react";
import AuthService from "../../../services/auth/AuthService";
import EventBus from "../../../utils/EventBus";

type Props = object;

type State = {
  userState: boolean;
  count: number;
};

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userState: false,
      count: 0,
    };
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        userState: true,
      });
    }

    EventBus.on("logout", this.logOut);
  }

  componentWillUnmount() {
    EventBus.remove("logout", this.logOut);
  }

  logOut() {
    AuthService.logout();
    this.setState({
      userState: false,
    });
  }

  render() {
    const { userState } = this.state;

    return (
      <>
      
      </>
    );
  }
}

export default Home;
