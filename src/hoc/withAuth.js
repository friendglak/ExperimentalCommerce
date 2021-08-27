import { useAdminAuth } from "./../customHooks/useAdminAuth";
import { withRouter } from "react-router";

const WithAuth = (props) => useAdminAuth(props) && props.children;

export default withRouter(WithAuth);
