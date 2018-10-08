import { withRouter } from "next/router";

import Layout from "../components/Layout";
import ProfilePage from "../components/ProfilePage";

const Profile = props => {
  return (
    <Layout {...props}>
      <ProfilePage
        username={props.router.query.username}
        currentUser={props.currentUser}
      />
    </Layout>
  );
};

export default withRouter(Profile);
